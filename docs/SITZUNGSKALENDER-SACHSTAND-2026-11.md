# Sitzungskalender – maßgeblicher Sachstand November 2026

Grundlage ist die vom Betreiber mitgeteilte schriftliche Antwort der Verfahrensbetreuung der Bezirksversammlung Bergedorf vom November 2026 auf die technische Anfrage vom 7. November 2026. Namen einzelner Beschäftigter werden nicht veröffentlicht.

- Das bisherige Fachverfahren wird von Dataport gehostet.
- Ein automatisierter Abruf einzelner öffentlicher Sitzungsunterlagen wird derzeit nicht unterstützt.
- Teilweise bestehen RSS-Angebote, jedoch keine entsprechende Schnittstelle für einzelne Sitzungen, Gremien oder Dokumente.
- Im Zuge der Ablösung des bisherigen Fachverfahrens ist die Einführung einer OParl-Schnittstelle für das vierte Quartal 2028 vorgesehen. Dies ist eine Planung der zuständigen Stelle und keine verbindliche Termingarantie.
- Eine weitere Untersuchung des gemeldeten Verbindungsfehlers wurde nicht angeboten.

Die Anfrage an die Bezirksversammlung ist beantwortet; die technische Klärung ist damit vorerst abgeschlossen. Die automatische Aktualisierung bleibt deaktiviert und wird nicht weiterverfolgt, solange keine neue tragfähige Grundlage vorliegt. Eine erneute inhaltliche Befassung ist spätestens Anfang 2029 vorgesehen, sofern der Betreiber nichts anderes bestimmt. Dies ist ausschließlich eine dokumentierte Absicht: Es werden keine automatische Terminprüfung, Erinnerung oder laufende Hintergrundfunktion eingerichtet.

Der Sitzungsplan 2026 bleibt mit sämtlichen bisherigen Texten, Terminen, Tabellen und Quellen als Beispiel erhalten. Ausschließlich sein diagonaler Hinweis nennt den neuen Sachstand. Der vorhandene Button „Sitzungskalender“ verweist unverändert auf https://sitzungsdienst-bergedorf.hamburg.de/bi/si010_e.asp. Keine automatisierten Abrufe, neuen GitHub-Actions-Workflows oder zusätzlichen Datenquellen werden aktiviert. Die private Sites-Version 99 bleibt unangetastet.

## Umsetzung und Prüfung am 10. November 2026

Ausgangspunkt ist main, Commit f72a455af06646def35dc92e70afb5cf9c9a7e36. Der verbindliche Hinweistext wurde in frontend/app/workspace.tsx ersetzt und der vorhandene Text-Regressionstest entsprechend aktualisiert. Die Smartphone-Schriftgröße des Hinweises wird ausschließlich zur vollständigen Darstellung des längeren Textes angepasst. Graue halbtransparente Gestaltung, Drehung um −45 Grad, Position und pointer-events:none bleiben erhalten.

Reguläre Prüfung: pnpm run build, pnpm test, anschließend node scripts/sync-pages.mjs. Der Regressionstest gleicht den gesamten Sitzungsplan ohne Hinweis mit der unveränderten Originalvorlage ab und prüft den einmaligen, auf den Sitzungsplan begrenzten Hinweis sowie Drehung und Durchlässigkeit für Linkklicks.
