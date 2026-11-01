import type { Localized, TranslationShape } from '../types';
import { englishTechnologyGridContent, macedonianTechnologyGridContent } from '../technology';

export const englishHomeContent = {
  seo: {
    title: 'BlackBox Solutions — Custom Software & Digital Products',
    description: 'BlackBox Solutions builds custom software, digital signage platforms, electronic shelf labels, and live video streaming tools for modern businesses.',
  },
  hero: {
    ariaLabel: 'Hero', rating: '4.9', stars: '★★★★★', trustedCount: '50+', trustedLabel: 'Trusted by ', trustedLabelSecondLine: 'top companies',
    headlineStart: 'Modern technology that helps your business ', headlineLineOne: 'Modern technology', headlineLineTwo: 'that helps your business',
    headlineLineTwoNarrow: 'that helps your', headlineLineThreeNarrow: 'business',
    headlineLineThreeSuffix: '', headlineLineFour: '',
    highlights: ['communicate,', 'automate,', 'grow.'], conjunction: 'and',
    lead: "We deliver digital signage, electronic shelf labels, video streaming, and custom software designed around the way your business works.",
    primaryCta: 'Book a Free Demo', secondaryCta: 'Find Out More', ctaNote: "Free consultation, with no obligation.",
    carouselAriaLabel: 'Services showcase', slideRole: 'slide', slideIndicators: 'Slide indicators',
    slides: ["NeoSlide – Digital Signage", 'Electronic Shelf Labels', 'Video Streaming', "Software Development"],
  },
  about: {
    label: 'About BlackBox', heading: "Built around the way your business works.",
    copy: "We’re a software development company that specializes in creating cloud-based solutions to simplify daily business processes. Our experienced team is passionate about using the latest technologies to create custom software that enhances productivity and automates tedious tasks. Contact us to learn more about our innovative solutions and excellent customer service.",
    homeCopy: "BlackBox helps businesses communicate with customers, automate everyday tasks, and manage digital content. We develop digital signage, electronic shelf label, video streaming, and custom software solutions, with a focus on making technology easier to use and manage.",
    cardsAriaLabel: 'Mission and vision', missionTitle: 'Mission', missionCopy: "To turn complex business requirements into reliable technology that improves how organizations communicate, operate, and serve their customers.",
    visionTitle: 'Vision', visionCopy: "To build technology that becomes a lasting part of how businesses work — adaptable, dependable, and ready for what comes next.",
    videoAriaLabel: 'BlackBox logo cube looping animation', logosAriaLabel: 'Client logos carousel', principlesAriaLabel: 'Core principles',
    principles: [
      { number: '01', title: 'Business-first approach', text: "Every project starts with your workflow, objectives, and real operational needs." },
      { number: '02', title: 'Built to scale', text: 'Flexible architectures designed to grow alongside your business.' },
      { number: '03', title: 'Long-term partnership', text: "We stay involved beyond launch with ongoing support, improvements, and technical guidance." },
    ],
  },
  services: {
    label: 'Our Services', heading: "Four capabilities. One technology partner.", intro: "",
    copy: "From digital signage and real-time retail pricing to live streaming and custom software, our services cover the technology businesses need to communicate, automate processes, and build better digital experiences.",
    learnMore: 'Learn more', openPrefix: 'Open',
    items: [
      { counter: '01', title: "NeoSlide – Digital Signage", description: "Create, schedule, and update content across your displays from one cloud-based platform. NeoSlide gives teams centralized control with real-time updates across individual screens, locations, or entire display networks.", href: '/services/neoslide' },
      { counter: '02', title: 'Electronic Shelf Labels', description: "Electronic shelf labels synchronize prices, promotions, and product information across stores through one cloud-connected platform. Teams can manage displays remotely, update prices in real time, and schedule promotional changes by time, date, or campaign.", href: '/digital-signage-displays/electronic-shelf-labels' },
      { counter: '03', title: "Video Streaming", description: "We build OTT platforms and streaming infrastructure for live broadcasts and on-demand content across browsers, mobile devices, and Smart TVs. Our work covers platform planning, deployment, encoding workflows, and CDN optimization.", href: '/services/video-streaming' },
      { counter: '04', title: "Software Development", description: "Custom applications and business platforms are designed around your workflows, from customer portals to internal tools. Our development work combines frontend interfaces, scalable backend systems, and integrations that connect applications with your existing business systems.", href: '/services/software-development' },
    ],
  },
  caseStudies: {
    label: 'Case studies', heading: 'Digital solutions in action', copy: "See how our technology can be applied across retail, finance, education, corporate environments, events, and other industries.", exploreCopy: 'Explore more ways our digital solutions are used across different industries.', viewAll: 'View all', readMore: 'Read more', gridAriaLabel: 'Latest blog case studies',
  },
  whyChoose: {
    label: 'Why Choose Us', heading: "Practical technology. Measurable business impact.",
    copy: "We combine business understanding with design and engineering to deliver systems that improve operations, strengthen customer experiences, and support long-term growth.",
    copySecondLine: "Every project is designed around a clear purpose — without unnecessary complexity.", ariaLabel: 'Why choose us key metrics',
    stats: [
      { value: '56+', label: 'Successful\nprojects delivered' }, { value: '20+', label: 'Businesses\nsupported' },
      { value: '10+', label: 'Years of combined\nindustry experience' }, { value: '96%', label: 'Client\nsatisfaction rate' },
      { value: '100%', label: 'Tailored solutions,\nnever one-size-fits-all' },
    ],
  },
  partners: { label: 'Our Partners', heading: 'Trusted by teams building better digital operations', copy: "From established organizations to growing businesses, our clients rely on BlackBox to deliver and support technology that becomes part of their day-to-day operations.", gridAriaLabel: 'Partner logos' },
  technology: { grid: englishTechnologyGridContent, label: 'Technology', heading: "The technology behind what we build.", copy: "Our engineering capabilities span frontend and backend development, mobile applications, cloud infrastructure, databases, AI, and automation. We select technologies based on the requirements of each project — not a predetermined stack." },
  faq: {
    label: 'FAQs', heading: "Common questions, clearly answered.", copy: "Answers to common questions about our solutions, implementation, integrations, and ongoing support.", listAriaLabel: 'Frequently asked questions', contactAriaLabel: 'Contact prompt', contactHeading: 'Still have questions?', contactCopy: "Tell us what you're planning and we'll help you determine the right next step.", contactCta: "Talk to our team",
    items: [
      { question: 'What digital solutions does BlackBox build?', answer: "BlackBox offers NeoSlide – Digital Signage, Electronic Shelf Labels, Video Streaming, and Software Development. These services cover display content management, retail pricing updates, live and on-demand video delivery, and applications built around business workflows." },
      { question: 'How does NeoSlide digital signage work?', answer: "NeoSlide lets you create, organize, and schedule content in a cloud dashboard, then assign it to individual screens or display groups. Updates synchronize across connected displays, so teams can manage content remotely without visiting each location." },
      { question: 'Can electronic shelf labels update prices in real time?', answer: "Yes. Price changes in your POS or ERP system automatically update connected electronic shelf labels over a wireless network. You can also schedule price changes for promotions by time, date, or campaign." },
      { question: 'Do you build custom software for unique workflows?', answer: "We build custom web applications, business platforms, customer portals, and internal tools around your specific workflows. This includes frontend interfaces, backend systems, and integrations with existing business systems." },
      { question: 'Can BlackBox support live video streaming projects?', answer: "BlackBox builds OTT platforms that support live broadcasts and on-demand content across browsers, mobile devices, and Smart TVs. We also provide guidance on platform architecture, deployment, encoding workflows, and CDN optimization." },
    ],
  },
  contact: {
    label: 'Contact', heading: 'Let’s talk about your next digital project', copy: "Tell us what you're building, what needs to improve, or where technology is getting in the way. Our team can help you define the right approach across software, digital signage, electronic shelf labels, and video streaming.",
    subscribe: 'Subscribe', subscribeConsent: 'By subscribing you agree to the', privacyPolicy: 'Privacy Policy', directAriaLabel: 'Direct contact methods', phoneLabel: 'Phone number', emailDirectLabel: 'E-mail address',
    nameLabel: 'Your name', namePlaceholder: 'Alex Morgan', emailLabel: 'Email address', emailPlaceholder: 'you@company.com', projectLabel: 'Project details', projectPlaceholder: 'Tell us about your project, goals, timeline, or the business process you want to improve.', addFile: 'Add a file', send: 'Send message', reset: 'Reset form', formConsent: 'By submitting this form, you acknowledge that your information will be processed in accordance with our',
  },
} as const;

