# Arbeitsauftrag 14 – technische Quellenprüfung

Prüfdatum: **19. November 2026**. Recherche ausschließlich in Primärquellen. Keine E-Mail versandt, keine Konten verbunden, keine Dateien hochgeladen. Diese Quellenprüfung beschreibt technische Standards und Umsetzungsempfehlungen; sie behauptet keine praktische Abnahme sämtlicher Mailprogramme oder Mobilgeräte.

## 1. E-Mail-Vorbereitung mit `mailto:`

**Quelle:** IETF, RFC 6068, *The 'mailto' URI Scheme*, Oktober 2010.

https://www.rfc-editor.org/rfc/rfc6068.html

Geprüfte Abschnitte: 2 (Syntax), 3 (Semantik), 4 (sichere Header), 5 (Kodierung), 7 (Sicherheit).

- `mailto:` beschreibt eine Nachrichtenvorlage. Der Client erstellt den Entwurf; die Person kann ihn ändern, senden oder verwerfen. Öffnen ist kein Versand- oder Eingangsnachweis.
- Empfänger sowie `subject` und `body` sind für die geplante Funktion ausreichend. `body` ist einfacher Text, kein allgemeiner MIME-Nachrichtenkörper. Daraus folgt: kein verlässlicher standardisierter Weg zum automatischen Hinzufügen von Bildschirmfotos oder Videos.
- UTF-8 und Prozentkodierung verwenden; reservierte Zeichen wie `&`, `?`, `#`, `=` innerhalb der Werte kodieren. Leerzeichen als `%20`; kein ungeprüftes Formular-Encoding mit `+`. Nur einmal kodieren. Zeilenumbrüche im Nachrichtenkörper müssen als `%0D%0A` erscheinen.
- Der Standard begründet keine universell verlässlich nutzbare maximale URI-Länge. Ein Umschaltwert in der Anwendung ist daher eine eigene Vorsorgeregel, keine RFC-Grenze oder Garantie für alle Clients.
- Die vollständige Nachricht vor dem Öffnen lesbar zeigen. Empfänger und Betreff fest vorgeben; Nutzertext ausschließlich im kodierten Nachrichtenkörper verarbeiten, ohne zusätzliche Header einzuschleusen.

**Ergänzende Mozilla-Dokumentation:** MDN, *Creating links*, Abschnitt „Email links“.

https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Creating_links#email_links

MDN erläutert `mailto:` als Link zu einer neuen ausgehenden Nachricht und zeigt die getrennten Parameter für Betreff und kurzen Nachrichtentext. Das bestätigt die Eignung als Vorbereitung im eingerichteten Mailclient; es ersetzt keine praktische Prüfung der jeweiligen Browser-/Mailclient-Kombination.

## 2. Zwischenablage

**Primärquelle:** W3C, *Clipboard API and events*, Working Draft vom 24. Juni 2026, insbesondere Abschnitte 7, 9 und 11.

https://www.w3.org/TR/2026/WD-clipboard-apis-20260624/

Aktuelle Veröffentlichungsadresse: https://www.w3.org/TR/clipboard-apis/

Die asynchrone Zwischenablage ist auf sichere Kontexte beschränkt. Schreibzugriff kann von Browserberechtigung und Nutzeraktivierung abhängen. Der Entwurfsstatus der Spezifikation ist zu beachten; daraus folgt keine Zusicherung identischen Verhaltens aller Browser.

**Mozilla-Dokumentation:** MDN, *Clipboard: writeText() method*.

https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText

`writeText()` liefert ein Promise, das nach Aktualisierung der Zwischenablage erfüllt wird. Nicht erlaubtes Schreiben kann mit `NotAllowedError` scheitern. Deshalb erst nach erfolgreichem `await` „kopiert“ bestätigen. Fehlende API oder Ablehnung müssen abgefangen werden. Der vollständige Text bleibt in einem sichtbaren, auswählbaren Textfeld erhalten; ein manueller Kopierhinweis ist der belastbare Rückfallweg. Für diese Funktion ist kein Lesen der Zwischenablage erforderlich.

## 3. Abgeleitete Umsetzungsempfehlungen

Diese Punkte sind Projektentscheidungen auf Grundlage der oben geprüften technischen Grenzen, keine zusätzlichen Standardvorgaben:

1. Fester Empfänger **bergedorf.gemeinsam@outlook.de**, fester Betreff **Technische Störung – Bergedorf gemeinsam**. Vollständiger, unveränderter Meldungstext bleibt sichtbar und kopierbar.
2. Bei kurzen Entwürfen vollständig kodiertes `mailto:` mit Nachrichtentext. Bei langen Entwürfen auf einen kurzen Link mit Empfänger/Betreff umschalten und deutlich zum Einfügen des vollständigen kopierten Textes auffordern. Nichts stillschweigend kürzen oder als übertragen bezeichnen.
3. Kopieren über eine bewusste Schaltflächenaktion. Für den Meldungstext und die Empfängeradresse getrennte Aktionen und Erfolgsmeldungen anbieten. Bei Fehlern Text beziehungsweise Adresse zum manuellen Kopieren erreichbar halten.
4. Bildschirmfotos und Videos selbst erstellen, vertrauliche Daten vorher entfernen und erst im eigenen Mailprogramm anhängen. Die Website benötigt dafür weder Dateiauswahl noch Uploadserver.
5. Kein automatischer Versand, keine vorgetäuschte Versandbestätigung, keine Browser-/Geräteerkennung, keine neue serverseitige Speicherung und kein öffentliches Fehlerregister. Ein tatsächlich eingerichtetes Mailprogramm und dessen Anhänge-/Größengrenzen bleiben außerhalb der statischen Website.
