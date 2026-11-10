# Bedienbare Testformulare für Bergedorfer Pressediskussionen

Ausgangspunkt: main, 7ae7573bd01462eec521d2576dd889c515def0ef. Diese Änderung ersetzt ausschließlich die bislang deaktivierte Formularvorschau im Pressediskussionsbereich durch zwei lokal bedienbare Testformulare. Frühere Dokumentation zum gesperrten Vorschauzustand bleibt als historischer Nachweis erhalten; maßgeblich für die Formulare ist der hier beschriebene neue Zustand.

## Betriebsgrenze

Es gibt weiterhin keine öffentliche Einreichung, Speicherung, Datenbank, Anmeldung oder Moderationsfreischaltung für Pressediskussionen. `pressDiscussionEnabled` bleibt `false`; `pressTestEnabled` kennzeichnet lediglich die lokale Testmöglichkeit. Beide Formulare verwenden ausschließlich React-Zustand im aktuellen Seitenkontext. Keine Speicherung in LocalStorage, SessionStorage oder IndexedDB; keine Übermittlung per Fetch, XHR, Beacon, WebSocket, E-Mail oder Formularnavigation. Submit wird durch `preventDefault()` abgefangen, auch bei Betätigung der Eingabetaste. `autocomplete="off"` ist gesetzt. Beim Neuladen oder Verlassen der Nachrichtenseite werden die Eingaben verworfen; beim bloßen Einklappen innerhalb derselben Formularsitzung bleiben sie im Arbeitsspeicher.

Erfolgreiche Prüfungen bestätigen ausschließlich die formale Vollständigkeit. Sie behaupten weder eine Einreichung noch eine Speicherung oder Veröffentlichung, auch keine inhaltliche Prüfung von Sachverhalt oder Bergedorf-Bezug. Änderungen nach einer erfolgreichen Prüfung heben die Erfolgsanzeige auf. Nach dem ersten Prüfversuch werden Fehler beim Bearbeiten aktualisiert.

## Pressediskussionsformular

- Pflichtauswahl „Wie haben Sie den Zeitungsartikel gelesen?“: „Digital – auf einer Internetseite oder in einer E-Paper-Ausgabe“ oder „Gedruckt – in einer Zeitung aus Papier“.
- Digital zeigt ausschließlich den Pflichtlink „Direkter Link zum Artikel“. Gedruckt zeigt stattdessen ausschließlich „Ausgabe der Zeitung“ und „Seitenzahl“ als Pflichtfelder. Verborgene Felder werden nicht validiert, auch wenn dort zuvor Werte eingegeben wurden.
- Medienauswahl ausschließlich Bergedorfer Zeitung, Bille Wochenblatt, Hamburger Abendblatt, Hamburger Morgenpost (MOPO), BILD-Zeitung. Kein Freitext und kein Sonstiges; unbekannte technische Werte werden zurückgewiesen.
- Erscheinungsdatum und Originalüberschrift sind Pflicht. Das Datum muss ein tatsächlich existierendes Kalenderdatum sein und darf nicht nach dem aktuellen Tag in Europe/Berlin liegen. Der Browser stellt das native Datumsfeld entsprechend seiner Spracheinstellungen dar; die Prüflogik verwendet ISO-Kalenderdaten und kann für Tests einen festen heutigen Tag erhalten.
- „Autorin oder Autor“ ist Pflicht. „Nicht angegeben“ ist zulässig, wenn im tatsächlichen Artikel keine Angabe vorhanden ist. Der angeforderte graue Hinweis ist ausschließlich ein Placeholder und kein voreingetragener Feldwert.
- „Rubrik oder Ressort“ bleibt optional; der vorgegebene graue Beispieltext ist ebenfalls ausschließlich ein Placeholder.

