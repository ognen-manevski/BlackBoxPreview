import type { Lang } from '../types';

export const legalTranslations = {
  en: {
    eyebrow: 'LEGAL',
    lastUpdated: 'Last updated',
    privacy: { title: 'Privacy Policy', subtitle: 'How Black Box Solutions collects, uses and protects your personal data.', updatedDate: '29 October 2026', description: 'How BlackBox Solutions collects, uses, stores and protects personal data.' },
    cookies: { title: 'Cookie Policy', subtitle: 'This Cookie Policy explains how BlackBox Solutions uses cookies and similar technologies on this website.', updatedDate: '29 October 2026', description: 'How BlackBox Solutions uses cookies and similar technologies.', tableHeading: '3. Cookies currently used on this website', manage: 'Manage Preferences' },
    terms: { title: 'Terms of Use', subtitle: 'These Terms of Use govern access to and use of the BlackBox Solutions website.', updatedDate: '14 August 2026', description: 'Terms governing access to and use of the BlackBox Solutions website.' },
    formNotice: 'We will use your information to respond to your enquiry. See our',
  },
  mk: {
    eyebrow: 'ПРАВНИ ИНФОРМАЦИИ',
    lastUpdated: 'Последно ажурирано',
    privacy: { title: 'Политика за приватност', subtitle: 'Како Black Box Solutions ги собира, користи и заштитува вашите лични податоци.', updatedDate: '29 октомври 2026', description: 'Како BlackBox Solutions ги собира, користи, чува и заштитува личните податоци.' },
    cookies: { title: 'Политика за колачиња', subtitle: 'Оваа Политика за колачиња објаснува како BlackBox Solutions користи колачиња и слични технологии на оваа веб-страница.', updatedDate: '29 октомври 2026', description: 'Како BlackBox Solutions користи колачиња и слични технологии.', tableHeading: '3. Колачиња што моментално се користат на оваа веб-страница', manage: 'Управувај со поставките' },
    terms: { title: 'Услови за користење', subtitle: 'Овие Услови за користење го уредуваат пристапот до и користењето на веб-страницата на BlackBox Solutions.', updatedDate: '14 август 2026', description: 'Услови што го уредуваат пристапот и користењето на веб-страницата на BlackBox Solutions.' },
    formNotice: 'Ќе ги користиме вашите податоци за да одговориме на вашето барање. Видете ја нашата',
  },
} as const satisfies Record<Lang, object>;
