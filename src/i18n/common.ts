import type { Localized } from './types';

export interface CommonTranslations {
  seo: { defaultDescription: string };
  navigation: {
    ariaLabel: string; homeAriaLabel: string; services: string; news: string;
    caseStudies: string; about: string; contact: string; bookDemo: string;
    openMenu: string; closeMenu: string; primaryAriaLabel: string; controlsAriaLabel: string;
    serviceLinks: { digitalSignage: string; shelfLabels: string; videoStreaming: string; softwareDevelopment: string };
  };
  language: { ariaLabel: string };
  theme: { toggleAriaLabel: string };
  forms: { emailLabel: string; emailPlaceholder: string; subscribe: string; privacyPrefix: string; privacyPolicy: string };
  share: { label: string; nativeShare: string };
  footer: {
    description: string; contact: string; phone: string; email: string; office: string;
    officeAddress: string; mapTitle: string; navigationAriaLabel: string; legal: string;
    legalAriaLabel: string; terms: string; cookiePolicy: string; privacyPolicy: string;
    services: string; company: string; about: string; contactLink: string; faq: string;
    bookDemo: string; newsletter: string; demoNote: string; homeAriaLabel: string; logoAlt: string; socialMedia: string; openInMaps: string;
    cookiePreferences: string; allRightsReserved: string;
  };
  cookies: {
    bannerAriaLabel: string; bannerTitle: string; bannerDescription: string; privacyPolicy: string; cookiePolicy: string;
    rejectOptional: string; managePreferences: string; acceptAll: string; savePreferences: string;
    preferencesTitle: string; closePreferences: string; aboutLabel: string; aboutCopy: string; aboutFooterHint: string; alwaysActive: string; on: string; off: string; detailsLabel: string;
    categories: Record<'necessary' | 'analytics' | 'functional' | 'marketing', { label: string; description: string }>;
    table: { caption: string; name: string; provider: string; purpose: string; category: string; duration: string };
    registry: Record<string, { purpose: string; duration: string }>;
  };
}

