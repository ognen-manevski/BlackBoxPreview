import corporateImage from '../../../assets/images/services/neoslide/usecases/corporate.jpg';
import educationImage from '../../../assets/images/services/neoslide/usecases/education.jpg';
import eventsImage from '../../../assets/images/services/neoslide/usecases/events.jpg';
import financeImage from '../../../assets/images/services/neoslide/usecases/finance.jpg';
import governmentImage from '../../../assets/images/services/neoslide/usecases/gov.jpg';
import healthcareImage from '../../../assets/images/services/neoslide/usecases/healthcare.jpg';
import hospitalityImage from '../../../assets/images/services/neoslide/usecases/hospitality-2.jpg';
import publicAdvertisingImage from '../../../assets/images/services/neoslide/usecases/public.jpg';
import restaurantsImage from '../../../assets/images/services/neoslide/usecases/restaurants.jpg';
import retailMarketImage from '../../../assets/images/services/neoslide/usecases/retail-market.jpg';
import storefrontImage from '../../../assets/images/services/neoslide/usecases/storefront.jpg';
import totemsRetailImage from '../../../assets/images/services/neoslide/usecases/totems-retail-boutique.jpg';
import totemsShoppingCentresImage from '../../../assets/images/services/neoslide/usecases/totems-shopping-centres-wayfinding.jpg';
import sportsImage from '../../../assets/images/services/neoslide/usecases/sports.jpg';
import transportationImage from '../../../assets/images/services/neoslide/usecases/transport.jpg';
import totemsCorporateImage from '../../../content/blog/corporate/digital-totem-office.webp';

export { storefrontImage, totemsCorporateImage, totemsRetailImage, totemsShoppingCentresImage };

export interface IndustrySolutionItem {
  number: string;
  title: string;
  excerpt: string;
  imageSrc: string;
  imageAlt: string;
  caseStudySlug?: string;
}

export interface IndustryMetricItem {
  value: string;
  label: string;
}

export const industrySolutions: IndustrySolutionItem[] = [
  {
    number: '01',
    title: 'Retail & Shopping',
    excerpt:
      'Promote offers, new arrivals and in-store campaigns while guiding customers through stores, malls and shopping destinations.',
    imageSrc: retailMarketImage.src,
    imageAlt: 'Digital signage totem promoting fresh produce in a market',
    caseStudySlug: 'retail',
  },
  {
    number: '02',
    title: 'Hospitality',
    excerpt:
      'Welcome guests with branded information, wayfinding, event schedules and timely updates across hotels, resorts and shared spaces.',
    imageSrc: hospitalityImage.src,
    imageAlt: 'Digital signage display in a hospitality venue',
    caseStudySlug: 'hotels',
  },
  {
    number: '03',
    title: 'Healthcare',
    excerpt:
      'Guide patients with appointment information, queue updates, wayfinding and important notices throughout clinics, hospitals and waiting areas.',
    imageSrc: healthcareImage.src,
    imageAlt: 'Digital signage display in a healthcare setting',
    caseStudySlug: 'healthcare',
  },
  {
    number: '04',
    title: 'Corporate',
    excerpt:
      'Keep teams connected with company news, performance dashboards, meeting information and announcements across offices and shared workspaces.',
    imageSrc: corporateImage.src,
    imageAlt: 'Digital signage display in a corporate office space',
    caseStudySlug: 'corporate',
  },
  {
    number: '05',
    title: 'Education',
    excerpt:
      'Share schedules, campus news, events, wayfinding and urgent announcements across schools, universities and educational facilities.',
    imageSrc: educationImage.src,
    imageAlt: 'Digital signage display in an educational facility',
    caseStudySlug: 'education',
  },
  {
    number: '06',
    title: 'Transportation',
    excerpt:
      'Deliver live departures, arrivals, route changes, wayfinding and passenger information across stations, terminals and transit networks.',
    imageSrc: transportationImage.src,
    imageAlt: 'Digital signage display in a transportation hub',
    caseStudySlug: 'transport',
  },
  {
    number: '07',
    title: 'Restaurants & Cafés',
    excerpt:
      'Update menus, pricing, specials and promotions instantly across counters, menu boards and customer-facing displays.',
    imageSrc: restaurantsImage.src,
    imageAlt: 'Digital signage display in a restaurant or cafe',
    caseStudySlug: 'restaurants',
  },
  {
    number: '08',
    title: 'Sports & Events',
    excerpt:
      'Power sports halls and venues with live scoring displays, perimeter LED boards, schedules, sponsor content and clear information for every fan.',
    imageSrc: sportsImage.src,
    imageAlt: 'Digital signage displays in a sports and events venue',
    caseStudySlug: 'sports-events',
  },
  {
    number: '09',
    title: 'Government & Public Services',
    excerpt:
      'Communicate service information, queue status, public announcements and emergency notices clearly across municipal and government facilities.',
    imageSrc: governmentImage.src,
    imageAlt: 'Digital signage display in a government facility',
    caseStudySlug: 'institutions',
  },
  {
    number: '10',
    title: 'Events & Venues',
    excerpt:
      'Guide visitors with schedules, directions, live updates, sponsor content and promotions across events, exhibitions and entertainment venues.',
    imageSrc: eventsImage.src,
    imageAlt: 'Digital signage display at an event venue',
    caseStudySlug: 'events-venues',
  },
  {
    number: '11',
    title: 'Banking & Finance',
    excerpt:
      'Display rates, services, queue information and targeted campaigns while keeping branch communication current throughout the day.',
    imageSrc: financeImage.src,
    imageAlt: 'Digital signage display in a banking environment',
    caseStudySlug: 'banking-finance',
  },
  {
    number: '12',
    title: 'Public Advertising',
    excerpt:
      'Run high-impact campaigns across digital billboards, street furniture and public displays, with content scheduled by location and time.',
    imageSrc: publicAdvertisingImage.src,
    imageAlt: 'Digital signage display used for public advertising',
    caseStudySlug: 'public-advertising',
  },
];

