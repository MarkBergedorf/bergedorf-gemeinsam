# Veröffentlichung und Liveprüfung der Aufträge 8–10

## Freigegebener Stand

Am 14. November 2026 hat der Betreiber die Veröffentlichung von Pull Request #2 ausdrücklich freigegeben. Vor Zusammenführung waren Hauptbranch `e4a32722ad3f9af8f50fac5de151fd3f8bd1e282` und PR-Kopf `1c4bd1349212ef6f406712cfbfc1cda5f01e7bcf` unverändert. Der geprüfte Git-Tree war `05875a30103d7ad771e17f7983ccd931cce6a974`.

Die reguläre Zusammenführung erzeugte Commit `df9e11a82979ba81b967d233001dccc995ef56c7`. GitHub-Pages-Lauf 43580636578 schloss erfolgreich ab. Die drei veröffentlichten Seiten wurden aufgerufen; 16 wissenschaftliche, 16 betriebliche und 27 Forschungsabschnitte waren vorhanden. Alle Abschnittsziele existieren; offene Quellenidentitäten sind weiterhin ausdrücklich gekennzeichnet.

## Gefundener und korrigierter Mobilfehler

Bei einer tatsächlichen CSS-Viewportbreite von 340 Pixeln zeigte die Liveprüfung: Die vorhandene globale mobile Regel `nav { display:none }` blendete zusätzlich zu der vorgesehenen Hauptnavigation auch die beiden neuen Inhaltsnavigationen aus. Die inhaltlichen Abschnitte blieben vorhanden und ohne horizontalen Überlauf lesbar, aber ihre Navigation war nicht bedienbar.

Gezielte Korrektur ausschließlich in der neuen Ergänzungs-CSS-Datei: `.encounter-expansion nav,.encounter-supplement nav { display:block }`. Das bestehende mobile Hauptmenü wird nicht verändert. Anschließend regulärer Produktionsbuild, Synchronisierung und 237 erfolgreiche Tests ohne Fehler oder übersprungene Tests. Die erzeugten 263 Ausgabedateien erfüllen weiterhin noindex und die gesperrten öffentlichen Berechtigungen.

Die schmale Darstellung wird durch Browserzoom und direkte Messung von `innerWidth`, Dokumentbreite und tatsächlichen Elementen geprüft. Das ist eine responsive CSS-Prüfung und kein Test auf einem physischen Mobilgerät. DevTools sind in dieser Browserumgebung nicht zugelassen; diese Sperre wurde nicht verändert.

Die erneute Liveprüfung nach Veröffentlichung der Korrektur und der endgültige Status werden in einem datierten Nachtrag ergänzt. Dieser Zwischenstand behauptet keine bereits erfolgte Nachprüfung der Korrektur.

## Wissenschaftliche Grenzen

Die Veröffentlichung ist keine uneingeschränkte wissenschaftliche Vollabnahme. Nicht eindeutig bezeichnete Studien zur zusätzlichen Polizeiforschung beziehungsweise zu Time-Location-Sampling bleiben offen; Abstractprüfung wird nicht als vollständige Volltextprüfung ausgegeben. Die konkreten Wirkungen des noch nicht verwirklichten Gesamtmodells, die 90-Prozent-Nutzungsquote und seine mögliche Einsamkeitswirkung bleiben Gegenstand späterer unabhängiger Forschung.
