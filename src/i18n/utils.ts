import { defaultLang, isLang } from './config';
import type { Lang, Localized } from './types';

function getPathWithoutBase(pathname: string): string {
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');

  if (!basePath || basePath === '/') return pathname;
  if (pathname === basePath) return '/';
  if (pathname.startsWith(`${basePath}/`)) return pathname.slice(basePath.length) || '/';

  return pathname;
}

export function getLocaleFromUrl(url: URL): Lang {
  const [, locale] = getPathWithoutBase(url.pathname).split('/');
  return isLang(locale) ? locale : defaultLang;
}

export function getTranslations<T>(content: Localized<T>, lang: Lang): T {
  return content[lang] ?? content[defaultLang];
}

export function getLocalizedPath(pathname: string, lang: Lang): string {
  const url = new URL(pathname, 'https://i18n.local');
  const pathWithoutBase = getPathWithoutBase(url.pathname);
  const segments = pathWithoutBase.split('/').filter(Boolean);

  if (segments.length && isLang(segments[0])) segments.shift();

  const route = segments.length ? `/${segments.join('/')}/` : '/';
  const localizedPath = lang === defaultLang ? route : `/${lang}${route}`;
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');

  return `${basePath}${localizedPath}${url.search}${url.hash}`;
}

export function getLanguageSwitchUrls(pathname: string): Record<Lang, string> {
  return {
    en: getLocalizedPath(pathname, 'en'),
    mk: getLocalizedPath(pathname, 'mk'),
  };
}
