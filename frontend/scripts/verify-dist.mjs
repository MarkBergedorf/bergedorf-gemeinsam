import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { cp, mkdir, readFile, readdir, stat, writeFile } from 'node:fs/promises';
import { dirname, extname, join, relative, resolve, sep } from 'node:path';

const dist = resolve('dist');
const base = '/bergedorf-gemeinsam/';
const walk = async path => (await Promise.all((await readdir(path, { withFileTypes: true })).map(entry => {
  const child = join(path, entry.name);
  return entry.isDirectory() ? walk(child) : [child];
}))).flat();
const localPath = (reference, fromFile) => {
  const clean = decodeURIComponent(reference.split(/[?#]/, 1)[0]);
  if (!clean || /^(?:data:|https?:|blob:|#|mailto:|tel:)/i.test(clean)) return null;
  let candidate;
  if (clean.startsWith('/')) {
    if (!clean.startsWith(base)) throw Error(`Falscher Basispfad ${reference}`);
    candidate = resolve(dist, clean.slice(base.length));
  } else {
    candidate = resolve(dirname(fromFile), clean);
  }
  if (candidate !== dist && !candidate.startsWith(dist + sep)) throw Error(`Dateiverweis verlässt dist: ${reference}`);
  return candidate;
};
const requireAsset = async (reference, fromFile) => {
  const candidate = localPath(reference, fromFile);
  if (!candidate) return;
  const info = await stat(candidate).catch(() => null);
  if (!info?.isFile() || info.size === 0) throw Error(`Fehlende oder leere Produktionsdatei: ${reference} (in ${relative(dist, fromFile)})`);
};

const htmlPath = join(dist, 'index.html');
const html = await readFile(htmlPath, 'utf8');
if (!html.includes('noindex')) throw Error('noindex fehlt');
await writeFile(join(dist, '404.html'), html);
await writeFile(join(dist, '.nojekyll'), '');
// Leaflet's bundled stylesheet refers to relative image files which are not copied by Vite
// when the stylesheet is maintained as a static public asset.
const leafletImages = resolve('node_modules/leaflet/dist/images');
const leafletTarget = join(dist, 'assets/images');
await mkdir(leafletTarget, { recursive: true });
for (const name of ['layers.png', 'layers-2x.png', 'marker-icon.png', 'marker-icon-2x.png', 'marker-shadow.png']) {
  await cp(join(leafletImages, name), join(leafletTarget, name));
}
const files = await walk(dist);

for (const file of files) {
  const rel = relative(dist, file).split(sep).join('/');
  if (rel.startsWith('local/phase32/')) throw Error(`Lokale Phase-32-Vorschau darf nicht in GitHub Pages gelangen: ${rel}`);
  if (/(?:^|\/)(?:api|db|drizzle|downloads|docs|backend)(?:\/|$)/.test(rel) || /\.map$|\.sqlite$|\.zip$/i.test(rel)) {
    throw Error(`Nicht öffentliche Datei im Pages-Artefakt: ${rel}`);
  }
}

// All files named by HTML and CSS must exist in the artifact and contain bytes.
for (const file of files.filter(file => file.endsWith('.html'))) {
  const page = await readFile(file, 'utf8');
  if (!page.includes('noindex')) throw Error(`noindex fehlt ${relative(dist, file)}`);
  for (const match of page.matchAll(/(?:src|href)="([^"#]+)"/g)) await requireAsset(match[1], file);
}
for (const file of files.filter(file => file.endsWith('.css'))) {
  const css = await readFile(file, 'utf8');
  for (const match of css.matchAll(/url\(\s*["']?([^"')]+)["']?\s*\)/g)) await requireAsset(match[1].trim(), file);
}

// Check every JavaScript bundle's syntax and every statically declared local import.
const javascript = files.filter(file => /\.(?:js|mjs|cjs)$/.test(file));
for (const file of javascript) {
  execFileSync(process.execPath, ['--check', file], { stdio: 'pipe' });
  const source = await readFile(file, 'utf8');
  for (const match of source.matchAll(/(?:\bfrom\s*|\bimport\s*(?:\(\s*)?)["']([^"']+)["']/g)) {
    const specifier = match[1];
    if (specifier.startsWith('.') || specifier.startsWith('/')) await requireAsset(specifier, file);
  }
}

// Sharing metadata must survive the production build and exist without JavaScript.
const preview = 'https://markbergedorf.github.io/bergedorf-gemeinsam/assets/social/bergedorf-gemeinsam-vorschau-v1.png';
const metaTags = source => Object.fromEntries([...source.matchAll(/<meta (?:property|name)="([^"]+)" content="([^"]*)"\s*\/?\s*>/g)].map(match => [match[1], match[2]]));
const expected = metaTags(await readFile('index.html', 'utf8'));
for (const file of ['dist/index.html', 'dist/404.html']) {
  const actual = metaTags(await readFile(file, 'utf8'));
  for (const key of ['og:type', 'og:site_name', 'og:title', 'og:description', 'og:url', 'og:image', 'og:image:width', 'og:image:height', 'og:image:alt', 'og:locale', 'twitter:card', 'twitter:title', 'twitter:description', 'twitter:image']) {
    if (!actual[key] || actual[key] !== expected[key]) throw Error(`Vorschau-Metadaten fehlen oder abweichend: ${file} ${key}`);
  }
  if (actual['og:image'] !== preview || actual['twitter:image'] !== preview) throw Error('Falsche öffentliche Bildadresse');
  if (actual.robots !== 'noindex, nofollow, noarchive') throw Error('Suchmaschinenschutz verändert');
}
const png = await readFile(join(dist, 'assets/social/bergedorf-gemeinsam-vorschau-v1.png'));
if (png.subarray(0, 8).toString('hex') !== '89504e470d0a1a0a' || png.readUInt32BE(16) !== 1200 || png.readUInt32BE(20) !== 630) throw Error('Vorschaubild fehlt oder hat falsches Format/Abmessungen');
const state = JSON.parse(await readFile('pages/public-state.json', 'utf8'));
for (const key of ['documents', 'comments', 'reactions', 'audit', 'cases', 'files']) if (state[key].length) throw Error(`Kein Live-Datenexport erlaubt: ${key}`);
if (state.permissions.canAdmin || state.permissions.canAuthor || state.permissions.canReact) throw Error('Schreibrechte in Pages');

// Record byte counts and SHA-256 digests for every file copied for Pages.
const integrity = [];
for (const file of files) {
  const bytes = await readFile(file);
  integrity.push({ path: relative(dist, file).split(sep).join('/'), bytes: bytes.length, sha256: createHash('sha256').update(bytes).digest('hex') });
}
await writeFile(join(dist, 'asset-integrity.json'), `${JSON.stringify({algorithm: 'sha256', assets: integrity}, null, 2)}\n`);
console.log(JSON.stringify({ files: files.length + 1, checkedJavaScript: javascript.length, integrityManifest: integrity.length, base, htmlNoindex: true, examples: state.exampleDocuments.length, editorialEntries: state.editorialEntries.length, liveRecords: 0 }));
