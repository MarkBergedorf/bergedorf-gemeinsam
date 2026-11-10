# Presseformular – freiwillige Ausgabennummer und Jahrgang

Ausgangspunkt: main, 35f7952432d76072a719ecf69deafe830597a3ef.

Das nur bei Papierausgaben sichtbare Feld heißt jetzt „Ausgabennummer und Jahrgang“ und wird als freiwillig gekennzeichnet. Der vollständige neue Hinweis lautet:

> Tragen Sie die Ausgabennummer und den Jahrgang ein, soweit diese angegeben sind. Sie finden die Angaben häufig auf der Titelseite oder im Impressum der Zeitung.

Der bisherige Hinweis ist aus der Felddefinition entfernt. Für dieses Feld gibt es weder Zeichenzähler noch Verweis auf einen nicht vorhandenen Zähler in aria-describedby. Die technische Feldkennung `edition` bleibt erhalten. Sichtbarkeit (`visibleFor: print`) und Pflichtstatus sind getrennt: ein leerer oder fehlender Wert ist zulässig; bei digitaler Auswahl ist das Feld verborgen. Zeitung, Erscheinungsdatum, Originalüberschrift, Autorenangabe und Seitenzahl bleiben bei Papierausgaben Pflicht. Die Ausgabenangabe dient ausschließlich als zusätzliche Quellenidentifizierung. Die bestehende Kandidatensuche verfügt weiterhin auch ohne diese Angabe über Medium, Datum und Überschrift; es erfolgen weder automatische Zuordnung noch Veröffentlichung.

Das Erscheinungsdatum hat keine Untergrenze in die Vergangenheit. Ein sichtbarer Hinweis lässt ausdrücklich auch Jahre oder Jahrzehnte alte Presseberichte zu und nennt den weiterhin notwendigen nachvollziehbaren Bergedorf-Bezug. Kalenderdatum und Pflichtangabe werden weiterhin geprüft; zukünftige Daten bleiben gesperrt. Die vorhandene Datumsvalidierung benötigt dafür keine Lockerung.

## Prüfung

- Regulärer Produktionsbuild und Synchronisierung mit scripts/sync-pages.mjs erfolgreich.
- Alle 80 vorhandenen und ergänzten Frontendtests bestanden. Neue Fälle: freiwilliger oder fehlender Ausgabenwert, weiterhin notwendige Seitenzahl und übrige Quellenpflichten; historische Daten für Papier und digital bis einschließlich 0001-01-01; zukünftige Daten und ungültige historische Kalenderdaten werden abgelehnt.
- Desktop-Vorschau im Browser: Papierauswahl zeigt „Ausgabennummer und Jahrgang (freiwillig)“, den exakten neuen Erklärungstext, required=false und keinen Zeichenzähler. Das Datumsfeld hat weiterhin required=true, keine min-Grenze und die bisherige Obergrenze für heute.
- Vollständige Prüfung mit fiktiven Angaben, Erscheinungsdatum 1950-07-21 und leerer Ausgabenangabe im Browser erfolgreich. Nach Entfernen der Seitenzahl meldet diese einen Fehler; die leere Ausgabenangabe bleibt ohne Fehler.
- Übrige Felddefinitionen, Pflichtangaben und Grenzen bleiben unverändert. Das zweite Medienvorschlagsformular, Medienlinks, Navigation, CSS und andere Websitebereiche wurden nicht verändert. Es gibt weiterhin keine Übermittlung, dauerhafte Speicherung oder Veröffentlichung von Formulareingaben. Private Sites-Version 99 bleibt unangetastet.

Eine tatsächliche Smartphone-Sichtprüfung wurde nicht durchgeführt; die geprüfte Darstellung betrifft den Desktopbrowser.
