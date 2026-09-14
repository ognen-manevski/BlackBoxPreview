import type { Lang } from '../types';

export const legalTranslations = {
  en: {
    eyebrow: 'LEGAL',
    lastUpdated: 'Last updated',
    updatedDate: '14 August 2026',
    privacy: { title: 'Privacy Policy', description: 'How BlackBox Solutions collects, uses, stores and protects personal data.' },
    cookies: { title: 'Cookie Policy', description: 'How BlackBox Solutions uses cookies and similar technologies.', tableHeading: '4. Cookies currently used on this website', manage: 'Manage Preferences' },
    terms: { title: 'Terms of Use', description: 'Terms governing access to and use of the BlackBox Solutions website.' },
    formNotice: 'We will use your information to respond to your enquiry. See our',
  },
  mk: {
    eyebrow: 'ПРАВНИ ИНФОРМАЦИИ',
    lastUpdated: 'Последно ажурирано',
    updatedDate: '14 август 2026',
    privacy: { title: 'Политика за приватност', description: 'Како BlackBox Solutions ги собира, користи, чува и заштитува личните податоци.' },
    cookies: { title: 'Политика за колачиња', description: 'Како BlackBox Solutions користи колачиња и слични технологии.', tableHeading: '4. Колачиња што моментално се користат на оваа веб-страница', manage: 'Управувај со поставките' },
    terms: { title: 'Услови за користење', description: 'Услови што го уредуваат пристапот и користењето на веб-страницата на BlackBox Solutions.' },
    formNotice: 'Ќе ги користиме вашите податоци за да одговориме на вашето барање. Видете ја нашата',
  },
} as const satisfies Record<Lang, object>;

