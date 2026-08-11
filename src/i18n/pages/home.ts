import type { Localized } from '../types';
import { englishTechnologyGridContent } from '../technology';

export const englishHomeContent = {
  seo: {
    title: 'BlackBox Solutions — Custom Software & Digital Products',
    description: 'BlackBox Solutions builds custom software, digital signage platforms, electronic shelf labels, and live video streaming tools for modern businesses.',
  },
  hero: {
    ariaLabel: 'Hero', rating: '4.9', stars: '★★★★★', trustedCount: '50+', trustedLabel: 'Trusted by', trustedLabelSecondLine: 'top companies',
    headlineStart: 'Modern technology that helps your business ', highlights: ['communicate,', 'automate,', 'grow.'], conjunction: 'and',
    lead: 'We help you modernize with digital signage, electronic shelf labels, video streaming, and custom software built around the way you work.',
    primaryCta: 'Book a Free Demo', secondaryCta: 'Find Out More', ctaNote: 'Easy application, free of charge.',
    carouselAriaLabel: 'Services showcase', slideRole: 'slide', slideIndicators: 'Slide indicators',
    slides: ['NeoSlide — Digital Signage', 'Electronic Shelf Labels', 'Video Streaming', 'Custom Software Development'],
  },
  about: {
    label: 'About BlackBox', heading: 'Technology that works for your business.',
    copy: 'We deliver scalable digital solutions that improve communication, streamline workflows, and enhance business operations across different industries, helping organizations operate more efficiently and adapt to the ever-evolving digital demands.',
    cardsAriaLabel: 'Mission and vision', missionTitle: 'Mission', missionCopy: 'BlackBox Solutions is committed to helping businesses improve efficiency, connectivity, and digital presence by delivering reliable, user-focused technology solutions tailored to real-world needs.',
    visionTitle: 'Vision', visionCopy: 'To become a leading provider of modern business technology solutions by building digital systems that are innovative, scalable, and designed for the future.',
    videoAriaLabel: 'BlackBox logo cube looping animation', logosAriaLabel: 'Client logos carousel', principlesAriaLabel: 'Core principles',
    principles: [
      { number: '01', title: 'Business-first approach', text: 'Every solution starts with understanding your workflow and objectives.' },
      { number: '02', title: 'Built to scale', text: 'Flexible architectures designed to grow alongside your business.' },
      { number: '03', title: 'Long-term partnership', text: 'We continue supporting and improving your software long after launch.' },
    ],
  },
  services: {
    label: 'Our Services', heading: 'Technology built around your business goals', intro: 'Looking to transform your business operations?',
    copy: 'Our suite of digitalization products can help you do just that. From engaging digital signage to real-time pricing automation, live video streaming, and custom software solutions, we offer a range of products that can streamline and enhance your business processes.',
    learnMore: 'Learn more', openPrefix: 'Open',
    items: [
      { counter: '01', title: 'NeoSlide - Digital signage', description: 'Our cloud digital signage platform allows you to create and manage dynamic, engaging content that can be displayed on screens anywhere in the world. With easy scheduling and real-time updates, you can communicate your message effectively and efficiently.', href: '/neoslide-digital-signage' },
      { counter: '02', title: 'Electronic Shelf Labels', description: 'Tired of manual price adjustments? Our real-time pricing automation platform automates the process, allowing you to respond to market changes in real-time.', href: '/electronic-shelf-label' },
      { counter: '03', title: 'Video live-streaming', description: 'Our live video-streaming service allows you to share your message with a global audience, whether you are hosting a webinar, conference, or live performance.', href: '/video-streaming' },
      { counter: '04', title: 'Software development', description: 'With our software development service, you can streamline your operations and enhance your customer experience. Our team of developers can create custom software solutions that fit your unique needs, so you can focus on growing your business.', href: '/software-development' },
    ],
  },
  caseStudies: {
    label: 'Case studies', heading: 'Digital solutions in action', copy: 'From signage and shelf labels to custom software and streaming platforms, BlackBox builds practical systems that streamline business operations.', viewAll: 'View all', readMore: 'Read more', gridAriaLabel: 'Latest blog case studies',
    posts: [
      { number: '01', title: 'Retail Pricing Automation at Scale', excerpt: 'Placeholder summary for a case study focused on real-time shelf pricing updates across multi-location stores.', href: '/blog/retail-pricing-automation-at-scale', thumbnailAlt: 'Placeholder thumbnail for retail pricing automation case study' },
      { number: '02', title: 'Digital Signage for Franchised Networks', excerpt: 'Placeholder summary for a case study covering centralized content scheduling and localized screen messaging.', href: '/blog/digital-signage-for-franchised-networks', thumbnailAlt: 'Placeholder thumbnail for digital signage case study' },
      { number: '03', title: 'Live Event Streaming with Low Latency', excerpt: 'Placeholder summary for a case study on delivering stable video streams across web, in-store, and mobile endpoints.', href: '/blog/live-event-streaming-with-low-latency', thumbnailAlt: 'Placeholder thumbnail for live streaming case study' },
      { number: '04', title: 'Custom Internal Tools for Operations', excerpt: 'Placeholder summary for a case study describing workflow automation and analytics dashboards for operations teams.', href: '/blog/custom-internal-tools-for-operations', thumbnailAlt: 'Placeholder thumbnail for custom software case study' },
    ],
  },
  whyChoose: {
    label: 'Why Choose Us', heading: 'Technology that solves real business challenges, built to scale with your growth',
    copy: 'We combine strategy, design, and development to create digital solutions that improve efficiency, strengthen customer experiences, and support long-term business growth.',
    copySecondLine: 'Every project is focused on measurable results, not unnecessary complexity.', ariaLabel: 'Why choose us key metrics',
    stats: [
      { value: '56+', label: 'Successful\nprojects delivered' }, { value: '20+', label: 'Businesses\nsupported' },
      { value: '10+', label: 'Years of combined industry experience' }, { value: '95%', label: 'Client\nsatisfaction rate' },
      { value: '100%', label: 'Tailored solutions,\nnever one-size-fits-all' },
    ],
  },
  partners: { label: 'Our Partners', heading: 'Trusted by teams building better digital operations', copy: 'BlackBox works with organizations that need reliable software, digital signage, retail automation, and streaming infrastructure.', gridAriaLabel: 'Partner logos' },
  technology: { grid: englishTechnologyGridContent, label: 'Technology', heading: 'Technology that solves real business problems.', copy: "BlackBox combines strategy, design, and engineering to create scalable digital solutions tailored to each client's needs. Our team works with proven technologies across web, mobile, cloud, AI, and enterprise systems to build reliable products that grow with your business." },
  faq: {
    label: 'FAQs', heading: 'We’ve Got the Answers You’re Looking For', copy: 'Quick answers to your technology and implementation questions, from planning and integrations to support after launch.', listAriaLabel: 'Frequently asked questions', contactAriaLabel: 'Contact prompt', contactHeading: 'Still have questions?', contactCopy: 'Our team is happy to help. Reach out to us and we’ll get back to you with the information you need.', contactCta: 'Let’s Have a Chat',
    items: [
      { question: 'What digital solutions does BlackBox build?', answer: 'BlackBox develops custom software, cloud-based digital signage platforms, electronic shelf label (ESL) solutions, and tailored OTT video streaming systems for businesses that require reliable, scalable digital infrastructure.' },
      { question: 'How does NeoSlide digital signage work?', answer: 'NeoSlide is a cloud-based digital signage platform that lets you manage and update content across one or thousands of displays from a single dashboard. Schedule campaigns, monitor devices remotely, and publish new content instantly without visiting each location.' },
      { question: 'Can electronic shelf labels update prices in real time?', answer: 'Yes. Our electronic shelf label (ESL) solutions synchronize with your inventory or POS system to update prices automatically across every display. This eliminates manual price changes, improves accuracy, and saves valuable staff time.' },
      { question: 'Do you build custom software for unique workflows?', answer: 'Absolutely. Every business operates differently, which is why we develop custom software tailored to your specific processes, integrations, and business goals. From internal management tools to customer-facing platforms, every solution is built around your requirements.' },
      { question: 'Can BlackBox support live video streaming projects?', answer: 'Yes. We develop secure, scalable OTT and live video streaming solutions for broadcasters, businesses, educational institutions, and event organizers. Our platforms support live broadcasts, on-demand content, user management, and reliable content delivery across multiple devices.' },
    ],
  },
  contact: {
    label: 'Contact', heading: 'Let’s talk about your next digital project', copy: 'Looking to transform your business operations? Share what you are building and our team will help you shape the right software, signage, shelf-label, or streaming solution.',
    subscribe: 'Subscribe', subscribeConsent: 'By subscribing you agree to the', privacyPolicy: 'Privacy Policy', directAriaLabel: 'Direct contact methods', phoneLabel: 'Phone number', emailDirectLabel: 'E-mail address',
    nameLabel: 'Your name', namePlaceholder: 'Alex Morgan', emailLabel: 'Email address', emailPlaceholder: 'you@company.com', projectLabel: 'Project details', projectPlaceholder: 'Tell us about your project, goals, timeline, or the business process you want to improve.', addFile: 'Add a file', send: 'Send message', reset: 'Reset form', formConsent: 'By sending this e-mail you agree to the',
  },
} as const;

export type HomePageContent = typeof englishHomeContent;
export const homePageContent: Localized<HomePageContent> = {
  en: englishHomeContent,
  // TODO: replace this English fallback with approved Macedonian homepage copy.
  mk: englishHomeContent,
};
