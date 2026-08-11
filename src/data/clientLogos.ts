import halkbankLogo from '../assets/images/company-logos/clients/2x1/halkbank.png';
import neotelLogo from '../assets/images/company-logos/clients/2x1/neotel.png';
import popovLogo from '../assets/images/company-logos/clients/2x1/popov.png';
import specialOlympicsLogo from '../assets/images/company-logos/clients/2x1/special-olympics.png';
import vinartLogo from '../assets/images/company-logos/clients/2x1/vinart.png';
import sparkasseLogo from '../assets/images/company-logos/clients/2x1/logo_sparkasse-white.png';

export interface ClientLogoItem {
  name: string;
  href: string;
  src: string;
}

export const clientLogos: ClientLogoItem[] = [
    {
    name: 'Sparkasse Bank',
    href: 'https://www.sparkasse.mk/mk/',
    src: sparkasseLogo.src,
  },
  // {
  //   name: 'Halkbank',
  //   href: 'https://www.halkbank.mk/',
  //   src: halkbankLogo.src,
  // },
  {
    name: 'Neotel',
    href: 'https://neotel.mk/',
    src: neotelLogo.src,
  },
  {
    name: 'Popov',
    href: 'http://popovwinery.com.mk/',
    src: popovLogo.src,
  },
  {
    name: 'Special Olympics',
    href: 'https://som.mk/',
    src: specialOlympicsLogo.src,
  },
  {
    name: 'Vinart',
    href: 'http://www.vinart.com.mk/eng/default.aspx',
    src: vinartLogo.src,
  },
];