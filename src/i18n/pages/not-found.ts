import type { Localized, TranslationShape } from '../types';

export const englishNotFoundContent = {
  seo: { title: 'Page Not Found | BlackBox Solutions', description: 'The page you are looking for could not be found.' },
  code: '404',
  imageAlt: 'Broken chain link with a warning sign and a magnifying glass',
  title: 'Page Not Found',
  copy: 'Sorry, we couldn’t find the page you’re looking for. It may have moved or the URL may be incorrect.',
  cta: 'Back to Home',
} as const;

export type NotFoundContent = TranslationShape<typeof englishNotFoundContent>;

// TODO: review Macedonian copy
export const macedonianNotFoundContent = {
  seo: { title: 'Страницата не е пронајдена | BlackBox Solutions', description: 'Страницата што ја барате не може да се пронајде.' },
  code: '404',
  imageAlt: 'Скршена алка од ланец со знак за предупредување и лупа',
  title: 'Страницата не е пронајдена',
  copy: 'Извинете, не можевме да ја пронајдеме страницата што ја барате. Можно е да е преместена или URL-адресата да е погрешна.',
  cta: 'Назад кон почетна',
} satisfies NotFoundContent;

export const notFoundContent: Localized<NotFoundContent> = { en: englishNotFoundContent, mk: macedonianNotFoundContent };
