import type { Localized } from '../types';
export const englishBlogContent = {
  seo: { title: 'BlackBox Blog — Case Studies & Insights' },
  label: 'Blog', heading: 'Case studies and practical delivery insights',
  copy: 'This page will list the latest case studies and technical articles.',
  placeholder: 'TODO: replace with blog listing and pagination.',
} as const;
export type BlogContent = typeof englishBlogContent;
export const blogContent: Localized<BlogContent> = { en: englishBlogContent, mk: englishBlogContent };
