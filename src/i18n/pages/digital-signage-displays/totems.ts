import type { Localized, TranslationShape } from '../../types';

const englishTotemsContent = {
  seo: {
    title: 'Digital Totems | BlackBox Solutions',
    description: 'Freestanding digital displays for promotions, announcements, and visitor information.',
  },
  hero: {
    ariaLabel: 'Digital totems',
    headingStart: 'Give your space a ',
    headingHighlight: 'stronger presence.',
    headingEnd: '',
    lead: 'Freestanding digital displays for promotions, announcements, and visitor information. Make better use of entrances, reception areas, and shared spaces with content you can update as your business needs change.',
  },
  howItWorks: {
    label: 'How It Works',
    heading: 'From setup to on-screen content.',
    copy: 'Each totem connects a commercial display to a media player, either built in or connected separately. The player receives content from your signage platform and displays it according to the assigned playlist and schedule.',
    neoslideCardTitle: 'Manage your totems',
    neoslideCardText: 'Control content and schedules from one platform.',
    neoslideCtaText: 'Learn more',
    visualAriaLabel: 'Digital signage workflow illustration',
    illustrationAriaLabel: 'Digital signage management workflow illustration',
    cards: [
      { number: '01', title: 'Connect your totem', text: 'Connect the display to power and your network, then link its media player to the management platform.' },
      { number: '02', title: 'Assign a playlist', text: 'Choose the content and playback order for each totem, or group several displays to share the same playlist.' },
      { number: '03', title: 'Start playback', text: 'The media player runs the assigned content, switching between items according to your schedule.' },
    ],
  },
  whyTotems: {
    label: 'Why Digital Totems?',
    heading: 'Better communication. Less everyday effort.',
    copy: 'Give your promotions more visibility and your customers useful information, while making content easier for your team to manage. Digital totems help your business respond to changing needs without replacing printed materials each time.',
    ariaLabel: 'Digital totem benefits',
    cards: [
      { title: 'Capture Attention', text: 'Bring products and offers into focus with images and video in the places your customers already visit.' },
      { title: 'Keep Information Current', text: 'Respond to new offers, schedule changes, and announcements with remote updates across your locations.' },
      { title: 'Reduce Printing & Manual Work', text: 'Cut back on recurring poster production and replacement, saving staff time and reducing paper waste.' },
      { title: 'Strengthen Your Brand', text: 'Present a consistent look across your locations using approved visuals, campaign materials, and brand messaging.' },
      { title: 'Help Customers Find Answers', text: 'Make directions, product details, and service information easy to access, helping visitors make informed decisions.' },
      { title: 'Support Sales', text: 'Highlight relevant offers and complementary products near the point of purchase to encourage customers to explore what you offer.' },
    ],
  },
  productOverview: {
    label: 'Product Overview',
    heading: 'A dedicated display with a clear purpose.',
    viewer: {
      ariaLabel: 'Interactive 3D model of a digital totem',
      loadingLabel: 'Loading digital totem model…',
      errorLabel: 'The digital totem model or its screen video could not be loaded.',
    },
    paragraphs: [
      'A digital totem is a freestanding display that businesses use to promote products, guide visitors, and share information. It replaces static posters with images, videos, and announcements that can be managed remotely and updated across multiple locations. In stores, reception areas, and other commercial spaces, digital totems help teams keep content current without repeatedly printing and replacing signage.',
      'Digital totems typically feature one or two vertically mounted screens, with designs that can be adapted to different spaces and business needs. Outdoor models use enclosures suited to local conditions and installation requirements.',
    ],
  },
  keyFeatures: {
    label: 'Key Features',
    heading: 'Built for your space. Ready for your message.',
    copy: 'Digital totems combine clear displays, flexible designs, and remote content management to support everyday business communication. Choose a configuration that suits your location, your content, and the way your customers interact with it.',
    ariaLabel: 'Digital totem key features',
    features: [
      {
        counter: '01',
        title: 'High-Quality Displays',
        description: 'Present products, promotions, and information with sharp text, vibrant images, and video. Screen resolution and brightness can be selected to suit your content, viewing distance, and surrounding lighting.',
      },
      {
        counter: '02',
        title: 'Optional Touchscreens',
        description: 'Let visitors explore product catalogues, browse directories, or find directions directly on the screen. Touch-enabled configurations turn a display into a practical self-service information point.',
      },
      {
        counter: '03',
        title: 'Indoor & Outdoor Options',
        description: 'Choose a model suited to its surroundings, whether in a reception area, retail space, or outdoor location. Outdoor configurations require weather-resistant enclosures and brightness suited to daylight viewing.',
      },
      {
        counter: '04',
        title: 'Remote Content Management',
        description: 'Manage content through a compatible digital signage platform such as NeoSlide. Update displays, schedule campaigns, and coordinate messages across locations without visiting each screen individually.',
      },
      {
        counter: '05',
        title: 'Modular Design',
        description: 'Modular construction makes components easier to access, maintain, and replace. It also allows hardware to be upgraded as your business needs change.',
      },
      {
        counter: '06',
        title: 'Single or Double-Sided',
        description: 'Display content in one direction or reach people approaching from both sides. Choose a screen arrangement that makes the most of entrances, walkways, and open areas.',
      },
    ],
  },
  technicalDetails: {
    label: 'Technical Details',
    heading: 'The right specifications for your business.',
    copy: 'Choose a digital totem that fits your location, content, and daily operating requirements. Display quality, connectivity, and software compatibility all play a role in selecting a configuration that works for your business.',
    listAriaLabel: 'Digital totem technical details',
    imageAlt: 'Two freestanding digital totems, one with a dark screen and one with a light screen.',
    features: [
      {
        title: 'Display & Resolution',
        text: 'Match the screen technology and resolution to your content and viewing distance. Full HD and 4K options provide different levels of detail for product imagery, promotional videos, and information displays, depending on the model.',
      },
      {
        title: 'Screen Brightness',
        text: 'Select brightness based on where the totem will be installed. Indoor spaces, window-facing positions, and outdoor locations have different requirements. The right brightness helps keep content readable under the expected lighting conditions.',
      },
      {
        title: 'Connectivity & Ports',
        text: 'Plan how your displays will connect to your network and external devices. Depending on the configuration, Wi-Fi and Ethernet support remote content management, while HDMI and USB provide connections for media sources and peripherals.',
      },
      {
        title: 'Power & Operating Costs',
        text: 'Consider power consumption alongside screen size, brightness, and daily operating hours. Assessing these requirements before installation helps you plan electrical access and estimate running costs across your locations.',
      },
      {
        title: 'Operating System & Compatibility',
        text: 'Choose a system that supports your signage platform and business applications. Android, Windows, or Linux configurations may be available, depending on the hardware. Compatibility should be confirmed with the software you plan to use.',
      },
      {
        title: 'Touch Technology',
        text: 'For interactive installations, select touch technology suited to the application and environment. Supported gestures, touch accuracy, and software compatibility determine how visitors browse catalogues, use maps, or access self-service information.',
      },
    ],
  },
  purchase: {
    label: 'Purchase & Rental',
    heading: 'Digital totems on your terms.',
    copy: 'Buy totems for everyday communication or discuss rental options for events and temporary campaigns. We’ll help you choose the format, placement, and content management setup that fits your plans.',
    cards: [
      { type: 'buy', label: 'BUY YOUR TOTEMS', heading: 'A permanent place for your message.', copy: 'Create a dedicated display point in your store, reception area, or shared space.', features: ['Hardware selected for your location', 'Single or double-sided configurations', 'Content management options with NeoSlide'], cta: 'Ask About Buying', intent: 'buy', serviceOption: { label: 'Digital Totems > Buy', value: 'Digital Totems > Buy', intent: 'buy' } },
      { type: 'rent', label: 'RENT YOUR TOTEMS', heading: 'A visible presence for your next event.', copy: 'Use digital totems to display promotions, programmes, and visitor information for a defined period.', features: ['Options for events and temporary campaigns', 'Display configurations suited to your venue', 'Content and scheduling requirements agreed in advance'], cta: 'Ask About Renting', intent: 'rent', serviceOption: { label: 'Digital Totems > Rent', value: 'Digital Totems > Rent', intent: 'rent' } },
      { type: 'custom', label: 'Need a custom totem?', heading: 'A design that fits your space.', copy: 'Discuss specific dimensions, finishes, branding, or installation requirements for your project.', cta: 'Discuss Your Project', intent: 'custom', serviceOption: { label: 'Digital Totems > Custom', value: 'Digital Totems > Custom', intent: 'custom' } },
    ],
  },
  industryApplications: {
    label: 'Industry Applications',
    heading: 'A place for your message in every industry.',
    copy: 'At an entrance, beside a product display, or in a busy reception area, digital totems give people information where they need it. Adapt the content and placement to your space, your visitors, and your daily operations.',
    cta: 'Explore Use Cases',
    listAriaLabel: 'Digital totem industry applications',
    cards: [
      { title: 'Retail Stores', text: 'Place totems near entrances or featured products to highlight offers, introduce new arrivals, and explain product details. Tailor the content to each store and campaign.', caseStudySlug: 'retail' },
      { title: 'Shopping Centres', text: 'Help visitors find shops, discover offers, and see what’s happening throughout the centre. Position totems at entrances and key junctions for directories, promotions, and event listings.', caseStudySlug: 'shopping-centres' },
      { title: 'Hotels & Hospitality', text: 'Welcome guests with useful information as soon as they arrive. Totems in lobbies and shared areas can display restaurant hours, hotel services, conference schedules, and local recommendations.', caseStudySlug: 'hotels' },
      { title: 'Corporate Offices', text: 'Use reception totems to welcome visitors, introduce your company, and provide directions to meeting rooms. In employee areas, display internal announcements and upcoming activities.', caseStudySlug: 'corporate' },
      { title: 'Airports & Transport Hubs', text: 'Give passengers clear directions, service notices, and travel information in busy terminals. With the appropriate data integration, totems can also display live departures and gate or platform changes.', caseStudySlug: 'transport' },
      { title: 'Events & Venues', text: 'Place totems at entrances, registration areas, and outside event rooms to display programmes, session details, and sponsor content. Adjust information as schedules and room assignments change.', caseStudySlug: 'events-venues' },
    ],
  },
  demoService: 'Digital Totems',
} as const;