export type HomePageContent = TranslationShape<typeof englishHomeContent>;

export const macedonianHomeContent = {
  seo: {
    title: 'BlackBox Solutions — Сопствен софтвер и дигитални производи',
    description: "BlackBox Solutions развива софтвер по мерка, платформи за дигитални екрани, електронски етикети и видео стриминг за современи компании.",
  },
  hero: {
    ariaLabel: 'Главна секција', rating: '4.9', stars: '★★★★★', trustedCount: '50+', trustedLabel: 'Ни веруваат', trustedLabelSecondLine: 'водечки компании',
    headlineStart: "Паметна технологија за ефикасна ", headlineLineOne: 'Паметна технологија', headlineLineTwo: 'за ефикасна',
    headlineLineTwoNarrow: 'за ефикасна', headlineLineThreeNarrow: '',
    headlineLineThreeSuffix: 'и раст', headlineLineFour: 'на вашиот бизнис.',
    highlights: ["комуникација,", "автоматизација", "раст на вашиот бизнис."], conjunction: 'и',
    lead: "Нудиме дигитални екрани, електронски етикети, видео стриминг и софтвер по мерка — решенија создадени според начинот на кој работи вашиот бизнис.",
    primaryCta: "ПОБАРАЈТЕ ДЕМО", secondaryCta: "ДОЗНАЈТЕ ПОВЕЌЕ", ctaNote: "Бесплатно, без обврска.",
    carouselAriaLabel: 'Преглед на услугите', slideRole: 'слајд', slideIndicators: 'Индикатори за слајдови',
    slides: ["NeoSlide – Екрански системи", "Електронски етикети", "Видео стриминг", "Развој на софтвер"],
  },
  about: {
    label: "ЗА BLACKBOX", heading: "Решенија создадени според начинот на кој работите.",
    copy: "Ние сме компанија за развој на софтвер, специјализирана за создавање cloud решенија кои го поедноставуваат секојдневното деловно работење. Нашиот искусен тим ги користи најновите технологии за да развие софтвер по мерка кој ја зголемува продуктивноста и ги автоматизира рутинските задачи. Контактирајте нè за да дознаете повеќе за нашите иновативни решенија и посветената поддршка што им ја нудиме на нашите клиенти.",
    homeCopy: "BlackBox им помага на бизнисите да комуницираат со своите клиенти, да ги автоматизираат секојдневните задачи и да управуваат со дигитални содржини. Развиваме решенија за дигитална сигнализација, електронски етикети за цени и видео стриминг, како и софтвер по мерка, со цел технологијата да биде поедноставна за користење и управување.",
    cardsAriaLabel: 'Мисија и визија', missionTitle: 'Мисија', missionCopy: "Сложените потреби ги претвораме во сигурни технолошки решенија што им помагаат на компаниите подобро да комуницираат, да работат и да ги услужуваат своите клиенти.",
    visionTitle: 'Визија', visionCopy: "Создаваме технологија што станува траен дел од работењето — приспособлива, сигурна и подготвена за идните потреби.",
    videoAriaLabel: 'Анимација на BlackBox лого коцка', logosAriaLabel: 'Карусел со логоа на клиенти', principlesAriaLabel: 'Основни принципи',
    principles: [
      { number: '01', title: 'Бизнисот на прво место', text: "Секој проект започнува со разбирање на вашето работење, целите и реалните потреби." },
      { number: '02', title: "Подготвено за раст", text: "Флексибилна архитектура што може да расте и да се менува заедно со вашиот бизнис." },
      { number: '03', title: 'Долгорочно партнерство', text: "Остануваме вклучени и по пуштањето во употреба, со поддршка, подобрувања и технички насоки." },
    ],
  },
  services: {
    label: "НАШИ УСЛУГИ", heading: "Четири услуги. Еден технолошки партнер.", intro: "",
    copy: "Од дигитални екрани и ажурирање цени во реално време, до видео стриминг и софтвер по мерка — нудиме технологии што ја подобруваат комуникацијата, ги автоматизираат процесите и создаваат подобри дигитални искуства.",
    learnMore: "ДОЗНАЈТЕ ПОВЕЌЕ", openPrefix: 'Отвори',
    items: [
      { counter: '01', title: "NeoSlide – Екрански системи", description: "Создавајте, закажувајте и ажурирајте содржина на сите ваши екрани од една cloud платформа. NeoSlide овозможува централизирано управување и промени во реално време — на еден екран, на повеќе локации или низ цела мрежа.", href: '/mk/services/neoslide' },
      { counter: '02', title: "Електронски етикети", description: "Управувајте со цените, промоциите и информациите за производите во сите продавници од една cloud платформа. Електронските етикети автоматски ги преземаат промените од вашиот систем, а промотивните цени можете да ги закажете според време, датум или кампања.", href: '/mk/digital-signage-displays/electronic-shelf-labels' },
      { counter: '03', title: "Видео стриминг", description: "Развиваме OTT платформи за преноси во живо и видео на барање, достапни преку прелистувачи, мобилни уреди и паметни телевизори. Помагаме со планирање и поставување на инфраструктурата, кодирање на видеото и CDN оптимизација за испорака на содржината.", href: '/mk/services/video-streaming' },
      { counter: '04', title: "Развој на софтвер", description: "Вашите процеси се основа за софтверот што го развиваме — од портали за клиенти до интерни алатки и платформи. Работиме на frontend и backend системи, ги поврзуваме со постојниот софтвер и ја планираме архитектурата за идно проширување.", href: '/mk/services/software-development' },
    ],
  },
  caseStudies: {
    label: "ПРИМЕРИ ОД ПРАКСА", heading: 'Дигитални решенија во пракса', copy: "Погледнете како нашата технологија се применува во малопродажба, финансии, образование, корпоративни средини, настани и други области.", exploreCopy: "Откријте и други примери за примена на нашата технологија.", viewAll: "СИТЕ ПРИМЕРИ", readMore: 'Прочитај повеќе', gridAriaLabel: "Најнови примери од пракса",
  },
  whyChoose: {
    label: "ЗОШТО BLACKBOX", heading: "Практична технологија. Мерливи деловни резултати.",
    copy: "Ги спојуваме разбирањето на бизнисот, дизајнот и инженерството за да создадеме системи што го поедноставуваат работењето, го подобруваат корисничкото искуство и поддржуваат долгорочен раст.",
    copySecondLine: "Секој проект има јасна цел — без непотребна сложеност.", ariaLabel: 'Клучни показатели за BlackBox',
    stats: [
      { value: '56+', label: "Успешно реализирани проекти" }, { value: '20+', label: "Компании со кои соработуваме" },
      { value: '10+', label: "Години заедничко искуство" }, { value: '96%', label: "Задоволство на клиентите" },
      { value: '100%', label: 'Приспособени решенија,\nникогаш универзален пристап' },
    ],
  },
  partners: { label: "НАШИ ПАРТНЕРИ", heading: "Ни веруваат компании што градат подобри дигитални процеси.", copy: "Од етаблирани организации до компании во раст, нашите клиенти се потпираат на BlackBox за технологија што станува дел од нивното секојдневно работење.", gridAriaLabel: 'Логоа на партнери' },
  technology: { grid: macedonianTechnologyGridContent, label: "ТЕХНОЛОГИЈА", heading: "Технологијата зад она што го создаваме.", copy: "Нашата инженерска експертиза опфаќа frontend и backend развој, мобилни апликации, cloud инфраструктура, бази на податоци, AI и автоматизација. Технологиите ги избираме според потребите на секој проект, наместо да се ограничуваме на однапред избран сет технологии." },
  faq: {
    label: "ЧЕСТИ ПРАШАЊА", heading: "Чести прашања. Јасни одговори.", copy: "Кратки одговори за нашите решенија, воведувањето, интеграциите и поддршката.", listAriaLabel: 'Често поставувани прашања', contactAriaLabel: 'Повик за контакт', contactHeading: "Имате уште прашања?", contactCopy: "Кажете ни што планирате, а ние ќе ви помогнеме да го одредите следниот чекор.", contactCta: "Разговарајте со нас",
    items: [
      { question: "Какви решенија нуди BlackBox?", answer: "Обезбедуваме комплетни решенија за дигитални екрани (преку нашата платформа NeoSlide), електронски етикети, видео стриминг и развој на софтвер по мерка. Им помагаме на компаниите полесно да управуваат со своите содржини и цени, да емитуваат видео и да користат апликации кои се целосно прилагодени на нивниот начин на работа." },
      { question: "Како функционира NeoSlide?", answer: "NeoSlide е cloud-платформа преку која креирате содржина, одредувате распоред и избирате на кои екрани да се прикаже — сè од едно место. Промените веднаш се рефлектираат на поврзаните екрани, без потреба физички да ја посетувате секоја локација." },
      { question: "Може ли електронските етикети да се ажурираат во реално време?", answer: "Да. Штом промените цена во вашиот POS или ERP систем, поврзаните етикети автоматски се ажурираат преку безжична мрежа. Дополнително, можете однапред да закажете промотивни цени за одредени датуми, периоди или маркетинг кампањи." },
      { question: "Изработувате ли софтвер по мерка?", answer: "Да, развиваме веб-апликации, портали за клиенти, интерни алатки и платформи кои се целосно прилагодени на вашите процеси. Се грижиме за сè — од корисничкиот интерфејс (frontend) до заднинските (backend) системи, осигурувајќи беспрекорна интеграција со софтверот што веќе го користите." },
      { question: "Дали BlackBox поддржува проекти за видео стриминг во живо?", answer: "Апсолутно. Развиваме OTT-платформи за преноси во живо (live streaming) и видео на барање (VOD), достапни преку прелистувачи, мобилни уреди и паметни телевизори. Ви помагаме во секој чекор — од планирање на архитектурата и поставување на платформата, до енкодирање на видеото и CDN оптимизација." },
    ],
  },
  contact: {
    label: "КОНТАКТ", heading: "Да разговараме за вашиот следен проект", copy: "Кажете ни што планирате, што сакате да подобрите или каде ви треба подобро технолошко решение. Ќе ви помогнеме да го најдете вистинскиот пристап и да изградиме систем што целосно им одговара на вашите потреби.",
    subscribe: "ПРИЈАВИ СЕ", subscribeConsent: "Со пријавувањето се согласувате со", privacyPolicy: 'Политиката за приватност', directAriaLabel: 'Директни начини за контакт', phoneLabel: 'Телефонски број', emailDirectLabel: 'Е-адреса',
    nameLabel: 'Вашето име', namePlaceholder: 'Александар Петров', emailLabel: 'Е-адреса', emailPlaceholder: "Внесете ја вашата е-адреса...", projectLabel: 'Детали за проектот', projectPlaceholder: "Опишете го проектот, целите, роковите или процесот што сакате да го подобрите.", addFile: "Додај датотеки", send: "Испрати", reset: "Ресетирај", formConsent: 'Со испраќање на формуларот потврдувате дека вашите податоци ќе бидат обработени согласно нашата',
  },
} satisfies HomePageContent;

export const homePageContent: Localized<HomePageContent> = {
  en: englishHomeContent,
  mk: macedonianHomeContent,
};
