export const firebaseAuthRequiredConfigKeys=Object.freeze(['VITE_FIREBASE_API_KEY','VITE_FIREBASE_AUTH_DOMAIN','VITE_FIREBASE_PROJECT_ID','VITE_FIREBASE_APP_ID']);
export function hasFirebaseAuthConfig(values={}){return firebaseAuthRequiredConfigKeys.every(key=>typeof values[key]==='string'&&values[key].trim().length>0)}
