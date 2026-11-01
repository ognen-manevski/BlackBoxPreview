import type { Localized, TranslationShape } from '../types';

export const englishBlogContent = {
  seo: {
    title: 'BlackBox Use Cases',
    description: 'Insights, case studies, and practical technology perspectives from BlackBox Solutions.',
  },
  label: 'Use Cases',
  heading: 'Technology at work in your industry.',
  copy: 'Explore how our digital displays, streaming platforms, and custom software help businesses communicate, automate everyday tasks, and serve their audiences.',
  industryHeading: 'Explore by industry',
} as const;

export type BlogContent = TranslationShape<typeof englishBlogContent>;

export const macedonianBlogContent = {
  seo: {
    title: 'BlackBox — Проекти и согледувања',
    description: 'Проекти, согледувања и практични технолошки перспективи од BlackBox Solutions.',
  },
  label: 'Примена',
  heading: 'Технологија што одговара на вашата дејност.',
  copy: 'Погледнете како нашите дигитални екрани, стриминг платформи и софтверски решенија им помагаат на бизнисите да ја подобрат комуникацијата, да ги автоматизираат секојдневните задачи и да понудат подобра услуга.',
  industryHeading: 'Истражете ги можностите за вашата дејност',
} satisfies BlogContent;

export const blogContent: Localized<BlogContent> = {
  en: englishBlogContent,
  mk: macedonianBlogContent,
};
