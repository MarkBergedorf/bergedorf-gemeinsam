# Abschlussnachtrag: Veröffentlichung und Liveprüfung 8–10

Stand: 14. November 2026. Dieser Nachtrag ergänzt die unveränderten früheren Prüfberichte und ersetzt deren damaligen Zwischenstatus nicht rückwirkend.

## Tatsächliche Veröffentlichung

- Ausdrückliche Freigabe des Betreibers im Chat zur Veröffentlichung von PR #2, einschließlich Fehlerkorrektur und erneuter Prüfung.
- Vor Zusammenführung: main unverändert bei e4a32722ad3f9af8f50fac5de151fd3f8bd1e282, PR-Kopf unverändert bei 1c4bd1349212ef6f406712cfbfc1cda5f01e7bcf, geprüfter Tree 05875a30103d7ad771e17f7983ccd931cce6a974.
- Regulärer Merge: df9e11a82979ba81b967d233001dccc995ef56c7.
- Erstes erfolgreiches Pages-Deployment: https://github.com/MarkBergedorf/bergedorf-gemeinsam/actions/runs/43580636578
- Bei der schmalen Liveprüfung gefundener Fehler: vorhandene globale mobile CSS-Regel blendete auch die beiden neuen Inhaltsnavigationen aus.
- Gezielte Korrektur: ausschließlich neue Inhaltsnavigationen explizit sichtbar; die eingeklappte Hauptnavigation bleibt unverändert.
- Veröffentlichter Korrekturcommit: 8a2dcb8d8987812d3204fa8b9165f5aa46b6ba53.
- Erfolgreiches Pages-Deployment der Korrektur: https://github.com/MarkBergedorf/bergedorf-gemeinsam/actions/runs/43615562930
- Dieser Abschlussnachtrag verändert nur Dokumentation, keine Websitequellen oder erzeugten Webdateien. Sein eigener Commit ist über die Dateihistorie nachvollziehbar.

## Regulärer Build und Tests

Produktionsbuild des korrigierten Standes erfolgreich; 263 Ausgabedateien geprüft. Anschließend vollständige Testsuite: 237 bestanden, keine Fehler, keine übersprungenen Tests. Reguläre Synchronisierung der Pages-Ausgabe erfolgreich. Der veröffentlichte Tree entspricht dem lokal geprüften Stand dfe7c90b9618ad83beadb7d46390e42e897443d2.

Bekannte Hinweise zur Bundlegröße und bestehenden Leaflet-CSS-Auflösung bestehen unverändert. Abhängigkeiten und Lockdatei wurden nicht verändert.

## Liveprüfung nach der Korrektur

Alle drei Bereiche direkt aufgerufen und Inhalt sowie Verknüpfungen geprüft:

| Bereich | Abschnitte | Desktop | Schmale Darstellung |
| --- | ---: | --- | --- |
| Wissenschaft | 16 | 1363 CSS-Pixel; Dokumentbreite 1348, kein Überlauf | 340 CSS-Pixel; Dokumentbreite 337, kein Überlauf |
| Betrieb | 16 | 1363 CSS-Pixel; Dokumentbreite 1348, kein Überlauf | 340 CSS-Pixel; Dokumentbreite 337, kein Überlauf |
| Forschung | 27 | 1363 CSS-Pixel; Dokumentbreite 1348, kein Überlauf | 340 CSS-Pixel; Dokumentbreite 337, kein Überlauf |

Die Abweichung zwischen Viewport- und Dokumentbreite ist der vertikalen Scrollleiste zuzuordnen. Auch mit geöffnetem vollständigem Quellenregister entstand kein horizontaler Überlauf. Beide Inhaltsnavigationen sind in der schmalen Darstellung sichtbar. Alle Abschnittslinks haben vorhandene Ziele.

