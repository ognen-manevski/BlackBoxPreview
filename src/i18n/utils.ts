import { defaultLang, isLang } from './config';
import type { Lang, Localized } from './types';

export function getLocaleFromUrl(url: URL): Lang {
  const [, locale] = url.pathname.split('/');
  return isLang(locale) ? locale : defaultLang;
}

export function getTranslations<T>(content: Localized<T>, lang: Lang): T {
  return content[lang] ?? content[defaultLang];
}

export function getLocalizedPath(pathname: string, lang: Lang): string {
  const url = new URL(pathname, 'https://i18n.local');
  const segments = url.pathname.split('/').filter(Boolean);

  if (segments.length && isLang(segments[0])) segments.shift();

  const route = segments.length ? `/${segments.join('/')}/` : '/';
  const localizedPath = lang === defaultLang ? route : `/${lang}${route}`;

  return `${localizedPath}${url.search}${url.hash}`;
}

export function getLanguageSwitchUrls(pathname: string): Record<Lang, string> {
  return {
    en: getLocalizedPath(pathname, 'en'),
    mk: getLocalizedPath(pathname, 'mk'),
  };
}
