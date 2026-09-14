import type { Localized, TranslationShape } from '../types';

export const englishBlogContent = {
  seo: {
    title: 'BlackBox Blog — Case Studies & Insights',
    description: 'Insights, case studies, and practical technology perspectives from BlackBox Solutions.',
  },
  label: 'Blog',
  heading: 'Insights from BlackBox.',
  copy: 'Practical perspectives on digital products, technology, and the work behind them.',
} as const;

export type BlogContent = TranslationShape<typeof englishBlogContent>;

export const macedonianBlogContent = {
  seo: {
    title: 'BlackBox — Проекти и согледувања',
    description: 'Проекти, согледувања и практични технолошки перспективи од BlackBox Solutions.',
  },
  label: 'Проекти',
  heading: 'Согледувања од BlackBox.',
  copy: 'Практични перспективи за дигитални производи, технологија и работата зад нив.',
} satisfies BlogContent;

export const blogContent: Localized<BlogContent> = {
  en: englishBlogContent,
  mk: macedonianBlogContent,
};
