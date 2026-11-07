// Shorten only display text, preserving whole whitespace-delimited words.
export function excerpt(value, limit=200){
 const text=String(value||'').trim();
 const chars=Array.from(text);
 if(chars.length<=limit)return text;
 let cut=chars.slice(0,limit).join('');
 if(!/\s/u.test(chars[limit]||''))cut=cut.replace(/\S+$/u,'');
 cut=cut.trimEnd();
 return cut?cut+'…':text.match(/^\S+/u)[0]+'…';
}