export const commonTranslations: Localized<CommonTranslations> = {
  en: {
    seo: { defaultDescription: 'BlackBox Solutions builds custom software, digital signage platforms, electronic shelf labels, and live video streaming tools for modern businesses.' },
    navigation: {
      ariaLabel: 'Main navigation', homeAriaLabel: 'BlackBox Solutions — home', services: 'Services', news: 'News',
      caseStudies: 'Case Studies', about: 'About us', contact: 'Contact', bookDemo: 'Book a Free Demo',
      openMenu: 'Open menu', closeMenu: 'Close menu', primaryAriaLabel: 'Primary navigation', controlsAriaLabel: 'Language and theme controls',
      serviceLinks: { digitalSignage: 'NeoSlide – Digital Signage', shelfLabels: "Electronic Shelf Labels", videoStreaming: "Video Streaming", softwareDevelopment: "Software Development" },
    },
    language: { ariaLabel: 'Language' }, theme: { toggleAriaLabel: 'Toggle theme' },
    forms: { emailLabel: 'Email address', emailPlaceholder: 'Enter your email address...', subscribe: 'Subscribe', privacyPrefix: 'By subscribing you agree to the', privacyPolicy: 'Privacy Policy' },
    share: { label: 'Share:', nativeShare: 'Share' },
    footer: {
      description: "Practical digital technology built for real-world business operations.",
      contact: 'Contact', phone: 'Phone', email: 'Email', office: 'Office', officeAddress: 'St. Klenoec 61/10, 1000 Skopje, N. Macedonia',
      mapTitle: 'BlackBox Solutions office location', navigationAriaLabel: 'Footer navigation', legal: 'Legal', legalAriaLabel: 'Legal links',
      terms: 'Terms of Use', cookiePolicy: 'Cookie Policy', privacyPolicy: 'Privacy Policy', services: 'Services',
      company: 'Company', about: 'About Us', contactLink: 'Contact', faq: 'FAQ', bookDemo: 'Book a Demo', newsletter: 'Subscribe to our newsletter', demoNote: 'Easy application, free of charge',
      homeAriaLabel: 'BlackBox Solutions home', logoAlt: 'BlackBox Solutions logo', socialMedia: 'Social Media', openInMaps: 'Open in Maps',
      cookiePreferences: 'Cookie Preferences', allRightsReserved: 'All rights reserved.',
    },
    cookies: {
      bannerAriaLabel: 'Cookie consent', bannerTitle: 'Cookies',
      bannerDescription: 'We use necessary cookies to operate this website and, with your permission, optional cookies to improve functionality and understand how the website is used.',
      privacyPolicy: 'Privacy Policy', cookiePolicy: 'Cookie Policy',
      rejectOptional: 'Reject Optional', managePreferences: 'Manage Preferences', acceptAll: 'Accept All', savePreferences: 'Save Preferences',
      preferencesTitle: 'Cookie Preferences', closePreferences: 'Close cookie preferences',
      aboutLabel: 'About Cookies',
      aboutCopy: 'Cookies and similar technologies are small pieces of information stored on or accessed from your device. BlackBox Solutions uses necessary technologies required for this website to function. Optional technologies are used only according to your preferences, for purposes such as analytics, optional functionality, or marketing where applicable.',
      aboutFooterHint: 'You can change these preferences at any time using the "Cookie Preferences" control in the website footer.',
      alwaysActive: 'Always active', on: 'ON', off: 'OFF', detailsLabel: 'Cookie Details',
      categories: {
        necessary: { label: 'Necessary', description: 'Required for essential website functionality and storing your cookie preferences.' },
        analytics: { label: 'Analytics', description: 'Helps us understand how visitors use the website.' },
        functional: { label: 'Functional', description: 'Enables optional website functionality, such as remembering your display preferences.' },
        marketing: { label: 'Marketing', description: 'Used for advertising and campaign measurement where applicable.' },
      },
      table: { caption: 'Cookies and services used on this website', name: 'Cookie / Service', provider: 'Provider', purpose: 'Purpose', category: 'Category', duration: 'Duration' },
      registry: {
        bb_cookie_consent: { purpose: "Stores the visitor's cookie preferences.", duration: '6 months' },
        'bb-theme': { purpose: 'Remembers your light/dark theme preference.', duration: 'Until cleared' },
      },
    },
  },
  mk: {
    seo: { defaultDescription: "BlackBox Solutions развива софтвер по мерка, платформи за дигитални екрани, електронски етикети и видео стриминг за современи компании." },
    navigation: {
      ariaLabel: 'Главна навигација', homeAriaLabel: 'BlackBox Solutions — почетна', services: 'Услуги', news: 'Новости',
      caseStudies: "Проекти", about: 'За нас', contact: 'Контакт', bookDemo: "ПОБАРАЈТЕ ДЕМО",
      openMenu: 'Отвори мени', closeMenu: 'Затвори мени', primaryAriaLabel: 'Главна навигација', controlsAriaLabel: 'Контроли за јазик и тема',
      serviceLinks: { digitalSignage: "NeoSlide – Екрански системи", shelfLabels: "Електронски етикети", videoStreaming: "Видео стриминг", softwareDevelopment: "Развој на софтвер" },
    },
    language: { ariaLabel: 'Јазик' }, theme: { toggleAriaLabel: 'Промени тема' },
    forms: { emailLabel: 'Е-адреса', emailPlaceholder: 'Внесете ја вашата е-адреса...', subscribe: "ПРИЈАВИ СЕ", privacyPrefix: "Со пријавувањето се согласувате со", privacyPolicy: 'Политиката за приватност' },
    share: { label: 'Сподели:', nativeShare: 'Сподели' },
    footer: {
      description: "Практична дигитална технологија создадена за реалните потреби на бизнисот.",
      contact: 'Контакт', phone: 'Телефон', email: 'Е-пошта', office: 'Канцеларија', officeAddress: 'ул. Кленоец 61/10, 1000 Скопје, С. Македонија',
      mapTitle: 'Локација на канцеларијата на BlackBox Solutions', navigationAriaLabel: 'Навигација во подножјето', legal: "ПРАВНИ ИНФОРМАЦИИ", legalAriaLabel: 'Правни линкови',
      terms: 'Услови за користење', cookiePolicy: 'Политика за колачиња', privacyPolicy: 'Политика за приватност', services: 'Услуги',
      company: 'Компанија', about: 'За нас', contactLink: 'Контакт', faq: "Чести прашања", bookDemo: "ПОБАРАЈТЕ ДЕМО", newsletter: "Пријави се за новости од BlackBox", demoNote: "Бесплатно, без обврска.",
      homeAriaLabel: 'Почетна страница на BlackBox Solutions', logoAlt: 'Лого на BlackBox Solutions', socialMedia: 'Социјални мрежи', openInMaps: "Отвори на мапа",
      cookiePreferences: "ПОСТАВКИ ЗА КОЛАЧИЊА", allRightsReserved: 'Сите права се задржани.',
    },
    cookies: {
      bannerAriaLabel: 'Согласност за колачиња', bannerTitle: 'Колачиња',
      bannerDescription: 'Користиме неопходни колачиња за работа на веб-страницата и, со ваша дозвола, опционални колачиња за подобрување на функционалноста и разбирање како се користи страницата.',
      privacyPolicy: 'Политика за приватност', cookiePolicy: 'Политика за колачиња',
      rejectOptional: 'Одбиј опционални', managePreferences: 'Управувај со поставки', acceptAll: 'Прифати ги сите', savePreferences: 'Зачувај поставки',
      preferencesTitle: 'Поставки за колачиња', closePreferences: 'Затвори ги поставките за колачиња',
      aboutLabel: 'За колачињата',
      aboutCopy: 'Колачињата и сличните технологии се мали делови информации складирани на или преземени од вашиот уред. BlackBox Solutions користи неопходни технологии потребни за функционирање на страницава. Опционалните технологии се користат само според вашите преференции, за цели како аналитика, опционална функционалност или маркетинг, каде што е применливо.',
      aboutFooterHint: 'Овие поставки можете да ги промените во секое време преку контролата "Поставки за колачиња" во подножјето на страницата.',
      alwaysActive: 'Секогаш активно', on: 'ВКЛУЧЕНО', off: 'ИСКЛУЧЕНО', detailsLabel: 'Детали за колачиња',
      categories: {
        necessary: { label: 'Неопходни', description: 'Потребни за основната функционалност на страницата и за складирање на вашите поставки за колачиња.' },
        analytics: { label: 'Аналитика', description: 'Ни помагаат да разбереме како посетителите ја користат страницата.' },
        functional: { label: 'Функционални', description: 'Овозможуваат опционална функционалност, како на пример паметење на вашите преференции за приказ.' },
        marketing: { label: 'Маркетинг', description: 'Се користат за рекламирање и мерење на кампањи, каде што е применливо.' },
      },
      table: { caption: 'Колачиња и услуги користени на страницава', name: 'Колаче / услуга', provider: 'Провајдер', purpose: 'Цел', category: 'Категорија', duration: 'Траење' },
      registry: {
        bb_cookie_consent: { purpose: 'Ги складира преференциите на посетителот за колачиња.', duration: '6 месеци' },
        'bb-theme': { purpose: 'Ја памети вашата преференца за светла/темна тема.', duration: 'До бришење' },
      },
    },
  },
};
