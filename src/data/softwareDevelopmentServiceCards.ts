export interface SoftwareDevelopmentServiceCardItem {
  counter: string;
  title: string;
  description: string;
}

export const softwareDevelopmentServiceCards: SoftwareDevelopmentServiceCardItem[] = [
  {
    counter: '01',
    title: 'Custom Application Development',
    description:
      "We build web applications, business platforms, customer portals, and internal tools tailored to your organization's processes. Every solution is designed to improve efficiency, automate workflows, and support future growth.",
  },
  {
    counter: '02',
    title: 'Modern Frontend Development',
    description:
      'Fast, responsive, and accessible interfaces that provide intuitive user experiences across desktop and mobile devices. We transform designs into production-ready applications using modern development standards.',
  },
  {
    counter: '03',
    title: 'Scalable Backend Systems',
    description:
      'Reliable APIs, databases, authentication, integrations, and cloud infrastructure that power your applications securely and efficiently. Our backend architecture is built for performance, scalability, and long-term maintainability.',
  },
  {
    counter: '04',
    title: 'System Integrations',
    description:
      'Connect your software with CRMs, ERPs, payment providers, third-party APIs, IoT devices, and other business systems to create a unified digital ecosystem.',
  },
];
