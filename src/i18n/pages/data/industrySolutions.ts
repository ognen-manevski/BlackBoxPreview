import corporateImage from '../../../assets/images/services/neoslide/usecases/corporate.jpg';
import educationImage from '../../../assets/images/services/neoslide/usecases/education.jpg';
import eventsImage from '../../../assets/images/services/neoslide/usecases/events.jpg';
import financeImage from '../../../assets/images/services/neoslide/usecases/finance.jpg';
import governmentImage from '../../../assets/images/services/neoslide/usecases/gov.jpg';
import healthcareImage from '../../../assets/images/services/neoslide/usecases/healthcare.jpg';
import hospitalityImage from '../../../assets/images/services/neoslide/usecases/hospitality-2.jpg';
import publicAdvertisingImage from '../../../assets/images/services/neoslide/usecases/public.jpg';
import realEstateImage from '../../../assets/images/services/neoslide/usecases/public.jpg';
import restaurantsImage from '../../../assets/images/services/neoslide/usecases/restaurants.jpg';
import retailImage from '../../../assets/images/services/neoslide/usecases/storefront.jpg';
import sportsImage from '../../../assets/images/services/neoslide/usecases/sports.jpg';
import transportationImage from '../../../assets/images/services/neoslide/usecases/transport.jpg';

export interface IndustrySolutionItem {
  number: string;
  title: string;
  excerpt: string;
  imageSrc: string;
  imageAlt: string;
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
    imageSrc: retailImage.src,
    imageAlt: 'Digital signage display in a retail shopping environment',
  },
  {
    number: '02',
    title: 'Hospitality',
    excerpt:
      'Welcome guests with branded information, wayfinding, event schedules and timely updates across hotels, resorts and shared spaces.',
    imageSrc: hospitalityImage.src,
    imageAlt: 'Digital signage display in a hospitality venue',
  },
  {
    number: '03',
    title: 'Healthcare',
    excerpt:
      'Guide patients with appointment information, queue updates, wayfinding and important notices throughout clinics, hospitals and waiting areas.',
    imageSrc: healthcareImage.src,
    imageAlt: 'Digital signage display in a healthcare setting',
  },
  {
    number: '04',
    title: 'Corporate',
    excerpt:
      'Keep teams connected with company news, performance dashboards, meeting information and announcements across offices and shared workspaces.',
    imageSrc: corporateImage.src,
    imageAlt: 'Digital signage display in a corporate office space',
  },
  {
    number: '05',
    title: 'Education',
    excerpt:
      'Share schedules, campus news, events, wayfinding and urgent announcements across schools, universities and educational facilities.',
    imageSrc: educationImage.src,
    imageAlt: 'Digital signage display in an educational facility',
  },
  {
    number: '06',
    title: 'Transportation',
    excerpt:
      'Deliver live departures, arrivals, route changes, wayfinding and passenger information across stations, terminals and transit networks.',
    imageSrc: transportationImage.src,
    imageAlt: 'Digital signage display in a transportation hub',
  },
  {
    number: '07',
    title: 'Restaurants & Cafés',
    excerpt:
      'Update menus, pricing, specials and promotions instantly across counters, menu boards and customer-facing displays.',
    imageSrc: restaurantsImage.src,
    imageAlt: 'Digital signage display in a restaurant or cafe',
  },
  {
    number: '08',
    title: 'Public Advertising',
    excerpt:
      'Run high-impact campaigns across digital billboards, street furniture and public displays, with content scheduled by location and time.',
    imageSrc: sportsImage.src,
    imageAlt: 'Digital signage display used for public advertising',
  },
  {
    number: '09',
    title: 'Government & Public Services',
    excerpt:
      'Communicate service information, queue status, public announcements and emergency notices clearly across municipal and government facilities.',
    imageSrc: governmentImage.src,
    imageAlt: 'Digital signage display in a government facility',
  },
  {
    number: '10',
    title: 'Events & Venues',
    excerpt:
      'Guide visitors with schedules, directions, live updates, sponsor content and promotions across events, exhibitions and entertainment venues.',
    imageSrc: eventsImage.src,
    imageAlt: 'Digital signage display at an event venue',
  },
  {
    number: '11',
    title: 'Banking & Finance',
    excerpt:
      'Display rates, services, queue information and targeted campaigns while keeping branch communication current throughout the day.',
    imageSrc: financeImage.src,
    imageAlt: 'Digital signage display in a banking environment',
  },
  {
    number: '12',
    title: 'Real Estate & Property',
    excerpt:
      'Showcase listings, developments and property information while powering directories and visitor communication across offices, lobbies and residential spaces.',
    imageSrc: realEstateImage.src,
    imageAlt: 'Digital signage display in a property or lobby setting',
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
