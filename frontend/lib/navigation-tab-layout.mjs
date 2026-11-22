const angle=Math.PI/6;
const sin=Math.sin(angle),cos=Math.cos(angle);

export function navigationTabLayout(textWidths,availableWidth,{minFont=9,maxFont=12,tabHeight=26,gap=3,paddingFactor=.75}={}){
 if(!Array.isArray(textWidths)||!textWidths.length||!Number.isFinite(availableWidth)||availableWidth<=0)return null;
 for(let fontSize=maxFont;fontSize>=minFont;fontSize=Math.round((fontSize-.25)*100)/100){
  const scale=fontSize/maxFont;
  const baseWidths=textWidths.map(width=>Math.ceil(Math.max(0,width)*scale+fontSize*paddingFactor));
  const slotWidths=baseWidths.map(width=>Math.ceil(width*cos+tabHeight*sin+gap));
  const totalWidth=slotWidths.reduce((sum,width)=>sum+width,0);
  if(totalWidth<=availableWidth){
   const height=Math.ceil(Math.max(...baseWidths.map(width=>width*sin+tabHeight*cos))+8);
   return {fontSize,tabHeight,baseWidths,slotWidths,totalWidth,height};
  }
 }
 return null;
}
