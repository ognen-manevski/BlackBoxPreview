import type { Localized, TranslationShape } from '../../types';

const englishInteractiveDisplaysContent = {
  seo: {
    title: 'Interactive Displays | BlackBox Solutions',
    description: 'Freestanding digital displays for promotions, announcements, and visitor information.',
  },
  hero: {
    ariaLabel: 'Interactive displays',
    headingStart: 'Give your customers ',
    headingHighlight: 'more',
    headingEnd: ' than something to ',
    headingHighlightEnd: 'look at.',
    lead: 'Interactive displays that help people explore products, find information, and access services through touch. Choose a format and software experience that fits your space, your audience, and your business.',
  },
  howItWorks: {
    label: 'How It Works',
    heading: 'A touch starts the experience.',
    copy: 'An interactive display combines a touchscreen with software running on a built-in or connected computer. When someone taps, swipes, or selects an option, the application responds with the relevant information or next step.',
    neoslideCardTitle: 'Need a custom application?',
    neoslideCardText: 'Create an interactive experience around your business processes.',
    neoslideCtaText: 'Explore Software Development',
    ctaHref: '/services/software-development/',
    showNeoSlideLogo: false,
    visualAriaLabel: 'Digital signage workflow illustration',
    illustrationAriaLabel: 'Digital signage management workflow illustration',
    cards: [
      { number: '01', title: 'Choose the right display', text: 'Select a size and format that suit your location, available space, and how people will use it.' },
      { number: '02', title: 'Define the experience', text: 'Give customers access to product catalogues, directories, information, or self-service tools based on what your business needs.' },
      { number: '03', title: 'Connect your systems', text: 'Connect the application to your existing tools and data to keep information current and support your daily operations.' },
    ],
  },
  whyTotems: {
    label: 'Why Interactive Displays?',
    heading: 'More independence for customers. More time for your team.',
    copy: 'Give people a straightforward way to find answers and complete routine tasks. Interactive displays support customer service while allowing your team to focus on requests that need personal attention.',
    ariaLabel: 'Interactive display benefits',
    cards: [
      { title: 'Make Information Easy to Find', text: 'Let visitors search for the product, service, or destination they need without browsing unrelated content.' },
      { title: 'Support Self-Service', text: 'Give customers the option to complete tasks such as registration or order selection through a guided interface.' },
      { title: 'Reduce Repetitive Questions', text: 'Make opening hours, directions, and common service information available without requiring staff assistance.' },
      { title: 'Help Customers Decide', text: 'Bring product details, comparisons, and available options together so customers can explore before making a choice.' },
      { title: 'Encourage Participation', text: 'Invite people to explore demonstrations, presentations, and branded experiences at their own pace.' },
      { title: 'Keep the Experience Consistent', text: 'Provide the same clear information and guided steps across locations, with content adapted to local needs.' },
    ],
  },
  productOverview: {
    label: 'Product Overview',
    heading: 'A display people can use, not just view.',
    paragraphs: [
      'An interactive display is a touchscreen connected to software that responds to user input. Businesses use it for product browsing, wayfinding, self-service, presentations, and collaboration. The experience can be a simple information menu or a dedicated application connected to business systems.',
      'Available formats include wall-mounted screens, freestanding kiosks, touch tables, and large collaboration displays. Screen size, mounting, touch technology, and computing hardware can be selected around the intended use, with custom designs for specific spaces and requirements.',
    ],
  },
  keyFeatures: {
    label: 'Display Types',
    heading: 'Different formats. Built around how people use them.',
    copy: 'Choose the display format that suits your space and the task it needs to support. We can provide standard configurations or develop a custom setup around your installation and software requirements.',
    ariaLabel: 'Interactive display types',
    features: [
      {
        counter: '01',
        title: 'Wall-Mounted Touchscreens',
        description: 'Make information accessible without taking up floor space. Suitable for directories, product browsing, and service information in retail spaces, corridors, and reception areas.',
      },
      {
        counter: '02',
        title: 'Interactive Totems',
        description: 'Freestanding portrait displays that invite visitors to explore content in busy public areas. Use them for store directories, product catalogues, and information points near entrances or walkways.',
      },
      {
        counter: '03',
        title: 'Self-Service Kiosks',
        description: 'Dedicated terminals for guided tasks such as ordering, registration, or ticketing. Configurations can incorporate scanners, printers, or payment terminals, with the appropriate software and integrations.',
      },
      {
        counter: '04',
        title: 'Interactive Tables',
        description: 'Horizontal touchscreens for exploring content around a shared surface. Suitable for showrooms, exhibitions, and group activities, with multi-user interaction available on compatible hardware and software.',
      },
      {
        counter: '05',
        title: 'Collaboration Displays',
        description: 'Large interactive screens for meeting rooms, training spaces, and classrooms. Combine presentations, annotation, and digital whiteboarding with compatible software and connected devices.',
      },
      {
        counter: '06',
        title: 'Custom Interactive Solutions',
        description: 'Touchscreens integrated into bespoke enclosures, counters, furniture, or exhibition installations. Adapt the dimensions, finish, mounting, and interface to your space and business requirements.',
      },
    ],
  },
  technicalDetails: {
    label: 'Technical Details',
    heading: 'The right hardware for every interaction.',
    copy: 'A successful interactive installation needs more than a clear screen. Touch response, computing performance, software compatibility, and physical access should work together to make the experience practical and comfortable to use.',
    listAriaLabel: 'Interactive display technical details',
    imageAlt: 'Three freestanding digital totem displays in different orientations.',
    features: [
      {
        title: 'Screen Size & Resolution',
        text: 'Choose dimensions and resolution around viewing distance, interface detail, and available space. Text, controls, and images should remain clear at the position where people will use the display.',
      },
      {
        title: 'Touch Technology',
        text: 'Match touch accuracy, response, and supported touch points to the application. Simple menu navigation, handwriting, and multi-user activities place different demands on the screen.',
      },
      {
        title: 'Computing & Software',
        text: 'Select built-in or external computing hardware that supports your application. Operating system, processing power, and memory should suit the interface, content, and required integrations.',
      },
      {
        title: 'Connectivity & Peripherals',
        text: 'Plan connections for your network and any additional devices. Depending on the setup, these may include scanners, printers, cameras, payment terminals, or meeting-room equipment.',
      },
      {
        title: 'Visibility & Durability',
        text: 'Consider lighting, reflections, operating hours, and frequency of use. Public-facing and outdoor installations may require additional protection and displays designed for the surrounding conditions.',
      },
      {
        title: 'Mounting & Accessibility',
        text: 'Position the screen and controls for comfortable viewing and reach. Mounting height, tilt, approach space, and interface design should accommodate the people who will use the installation.',
      },
    ],
  },
  industryApplications: {
    label: 'Industry Applications',
    heading: 'Practical interaction for everyday business.',
    copy: 'Help customers explore, visitors navigate, and teams work together. Interactive displays can support different tasks across your business, with the hardware and application selected for each setting.',
    cta: 'Explore Use Cases',
    listAriaLabel: 'Interactive display industry applications',
    cards: [
      { title: 'Retail & Showrooms', text: 'Let shoppers browse catalogues, compare products, and explore available options. Place interactive displays beside featured ranges or in consultation areas to support purchasing decisions.', caseStudySlug: 'retail' },
      { title: 'Shopping Centres & Public Spaces', text: 'Help visitors search for shops, facilities, and destinations through interactive directories. Maps and route guidance can make large or unfamiliar spaces easier to navigate.', caseStudySlug: 'shopping-centres' },
      { title: 'Hotels & Hospitality', text: 'Give guests access to hotel facilities, local recommendations, and event information. Dedicated applications can also support tasks such as check-in or ordering when connected to the relevant systems.', caseStudySlug: 'hotels' },
      { title: 'Offices & Meeting Rooms', text: 'Support presentations, shared annotation, and collaborative planning with large touchscreens. Reception kiosks can provide visitor information or support registration through a dedicated application.', caseStudySlug: 'corporate' },
      { title: 'Education & Training', text: 'Bring lessons, demonstrations, and group exercises onto a shared interactive screen. Instructors and participants can annotate material and work through activities using compatible learning software.', caseStudySlug: 'education' },
      { title: 'Events & Exhibitions', text: 'Let attendees explore products, navigate the programme, and take part in interactive demonstrations. Touchscreens can also support registration and enquiry forms through purpose-built applications.', caseStudySlug: 'events-venues' },
    ],
  },
  industryMetrics: [
    { value: '400%', label: 'More attention than static advertising' },
    { value: '33%', label: 'Higher retail foot traffic' },
    { value: '83%', label: 'Better brand recall with digital displays' },
    { value: '24/7', label: 'Automated content updates' },
    { value: '100%', label: 'Centralized control across every display' },
    { value: 'Real-time', label: 'Dynamic content synchronization' },
  ],
  purchase: {
    label: 'Purchase & Rental',
    heading: 'The right setup for your plans.',
    copy: 'Choose a permanent interactive installation or discuss rental options for an event, exhibition, or temporary space. We’ll help define the display, software, and accessories needed for your project.',
    cards: [
      { type: 'buy', label: 'BUY YOUR DISPLAYS', heading: 'Make interaction part of your business.', copy: 'Build a permanent setup around the way your customers, visitors, or team will use it.', features: ['Hardware selected for ongoing use', 'Software matched to your application', 'Mounting and accessories suited to your space'], cta: 'Ask About Buying', intent: 'buy', serviceOption: { label: 'Interactive Displays > Buy', value: 'Interactive Displays > Buy', intent: 'buy' } },
      { type: 'rent', label: 'RENT YOUR DISPLAYS', heading: 'Bring interaction to your next event.', copy: 'Discuss a temporary touchscreen setup for product demonstrations, visitor information, or presentations.', features: ['Options for a defined rental period', 'Configuration based on your event needs', 'Software and setup requirements agreed in advance'], cta: 'Ask About Renting', intent: 'rent', serviceOption: { label: 'Interactive Displays > Rent', value: 'Interactive Displays > Rent', intent: 'rent' } },
      { type: 'custom', label: 'Need a custom setup?', heading: 'Designed around your requirements.', copy: 'Discuss a bespoke enclosure, integrated equipment, or a custom application for your installation.', cta: 'Discuss Your Project', intent: 'custom', serviceOption: { label: 'Interactive Displays > Custom', value: 'Interactive Displays > Custom', intent: 'custom' } },
    ],
  },
  demoService: 'Interactive Displays',
} as const;

