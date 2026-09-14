export type Lang = 'en' | 'mk';

export type Localized<T> = Record<Lang, T>;

export type TranslationShape<T> = T extends string
  ? string
  : T extends number | boolean | null | undefined
    ? T
    : { readonly [K in keyof T]: TranslationShape<T[K]> };
