# Arbeitsauftrag 14 – Technische Störungen melden

Stand: 19. November 2026. Öffentliche GitHub-Pages-Testwebsite „Bergedorf gemeinsam“.

## Ausgangsstand und Umfang

Geprüfter Hauptbranch zu Beginn: **`3362ee127a4f1d4901bc11d826354a005821da05`**, Abschlussdokumentation zu Arbeitsauftrag 13. Keine neueren Änderungen waren vorhanden. Die vorhandene Website wurde ergänzt, nicht ersetzt. Arbeitsauftrag 14 schließt keine offenen rechtlichen, wissenschaftlichen oder produktiven Voraussetzungen früherer Aufträge ab.

Die neue Schaltfläche **„Technische Störung melden“** steht direkt unter der App-Installationsfunktion im gemeinsamen Seitenfuß. Sie nutzt dieselben Klassen `outline small`; im Desktop-Prüfbrowser haben beide Schaltflächen 12 Pixel Schriftgröße, 40 Pixel Höhe und 5 Pixel Rundung. Auf schmalen Ansichten nutzen beide die bestehenden 16-Pixel-/44-Pixel-Regeln. Der bisherige App-Installationscode, seine Anleitungen, Browserlinks, Kopierfunktionen, Ereignisse und Standalone-Erkennung bleiben bytegleich. Der neue Meldebereich wird unabhängig vom Installationszustand gerendert.

## Geänderte Dateien

- `frontend/app/platform.tsx`: Import und zusätzliche Komponente unmittelbar nach `<AppInstallation/>`, ohne sonstigen Umbau des gemeinsamen Seitenfußes.
- `frontend/app/technical-fault.tsx`: zugänglicher nativer Dialog, neun Punkte, Prüfung, E-Mail-Vorbereitung, Kopieren, manuelle Kopieralternative und lokales Zurücksetzen.
- `frontend/app/technical-fault.css`: ausschließlich neue, abgegrenzte Gestaltung; nummerierte Liste, flexible Umbrüche, Fokusmarkierungen und interne vertikale Dialogrolle.
- `frontend/lib/technical-fault.mjs`: reine Daten-/Validierungs-/Textfunktionen, Berlin-Zeit, sichere mailto-Kodierung, lange Texte und Clipboard-Helfer.
- `frontend/pages/privacy.tsx`: zusätzliche Erklärung der tatsächlichen lokalen Vorbereitung und des freiwilligen E-Mail-Kontakts; alle bisherigen Absätze erhalten.
- `frontend/tests/technical-fault.test.mjs`, `frontend/tests/fixtures/technical-fault.mjs`, `frontend/tests/fixtures/technical-fault-authorized-changes.json`: neue Tests und exakte Rückrechnung der zwei beauftragten Quellergänzungen für den Bestandsschutz.
- `frontend/tests/fixtures/authority-report.mjs` und `frontend/tests/events.test.mjs`: bestehende Quellvergleiche berücksichtigen ausschließlich diese exakt dokumentierten Ergänzungen. Kein pauschaler Ausschluss bestehender Dateien; neuer vollständiger Vergleich gegen den Ausgangsstand.
- `docs/technik/auftrag14-quellen.md` und dieser Bericht; nach Veröffentlichung ergänzende Prüfbilder.
- Regulär neu erzeugte Produktionsdateien `index.html`, `404.html` und gehashte JavaScript-/CSS-Ausgaben; alte generierte Hashdateien entfernt. Produktionsausgabe vollständig mit `frontend/dist` abgeglichen.

Keine bestehenden historischen oder politischen Texte, wissenschaftlichen Ergänzungen, Datensätze oder App-Installationsdateien wurden verändert. Die gesperrten produktiven Funktionen aus Auftrag 13 bleiben gesperrt.

## Formular und neun Checklistenpunkte

Dialogüberschrift: **„Technische Störung auf Bergedorf gemeinsam melden“**. Der vorgegebene Einführungstext ist vollständig übernommen. Nur Websiteadresse und Problembeschreibung sind Pflicht. Die übrigen Angaben sind ausdrücklich freiwillig; technische Unkenntnis verhindert keine Meldung.