| Textfeld | Minimum | Maximum | Bedingung |
| --- | ---: | ---: | --- |
| Ausführliche Beschreibung des Themas | 200 | 2.000 | Pflicht |
| Sachverhalt | 150 | 2.500 | Pflicht |
| Konkreter Bezug zu Bergedorf | 100 | 1.500 | Pflicht |
| Eigene Meinung | 100 | 2.500 | Pflicht |
| Diskussionsfrage | keines | 500 | Pflicht; ein Zeichen wie „?“ genügt, leere oder nur aus Leerraum bestehende Fragen nicht |
| Konkrete Auswirkungen des übergeordneten Themas auf Bergedorf | 150 | 2.000 | Nur bei übergeordnetem Thema |
| Erläuterung bei „Sonstiges“ | 100 | 1.500 | Nur bei Kategorie Sonstiges |

Die Grenzen stehen zentral in den Felddefinitionen, werden von der Prüflogik und den Eingabekomponenten verwendet und sind als `minLength`/`maxLength` an den Textareas vorhanden. Live-Zähler verwenden dieselbe Zählweise wie die nativen HTML-Längenattribute (UTF-16-Codeeinheiten einschließlich eingegebener Leerzeichen und Zeilenumbrüche). Leerraum allein erfüllt keine Pflichtangabe. Andere Text-/URL-Felder, für die keine Zeichengrenze beauftragt ist, zeigen ebenfalls den aktuellen Zähler und erhalten keine erfundenen Mindestlängen.

Die zweistufige Bergedorf-Auswahl besteht aus unmittelbarem/übergeordnetem Thema und dem betroffenen Bereich. Alle 27 beauftragten Bereiche sind enthalten. Nur Sonstiges öffnet die zusätzliche Erläuterung. Der konkrete Bergedorf-Bezug bleibt unabhängig von der Kategorie Pflicht. Nur übergeordnete Themen öffnen die zusätzliche Pflichtbegründung zu den konkreten Auswirkungen. Der Hinweis, dass ein allgemeiner Hamburg-Bezug nicht genügt, bleibt erhalten. Das bestehende Bergedorf-Bestätigungskästchen ist bedienbar und technisch zwingend.

### Grenzen der Linkprüfung

Die lokale Prüfung akzeptiert HTTP-/HTTPS-Adressen ohne eingebettete Zugangsdaten und verlangt eine plausible Artikeladresse. Leere/fehlerhafte Adressen, bloße Startseiten, bekannte Ressort-/E-Paper-Einstiege, allgemeine Bille-Ausgabenübersichten und reine Trackinglinks werden abgelehnt. Identifizierende Artikelparameter und direkte E-Paper-Artikelansichten sind möglich. Der eingegebene Link wird dabei weder aufgerufen noch als Vorschau geladen. Ohne einen Abruf lässt sich weder die Existenz und Erreichbarkeit des Artikels noch die inhaltliche Übereinstimmung mit Medium, Überschrift oder Bergedorf-Bezug beweisen. Das Formular erläutert diese Grenze; die spätere manuelle Quellenprüfung bleibt erforderlich. Die bestehende konservative Kandidatensuche zur Artikelzuordnung und die spätere Moderationskonzeption bleiben erhalten.

## Separater Medienvorschlag

Der zusätzliche Button „Weiteres Nachrichtenmedium vorschlagen“ öffnet ein eigenständiges Testformular. Er ist nicht Bestandteil der fest begrenzten Zeitungs-Auswahlliste.

Pflichtangaben: Name des Mediums, offizielle Website, Art des Presseangebots, Erscheinungsweise, gedruckte Ausgabe Ja/Nein, Berichterstattung über Bergedorf Ja/Nein, Begründung für die Aufnahme. Die Website muss syntaktisch HTTP/HTTPS ohne Zugangsdaten sein; für diesen Verlagszugang ist ausdrücklich eine Startseite erlaubt. Ja/Nein-Werte werden technisch geprüft. Eine fehlende Druckausgabe verhindert die Prüfung nicht, da sie erwünscht und keine zwingende Aufnahmebedingung ist. Bei verneinter Berichterstattung über Bergedorf erklärt eine Feldmeldung, weshalb die Aufnahmevoraussetzung nicht erfüllt ist.

