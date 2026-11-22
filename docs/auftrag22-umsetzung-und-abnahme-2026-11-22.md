# Arbeitsauftrag 22 – Umsetzung und Abnahme

**Projekt:** Bergedorf gemeinsam  
**Stand:** 22. November 2026  
**Öffentliche Website:** <https://markbergedorf.github.io/bergedorf-gemeinsam/>  
**Repository:** <https://github.com/MarkBergedorf/bergedorf-gemeinsam>

## 1. Ausgangsstand und Umfang

Der Auftrag nannte `991f2dcbc67410b8198ce094b3282eca21609231` als zuletzt gemeldeten `main`-Commit. Vor Beginn wurde der tatsächliche GitHub-Stand geprüft: `main` stand auf `359a929aef5fd2c2846e675b3a5a52d82ba588e3`. Dieser Stand enthielt den zwischenzeitlich abgeschlossenen Arbeitsauftrag 21.3. Seine erwarteten Tourismusdaten waren vorhanden: 139 Einträge, 12 Themenbereiche und 14 Kartenkategorien. Die Navigation und Inhalte aus vorangegangenen Aufträgen blieben Grundlage der Änderungen.

Umgesetzt wurden drei begrenzte Ergänzungen: eine einreihige, horizontal bedienbare Desktop-Hauptnavigation, kompaktere Such- und Filteroberflächen sowie zwei datenbasierte Entdeckungskarten auf der Startseite. Ein produktives Backend oder eine Datenbank wurde nicht eingeführt.

## 2. Hauptnavigation

### Vorher und nachher

Vorher konnten die Hauptmenüpunkte am Desktop auf zwei Zeilen umbrechen. Danach bleiben die vollständigen Bezeichnungen in einer Desktop-Zeile. Die aktuelle Navigation enthält 12 Einträge: Start; Anliegen & Verbesserungen; Erfahrungsberichte; Geschichte und Erinnerungen; Politik; Verzeichnis; Organisationen stellen sich vor; Nachrichten aus Bergedorf; Aktuelle Veranstaltungen in Bergedorf; Einsamkeit in Bergedorf; Mietkosten & Grundsicherung; Bergedorf entdecken (Gäste & Tourismus). Die Beschriftungen wurden nicht verkürzt oder entfernt.

Die Leiste ist ein horizontal scrollbar gehaltener Flexbereich ohne Zeilenumbruch. Links- und Rechtspfeile machen den zusätzlichen Inhalt erreichbar und sind tastaturfokussierbare Schaltflächen. Der aktive Bereich wird automatisch in den sichtbaren Ausschnitt gebracht und dunkelgrün hervorgehoben. Die übrigen Reiter nutzen abgestufte helle Grün- und Graugrünflächen. Auf der geprüften öffentlichen Desktopansicht waren alle 12 Schaltflächen vorhanden, die Leiste blieb einzeilig; an der Anfangsposition waren Pfeile und Scrollbereich sichtbar. Die Verknüpfungen der Hauptnavigation wechseln zu den jeweiligen Bereichen.

### Prüfung der 45-Grad-Variante

Die geneigte Beschriftung wurde nicht umgesetzt. Die 12 tatsächlichen Titel sind zum Teil lang, zum Beispiel „Organisationen stellen sich vor“ und „Aktuelle Veranstaltungen in Bergedorf“. Eine Drehung um etwa 45 Grad würde deren Textflächen diagonal ausrichten und einen erheblichen Höhenbedarf in der Leiste erzeugen; bei späteren Ergänzungen würde dieser weiter wachsen. Es wurde keine belastbare numerische Vorher-nachher-Messung für gedrehte Beschriftungen und keine separate klickbare Vergleichsvariante erstellt. Die Entscheidung beruht auf der Prüfung der tatsächlichen horizontalen Variante im Browser: vollständige, lesbare Titel, keine Umbrüche, horizontale Erreichbarkeit per Pfeil und Scrollen sowie eine kontrollierte Erweiterungsmöglichkeit. Die ausdrückliche Präferenz für 45 Grad weicht damit zugunsten der besser lesbaren und für lange Titel besser skalierbaren Variante ab.

Die Farben greifen bestehende Projektwerte auf: insbesondere `--green: #285a48`, `--ink: #203b35`, `--muted: #63706a`, `--line: #dce3dc` und `--paper: #f8f9f5`. Für die Reiter kommen `#f5f7f3`, `#e9efe8`, `#eef1ed` und `#f8f8f4` zum Einsatz; der aktive Reiter ist `#285a48` mit weißer Schrift. Sichtbare Tastaturfokusränder bleiben erhalten.

### Mobil und Zoom

