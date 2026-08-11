import type { Localized } from '../types';
import { englishTechnologyGridContent } from '../technology';
export const englishSoftwareDevelopmentContent = {
  seo: { title: 'Software Development | BlackBox Solutions', description: 'Custom software development services tailored to your business workflows, systems, and long-term growth goals.' },
  hero: { ariaLabel: 'Software development hero', titleStart: 'Software built around ', highlight: 'your business', titleEnd: ', not the other way around.', paragraphs: ['From internal business platforms to customer-facing applications, we design and develop scalable software that solves real operational challenges.', 'Every solution is tailored to your workflows, integrates with your existing systems, and is built for long-term growth.'] },
  technology: { grid: englishTechnologyGridContent, label: 'Technology Stack', heading: 'The right technology for every project.', copy: 'Every business has different technical requirements. Our team works across modern frontend, backend, cloud, and mobile technologies to build secure, high-performance applications without being limited to a single programming language or framework.' },
  services: { label: 'What We Offer', heading: 'Full-Cycle Digital Product Development', copy: 'We combine strategic design with robust engineering to build scalable digital products. From initial UI/UX concepts to powerful frontend and backend architecture, we deliver tailored solutions that drive business growth.', ariaLabel: 'Software development services', cards: [
    { counter: '01', title: 'Custom Application Development', description: "We build web applications, business platforms, customer portals, and internal tools tailored to your organization's processes. Every solution is designed to improve efficiency, automate workflows, and support future growth." },
    { counter: '02', title: 'Modern Frontend Development', description: 'Fast, responsive, and accessible interfaces that provide intuitive user experiences across desktop and mobile devices. We transform designs into production-ready applications using modern development standards.' },
    { counter: '03', title: 'Scalable Backend Systems', description: 'Reliable APIs, databases, authentication, integrations, and cloud infrastructure that power your applications securely and efficiently. Our backend architecture is built for performance, scalability, and long-term maintainability.' },
    { counter: '04', title: 'System Integrations', description: 'Connect your software with CRMs, ERPs, payment providers, third-party APIs, IoT devices, and other business systems to create a unified digital ecosystem.' },
  ] }, demoService: 'Custom Software',
} as const;
export type SoftwareDevelopmentContent = typeof englishSoftwareDevelopmentContent;
export const softwareDevelopmentContent: Localized<SoftwareDevelopmentContent> = { en: englishSoftwareDevelopmentContent, mk: englishSoftwareDevelopmentContent };
