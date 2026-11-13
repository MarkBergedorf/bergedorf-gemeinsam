# Begegnungsorte: Geschichte, KörberHaus und gesellschaftliche Verankerung

Stand: 13. November 2026. Ausgangsfassung: 181c6fe8b69a3bcd1a5f1ede79d1f24e080b4caa.

## Redaktionelle Änderungen

Der politische Themenbeitrag unter `#politik/begegnungsorte` erhält drei zusätzliche vollständige Abschnitte:

- Historische Begegnungsorte und die Erfahrungen von Menschen, deren vertraute soziale Kontaktwege durch geschlossene Gastwirtschaften verloren gingen. Lebensgeschichten, Menschen außerhalb organisierter Angebote und Fragen nach Scham und öffentlicher Wahrnehmung sind ausdrücklich einbezogen. Die 88-Bilder-Sammlung wird verlinkt; sie wird nicht als Einsamkeitsbefragung ausgegeben.
- Ausdrückliche negative politische Bewertung des KörberHauses unmittelbar nach „Was Hamburg bereits fördert – und was damit belegt ist“. Die Bewertung betrifft die Nichterfüllung des geforderten Gesamtmodells. Offene Angebote werden benannt; Nutzen einzelner Angebote wird nicht pauschal verneint. Die persönliche Erfahrung des Betreibers ist als nicht repräsentativ gekennzeichnet. Es werden keine Besucherzusammensetzung, Besuchsmotive oder Wirkungen als empirisch festgestellt behauptet.
- Gesellschaftliche Verankerung in nahezu der gesamten Bevölkerung mit mindestens 90 Prozent als verbindlichem politischen Zielwert. Alle fünf gewünschten Fragen sind aufgenommen. Der gemeinsame Anteil verlangt bei denselben Personen Bekanntheit, bereits erfolgten Besuch, Rückkehrabsicht und positive Bewertung. Empfehlung und Willkommensein operationalisieren die positive Bewertung. Erstbesuchsabsichten werden separat ausgewiesen. Nichtnutzer bleiben in der Bezugsbasis; Auswahl, Gewichtung, Unsicherheit, fehlende Antworten und Verweigerungen sind offenzulegen. Fußgängerzonen liefern erste Hinweise; für bezirksweite Aussagen sind repräsentativ angelegte Befragungen über alle 14 Stadtteile und Bevölkerungsgruppen erforderlich. Keine erfundenen Ergebnisse oder wissenschaftliche Gültigkeit der politischen Schwelle.

Notwendige Anpassung des früheren Absatzes: Der Satz, bestehende Orte würden nicht pauschal als gescheitert bezeichnet und eine vollständige Kriterienprüfung liege nicht vor, verweist nun ausdrücklich auf die folgende negative KörberHaus-Gesamtbewertung. Die Grenze einer vollständigen Prüfung sämtlicher Einrichtungen bleibt erhalten. So wird die neue ausdrückliche Bewertung nicht durch den alten Satz zurückgenommen.

## Geprüfte Primärquellen

- https://koerberhaus.de/besuchen/oeffnungszeiten — abgerufen/geprüft 13.11.2026. Haus regulär Mo–Sa 7–22 Uhr, Sonn-/Feiertage geschlossen; Verlängerung bei entsprechenden Veranstaltungen/Theaterabenden. Café aktuell Mo–Fr 10–17 Uhr, Sa/So Ruhetag; Theateröffnung ab 18 Uhr bis nach der Vorstellungspause. Ältere Programmhefte mit abweichenden Cafézeiten ersetzen die aktuelle Öffnungszeiten-Seite nicht.
- https://koerberhaus.de/mitmachen — abgerufen/geprüft 13.11.2026. Frei Raum 50 m², kostenlos ohne Anmeldung während Hausöffnung; Schwerpunkt Engagement und gemeinsame Ideen. Der vorhandene offene Zugang bleibt ausdrücklich sichtbar.
- Bisherige Quellen und ihre jeweiligen Aussagegrenzen bleiben erhalten.

Die reguläre Sonntags-/Feiertagsschließung genügt bereits, um die Nichterfüllung des politisch verlangten Sieben-Tage-Modells festzustellen. Unbekannte Kriterien werden nicht als festgestellte Mängel ausgegeben. Fehlende 90-Prozent-Befragungsdaten werden nicht als gemessene Unterschreitung dargestellt.

## Erhaltung und Datenschutz

Alle zehn bestehenden Erfolgskriterien, das räumlich-soziale Konzept, die vollständigen Betriebskonzept-Abschnitte 2–26 und alle 18 Hausordnungsgrundsätze bleiben erhalten. Die neue Schwelle ergänzt diese Anforderungen. Historische Daten und Bilder, fachliche Beiträge, Navigation, Datenschutztext und Backend-Sperre werden nicht geändert.

Die Unterstützerregistrierung ist weiterhin ausschließlich vorbereitet und NICHT funktionsfähig. Deaktiviertes Feldset, deaktivierte Eingabe und Schaltfläche, zwei getrennte nicht vorausgewählte Einwilligungen, keine Übertragung oder lokale Speicherung. Es gibt keinen produktiven Registrierungsdienst und keinen laufenden Double-Opt-in- oder Abmeldedienst. Die bestehenden Dokumentationen benennen die vor Freischaltung erforderliche sichere Speicherung, E-Mail-Infrastruktur, Bestätigungs-/Widerrufsprozesse, Zugriffsschutz, Löschung und Missbrauchsschutz. Keine neue Datenerfassung aktiviert.

## Prüfungen und Veröffentlichung

- `pnpm run build`: erfolgreich; Ausgabeprüfung 263 Dateien. Bekannte Hinweise zu Bundlegröße, Pluginlaufzeit und zur erst zur Laufzeit aufgelösten, vorhandenen Leaflet-CSS-Datei.
- `pnpm test`: 177 Tests bestanden, keine Fehler. Vier zusätzliche Tests prüfen Erhaltung, historische Perspektive, KörberHaus-Fakten/Bewertung und den gemeinsamen 90-Prozent-Maßstab mit fünf Fragen.
- Der Erhaltungstest rekonstruiert nach Rücknahme ausschließlich der dokumentierten neuen Ergänzungen/Anpassung exakt die Ausgangsfassung des gesamten politischen Beitrags. Die früheren Erhaltungstests bleiben aktiv.
- `node scripts/sync-pages.mjs`: Repository-Stamm entspricht vollständig dem Produktionsbuild.
- Browserprüfung der Vorschau: neue Abschnitte vorhanden, lesbare Überschriften/Umbrüche; fünf Fragen; beide Einwilligungen leer und gesperrt. Keine Prüfung auf einem physischen Smartphone.
- Veröffentlichung erfolgt über den bestehenden GitHub-Pages-Workflow. Der abschließende Bericht nennt den tatsächlichen neuen Commit und das beobachtete Deployment-/Live-Ergebnis.

Geänderte Quelldateien: `frontend/app/encounter-policy.tsx`, `frontend/tests/encounter-policy.test.mjs`, neues Fixture `frontend/tests/fixtures/encounter-population-authorized-changes.json`; dazu dieser Bericht und generierte Pages-Ausgabe.
