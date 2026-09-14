// Cookie consent controller: read/validate/persist consent and broadcast changes.
// Public API is intentionally small — see hasConsent()/getConsent()/onConsentChange().
import { cookieConsentConfig, type CookieCategoryId } from '../config/cookies';

export interface ConsentState {
  version: number;
  necessary: true;
  analytics: boolean;
  functional: boolean;
  marketing: boolean;
  timestamp: string;
}

export const COOKIE_CONSENT_CHANGE_EVENT = 'blackbox:cookie-consent-changed';
export const OPEN_COOKIE_PREFERENCES_EVENT = 'blackbox:open-cookie-preferences';

let currentConsent: ConsentState = getDefaultConsent();

function getDefaultConsent(): ConsentState {
  return {
    version: cookieConsentConfig.version,
    necessary: true,
    analytics: false,
    functional: false,
    marketing: false,
    timestamp: new Date().toISOString(),
  };
}

// Untrusted input: validate shape before ever trusting a stored value.
function isValidConsent(value: unknown): value is ConsentState {
  if (!value || typeof value !== 'object') return false;
  const v = value as Record<string, unknown>;
  return (
    typeof v.version === 'number' &&
    typeof v.analytics === 'boolean' &&
    typeof v.functional === 'boolean' &&
    typeof v.marketing === 'boolean'
  );
}

function readCookie(name: string): string | null {
  const escaped = name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1');
  const match = document.cookie.match(new RegExp('(?:^|; )' + escaped + '=([^;]*)'));
  return match ? decodeURIComponent(match[1]) : null;
}

function writeCookie(value: string): void {
  const maxAge = cookieConsentConfig.maxAgeDays * 24 * 60 * 60;
  const secure = location.protocol === 'https:' ? '; Secure' : '';
  document.cookie = `${cookieConsentConfig.cookieName}=${encodeURIComponent(value)}; path=/; max-age=${maxAge}; SameSite=Lax${secure}`;
}

function deleteCookie(): void {
  document.cookie = `${cookieConsentConfig.cookieName}=; path=/; max-age=0; SameSite=Lax`;
}

function parseStoredConsent(): ConsentState | null {
  const raw = readCookie(cookieConsentConfig.cookieName);
  if (!raw) return null;
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!isValidConsent(parsed)) return null;
    if (parsed.version !== cookieConsentConfig.version) return null;
    return { ...parsed, necessary: true };
  } catch {
    return null;
  }
}

function dispatchChange(consent: ConsentState): void {
  window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_CHANGE_EVENT, { detail: { ...consent } }));
}

export function getConsent(): ConsentState {
  return { ...currentConsent };
}

export function hasConsent(category: CookieCategoryId): boolean {
  if (category === 'necessary') return true;
  return !!currentConsent[category];
}

export function saveConsent(
  partial: Partial<Record<Exclude<CookieCategoryId, 'necessary'>, boolean>>,
): ConsentState {
  currentConsent = {
    version: cookieConsentConfig.version,
    necessary: true,
    analytics: partial.analytics ?? currentConsent.analytics,
    functional: partial.functional ?? currentConsent.functional,
    marketing: partial.marketing ?? currentConsent.marketing,
    timestamp: new Date().toISOString(),
  };
  writeCookie(JSON.stringify(currentConsent));
  dispatchChange(currentConsent);
  return getConsent();
}

// Dev helper: clears the consent cookie and resets in-memory state.
// Not exposed as a production UI button. To reset manually instead, delete
// the "bb_cookie_consent" cookie via DevTools > Application > Cookies.
export function resetCookieConsent(): void {
  deleteCookie();
  currentConsent = getDefaultConsent();
  dispatchChange(currentConsent);
}

export function onConsentChange(callback: (consent: ConsentState) => void): () => void {
  const handler = (event: Event) => callback((event as CustomEvent<ConsentState>).detail);
  window.addEventListener(COOKIE_CONSENT_CHANGE_EVENT, handler);
  return () => window.removeEventListener(COOKIE_CONSENT_CHANGE_EVENT, handler);
}

// Call once on page load. Restores a valid stored consent, or falls back to
// all-optional-off and flags whether the compact banner should be shown.
export function initConsent(): { consent: ConsentState; needsBanner: boolean } {
  if (!cookieConsentConfig.enabled) {
    currentConsent = getDefaultConsent();
    return { consent: getConsent(), needsBanner: false };
  }

  const stored = parseStoredConsent();
  if (stored) {
    currentConsent = stored;
    return { consent: getConsent(), needsBanner: false };
  }

  currentConsent = getDefaultConsent();
  return { consent: getConsent(), needsBanner: cookieConsentConfig.autoShow };
}
