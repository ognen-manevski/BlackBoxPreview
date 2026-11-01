import type { Localized, TranslationShape } from '../types';

const englishContactPageContent = {
  seo: {
    title: 'Contact BlackBox Solutions',
    description: 'Get in touch with BlackBox Solutions to discuss your project or ask a question about our technology solutions.',
  },
  hero: {
    eyebrow: 'GET IN TOUCH',
    title: 'Let’s talk.',
    copy: 'Have a project in mind or a question about our solutions? Tell us what you need, and our team will help you find the right next step.',
  },
  contact: {
    formTitle: 'Send us a message',
  },
  newsletter: {
    eyebrow: 'STAY CONNECTED',
    title: 'Keep up with BlackBox.',
    copy: 'Get product updates, practical insights and the latest news from BlackBox Solutions, delivered to your inbox.',
  },
};

export type ContactPageContent = TranslationShape<typeof englishContactPageContent>;

export const contactPageContent: Localized<ContactPageContent> = {
  en: englishContactPageContent,
  mk: {
    seo: {
      title: 'Контакт | BlackBox Solutions',
      description: 'Контактирајте го BlackBox Solutions за да разговараме за вашиот проект или за нашите технолошки решенија.',
    },
    hero: {
      eyebrow: 'СТАПЕТЕ ВО КОНТАКТ',
      title: 'Да разговараме.',
      copy: 'Имате проект на ум или прашање за нашите решенија? Кажете ни што ви е потребно, а нашиот тим ќе ви помогне да го најдете вистинскиот следен чекор.',
    },
    contact: {
      formTitle: 'Испратете ни порака',
    },
    newsletter: {
      eyebrow: 'ОСТАНЕТЕ ПОВРЗАНИ',
      title: 'Бидете во тек со BlackBox.',
      copy: 'Добијте новости за производите, практични совети и најнови вести од BlackBox Solutions, директно во вашето сандаче.',
    },
  },
};
