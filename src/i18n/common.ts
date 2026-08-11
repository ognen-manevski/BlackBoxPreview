import type { Localized } from './types';

export interface CommonTranslations {
  seo: { defaultDescription: string };
  navigation: {
    ariaLabel: string;
    homeAriaLabel: string;
    services: string;
    news: string;
    caseStudies: string;
    about: string;
    contact: string;
    bookDemo: string;
    openMenu: string;
    closeMenu: string;
    primaryAriaLabel: string;
    controlsAriaLabel: string;
    serviceLinks: {
      digitalSignage: string;
      shelfLabels: string;
      videoStreaming: string;
      softwareDevelopment: string;
    };
  };
  language: {
    ariaLabel: string;
  };
  theme: { toggleAriaLabel: string };
  forms: {
    emailLabel: string;
    emailPlaceholder: string;
    subscribe: string;
    privacyPrefix: string;
    privacyPolicy: string;
  };
  footer: {
    description: string;
    contact: string;
    phone: string;
    email: string;
    office: string;
    officeAddress: string;
    mapTitle: string;
    navigationAriaLabel: string;
    legal: string;
    legalAriaLabel: string;
    terms: string;
    customerServicePolicy: string;
    privacyPolicy: string;
    services: string;
    company: string;
    about: string;
    contactLink: string;
    faq: string;
    bookDemo: string;
    homeAriaLabel: string;
    logoAlt: string;
    socialMedia: string;
  };
}

export const commonTranslations: Localized<CommonTranslations> = {
  en: {
    seo: { defaultDescription: 'BlackBox Solutions builds custom software, digital signage platforms, electronic shelf labels, and live video streaming tools for modern businesses.' },
    navigation: {
      ariaLabel: 'Main navigation',
      homeAriaLabel: 'BlackBox Solutions — home',
      services: 'Services',
      news: 'News',
      caseStudies: 'Case Studies',
      about: 'About us',
      contact: 'Contact',
      bookDemo: 'Book a Free Demo',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      primaryAriaLabel: 'Primary navigation',
      controlsAriaLabel: 'Language and theme controls',
      serviceLinks: {
        digitalSignage: 'NeoSlide – Digital Signage',
        shelfLabels: 'Electronic shelf labels',
        videoStreaming: 'Video streaming',
        softwareDevelopment: 'Software development',
      },
    },
    language: { ariaLabel: 'Language' },
    theme: { toggleAriaLabel: 'Toggle theme' },
    forms: {
      emailLabel: 'Email address',
      emailPlaceholder: 'Enter your email address...',
      subscribe: 'Subscribe',
      privacyPrefix: 'By sending this e-mail you agree to the',
      privacyPolicy: 'Privacy Policy',
    },
    footer: {
      description: 'Digital products, signage systems, and reliable software engineering for teams that need technology to work cleanly.',
      contact: 'Contact', phone: 'Phone', email: 'Email', office: 'Office',
      officeAddress: 'St. Klenoec 61/10, 1000 Skopje, N. Macedonia',
      mapTitle: 'BlackBox Solutions office location', navigationAriaLabel: 'Footer navigation',
      legal: 'Legal', legalAriaLabel: 'Legal links', terms: 'Terms and Conditions',
      customerServicePolicy: 'Customer Service Policy', privacyPolicy: 'Privacy Policy',
      services: 'Services', company: 'Company', about: 'About Us', contactLink: 'Contact', faq: 'FAQ',
      bookDemo: 'Book a Demo', homeAriaLabel: 'BlackBox Solutions home', logoAlt: 'BlackBox Solutions logo', socialMedia: 'Social Media',
    },
  },
  mk: {
    // TODO: translate the default SEO description with approved Macedonian copy.
    seo: { defaultDescription: 'BlackBox Solutions builds custom software, digital signage platforms, electronic shelf labels, and live video streaming tools for modern businesses.' },
    navigation: {
      ariaLabel: 'Главна навигација',
      homeAriaLabel: 'BlackBox Solutions — почетна',
      services: 'Услуги',
      news: 'Новости',
      caseStudies: 'Студии на случај',
      about: 'За нас',
      contact: 'Контакт',
      bookDemo: 'Закажете бесплатно демо',
      openMenu: 'Отвори мени',
      closeMenu: 'Затвори мени',
      primaryAriaLabel: 'Главна навигација',
      controlsAriaLabel: 'Контроли за јазик и тема',
      // TODO: translate shared service names with approved Macedonian copy.
      serviceLinks: {
        digitalSignage: 'NeoSlide – Digital Signage', shelfLabels: 'Electronic shelf labels',
        videoStreaming: 'Video streaming', softwareDevelopment: 'Software development',
      },
    },
    language: { ariaLabel: 'Јазик' },
    theme: { toggleAriaLabel: 'Промени тема' },
    // TODO: translate form and footer copy with approved Macedonian copy.
    forms: {
      emailLabel: 'Email address', emailPlaceholder: 'Enter your email address...', subscribe: 'Subscribe',
      privacyPrefix: 'By sending this e-mail you agree to the', privacyPolicy: 'Privacy Policy',
    },
    footer: {
      description: 'Digital products, signage systems, and reliable software engineering for teams that need technology to work cleanly.',
      contact: 'Contact', phone: 'Phone', email: 'Email', office: 'Office',
      officeAddress: 'St. Klenoec 61/10, 1000 Skopje, N. Macedonia',
      mapTitle: 'BlackBox Solutions office location', navigationAriaLabel: 'Footer navigation',
      legal: 'Legal', legalAriaLabel: 'Legal links', terms: 'Terms and Conditions',
      customerServicePolicy: 'Customer Service Policy', privacyPolicy: 'Privacy Policy',
      services: 'Services', company: 'Company', about: 'About Us', contactLink: 'Contact', faq: 'FAQ',
      bookDemo: 'Book a Demo', homeAriaLabel: 'BlackBox Solutions home', logoAlt: 'BlackBox Solutions logo', socialMedia: 'Social Media',
    },
  },
};
