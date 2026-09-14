import type { Localized, TranslationShape } from './types';

export const englishTechnologyGridContent = {
  ariaLabel: 'Technology capabilities',
  categories: [
    { title: 'Frontend', description: 'Modern interfaces built for speed, accessibility, and exceptional user experiences.', alts: ['React logo', 'Next.js logo', 'TypeScript logo', 'Vue.js logo'] },
    { title: 'Backend', description: 'Reliable server-side solutions designed for security, performance, and long-term scalability.', alts: ['.NET logo', 'Node.js logo', 'Java logo'] },
    { title: 'Mobile', description: 'Native mobile applications that deliver seamless experiences across iOS and Android.', alts: ['Kotlin logo', 'Swift logo'] },
    { title: 'Cloud & Infrastructure', description: 'Scalable cloud environments and deployment pipelines built for reliability and growth.', alts: ['AWS logo', 'Docker logo', 'Firebase logo', 'Kubernetes logo', 'GNU Bash logo'] },
    { title: 'Databases', description: 'Efficient data platforms that power secure, scalable, and high-performance applications.', alts: ['MySQL logo', 'PostgreSQL logo', 'MongoDB logo', 'Redis logo'] },
    { title: 'AI & Automation', description: 'Intelligent tools and automation frameworks that streamline workflows and accelerate innovation.', alts: ['OpenAI logo', 'Anthropic logo', 'LangChain logo', 'n8n logo'] },
  ],
} as const;

export type TechnologyGridContent = TranslationShape<typeof englishTechnologyGridContent>;

export const macedonianTechnologyGridContent = {
  ariaLabel: 'Технолошки можности',
  categories: [
    { title: 'Frontend', description: "Брзи и пристапни интерфејси што се едноставни за користење.", alts: ['Лого на React', 'Лого на Next.js', 'Лого на TypeScript', 'Лого на Vue.js'] },
    { title: 'Backend', description: "Безбедни и сигурни серверски системи што работат брзо и можат да се прошируваат.", alts: ['Лого на .NET', 'Лого на Node.js', 'Лого на Java'] },
    { title: 'Мобилни апликации', description: "Апликации развиени посебно за iOS и Android, за лесно и непречено користење.", alts: ['Лого на Kotlin', 'Лого на Swift'] },
    { title: 'Cloud и инфраструктура', description: "Cloud инфраструктура и процеси за пуштање во употреба што овозможуваат сигурна работа и идно проширување.", alts: ['Лого на AWS', 'Лого на Docker', 'Лого на Firebase', 'Лого на Kubernetes', 'Лого на GNU Bash'] },
    { title: 'Бази на податоци', description: "Ефикасно управување со податоците за апликации што остануваат брзи и безбедни и кога обемот на работа расте.", alts: ['Лого на MySQL', 'Лого на PostgreSQL', 'Лого на MongoDB', 'Лого на Redis'] },
    { title: 'AI и автоматизација', description: "AI алатки и автоматизација што ги поедноставуваат процесите и го забрзуваат развојот на нови идеи.", alts: ['Лого на OpenAI', 'Лого на Anthropic', 'Лого на LangChain', 'Лого на n8n'] },
  ],
} satisfies TechnologyGridContent;

export const technologyGridContent: Localized<TechnologyGridContent> = {
  en: englishTechnologyGridContent,
  mk: macedonianTechnologyGridContent,
};
