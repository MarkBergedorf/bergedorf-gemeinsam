// The source GeoJSON remains untouched for provenance. This allowlist controls
// only which records from the broad Grünplan "green" category become map pins.
// The Hamburg pages document Hohendeicher See's public beaches (West/South)
// and describe Grachtenplatz as a designed central place in Neuallermöhe.
// https://www.hamburg.de/politik-und-verwaltung/behoerden/bukea/themen/wasser/badegewaesser/hohendeichersee-west-174080
// https://www.hamburg.de/leben-in-hamburg/bezirke-hamburg/stadtteile-bezirk-bergedorf/neuallermoehe-371774
const publicGreenPlaces=new Map([
 ['hamburg-gruenplan-002893','Bade- und Erholungsort'],
 ['hamburg-gruenplan-002895','Bade- und Erholungsort'],
 ['hamburg-gruenplan-002936','Bade- und Erholungsort'],
 ['hamburg-gruenplan-003008','Öffentlicher Platz'],
]);

export function isPubliclyRelevantInfrastructure(feature){
 return feature?.properties?.category!=='green'||publicGreenPlaces.has(feature.id);
}

export function publicInfrastructureFeatures(features=[]){
 return features.filter(isPubliclyRelevantInfrastructure);
}

export function countPublicInfrastructure(features=[]){
 const counts={playgrounds:0,sports:0,parks:0,green:0,paths:0};
 for(const feature of features){const category=feature?.properties?.category;if(category in counts)counts[category]++;}
 return counts;
}

export function publicInfrastructureCategoryLabel(feature){
 return publicGreenPlaces.get(feature?.id)||feature?.properties?.categoryLabel||'';
}

