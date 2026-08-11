import type { Lang } from './types';

export const defaultLang: Lang = 'en';
export const languages: readonly Lang[] = ['en', 'mk'];

export function isLang(value: string | undefined): value is Lang {
  return languages.includes(value as Lang);
}