| Punkt | Umsetzung |
| --- | --- |
| 1. Wo tritt der Fehler auf? | Vollständiges `window.location.href`, einschließlich Hash-Route und Parametern, beim Öffnen als bearbeitbarer Vorschlag. Keine Verkürzung zur Startseite. Beim Öffnen auf einer anderen Route neuer Vorschlag; manuelle Korrektur innerhalb desselben Seitenkontexts bleibt beim Schließen/Öffnen erhalten. Hinweis zum Entfernen vertraulicher URL-Bestandteile. |
| 2. Was passiert genau? | Mehrzeiliges Pflichtfeld mit unverändertem Hinweis zu Fehlerbeschreibung und wörtlicher Fehlermeldung. |
| 3. Wie lässt sich der Fehler auslösen? | Mehrzeiliges freiwilliges Feld mit vorgegebenem Schritt-für-Schritt-Hinweis. |
| 4. Wann ist der Fehler aufgetreten? | Bearbeitbare und leerbare Datums-/Uhrzeitfelder. Vorschläge ausdrücklich in Europe/Berlin; frühere Zeitpunkte möglich. Schaltfläche für einen neuen aktuellen Vorschlag. Keine Betriebssystem-Zeitzone vorausgesetzt. |
| 5. Gerät | Alle vorgegebenen Beispiele, zusätzlich „Nicht bekannt“, sowie freie Ergänzung. Keine Geräteerkennung. |
| 6. Betriebssystem | Alle vorgegebenen Beispiele, „Anderes Betriebssystem“, „Nicht bekannt“, freie Versions-/Textangabe. |
| 7. Browser | Alle vorgegebenen Browser, „Anderer Browser“, „Nicht bekannt“, freie Ergänzung und ausdrückliche Auswahl zur installierten Web-App. Keine Browsererkennung. |
| 8. Besondere Einstellungen | Alle vorgegebenen Beispiele, Mehrfachauswahl und Textfeld. „Keine“ und „Nicht bekannt“ jeweils exklusiv zu den anderen Optionen, damit keine widersprüchliche Kombination entsteht. |
| 9. Screenshot oder Video | Vollständiger vorgegebener Hinweis zum gesamten Bildschirm/kurzem Video, Anleitung zum Anhängen im eigenen Mailprogramm, freiwilliger Text zu vorgesehenen Anlagen. Keine Dateiannahme, Bildschirmaufnahme oder automatische Anlage. |

Die zusätzliche **„E-Mail-Adresse für Rückfragen“** ist freiwillig. Ausschließlich Rückfragen oder Rückmeldung zur technischen Störung, keine öffentliche Anzeige, kein Newsletter, keine Unterstützerliste oder anderer Verteiler. Die ohnehin regelmäßig vorhandene Absenderadresse im Mailprogramm wird erklärt.

Native Dialog-Tastaturführung: Fokus beim Öffnen auf Schließen, Escape schließt, Fokus kehrt zur Meldeschaltfläche zurück. Hinter dem Modal bleibt eine zuvor geöffnete Installationshilfe erhalten, ist aber währenddessen nicht bedienbar und überlagert das Formular nicht. Eingaben bleiben beim Schließen/erneuten Öffnen in derselben Ansicht erhalten; Neuladen oder Verlassen kann sie verwerfen. Bewusstes Zurücksetzen erfordert einen Hinweis, dass außerhalb der Website gespeicherte Kopien/Entwürfe dadurch nicht gelöscht werden.

## Tatsächlicher E-Mail-Weg

**Empfänger:** `bergedorf.gemeinsam@outlook.de`

**Betreff:** `Technische Störung – Bergedorf gemeinsam`

Die Website enthält keinen E-Mail-Versanddienst. „E-Mail vorbereiten“ prüft zuerst die Eingaben, zeigt bei Fehlern Hinweise unmittelbar am Feld und fokussiert das erste ungültige Feld. Anschließend werden Empfänger, Betreff und vollständiger gegliederter Klartext zur Prüfung angezeigt. Erst der gesonderte Link **„E-Mail im eigenen Mailprogramm öffnen“** übergibt eine `mailto:`-Vorlage. Es wird weder ein Versand noch ein Eingang bestätigt. Die Person ergänzt Anhänge und versendet selbst.

Alle neun Nummern bleiben in der vorgeschriebenen Reihenfolge im Text; zusätzliche Angaben und Rückfrageadresse folgen. Ursprüngliche Eingaben werden nicht gekürzt, getrimmt oder inhaltlich umformuliert. Lediglich Zeilenumbrüche werden im mailto-Transport entsprechend RFC 6068 als CRLF prozentkodiert. Empfänger und Betreff sind fest, Nutzertext gelangt ausschließlich in den kodierten `body`, nicht in zusätzliche Mailheader. Sonderzeichen, Hashzeichen, Umlaute und Zeilenumbrüche sind geprüft.