export const industryMetrics: IndustryMetricItem[] = [
  {
    value: '400%',
    label: 'More attention than static advertising',
  },
  {
    value: '33%',
    label: 'Higher retail foot traffic',
  },
  {
    value: '83%',
    label: 'Better brand recall with digital displays',
  },
  {
    value: '24/7',
    label: 'Automated content updates',
  },
  {
    value: '100%',
    label: 'Centralized control across every display',
  },
  {
    value: 'Real-time',
    label: 'Dynamic content synchronization',
  },
];

const mkIndustryCopy = [
  ['Малопродажба и трговски центри','Промовирајте понуди, нови производи и кампањи, а истовремено насочувајте ги купувачите низ продавниците и трговските центри.','Дигитален тотем со промоција на свежи производи во маркет'],
  ['Хотелиерство','Пречекајте ги гостите со брендирани информации, насоки, распореди и навремени известувања во хотели, ресорти и заеднички простори.','Digital signage дисплеј во хотелски објект'],
  ['Здравство','Насочувајте ги пациентите со информации за термини, редици, ориентација и важни известувања во клиники, болници и чекални.','Digital signage дисплеј во здравствена установа'],
  ['Корпоративни средини','Поврзете ги тимовите со компаниски новости, dashboard-и, информации за состаноци и известувања низ канцелариите.','Digital signage дисплеј во канцелариски простор'],
  ['Образование','Споделувајте распореди, новости, настани, насоки и итни известувања во училишта, универзитети и образовни објекти.','Digital signage дисплеј во образовна установа'],
  ['Транспорт','Прикажувајте поаѓања, пристигнувања, промени на линии, насоки и патнички информации во реално време.','Digital signage дисплеј во транспортен центар'],
  ['Ресторани и кафулиња','Ажурирајте менија, цени, специјални и промотивни понуди веднаш, на сите мени-екрани и дисплеи за гости.','Digital signage дисплеј во ресторан или кафуле'],
  ['Спорт и настани','Управувајте со спортски сали и објекти преку резултати во живо, LED панели покрај теренот, распореди, спонзорска содржина и јасни информации за публиката.','Digital signage дисплеи во спортски објект или настан'],
  ['Државни и јавни услуги','Јасно комуницирајте услужни информации, статус на редици, јавни и итни известувања во општински и државни објекти.','Digital signage дисплеј во државен објект'],
  ['Настани и објекти','Насочувајте ги посетителите со распореди, насоки, ажурирања во живо, спонзорска содржина и промоции.','Digital signage дисплеј на место за настани'],
  ['Банкарство и финансии','Прикажувајте курсеви, услуги, информации за редици и таргетирани кампањи со секогаш ажурна комуникација.','Digital signage дисплеј во банка'],
  ['Јавно огласување','Спроведувајте впечатливи кампањи на дигитални билборди и јавни дисплеи, закажани според локација и време.','Digital signage дисплеј за јавно огласување'],
] as const;
export const macedonianIndustrySolutions: IndustrySolutionItem[] = industrySolutions.map((item,index)=>({...item,title:mkIndustryCopy[index][0],excerpt:mkIndustryCopy[index][1],imageAlt:mkIndustryCopy[index][2]}));
export const macedonianIndustryMetrics: IndustryMetricItem[] = [
  {value:'400%',label:'Повеќе внимание од статичното огласување'},{value:'33%',label:'Поголема посетеност во малопродажбата'},{value:'83%',label:'Подобро препознавање на брендот со дигитални дисплеи'},{value:'24/7',label:'Автоматско ажурирање на содржината'},{value:'100%',label:'Централизирана контрола на сите дисплеи'},{value:'Во реално време',label:'Динамична синхронизација на содржината'},
];

export const industryImageMetadata = new Map([corporateImage, educationImage, eventsImage, financeImage, governmentImage, healthcareImage, hospitalityImage, publicAdvertisingImage, restaurantsImage, retailMarketImage, storefrontImage, totemsCorporateImage, totemsRetailImage, totemsShoppingCentresImage, sportsImage, transportationImage].map(image => [image.src, image]));
