# Firebase Authentication setup and release gate

This integration is intentionally disabled until the Firebase Web App settings are supplied at build time. No project, account, provider agreement, payment method, or user record is created by this repository change. Do not add a service-account key or other privileged credential to the site.

## Required Firebase Console setup

Before activation, the operator must create or select a Firebase project under the free Spark plan and review/accept the applicable Google/Firebase terms personally. Do not link billing or enable Firestore, Cloud Functions, Storage, or any paid product. Enable only Authentication with the Email/Password provider. Set the password policy to a minimum of eight characters, enable email-enumeration protection, and configure the permitted sign-in region/provider controls offered by the project. Review the provider's then-current quotas and privacy/DPA/subprocessor terms.

Add the exact hosting host `markbergedorf.github.io` to Firebase Authentication's authorized domains. Firebase email action links return to the GitHub Pages app at `https://markbergedorf.github.io/bergedorf-gemeinsam/#anmelden`; account-email verification returns to `#konto`. Test that verification, password reset, and verify-before-change-email links return to this project and preserve the `bergedorf-gemeinsam` base path.

Copy only the four Firebase Web App settings into a local ignored `.env.production` file based on `.env.example`, or provide them to the static build environment. They are public browser configuration, not privileged credentials; restrict the API key to the applicable Firebase Authentication/Identity Toolkit API and the production host where Google Cloud permits. Rebuild the static output with `pnpm run build` and inspect the generated bundle before publication. No actual values are included in this branch.

## Release gate

Do not publish a configured build or enable real registration until an operator has reviewed the registration/privacy wording, confirmed the legal basis and controller obligations, executed/accepted required provider data-protection terms, and completed real test-account checks for verification, sign-in, unverified-user behavior, password reset, sign-out, email change, password change, account deletion, and the browser-session lifetime. Verify the public privacy page against the actual selected project and current Google terms. The current static branch cannot run those external tests because it intentionally has no Firebase project configuration.

User accounts provide identity only. They grant no author, moderator, or administrator permissions and do not activate submissions or comments. No application database is configured. Deleting a Firebase Auth user deletes the account record through Firebase; provider logging and backup retention remain governed by Google's published terms and retention behavior. There is no custom server-side endpoint in this GitHub Pages app to revoke all active sessions administratively. Keep any later participation backend separately authorized and protected; never trust a browser-supplied role.

## Later website-domain change

Keep the same Firebase project and do not delete/recreate it. Add the new website host to authorized domains, update the production Firebase web configuration as necessary, change email action continue URLs and templates, and verify any custom sender domain through DNS if a custom sender is desired. Firebase UIDs remain tied to the same project, so external records keyed by UID can remain linked; a domain change by itself does not require users to register again. Test all action links on the new host before switching traffic.