Eigene vorsichtige Anwendungsschwelle: **2.000 Zeichen für den vollständig kodierten mailto-Link**. Dies ist keine allgemeine Browser- oder RFC-Grenze und keine Garantie für jedes Mailprogramm. Darüber wird ausdrücklich nur der kurze Empfänger-/Betrefflink angeboten und zum Einfügen des vollständigen Kopiertexts aufgefordert. Die vollständige Meldung bleibt unverändert sichtbar und kopierbar. Auch bei einem kürzeren Link werden fehlendes Mailprogramm oder fehlender Nachrichtentext durch die Kopieralternative berücksichtigt.

## Kopieren und Anhänge

„Fehlermeldung kopieren“ übernimmt vollständigen Text einschließlich Empfänger und Betreff in die Zwischenablage. „E-Mail-Adresse kopieren“ kopiert nur die feste Empfängeradresse. Erfolg wird erst nach erfülltem Clipboard-Promise bestätigt. Fehlende API oder Ablehnung führen zu einer verständlichen Meldung und sichtbarem, markiertem Text beziehungsweise markierter Adresse. Der Meldungstext ist auch unabhängig davon über die aufklappbare Ansicht manuell kopierbar.

Screenshot/Video ausdrücklich **im eigenen Mailprogramm** über Anhang/Büroklammer ergänzen. Dessen Größenbegrenzung ist maßgeblich. Kein Dateiwähler und kein unbekannter Uploadserver. Der vorgegebene Datenschutzhinweis zu Passwörtern, privaten Nachrichten, Kontodaten und anderen vertraulichen Angaben steht vor der E-Mail-Erstellung; unnötige Angaben zu Dritten sollen ebenfalls entfernt werden.

## Datenschutzprüfung

Keine automatische Erhebung von Gerät, Betriebssystem, Browser, Erweiterungen, VPN oder Privatmodus; keine Cookies oder Zugangsdaten werden ausgelesen. Keine automatische Aufnahme von Bildschirm oder Video. Kein neuer Netzwerkaufruf für Meldungen, keine Datenbank, keine externe Formularablage und keine Veröffentlichung eines Fehlerregisters. Eingaben nur im Arbeitsspeicher der Ansicht. Zwischenablage wird ausschließlich nach ausdrücklichem Klick beschrieben; die Funktion liest sie nicht aus.

Erst beim selbst ausgeführten E-Mail-Versand erhält der Betreiber die Nachricht über das vorhandene Outlook-Postfach. Dafür gelten die unverändert vorhandenen Angaben zu E-Mail-Kontakt, Rechtsgrundlage, Anbietern und Speicherkriterien. Die zusätzliche Datenschutzerklärung erläutert die lokale Vorbereitung, URL-/Zeitvorschläge, Zwischenablage, Anhänge und tatsächlichen Versandweg. Keine neue automatische Löschfrist oder umfassende rechtliche Vollabnahme wird behauptet.

## Automatisierte Prüfungen und Produktionsbuild

**314 Tests erfolgreich: 298 bisherige Tests und 16 neue Tests.** Getestet: vollständige Hash-URL, keine automatisch gesetzten technischen Geräteangaben, Berlin-Zeit einschließlich Tageswechsel und Sommerzeit, Mindestfelder/optionale Unkenntnis, ungültige Daten, neun Textpunkte, vollständige sehr lange Texte, RFC6068-Kodierung und Header-Injektion, langer Kopierweg, widerspruchsfreie Mehrfachauswahl, asynchroner Clipboard-Erfolg/-Fehler, unveränderte Installation, vollständiger Quellbestand 1–13 und zugängliche/schmale UI-Struktur.

Ein bestehender Quellvergleich für die Veranstaltungsnavigation musste ebenfalls die exakte zusätzliche Footerkomponente zurückrechnen; anschließend alle bisherigen Prüfungen erfolgreich. Es wurde kein Bestandsvergleich abgeschaltet. Die bei der Sichtprüfung zunächst fehlende sichtbare Listen-Nummerierung wurde durch explizite Dezimalmarker korrigiert und erneut im Browser kontrolliert.

Regulärer Produktionsbuild erfolgreich. 265 Ausgabedateien, `noindex` aktiv, vier markierte Beispiele, 69 redaktionelle Einträge, null Live-Datensätze. Vorhandene Hinweise zur Bundlegröße und Leaflet-CSS bleiben Hinweise, keine Buildfehler. `node scripts/sync-pages.mjs` bestätigt vollständige Bytegleichheit aller Ausgabedateien am Repository-Stamm mit `frontend/dist`.

## Browserprüfung vor Veröffentlichung

Nur ausdrücklich erfundene Fehlermeldungen verwendet; keine E-Mail abgesendet und keine echte Störung behauptet.