Öffentliche Zugänglichkeit, regelmäßiges Erscheinen, redaktionelle Verantwortung und tatsächliche Bergedorfer Berichterstattung sind sichtbar erläuterte Aufnahmevoraussetzungen. Ob Angaben zu einem realen Medium zutreffen, muss später geprüft und ausdrücklich freigegeben werden. Der Test nimmt kein Medium in die Liste auf und übermittelt auch keinen Vorschlag. Für nicht beauftragte Textgrenzen gelten nur Pflichtangabe und Live-Zähler, keine zusätzlichen Mindestlängen.

## Fehlerdarstellung und Zugänglichkeit

Beide Formulare haben getrennte Zustände und eindeutig zugeordnete Feld-IDs. Labels sind mit den Eingaben verknüpft. Fehlermeldungen erscheinen unmittelbar am betroffenen Feld und sind mit `aria-describedby` verknüpft; `aria-invalid` und sichtbare rote Markierung kennzeichnen Fehler. Die Prüfung fokussiert ein fehlerhaftes Feld. Prüfergebnis und Änderungsstatus werden über einen Statusbereich bekanntgegeben. Felder und Buttons sind per Tastatur bedienbar. Native Datumseingabe und Selects bleiben erhalten. Schriftgröße 16 px, begrenzte Feldbreite, umbrechende Beschriftungen und mindestens 44 px hohe Buttons unterstützen schmale Ansichten.

## Tatsächlich durchgeführte Prüfungen

- Regulärer Produktionsbuild erfolgreich; 87 Dateien, noindex bestätigt, öffentliche Beispieldaten unverändert.
- Alle 77 Frontendtests bestanden. Enthalten sind die bisherigen Regressionen für Startseite, Politik, Karten, Datenschutz und Installationshilfen sowie neue Grenzwerttests für alle sieben Textfelder, Enum-Prüfungen, Datum/Futurdatum, Autorenpflicht, digitale/gedruckte Pflichtangaben, bedingte Felder, Bestätigung und Medienvorschläge.
- Browser-Vorschau Desktop: leeres Pressediskussionsformular liefert Feldfehler; alle fünf Zeitungen tatsächlich nacheinander ausgewählt; Digital/Papier-Umschaltung mit wechselnden sichtbaren Feldern geprüft; vollständige Papier- und Digitalprüfung erfolgreich, jeweils mit „Nicht angegeben“ als Autor und einer einstelligen Diskussionsfrage.
- Übergeordnetes Thema und Sonstiges im Browser ausgewählt: beide Zusatzfelder erschienen und meldeten ohne Text Fehler; nach ausführlicher Eingabe war die Prüfung erfolgreich. Live-Zähler sichtbar aktualisiert.
- Separater Medienvorschlag im Browser: sieben fehlende Angaben werden markiert; vollständiger Vorschlag mit „Gedruckte Ausgabe: Nein“ und „Berichtet über Bergedorf: Ja“ formal erfolgreich geprüft. Erfolgstext bestätigt ausdrücklich keine Übermittlung oder Aufnahme.
- Nach Neuladen im Browser: sämtliche Texte, Auswahlwerte, Bestätigung und Erfolgsanzeigen beider Formulare wieder leer. Die fehlende Übermittlungs-/Speicherfunktion ist zusätzlich durch Quellcode- und Funktionstests abgesichert; eine vollständige Netzwerkmitschnittprüfung wurde nicht durchgeführt.
- Eine tatsächliche Smartphone-Sicht- und Bedienprüfung ist mit der verfügbaren Browsersteuerung nicht möglich. Das mobile CSS wurde berücksichtigt; ein Hardware- oder visuell geprüfter Emulationstest wird nicht behauptet.

Die fünf bestehenden Medienlinks, Nachrichtenseite und Navigation außerhalb des Pressediskussionsbereichs, andere redaktionelle Inhalte, Politik und Sitzungskalender, beide Karten, Datenschutz und Impressum, PC-/Smartphone-Installationshilfe und private Sites-Version 99 bleiben unverändert. Produktionsdateien werden ausschließlich mit dem regulären Build und `scripts/sync-pages.mjs` erzeugt und synchronisiert.