Geprüft: direkte Seitenaufrufe, Abschnittssprung zu Quellen und zu einem Textabschnitt, Öffnen des Quellenregisters, interne Verbindung Betrieb/Forschung, Browser-Zurück/Vorwärts und mobiles Hauptmenü öffnen/schließen. Die mobile Tastaturnavigation mit Enter und Leertaste funktioniert. Der Sprung zum ersten Forschungsabschnitt endete nach der Scrollbewegung bei rund 24 CSS-Pixeln vom oberen Viewportrand. Text und Überschrift bleiben innerhalb der Breite und umbrechen lesbar.

Die schmale Prüfung erfolgte mit Browserzoom und tatsächlich gemessener CSS-Viewportbreite. Das prüft die responsiven Layoutregeln; es ist kein physischer iPhone-/Android-Gerätetest. Die Browser-DevTools-Sperre wurde nicht verändert. Die Browserzoomstufe wurde nach der Prüfung wieder auf 100 Prozent zurückgesetzt.

## Bestand und Funktionen

Die bisherigen redaktionellen Inhalte, der ursprüngliche politische Artikel, das vollständige bisherige Betriebskonzept, die zehn Kriterien, die 18 Hausordnungsgrundsätze sowie alle früheren JSON-Inhaltsdateien bleiben durch Bytevergleiche gegen den Ausgangsstand abgesichert. Die historischen Prüftests sichern weiterhin 104 Erfassungsposten und alle 88 ursprünglichen Bildnummern einschließlich vorhandener Dateien und Vorschauen. Die 139 bestehenden Einsamkeits-Themenansichten bleiben erhalten.

Zusätzliche Live-Stichprobe aller bisherigen Hauptbereiche: Start, Anliegen, Erfahrungen, Geschichte, Politik, Verzeichnis, Organisationen, Über uns, Nachrichten, Einsamkeit und Datenschutz waren mit Inhalt erreichbar. Die historische Sammlung wurde über die bestehende Querverbindung geöffnet. Diese Laufzeit-Stichprobe ergänzt den vollständigen statischen Bestandsschutz; sie ist kein manueller Einzeltest jeder alten Bedienkombination.

## Keine neue öffentliche Datenerfassung

Die drei Ergänzungsseiten enthalten keine Formulare oder Eingabefelder. Die bisherige Unterstützerregistrierung besitzt weiterhin ein deaktiviertes Fieldset. Beide getrennten Einwilligungen sind nicht vorausgewählt und deaktiviert; kein aktives E-Mail-Eingabefeld.

Bestehende lokale Kommentar- und Presse-Testformulare sind unverändert. Ihre Validatoren und Komponenten unterbinden Übermittlung; es gibt keine neue persistente Kommentarablage, öffentliche Liste, Registrierung, Umfrage oder Forschungsdatenerfassung. Dies ist durch die bestehende Testsuite, Quellvergleich und die Liveansicht abgesichert. Normale technische Webauslieferung ist hiervon zu unterscheiden.

## Weiterhin offene Punkte

- Keine uneingeschränkte wissenschaftliche Vollabnahme: einzelne nur allgemein benannte Quellenidentitäten zu zusätzlicher Polizeiforschung und Time-Location-Sampling bleiben ungeklärt.
- Nicht jede wissenschaftliche Veröffentlichung wurde vollständig im Volltext geprüft; Abstract- und Metadatenprüfung bleiben entsprechend bezeichnet.
- Keine tatsächlichen Forschungsdaten oder Wirkungsnachweise für das noch nicht realisierte Gesamtmodell, keine belegte Erreichbarkeit der 90-Prozent-Quote und keine behauptete konkrete Einsamkeitsreduktion durch einen noch nicht existierenden Standort.
- Keine reale Trägerschaft, Finanzierung, Polizeizusage, Forschungsbeauftragung oder Eröffnung durch diese Veröffentlichung.
- Kein physischer Mobilgerätetest. Vorhandene frühere fachliche und historische Einzelprüfpunkte bleiben erhalten.
- Keine in den abschließenden Prüfungen festgestellten offenen Funktionsfehler der neuen Ergänzungen; der gefundene mobile Navigationsfehler ist behoben und live nachgeprüft.

Die wissenschaftlichen Aussagegrenzen und offenen Identitäten stehen auch weiterhin sichtbar auf den veröffentlichten Ergänzungsseiten.