- Formular auf Startseite und Politik geöffnet, Pflichtfehler unmittelbar an URL/Beschreibung angezeigt, vollständige manuelle Hashadresse übernommen, unbekanntes Gerät/OS/Browser akzeptiert.
- Kurzer E-Mail-Link enthält vollständigen Text, festen Empfänger und Betreff; alle neun Punkte, Freitext und Sonderzeichen aus der tatsächlich erzeugten URL kontrolliert.
- Vollständigen Text und Empfängeradresse über die Schaltflächen kopiert und anschließend für diesen Test in der Browser-Zwischenablage abgeglichen. Ein langer Test mit 7.352 Zeichen Kopiertext wurde vollständig einschließlich Schlussmarkierung übernommen; kurzer Link ohne body und ausdrücklicher Langtexthinweis korrekt.
- Escape schließt, Fokus kehrt zurück; Schließen/Wiederöffnen behält Texte; Wechsel zu Politik übernimmt vollständige neue Route.
- App-Installationshilfe auf Desktop geöffnet/geschlossen, währenddessen Meldeformular als einzelnes Modal geöffnet; Installationshilfe bleibt unverändert dahinter erhalten. Schmale Installationshilfe mit Geräte-/Browserauswahl und Websiteadresse ebenfalls geöffnet/geschlossen.
- Desktop 1.363 CSS-Pixel; Dialogbreite/Scrollbreite nach abschließender Kontrolle im Liveabschnitt. Tabletähnlicher Reflow 681 CSS-Pixel: Dokumentbreite 674, Dialog-Client-/Scrollbreite jeweils 641. Schmaler Reflow 340 CSS-Pixel: Dokumentbreite 337, Dialog-Client-/Scrollbreite jeweils 315. Kein horizontaler Überlauf des Dialogs; schmale Eingabe und Kopieren funktionieren. Zoom anschließend zurückgesetzt.
- Mehrfachauswahl VPN/Werbeblocker ergibt zwei Werte; „Keine“ reduziert auf einen widerspruchsfreien Wert.

**Konkrete Prüfgrenze:** Der Versuch, den `mailto:`-Link zu öffnen, wurde durch die Sicherheitsrichtlinie des Cloud-Prüfbrowsers blockiert: nur HTTP/HTTPS zulässig. Ein tatsächlicher Mailclient-Entwurf konnte hier nicht praktisch geöffnet werden. Diese Sperre wurde nicht umgangen; weitere Tests erfolgten ausschließlich in einer HTTP-Vorschau und am Kopierweg. Empfänger, Betreff, vollständiger Linkinhalt und Standardskodierung sind unabhängig geprüft. Kein erfolgreicher Versand wird behauptet. Ein eingerichtetes Mailprogramm auf einem regulären Endgerät muss die tatsächliche Übergabe zusätzlich bestätigen.

## Veröffentlichung und Liveprüfung

Noch ausstehend. Tatsächlicher Veröffentlichungscommit, GitHub-Pages-Lauf, Liveprüfungen und Prüfbilder werden nach erfolgreicher Veröffentlichung ergänzt.

## Verbleibende Einschränkungen

- Mailprogramm muss auf dem jeweiligen Endgerät eingerichtet sein; Übergabe und URI-Längentoleranz variieren. Die Kopieralternative ist deshalb dauerhaft erforderlich. Keine Garantie eines Versand- oder Eingangsstatus.
- Tatsächliche native Mailclient-Übergabe im Prüfbrowser durch Protokollrichtlinie nicht abnehmbar; keine E-Mail zu Testzwecken versendet.
- Praktische Prüfung mit Chrome unter Linux und schmalen Browser-Reflows. Keine vollständige Prüfung physischer iPhones, Android-Geräte, Tablets, Safari/Firefox/Edge, Mailclients oder einer installierten Web-App. Der Footer ist im Code unabhängig vom Installationsstatus eingebunden; reale Installation wurde nicht behauptet.
- Clipboard kann auf Endgeräten fehlen oder abgelehnt werden. Fehlerzweige automatisiert geprüft; sichtbarer manueller Kopierweg vorhanden. Kein Anspruch auf universelle Berechtigungsfreigabe.
- Nur technische Fehlermeldungen an den Betreiber. Kein öffentlicher Kommentarbereich, keine Bürgeranliegen-Einreichung, keine automatische Weiterleitung an Behörden. Offene Voraussetzungen früherer Aufträge bleiben unverändert dokumentiert.

Quellen und Grenzen: [Technische Quellenprüfung](auftrag14-quellen.md).
