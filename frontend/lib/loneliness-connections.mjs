// Canonical targets: existing articles remain single records. Reasons explain the editorial bridge.
export const themeConnections={
 verstehen:[['ursachen','Begriffe von Ursachen und Lebensbedingungen unterscheiden.'],['forschung','Die wissenschaftliche Aussagekraft prüfen.']],
 ursachen:[['stadtteile','Örtliche Bedingungen und historische Begegnungsorte einbeziehen.'],['begegnung','Aus Zugangshürden praktische Begegnungswege ableiten.']],
 kennenlernen:[['digital','Kontakte über digitale Medien mit persönlichen Begegnungen verbinden.'],['selbst-aktiv-werden','Kontaktwünsche in freiwillige erste Schritte übersetzen.'],['mitwirkung','Konkrete Gelegenheiten für gemeinsame Aktivitäten finden.']],
 lebenssituationen:[['hilfe','Nach passender Unterstützung in der jeweiligen Lebenslage suchen.'],['menschen-erreichen','Auch bisherige Nichtnutzer und Barrieren berücksichtigen.']],
 gesundheit:[['hilfe','Professionelle Unterstützung von allgemeinen Kontaktgelegenheiten unterscheiden.'],['forschung','Gesundheitliche Aussagen anhand der Originalforschung prüfen.']],
 'selbst-aktiv-werden':[['kennenlernen','Grenzen und Freiwilligkeit beim Kennenlernen beachten.'],['mitwirkung','Reale Möglichkeiten zur Mitwirkung finden.']],
 hilfe:[['gesundheit','Anliegen und Grenzen professioneller Hilfe einordnen.'],['netzwerke','Träger und Angebote zusammen betrachten.']],
 begegnung:[['stadtteile','Begegnungswege im jeweiligen Stadtteil prüfen.'],['mitwirkung','Gemeinsame Mahlzeiten, Sport und Kultur erschließen.']],
 begegnungsstaette:[['begegnung','Das Betriebskonzept mit tatsächlichen Kontaktmöglichkeiten verbinden.'],['netzwerke','Kooperationen mit bestehenden Einrichtungen prüfen.'],['politik','Finanzierung und öffentliche Verantwortung unterscheiden.']],
 stadtteile:[['begegnung','Örtliche Lebensbedingungen mit Begegnungsgelegenheiten verbinden.'],['netzwerke','Vorhandene Einrichtungen und Träger erschließen.']],
 netzwerke:[['hilfe','Von einer Organisation zu ihren konkreten Hilfsangeboten gelangen.'],['mitwirkung','Möglichkeiten zur Mitarbeit und Zusammenarbeit prüfen.']],
 'menschen-erreichen':[['lebenssituationen','Unterschiedliche Lebenslagen statt einer einheitlichen Zielgruppe beachten.'],['begegnungsstaette','Zugangshürden in Planung und Betrieb berücksichtigen.']],
 forschung:[['verstehen','Forschung mit den begrifflichen Fachartikeln verbinden.'],['gesundheit','Gesundheitsbefunde im jeweiligen Anwendungsbereich lesen.'],['quellen','Originalquellen und Aussagegrenzen nachvollziehen.']],
 buendnis:[['politik','Zivilgesellschaftlichen Prozess und staatliche Entscheidungen trennen.'],['mitwirkung','Veranstaltungen und angekündigte Dialogforen verfolgen.']],
 politik:[['buendnis','Politische Entwicklung mit dem Hamburger Bündnisprozess verbinden.'],['begegnungsstaette','Die Begegnungsstättenforderung am konkreten Konzept beurteilen.']],
 digital:[['kennenlernen','Freiwilligkeit und Grenzen auch online beachten.'],['hilfe','Digitale Information von professioneller Hilfe unterscheiden.']],
 mitwirkung:[['begegnung','Eine Veranstaltung in alltägliche Kontaktmöglichkeiten einordnen.'],['buendnis','Den Hintergrund der angekündigten Hamburger Formate lesen.'],['netzwerke','Träger und Kooperationsmöglichkeiten finden.']],
 quellen:[['forschung','Nachweisstandard mit den Forschungsfragen verbinden.'],['stadtteile','Historische und örtliche Belege in ihrem Kontext lesen.']]
};
export const specificConnections={
 't2-7':[['t10-6','Die historische Sammlung als Ausgangspunkt für Kontaktverluste nutzen.']],
 't10-6':[['t2-7','Die Grenzen einer Erklärung von Einsamkeit durch Ortsverluste nachvollziehen.'],['t18-2','Herkunft und Aussagekraft historischer Belege prüfen.']],
 't17-4':[['begegnungsstaette','Eine eigene Initiative mit dem Gründungsleitfaden vorbereiten.']],
 't18-1':[['gesundheit','Studien an konkreten gesundheitlichen Aussagen prüfen.']],
 't18-3':[['buendnis','Planungsankündigungen vom amtlichen Umsetzungsstand trennen.']]
};
export function editorialConnections(node){if(!node)return [];const root=node.path[0],pairs=[...(specificConnections[node.id]||[]),...(themeConnections[root]||[])];return [...new Map(pairs.filter(([id])=>id!==node.id).map(([id,reason])=>[id,{id,reason}])).values()];}
export const platformConnections=[['#anliegen','Anliegen','Konkrete Verbesserungsvorschläge für den Bezirk.'],['#erfahrung','Erfahrungsberichte','Persönliche Perspektiven als solche kenntlich machen.'],['#geschichte','Geschichte und Erinnerungen','Historische Quellen und Zeitzeugnisse bewahren.'],['#politik','Politik','Öffentliche Unterlagen und politische Positionen unterscheiden.'],['#verzeichnis','Verzeichnis','Einrichtungen und Angebote entdecken.'],['#organisation','Organisationen','Träger und ihre Selbstdarstellungen erschließen.']];