Der vorhandene mobile Menümodus bleibt erhalten: zweispaltige Liste, vollständige Bezeichnungen, keine horizontale Beschneidung durch die Desktop-Scrollleiste und mindestens 48 px hohe Reiterflächen; Pfeilsteuerungen werden dort ausgeblendet. Die mobile Ansicht wurde in dieser Abnahme nicht live auf einem Smartphone oder in einer mobilen Browseransicht geprüft. Browserzoom und vergrößerte Schrift wurden ebenfalls nicht separat vermessen. Diese Punkte sind offen und nicht als bestanden zu werten.

## 3. Such- und Filterbereiche

Die Suche wurde nicht fachlich vereinfacht. Die Eingabefelder bleiben im Dokument eingebunden; native `<details>`-Elemente klappen nur die erweiterten Kriterien ein. Weil die Felder nicht beim Schließen entfernt werden, bleiben eingegebene Werte bestehen. Aktive Filter werden in den überarbeiteten Listen über eine Anzahl kenntlich gemacht; Zurücksetzen bleibt verfügbar.

| Bereich | Im kompakten Zustand sichtbar | Eingeklappte erweiterte Kriterien |
|---|---|---|
| Veranstaltungen | Freitextsuche und Such-/Zurücksetzen-Aktionen | Zeitraum, Von/Bis-Datum, Veranstaltungsart, Stadtteil/Ort, Teilnahmegebühr |
| Tourismus | Ort-/Angebotssuche, kostenlos, fahrradfreundliche Unterkunft, Suche leeren und Filter zurücksetzen | 12 Themenkategorien und 14 Kartenkategorien in getrennten Ausklappbereichen |
| Verzeichnis/Organisationen | Freitextsuche | Stadtteil, Quartier/Ortsbezeichnung, Kategorie und Sortierung |
| Beitrags- und Erinnerungsarchive | Freitextsuche | Rubrik, geografische Filter, Kategorie und Sortierung |
| Historisches Ortsverzeichnis | Freitextsuche | Bezirk und Typ |

Beim Veranstaltungsfilter zeigte die Liveansicht im geschlossenen Zustand nur die kompakte Suche mit der Schaltfläche „Weitere Suchfilter“. Nach dem Öffnen waren Zeitraumoptionen (einschließlich Archiv, bevorstehend, heute und vergangen), Datumsgrenzen, Veranstaltungsart, Stadtteil/Ort und Gebührenstatus vorhanden. Die Live-Suche nach „Bergedorf“ ergab eine Veranstaltung; beim anschließenden Schließen blieb der Suchtext erhalten. Die Tourismusansicht zeigte 139 Treffer sowie zunächst geschlossene Bereiche „Themen auswählen (12 von 12)“ und „Kartenkategorien (14 von 14)“.

Damit ist der zuvor dauerhaft ausgeklappte Kriterienblock bei der ersten Ansicht geschlossen und benötigt weniger Höhe; die Inhalte folgen nach der kompakten Suche. Eine numerische Messung der eingesparten Pixel oder ein kontrollierter Vorher-nachher-Höhenvergleich wurde nicht vorgenommen. Filterkombinationen und sämtliche Resetvarianten wurden nicht zusätzlich manuell im öffentlichen Browser durchgespielt; die automatisierten Regressionstests dazu sind in Abschnitt 6 aufgeführt.

## 4. Startseite und Vorschauen

Hero-Bereich, Leittext und Schlossbild blieben bestehen. Auch „Aktuelles aus Bergedorf“, bestehende Navigationen, Themen-Einstiege und `EncounterPolicyCard` blieben erhalten. Ergänzt wurden zwei kurze Karten unter „Weitere Themen entdecken“:

- **Die Reit** aus dem vorhandenen Gazetteer-Datensatz (`gazetteerById('die-reit')`), mit Beschreibung und Ziel `#geschichte/orte/die-reit`.
- **Bergedorfer Schloss & Bergedorf Museum** aus dem vorhandenen Tourismusdatensatz (`tourismById('schloss')`), mit Beschreibung, Prüfdatum und Ziel `#tourismus/schloss`.

Titel, Kurztext, Ort und Ziel werden aus den bestehenden Einträgen abgeleitet; es wurden keine Veranstaltungen oder redaktionellen Inhalte erfunden. Auf der öffentlichen Startseite waren beide Vorschauen mit Links zum vollständigen Eintrag vorhanden. Die bestehende Vorschau für aktuelle Inhalte bleibt in ihrer bisherigen Daten- und Zeitlogik; vergangene Termine werden nicht als künftige Vorschau hinzugefügt. Die beiden Zielseiten wurden aus der Startseite heraus verlinkt; eine vollständige fachliche Einzelprüfung aller dortigen Quellen war nicht Gegenstand dieses UI-Änderungsauftrags.

