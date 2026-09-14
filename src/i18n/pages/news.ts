import type { Localized, TranslationShape } from '../types';

export const englishNewsContent = {
  seo: {
    title: 'BlackBox News — Company & Product Updates',
    description: 'The latest company, product, and technology updates from BlackBox Solutions.',
  },
  label: 'News',
  heading: 'Latest from BlackBox.',
  copy: 'Company announcements, product releases, partnerships, and other updates from our team.',
} as const;

export type NewsContent = TranslationShape<typeof englishNewsContent>;

export const macedonianNewsContent = {
  seo: {
    title: 'BlackBox новости — Компанија и производи',
    description: 'Најнови компаниски, производни и технолошки новости од BlackBox Solutions.',
  },
  label: 'Новости',
  heading: 'Најново од BlackBox.',
  copy: 'Компаниски соопштенија, нови производи, партнерства и други новости од нашиот тим.',
} satisfies NewsContent;

export const newsContent: Localized<NewsContent> = {
  en: englishNewsContent,
  mk: macedonianNewsContent,
};
