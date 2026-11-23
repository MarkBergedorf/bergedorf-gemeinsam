# Arbeitsauftrag 29 – Karteninventar

Geprüft am 23.11.2026 anhand der Routen, der Kartenkomponenten und des aktuellen `main`-Stands `037c1d6`.

| Bezeichnung | Themenbereich | Direkte interne Route | Inhalt und Abgrenzung | Direkter Aufruf |
|---|---|---|---|---|
| Geschichtskarte | Geschichte und Erinnerungen | `#geschichte?view=map` | Freigegebene Geschichtsbeiträge und persönliche Erinnerungen; zusätzlich auswählbare öffentliche Grün-, Spiel-, Sport- und Wegepunkte. Die Ortsnamenskarte und die historische Begegnungsortkarte sind eigene Angebote. | Öffnet den Kartenmodus des bestehenden Geschichtsbereichs. Externe Kartendaten bleiben einwilligungspflichtig. |
| Historische Karte der Begegnungsorte | Historisches Verzeichnis der Begegnungsorte | `#einsamkeit/stadtteile/t10-6?ansicht=karte` | Historische Gaststätten, Geschäfte und weitere Treffpunkte mit belegten Adress-/Gebäudepositionen sowie separat gekennzeichnete Orientierungspunkte. Kein Kartenstand eines historischen Jahres. | Öffnet die vorhandene Kartenansicht direkt. OpenFreeMap wird erst nach Einwilligung geladen. |
| Tourismuskarte | Gäste und Tourismus | `#tourismus/karte` | Touristische Orte, Sehenswürdigkeiten, Natur, Rundgänge sowie ausgewiesene Wander- und Radlinien innerhalb derselben Karte. Routen sind Kartenebenen, keine eigenständigen Karten. | Öffnet den Tourismusbereich und scrollt unmittelbar zum Titel der vorhandenen Karte. Laden der Kartendaten bleibt einwilligungspflichtig. |
| Karte des Bergedorfer Verzeichnisses | Bergedorfer Verzeichnis | `#verzeichnis/karte` | Geprüfte Standorte von Dienststellen, Einrichtungen und Angeboten aus dem Verzeichnis mit den vorhandenen Listenfiltern. | Öffnet direkt die Kartenansicht; externer Dienst erfordert die vorhandene Einwilligung. |
| Organisationskarte | Organisationen stellen sich vor | `#organisation/karte` | Standortdarstellung der Profile im Organisationsbereich. Nutzt dieselbe Kartenkomponente wie das Verzeichnis, aber einen anderen Bereich und eine eigene Auswahl an Profilen. | Öffnet direkt die Organisationskarte; externer Dienst erfordert die vorhandene Einwilligung. |

Nicht als eigenständige Besucherkarte gezählt wurden die Geschichtskarte in einem einzelnen Artikel, Standortvorschauen in Einreichungs-/Prüfformularen und die Routenebenen der Tourismuskarte. Sie sind eingebettete Ansichten oder Funktionen, keine weiteren Kartenangebote.

Die Startseite verlinkt auf alle fünf Angebote einzeln. Es werden keine Koordinaten, Kartendaten, Filter, Routen, Quellen, Bilder oder Einwilligungsfunktionen geändert. Die GPX-Downloads von EntdeckerRouten bleiben unverändert reine Herausgeberlinks.
