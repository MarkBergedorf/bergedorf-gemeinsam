# Technische Prüfung – Sonderseite Einsamkeit

Stand: 11. November 2026. Ausgangscommit: `b2c38948e1fdd96e90a0b07968520eb47298d7df` (aktueller main vor Änderung).

- Regulärer Produktionsbuild erfolgreich; Verifikation: 87 Ausgabedateien, Projekt-Unterpfad korrekt, HTML mit noindex, vier Beispiele, 69 redaktionelle Bestandeinträge, keine Live-Datensätze.
- Alle 86 vorhandenen und ergänzten Frontendtests bestanden (80 bisherige und sechs neue Tests). Geprüft werden unter anderem alle 18 Titel, Gruppenzuordnung, direkte Themenadressen, falsche Pfade, rekursive Navigation anhand eines vierstufigen Testbaums, Breadcrumbs und Elternlinks, echte Suchtreffer und Nulltreffer sowie das vollständige Zeilenregister mit Prüfsummen.
- Bestehender Synchronisierungsablauf `node scripts/sync-pages.mjs` erfolgreich; Dateien am Repository-Stamm entsprechen `frontend/dist`.
- Desktopbrowser tatsächlich geprüft: Hauptnavigation, Übersicht, 18 Karten, lange Titel ohne Abschneiden, Hilfezugang, Themensuche per Eingabetaste und Button, Trefferpfad, Suche ohne Treffer, Themenansicht, Browser-Zurück und -Vorwärts einschließlich wiederhergestellter Suchanfrage, Neuladen der direkten Hilfeadresse und Zurück zur Übersicht.
- Keine tatsächliche Smartphone-Sichtprüfung: Die verfügbare Browsersteuerung bietet keine unterstützte Einstellung der Fenster-/Gerätebreite. Mobile CSS-Regeln für einspaltige Karten, umbrechende Titel und Suchfelder sind umgesetzt; daraus wird kein bestandener Gerätetest abgeleitet.
- Bestehende Bereiche sind im Quellcode nur an den erforderlichen Integrationsstellen berührt: Import, ein Hauptnavigationseintrag und eine zusätzliche Routenverzweigung. Bestehende CSS-Regeln unverändert; neue Regeln auf `.loneliness-page` und zugehörige neue Klassen begrenzt. Die private Sites-Version 99 wurde nicht geöffnet oder verändert.
- Bekannte Buildhinweise: bereits vorhandener Hinweis auf Leaflet-CSS und große JavaScript-Chunks. Kein Buildfehler.

Die vollständige redaktionelle Zuordnung und Übernahme der Unterthemen ist durch die fehlende vereinbarte Gesamtkonzeption blockiert. 18 Hauptthemen und 0 Unterthemen sind veröffentlicht vorgesehen. Es werden keine fehlenden Artikel, Hilfsangebote oder geprüften Quellen vorgetäuscht. `README.md` und Quellenregister dokumentieren den offenen Stand.

Die Veröffentlichung erfolgt über den bestehenden GitHub-Pages-Ablauf nach Aktualisierung von main. Der tatsächliche Abschlussstatus des Deployments und die nachfolgende öffentliche Browserkontrolle werden im Arbeitsbericht mit Commit-ID mitgeteilt; diese Datei behauptet keinen vorab feststehenden Veröffentlichungserfolg.