export type TotemsContent = TranslationShape<typeof englishTotemsContent>;

const macedonianTotemsContent = {
  seo: {
    title: 'Дигитални тотеми | BlackBox Solutions',
    description: 'Самостојни дигитални дисплеи за промоции, известувања и информации за посетители.',
  },
  hero: {
    ariaLabel: 'Дигитални тотеми',
    headingStart: 'Вашата порака ',
    headingHighlight: 'заслужува внимание.',
    headingEnd: '',
    lead: 'Самостојни дигитални дисплеи за промоции, известувања и информации за посетителите. Искористете ги влезовите, приемните простории и заедничките простори за да прикажете содржина што лесно се менува според потребите на вашиот бизнис.',
  },
  howItWorks: {
    label: 'Како функционира',
    heading: 'Од поставување до приказ на содржината.',
    copy: 'Секој тотем поврзува професионален дисплеј со медија плеер, кој може да биде вграден или поврзан како посебен уред. Плеерот ја презема содржината од платформата за управување и ја прикажува според доделената плејлиста и распоред.',
    neoslideCardTitle: 'Управувајте со вашите тотеми',
    neoslideCardText: 'Контролирајте ја содржината и распоредот од една платформа.',
    neoslideCtaText: 'Дознај повеќе',
    visualAriaLabel: 'Илустрација на процесот за дигитални екрани',
    illustrationAriaLabel: 'Илустрација на процесот за управување со дигитални екрани',
    cards: [
      { number: '01', title: 'Поврзете го тотемот', text: 'Поврзете го дисплејот со напојување и со вашата мрежа, а потоа поврзете го медија плеерот со платформата за управување.' },
      { number: '02', title: 'Доделете плејлиста', text: 'Изберете содржина и редослед на прикажување за секој тотем или групирајте повеќе дисплеи што ќе користат иста плејлиста.' },
      { number: '03', title: 'Започнете со прикажување', text: 'Медија плеерот ја прикажува доделената содржина и ги менува содржините според поставениот распоред.' },
    ],
  },
  whyTotems: {
    label: 'Зошто дигитални тотеми?',
    heading: 'Подобра комуникација. Помалку секојдневни обврски.',
    copy: 'Дајте им поголема видливост на промоциите и корисни информации на клиентите, а на вашиот тим овозможете му полесно управување со содржината. Дигиталните тотеми ви помагаат да се приспособите на промените без секојпат да ги заменувате печатените материјали.',
    ariaLabel: 'Предности на дигиталните тотеми',
    cards: [
      { title: 'Привлечете внимание', text: 'Истакнете ги производите и понудите со слики и видеа на местата што вашите клиенти веќе ги посетуваат.' },
      { title: 'Одржувајте ги информациите актуелни', text: 'Објавувајте нови понуди, промени во распоредот и известувања преку далечинско ажурирање на сите ваши локации.' },
      { title: 'Намалете го печатењето и рачната работа', text: 'Намалете ја потребата од редовно печатење и замена на постери, заштедувајќи време на вработените и намалувајќи го отпадот од хартија.' },
      { title: 'Зајакнете го вашиот бренд', text: 'Одржувајте усогласен изглед на сите локации со одобрени визуелни решенија, промотивни материјали и пораки на брендот.' },
      { title: 'Помогнете им на клиентите да најдат одговори', text: 'Овозможете лесен пристап до насоки, детали за производите и информации за услугите, за посетителите да можат полесно да донесат одлука.' },
      { title: 'Поттикнете ја продажбата', text: 'Истакнете релевантни понуди и дополнителни производи на местото на купување за да ги поттикнете клиентите да ја разгледаат вашата понуда.' },
    ],
  },
  productOverview: {
    label: 'Преглед на производот',
    heading: 'Дисплеј со јасна намена.',
    viewer: {
      ariaLabel: 'Интерактивен 3D модел на дигитален тотем',
      loadingLabel: 'Се вчитува моделот на дигиталниот тотем…',
      errorLabel: 'Моделот на дигиталниот тотем или видеото на екранот не може да се вчита.',
    },
    paragraphs: [
      'Дигиталниот тотем е самостоен дисплеј што бизнисите го користат за промоција на производи, насочување на посетители и споделување информации. Ги заменува статичните постери со слики, видеа и известувања со кои може да се управува од далечина и да се ажурираат на повеќе локации. Во продавници, приемни простории и други деловни објекти, дигиталните тотеми им овозможуваат на тимовите да ја одржуваат содржината актуелна, без постојано печатење и замена на постери.',
      'Дигиталните тотеми најчесто имаат еден или два вертикално поставени екрани, со дизајн што може да се приспособи на различни простори и деловни потреби. Моделите за надворешна употреба имаат куќишта приспособени на условите на локацијата и барањата за поставување.',
    ],
  },
  keyFeatures: {
    label: 'Клучни карактеристики',
    heading: 'Создадени за вашиот простор. Подготвени за вашата порака.',
    copy: 'Дигиталните тотеми комбинираат јасен приказ, приспособлив дизајн и далечинско управување со содржината за секојдневна деловна комуникација. Изберете конфигурација што одговара на вашата локација, содржината и начинот на кој клиентите ја користат.',
    ariaLabel: 'Клучни карактеристики на дигиталните тотеми',
    features: [
      {
        counter: '01',
        title: 'Висококвалитетни дисплеи',
        description: 'Претставете производи, промоции и информации со јасен текст, живописни слики и видео. Резолуцијата и осветленоста на екранот може да се изберат според содржината, растојанието на гледање и осветлувањето во просторот.',
      },
      {
        counter: '02',
        title: 'Екрани на допир по избор',
        description: 'Овозможете им на посетителите да разгледуваат каталози на производи, да пребаруваат директориуми или да најдат насоки директно на екранот. Конфигурациите со екран на допир го претвораат дисплејот во практично место за самостојно информирање.',
      },
      {
        counter: '03',
        title: 'Внатрешна и надворешна употреба',
        description: 'Изберете модел соодветен за просторот, без разлика дали е приемна просторија, продавница или надворешна локација. Моделите за надворешна употреба бараат куќишта отпорни на временски влијанија и осветленост соодветна за дневна светлина.',
      },
      {
        counter: '04',
        title: 'Далечинско управување со содржината',
        description: 'Управувајте со содржината преку компатибилна платформа за дигитални дисплеи, како NeoSlide. Ажурирајте ги екраните, закажувајте кампањи и усогласувајте ги пораките на повеќе локации, без да го посетувате секој дисплеј поединечно.',
      },
      {
        counter: '05',
        title: 'Модуларен дизајн',
        description: 'Модуларната конструкција овозможува полесен пристап, одржување и замена на компонентите. Воедно, овозможува надградба на хардверот според промените во потребите на вашиот бизнис.',
      },
      {
        counter: '06',
        title: 'Едностран или двостран приказ',
        description: 'Прикажувајте содржина во една насока или привлечете го вниманието на луѓето што пристапуваат од двете страни. Изберете распоред на екраните што најдобро ја користи видливоста на влезовите, премините и отворените простори.',
      },
    ],
  },
  technicalDetails: {
    label: 'Технички детали',
    heading: 'Соодветни спецификации за вашиот бизнис.',
    copy: 'Изберете дигитален тотем што одговара на вашата локација, содржината и секојдневните работни потреби. Квалитетот на приказот, поврзувањето и софтверската компатибилност се важни при изборот на конфигурација што ќе одговара на вашиот бизнис.',
    listAriaLabel: 'Технички детали за дигитални тотеми',
    imageAlt: 'Два самостојни дигитални тотеми, едниот со темен, а другиот со светол екран.',
    features: [
      {
        title: 'Дисплеј и резолуција',
        text: 'Изберете технологија на екран и резолуција според содржината и растојанието на гледање. Во зависност од моделот, опциите со Full HD и 4K нудат различни нивоа на деталност за фотографии на производи, промотивни видеа и информативни содржини.',
      },
      {
        title: 'Осветленост на екранот',
        text: 'Изберете осветленост според местото каде што ќе биде поставен тотемот. Затворените простории, излозите и надворешните локации имаат различни барања. Соодветната осветленост помага содржината да остане читлива во предвидените светлосни услови.',
      },
      {
        title: 'Поврзување и приклучоци',
        text: 'Испланирајте како дисплеите ќе се поврзат со вашата мрежа и надворешните уреди. Во зависност од конфигурацијата, Wi-Fi и Ethernet овозможуваат далечинско управување со содржината, додека HDMI и USB служат за поврзување извори на медиумска содржина и периферни уреди.',
      },
      {
        title: 'Потрошувачка и оперативни трошоци',
        text: 'Разгледајте ја потрошувачката на електрична енергија според големината на екранот, осветленоста и дневните часови на работа. Проценката на овие потреби пред поставувањето ви помага да го испланирате напојувањето и да ги предвидите трошоците за работа на сите локации.',
      },
      {
        title: 'Оперативен систем и компатибилност',
        text: 'Изберете систем што ја поддржува вашата платформа за дигитални дисплеи и деловните апликации. Во зависност од хардверот, може да бидат достапни конфигурации со Android, Windows или Linux. Компатибилноста треба да се потврди со софтверот што планирате да го користите.',
      },
      {
        title: 'Технологија на допир',
        text: 'За интерактивни инсталации, изберете технологија на допир соодветна на намената и условите на користење. Поддржаните гестови, прецизноста на допирот и софтверската компатибилност влијаат на тоа како посетителите разгледуваат каталози, користат мапи или самостојно пристапуваат до информации.',
      },
    ],
  },
  purchase: {
    label: 'Купување и изнајмување',
    heading: 'Дигитални тотеми според вашите потреби.',
    copy: 'Купете тотеми за секојдневна комуникација или разгледајте можности за изнајмување за настани и привремени кампањи. Ќе ви помогнеме да ги изберете форматот, местоположбата и начинот на управување со содржината.',
    cards: [
      { type: 'buy', label: 'КУПЕТЕ ТОТЕМИ', heading: 'Постојано место за вашата порака.', copy: 'Создајте наменско место за прикажување содржини во вашата продавница, приемна просторија или заеднички простор.', features: ['Опрема соодветна на вашата локација', 'Еднострани или двострани конфигурации', 'Можности за управување со содржината преку NeoSlide'], cta: 'Прашајте за купување', intent: 'buy', serviceOption: { label: 'Digital Totems > Купување', value: 'Digital Totems > Buy', intent: 'buy' } },
      { type: 'rent', label: 'ИЗНАЈМЕТЕ ТОТЕМИ', heading: 'Бидете забележани на следниот настан.', copy: 'Користете дигитални тотеми за промоции, програми и информации за посетителите во определен период.', features: ['Можности за настани и привремени кампањи', 'Конфигурации соодветни на просторот', 'Однапред договорени содржини и распоред на прикажување'], cta: 'Прашајте за изнајмување', intent: 'rent', serviceOption: { label: 'Digital Totems > Изнајмување', value: 'Digital Totems > Rent', intent: 'rent' } },
      { type: 'custom', label: 'Ви треба тотем по мерка?', heading: 'Дизајн што се вклопува во вашиот простор.', copy: 'Разговарајте со нас за посебни димензии, завршна обработка, брендирање или специфични услови за поставување.', cta: 'Разговарајте со нас', intent: 'custom', serviceOption: { label: 'Digital Totems > По мерка', value: 'Digital Totems > Custom', intent: 'custom' } },
    ],
  },
  industryApplications: {
    label: 'Примена по дејности',
    heading: 'Вашата порака на вистинското место.',
    copy: 'На влез, покрај изложените производи или во прометна приемна просторија, дигиталните тотеми ги прават информациите достапни таму каде што се потребни. Приспособете ги содржината и поставеноста на вашиот простор, посетителите и секојдневното работење.',
    cta: 'Погледнете ја примената',
    listAriaLabel: 'Примена на дигиталните тотеми по дејности',
    cards: [
      { title: 'Продавници', text: 'Поставете тотеми на влезовите или покрај избрани производи за да истакнете понуди, претставите новитети и прикажете детали за производите. Приспособете ја содржината на секоја продавница и кампања.', caseStudySlug: 'retail' },
      { title: 'Трговски центри', text: 'Помогнете им на посетителите да најдат продавници, да откријат понуди и да се информираат за настаните во центарот. Поставете тотеми на влезовите и на клучните раскрсници за приказ на мапи, промоции и најави за настани.', caseStudySlug: 'shopping-centres' },
      { title: 'Хотели и угостителство', text: 'Пречекајте ги гостите со корисни информации уште при пристигнувањето. Тотемите во лобијата и заедничките простори можат да прикажуваат работно време на рестораните, хотелски услуги, конференциски програми и препораки за локални места и активности.', caseStudySlug: 'hotels' },
      { title: 'Деловни простории', text: 'Користете тотеми на рецепцијата за да им посакате добредојде на посетителите, да ја претставите компанијата и да ги насочите кон салите за состаноци. Во просториите за вработени, прикажувајте интерни известувања и претстојни активности.', caseStudySlug: 'corporate' },
      { title: 'Аеродроми и транспортни центри', text: 'Овозможете им на патниците јасни насоки, известувања за услугите и патни информации во прометните терминали. Со соодветно поврзување со изворите на податоци, тотемите можат да прикажуваат и ажурирани поаѓања и промени на излезите или пероните.', caseStudySlug: 'transport' },
      { title: 'Настани и сали', text: 'Поставете тотеми на влезовите, местата за регистрација и пред салите за да прикажувате програми, детали за сесиите и спонзорски содржини. Ажурирајте ги информациите при промени во распоредот или распределбата на салите.', caseStudySlug: 'events-venues' },
    ],
  },
  demoService: 'Дигитални тотеми',
} as const;

export const totemsContent: Localized<TotemsContent> = {
  en: englishTotemsContent,
  mk: macedonianTotemsContent,
};