export type InteractiveDisplaysContent = TranslationShape<typeof englishInteractiveDisplaysContent>;

const macedonianInteractiveDisplaysContent = {
  seo: {
    title: 'Интерактивни екрани | BlackBox Solutions',
    description: 'Самостојни дигитални дисплеи за промоции, известувања и информации за посетители.',
  },
  hero: {
    ariaLabel: 'Интерактивни екрани',
    headingStart: 'Претворете го секој ',
    headingHighlight: 'допир',
    headingEnd: ' во нова можност.',
    headingHighlightEnd: '',
    lead: 'Интерактивни дисплеи преку кои корисниците можат да разгледуваат производи, да најдат информации и да пристапат до услуги со допир. Изберете формат и софтверско решение што одговараат на вашиот простор, корисниците и потребите на бизнисот.',
  },
  howItWorks: {
    label: 'Како функционира',
    heading: 'Сè започнува со допир.',
    copy: 'Интерактивниот дисплеј комбинира екран на допир со софтвер што работи на вграден или надворешен компјутер. Кога корисникот допира, повлекува или избира опција на екранот, апликацијата ги прикажува соодветните информации или следниот чекор.',
    neoslideCardTitle: 'Ви треба апликација по мерка?',
    neoslideCardText: 'Создајте интерактивно решение приспособено на вашите деловни процеси.',
    neoslideCtaText: 'Види развој на софтвер',
    ctaHref: '/services/software-development/',
    showNeoSlideLogo: false,
    visualAriaLabel: 'Илустрација на процесот за дигитални екрани',
    illustrationAriaLabel: 'Илустрација на процесот за управување со дигитални екрани',
    cards: [
      { number: '01', title: 'Изберете го дисплејот', text: 'Изберете големина и формат што одговараат на вашиот простор и на начинот на кој ќе се користи дисплејот.' },
      { number: '02', title: 'Прилагодете ја содржината', text: 'Овозможете им на клиентите пристап до каталози, информации за локации и услуги или алатки за самопослужување, според потребите на вашиот бизнис.' },
      { number: '03', title: 'Поврзете ги системите', text: 'Поврзете ја апликацијата со системите и податоците што веќе ги користите, за полесно ажурирање на информациите и поедноставна секојдневна работа.' },
    ],
  },
  whyTotems: {
    label: 'Зошто интерактивни дисплеи?',
    heading: 'Повеќе самостојност за клиентите. Повеќе време за вашиот тим.',
    copy: 'Овозможете им на корисниците лесно да најдат одговори и да завршат едноставни задачи. Интерактивните дисплеи ја олеснуваат услугата, а вашиот тим може да се посвети на барањата за кои е потребна лична помош.',
    ariaLabel: 'Предности на интерактивните дисплеи',
    cards: [
      { title: 'Полесен пристап до информации', text: 'Овозможете им на посетителите директно да го најдат производот, услугата или локацијата што ги бараат.' },
      { title: 'Самоуслужни можности', text: 'Дајте им на клиентите можност самостојно да се регистрираат или да изберат нарачка, со јасни чекори на екранот.' },
      { title: 'Помалку повторливи прашања', text: 'Направете ги работното време, насоките и основните информации за услугите достапни без помош од вработените.' },
      { title: 'Полесно донесување одлуки', text: 'Прикажете детали, споредби и достапни опции на едно место, за клиентите да можат да ги разгледаат пред да одлучат.' },
      { title: 'Поактивно учество', text: 'Поттикнете ги корисниците самостојно да истражуваат демонстрации, презентации и интерактивни содржини за вашиот бренд.' },
      { title: 'Воедначено корисничко искуство', text: 'Обезбедете јасни информации и исти чекори за користење на сите локации, со содржина приспособена на локалните потреби.' },
    ],
  },
  productOverview: {
    label: 'Преглед на производот',
    heading: 'Дисплеј што се користи, а не само се гледа.',
    paragraphs: [
      'Интерактивниот дисплеј е екран на допир поврзан со софтвер што реагира на постапките на корисникот. Бизнисите го користат за разгледување производи, снаоѓање во простор, самоуслужни услуги, презентации и заедничка работа. Решението може да биде едноставно мени со информации или посебна апликација поврзана со деловните системи.',
      'Достапни се ѕидни екрани, самостојни киосци, интерактивни маси и големи дисплеи за заедничка работа. Големината на екранот, монтажата, технологијата на допир и компјутерската опрема се избираат според намената, со можност за изработка по мерка за специфични простори и барања.',
    ],
  },
  keyFeatures: {
    label: 'Видови дисплеи',
    heading: 'Различни формати за различни начини на користење.',
    copy: 'Изберете формат што одговара на вашиот простор и на задачите за кои ќе се користи. Нудиме стандардни конфигурации и решенија по мерка, приспособени на условите за поставување и софтверските потреби.',
    ariaLabel: 'Видови интерактивни дисплеи',
    features: [
      {
        counter: '01',
        title: 'Ѕидни екрани на допир',
        description: 'Овозможете лесен пристап до информации без да зафаќате простор на подот. Соодветни се за интерактивни водичи, разгледување производи и информации за услуги во продавници, ходници и приемни простории.',
      },
      {
        counter: '02',
        title: 'Интерактивни тотеми',
        description: 'Самостојни вертикални дисплеи што ги повикуваат посетителите да ја истражат содржината во прометни простори. Користете ги за мапи на продавници, каталози на производи и информативни точки покрај влезови и премини.',
      },
      {
        counter: '03',
        title: 'Самоуслужни киосци',
        description: 'Наменски терминали што ги водат корисниците низ нарачување, регистрација или издавање билети. Можат да вклучуваат скенери, печатачи или платежни терминали, со соодветен софтвер и поврзување со потребните системи.',
      },
      {
        counter: '04',
        title: 'Интерактивни маси',
        description: 'Хоризонтални екрани на допир за разгледување содржини на заедничка површина. Соодветни се за изложбени простори, изложби и групни активности, со можност за истовремено користење од повеќе лица кај компатибилни конфигурации.',
      },
      {
        counter: '05',
        title: 'Дисплеи за заедничка работа',
        description: 'Големи интерактивни екрани за сали за состаноци, простории за обука и училници. Овозможуваат презентации, белешки врз содржината и работа на дигитална табла преку компатибилен софтвер и поврзани уреди.',
      },
      {
        counter: '06',
        title: 'Интерактивни решенија по мерка',
        description: 'Екрани на допир вградени во наменски куќишта, пултови, мебел или изложбени поставки. Приспособете ги димензиите, завршната обработка, монтажата и интерфејсот на вашиот простор и деловните потреби.',
      },
    ],
  },
  technicalDetails: {
    label: 'Технички детали',
    heading: 'Соодветна опрема за секој начин на користење.',
    copy: 'За добро интерактивно искуство е потребно повеќе од јасен екран. Реакцијата на допир, перформансите, софтверската компатибилност и пристапноста треба да овозможат едноставно и удобно користење.',
    listAriaLabel: 'Технички детали за интерактивни дисплеи',
    imageAlt: 'Три самостојни дигитални тотеми со различни ориентации на екранот.',
    features: [
      {
        title: 'Големина и резолуција',
        text: 'Изберете димензии и резолуција според растојанието на гледање, деталите во интерфејсот и достапниот простор. Текстот, копчињата и сликите треба да бидат јасни од позицијата од која ќе се користи дисплејот.',
      },
      {
        title: 'Технологија на допир',
        text: 'Приспособете ги прецизноста, брзината на реакција и бројот на истовремени допири на апликацијата. Движењето низ менија, пишувањето на екран и групните активности имаат различни барања.',
      },
      {
        title: 'Хардвер и софтвер',
        text: 'Изберете вграден или надворешен компјутер што ја поддржува вашата апликација. Оперативниот систем, процесорот и меморијата треба да одговараат на интерфејсот, содржината и потребните интеграции.',
      },
      {
        title: 'Поврзување и дополнителни уреди',
        text: 'Испланирајте го поврзувањето со мрежата и дополнителната опрема. Зависно од намената, тоа може да вклучува скенери, печатачи, камери, платежни терминали или опрема за состаноци.',
      },
      {
        title: 'Видливост и издржливост',
        text: 'Земете ги предвид осветлувањето, одблесоците, работните часови и зачестеноста на користење. За јавни простори и надворешни локации може да биде потребна дополнителна заштита и опрема соодветна на условите.',
      },
      {
        title: 'Монтажа и пристапност',
        text: 'Поставете ги екранот и контролите така што ќе бидат удобни за гледање и достапни за допир. Висината, наклонот, просторот за пристап и интерфејсот треба да одговараат на корисниците.',
      },
    ],
  },
  industryApplications: {
    label: 'Примена по дејности',
    heading: 'Интерактивни решенија за секојдневни деловни потреби.',
    copy: 'Помогнете им на клиентите да ја истражат понудата, на посетителите да се снајдат, а на тимовите да работат заедно. Интерактивните дисплеи можат да поддржат различни задачи, со опрема и апликации избрани според намената.',
    cta: 'Погледнете ја примената',
    listAriaLabel: 'Примена на интерактивни дисплеи по дејности',
    cards: [
      { title: 'Продавници и изложбени простори', text: 'Овозможете им на купувачите да разгледуваат каталози, да споредуваат производи и да ги истражат достапните опции. Поставете интерактивни дисплеи покрај избрани производи или во просторите за консултации за да им го олесните изборот.', caseStudySlug: 'retail' },
      { title: 'Трговски центри и јавни простори', text: 'Помогнете им на посетителите да најдат продавници, услуги и други локации преку интерактивни водичи. Мапите и насоките го олеснуваат движењето низ големи или непознати простори.', caseStudySlug: 'shopping-centres' },
      { title: 'Хотели и угостителство', text: 'Овозможете им на гостите пристап до информации за хотелските содржини, локални препораки и настани. Наменските апликации можат да поддржат и пријавување гости или нарачување, со поврзување со соодветните системи.', caseStudySlug: 'hotels' },
      { title: 'Канцеларии и сали за состаноци', text: 'Користете големи екрани на допир за презентации, заеднички белешки и тимско планирање. Киосците на рецепција можат да прикажуваат информации за посетителите или да овозможат нивна регистрација преку наменска апликација.', caseStudySlug: 'corporate' },
      { title: 'Образование и обуки', text: 'Прикажувајте лекции, демонстрации и групни вежби на заеднички интерактивен екран. Предавачите и учесниците можат да додаваат белешки и заедно да решаваат задачи преку соодветен образовен софтвер.', caseStudySlug: 'education' },
      { title: 'Настани и изложби', text: 'Овозможете им на посетителите да истражуваат производи, да ја разгледуваат програмата и да учествуваат во интерактивни демонстрации. Преку наменски апликации, екраните можат да се користат и за регистрација и испраќање прашања или барања.', caseStudySlug: 'events-venues' },
    ],
  },
  industryMetrics: [
    { value: '400%', label: 'Повеќе внимание од статичното огласување' },
    { value: '33%', label: 'Поголема посетеност во малопродажбата' },
    { value: '83%', label: 'Подобро препознавање на брендот со дигитални дисплеи' },
    { value: '24/7', label: 'Автоматско ажурирање на содржината' },
    { value: '100%', label: 'Централизирана контрола на сите дисплеи' },
    { value: 'Во реално време', label: 'Динамична синхронизација на содржината' },
  ],
  purchase: {
    label: 'Купување и изнајмување',
    heading: 'Решение што одговара на вашите планови.',
    copy: 'Изберете трајна интерактивна поставка или разгледајте можности за изнајмување за настан, изложба или привремен простор. Ќе ви помогнеме да ги одредите дисплејот, софтверот и дополнителната опрема потребни за вашиот проект.',
    cards: [
      { type: 'buy', label: 'КУПЕТЕ ДИСПЛЕИ', heading: 'Внесете интерактивност во вашето секојдневно работење.', copy: 'Создајте трајна поставка според начинот на кој ќе ја користат вашите клиенти, посетители или вработени.', features: ['Опрема избрана за редовна употреба', 'Софтвер соодветен на намената', 'Монтажа и додатоци според вашиот простор'], cta: 'Прашајте за купување', intent: 'buy', serviceOption: { label: 'Interactive Displays > Купување', value: 'Interactive Displays > Buy', intent: 'buy' } },
      { type: 'rent', label: 'ИЗНАЈМЕТЕ ДИСПЛЕИ', heading: 'Додајте интерактивност на вашиот следен настан.', copy: 'Разгледајте привремена поставка со екрани на допир за демонстрации на производи, информации за посетители или презентации.', features: ['Можности за изнајмување за определен период', 'Конфигурација според потребите на настанот', 'Однапред договорени барања за софтвер и поставување'], cta: 'Прашајте за изнајмување', intent: 'rent', serviceOption: { label: 'Interactive Displays > Изнајмување', value: 'Interactive Displays > Rent', intent: 'rent' } },
      { type: 'custom', label: 'Ви треба решение по мерка?', heading: 'Приспособено на вашите барања.', copy: 'Разговарајте со нас за наменско куќиште, вградена опрема или апликација по мерка за вашиот проект.', cta: 'Разговарајте со нас', intent: 'custom', serviceOption: { label: 'Interactive Displays > По мерка', value: 'Interactive Displays > Custom', intent: 'custom' } },
    ],
  },
  demoService: 'Интерактивни екрани',
} as const;

export const interactiveDisplaysContent: Localized<InteractiveDisplaysContent> = {
  en: englishInteractiveDisplaysContent,
  mk: macedonianInteractiveDisplaysContent,
};