## 5. Bestandsschutz und geänderte Dateien

Die Änderung bearbeitete keine Tourismuseinträge und migrierte keine Daten. Insbesondere blieben 139 Einträge, 12 Themenbereiche und 14 Kartenkategorien erhalten. Kartenquellen, bestehende Bereichslinks und ausführliche Beiträge verblieben auf ihren ursprünglichen Seiten.

Geänderte Dateien (31):

- Start- und Veröffentlichungsdateien: `index.html`, `404.html`, `frontend/app/homepage-current.tsx`, `frontend/lib/homepage-previews.mjs`.
- Navigation und Filterdarstellung: `frontend/app/globals.css`, `frontend/app/events.css`, `frontend/app/contributions.tsx`, `frontend/app/directory.tsx`, `frontend/app/events.tsx`, `frontend/app/history-places.tsx`, `frontend/app/platform.tsx`, `frontend/app/tourism.tsx`.
- Neue/ergänzte Abnahmetests: `frontend/tests/auftrag22-preservation.test.mjs`, `frontend/tests/fixtures/auftrag22-authorized-changes.json`, `frontend/tests/fixtures/auftrag22-authorized.mjs`, `frontend/tests/homepage-previews.test.mjs`, `frontend/tests/navigation-layout.test.mjs`, `frontend/tests/search-layout.test.mjs`.
- Angepasste Tests und Erhaltungsfreigaben der zuvor berührten Komponenten: `frontend/tests/authority-report.test.mjs`, `frontend/tests/events.test.mjs`, `frontend/tests/loneliness-acceptance.test.mjs`, `frontend/tests/map-orientation.test.mjs`, `frontend/tests/rent-guide.test.mjs`, `frontend/tests/social-preview.test.mjs`, `frontend/tests/support-transparency.test.mjs`, `frontend/tests/technical-fault.test.mjs`, `frontend/tests/tourism-navigation.test.mjs`.
- Produktionsassets: `assets/index-BIrxdl2V.js`, `assets/index-4xcKeys_.css`, `assets/history-tiles-DoHz8RLw.js`, `assets/leaflet-src-DMBRdrlS.js`.

Die Produktionsdateien wurden mit dem Frontend-Build erzeugt. `index.html` und `404.html` verweisen auf dieselben aktuellen JS-/CSS-Hashes. Die vier im Pages-Root referenzierten Bundles wurden byteweise mit den Buildausgaben abgeglichen; der Hauptbundle-Hash wurde zusätzlich gegen das Git-Blob geprüft. Es wurde kein gekürztes Bundle in den Pull Request übernommen.

## 6. Tests und Produktionsbuild

- `pnpm test` in `frontend/`: **396 bestanden, 0 fehlgeschlagen**.
- `pnpm build` in `frontend/`: erfolgreich; der Pages-Root wurde synchronisiert.
- `git diff --check`: ohne Beanstandung.
- `node --check` für Hauptbundle und History-Chunk: erfolgreich.
- Buildausgabe: 269 Dateien im Pages-Root, 4 Beispiele, 69 redaktionelle Einträge, 0 Live-Datenbankzugriffe.

Der Build meldet vorhandene Warnungen: zur Buildzeit nicht aufgelöste Leaflet-CSS-Ressource (Laufzeitpfad), eine ungültige bestehende CSS-Angabe `margin-top:7px);` sowie die übliche Größenwarnung für einen Hauptbundle über 500 kB. Der Build selbst war erfolgreich.

## 7. Pull Request, Merge und Veröffentlichung

