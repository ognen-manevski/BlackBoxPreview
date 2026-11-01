const formsEndpoint = import.meta.env.PUBLIC_FORMS_ENDPOINT?.trim() ?? '';
const turnstileSiteKey = import.meta.env.PUBLIC_TURNSTILE_SITE_KEY?.trim() ?? '';

export const formsTurnstileEnabled = Boolean(formsEndpoint && turnstileSiteKey);
export const formsAction = formsTurnstileEnabled ? formsEndpoint : '#';
export const publicTurnstileSiteKey = formsTurnstileEnabled ? turnstileSiteKey : '';
export const formsVerificationPreviewEnabled = false;
