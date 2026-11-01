// Single source of truth for the cookie consent system.
// Change enabled/autoShow/version/duration/categories/registry here only.

export type CookieCategoryId = 'necessary' | 'analytics' | 'functional' | 'marketing';

export interface CookieRegistryEntry {
  /** Unique id, also used as the i18n key for purpose/duration text. */
  id: string;
  provider: string;
  category: CookieCategoryId;
  /** 'cookie' for real HTTP cookies, 'localStorage' for browser storage. */
  type: 'cookie' | 'localStorage';
}

export const cookieConsentConfig = {
  // Master switch for the whole consent system.
  enabled: true,

  // Whether the compact banner automatically appears for visitors without a
  // valid consent cookie. Set to false during local development to stop the
  // banner popping up on every reload — the footer "Cookie Preferences"
  // control still opens the panel manually regardless of this flag.
  autoShow: true,

  // Bump this when cookie purposes/services change materially. Visitors with
  // an older stored version are treated as having no consent yet.
  version: 1,

  cookieName: 'bb_cookie_consent',

  // Consent cookie lifetime.
  maxAgeDays: 180,

  categories: ['necessary', 'analytics', 'functional', 'marketing'] as CookieCategoryId[],
} as const;

// Real cookies/services known to this site today. Do not add placeholder or
// speculative entries — CookieTable.astro renders exactly this list.
export const cookieRegistry: CookieRegistryEntry[] = [
  {
    id: 'bb_cookie_consent',
    provider: 'BlackBox Solutions',
    category: 'necessary',
    type: 'cookie',
  },
];