- Feature-Pull-Request: [#42 – Arbeitsauftrag 22](https://github.com/MarkBergedorf/bergedorf-gemeinsam/pull/42)
- Gemergter Commit auf `main`: `b68565df0e25fb424178c7f6c74632a03ec761fd`
- GitHub-Pages-Lauf #99: [erfolgreich abgeschlossen](https://github.com/MarkBergedorf/bergedorf-gemeinsam/actions/runs/45018225597)
- Öffentliche Website: <https://markbergedorf.github.io/bergedorf-gemeinsam/>

## 8. Öffentliche Liveprüfung

Die öffentliche Website wurde nach dem Pages-Lauf im Desktopbrowser geöffnet. Sichtbar geprüft wurden:

1. Desktop-Hauptnavigation: 12 vollständige Menüpunkte, eine Zeile, Scrollbereich und Pfeile; der aktive Bereich ist erkennbar.
2. Tourismus: eingeklappte Kategorien mit Zählern 12/12 und 14/14 sowie 139 Treffer.
3. Veranstaltungsfilter: zunächst eingeklappt; erweiterte Kriterien nach Öffnen sichtbar; Freitextsuche nach „Bergedorf“ lieferte einen Treffer; der Suchwert blieb nach Schließen des Kriterienbereichs erhalten.
4. Startseite: bestehender Einstieg und Bereich „Aktuelles aus Bergedorf“ blieben sichtbar; die Vorschaukarten „Die Reit“ und „Bergedorfer Schloss & Bergedorf Museum“ verweisen auf die vollständigen Einträge.
5. Schlossbild: Bilddatei wurde im Browser mit natürlicher Bildgröße 1600 × 1200 Pixel geladen.

Nicht live geprüft wurden Smartphone-/Tabletansichten, Browserzoom und vergrößerte Schrift, Tastaturnavigation in allen Bereichen, Filterkombinationen sämtlicher Unterseiten sowie jeder einzelne historische oder externe Link. Das lokale Preview war im Browser nicht erreichbar; daher erfolgte die visuelle Prüfung an der veröffentlichten Website. Die offenen Prüfungen werden nicht als bestanden bezeichnet.

## 9. Zusammenfassung der 23 verbindlichen Berichtspunkte

| Nr. | Prüfpunkt | Ergebnis |
|---:|---|---|
| 1 | Ursprünglicher GitHub-Stand | Erwarteter SHA `991f2d…`; tatsächlicher `main` vor Auftrag 22: `359a929…` |
| 2 | Betroffene Dateien | Vollständige Liste in Abschnitt 5 |
| 3 | Navigation vorher/nachher | Zwei Zeilen möglich; jetzt einzeilige scrollbare Desktopleiste mit 12 vollständigen Punkten |
| 4 | 45-Grad-Prüfung | Nicht umgesetzt; Begründung und fehlende numerische Variantenmessung in Abschnitt 2 |
| 5 | Gewählte Navigation | Scrollbare Ein-Zeilen-Leiste mit Pfeilen und aktivem Status |
| 6 | Farben/Gestaltung | Bestehende Grüntöne; Werte in Abschnitt 2 |
| 7 | Desktopprüfung | Live im Desktopbrowser bestätigt, 12 Punkte und Scrollsteuerung sichtbar |
| 8 | Mobile Prüfung | Offen; nicht als bestanden gewertet |
| 9 | Abweichungsbegründung | 45-Grad-Präferenz wegen Lesbarkeit/Platzbedarf nicht übernommen; mobile/Zoom offen |
| 10 | Überarbeitete Suchbereiche | Veranstaltungen, Tourismus, Verzeichnis/Organisationen, Archive, historisches Ortsverzeichnis |
| 11 | Suchfunktionsbestand | Kriterien bleiben eingebunden; Veranstaltungsfilter live aufgeklappt geprüft |
| 12 | Platzersparnis | Kriterienblock standardmäßig zu; kein Pixelmesswert erhoben |
| 13 | Startseitenvorschauen | Die Reit sowie Schloss & Museum |
| 14 | Herkunft der Vorschauen | Vorhandener Gazetteer und Tourismusdatensatz |
| 15 | Links und Daten-/Datumslogik | Zwei interne Zieladressen live kontrolliert; Zielseiten nicht beide manuell geöffnet; keine künstlichen Termine; nicht jeder externe Link einzeln geprüft |
| 16 | Bestandsschutz | Keine Tourismusdatensätze gelöscht/geändert; bisherige Bereiche bleiben erhalten |
| 17 | Tests | 396 bestanden, 0 fehlgeschlagen |
| 18 | Produktionsbuild | Erfolgreich; Warnungen in Abschnitt 6 benannt |
| 19 | Pull Request | #42 |
| 20 | Merge-Commit | `b68565df0e25fb424178c7f6c74632a03ec761fd` |
| 21 | Pages-Lauf | #99, erfolgreich |
| 22 | Öffentliche Liveprüfung | Navigation, Filter, Trefferergebnis, Startseitenlinks und Bildladung geprüft |
| 23 | Offene/zurückgestellte Prüfungen | Mobil/Tablet, Zoom, vollständiger Tastaturdurchlauf und umfassende Link-/Filterkombinationen offen |

## 10. Abnahmegrenzen

Die Änderungen sind veröffentlicht und die wesentlichen Desktoppfade wurden live geprüft. Für eine vollständige gestalterische Abnahme fehlen noch die mobile Ansichtsprüfung und Browserzoomprüfung. Außerdem wurde keine messbare Pixelersparnis protokolliert und keine numerische 45-Grad-Vergleichsmessung durchgeführt. Diese Grenzen sind Bestandteil der Abnahme und sollen bei der nächsten verfügbaren Geräteprüfung nachgeholt werden.
