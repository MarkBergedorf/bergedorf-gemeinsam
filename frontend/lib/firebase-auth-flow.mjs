export function isDailyEmailLinkQuotaError(error){
 return ['auth/quota-exceeded','QUOTA_EXCEEDED'].includes(String(error?.code||error?.message||''));
}

export const dailyEmailLinkQuotaMessage='Das Tageskontingent für passwortlose Anmeldelinks ist ausgeschöpft. Sie können stattdessen die Registrierung oder Anmeldung mit E-Mail-Adresse und Passwort verwenden. Die passwortlose Anmeldung steht wieder zur Verfügung, sobald Firebase das Tageskontingent erneuert hat.';
