# Cookiebot

The shared page layout loads Cookiebot's auto-blocking script before other head content. The custom consent banner is disabled. The footer and cookie policy controls use `Cookiebot.renew()` to reopen the consent dialog, and the cookie policy embeds Cookiebot's live Cookie Declaration.

## Domain group IDs

GitHub Pages preview uses the current preview ID configured in `src/config/cookiebot.ts`. Local development and builds omit Cookiebot when no ID is configured; this also omits the live Cookie Declaration from the cookie policy page. Local development does not load Cookiebot by default because the current account rejects `localhost`; set `PUBLIC_COOKIEBOT_CBID` locally after authorizing that hostname to test the CMP there.

Production deployments should set `PUBLIC_COOKIEBOT_CBID` to the client's Cookiebot domain group ID and `PUBLIC_COOKIEBOT_REQUIRED=true` in the build environment. The required flag makes a production build fail if the ID is missing, while allowing local build verification without Cookiebot.

The group ID is public because it appears in the browser script URL; it is not a secret. Rebuild and redeploy after changing it.

## Before production

1. Replace the preview ID with the client's domain group ID through `PUBLIC_COOKIEBOT_CBID` and set `PUBLIC_COOKIEBOT_REQUIRED=true` for production builds.
2. Register every production hostname served by the site in the client's Cookiebot domain group.
3. Add `localhost` to the preview domain group before testing locally; Cookiebot currently rejects `LOCALHOST` for this group. Without local CMP testing, use the registered GitHub Pages preview hostname.
4. Run and review Cookiebot's scan after third-party services are finalized. Verify the detected cookies, purposes, consent categories, and auto-blocking behavior, including form verification and any analytics or embedded services.
5. Test first-visit consent, reject/accept choices, the footer preferences button, and the live Cookie Declaration in both languages before launch.
6. Confirm the consent dialog is configured in English and Macedonian. The script currently leaves Cookiebot's language detection at its default.
7. The privacy policy says Google Analytics is used, but no Google Analytics or Tag Manager script is present in this repository. Confirm whether analytics is injected elsewhere; if not, revise the policy before launch.
