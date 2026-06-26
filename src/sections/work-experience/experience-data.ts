import type { Experience } from '@/sections/work-experience/types';

import adobeLogo from '@/assets/work-experience/adobe.svg';
import dribbbleLogo from '@/assets/work-experience/dribbble.svg';
import dropboxLogo from '@/assets/work-experience/dropbox.svg';
import paypalLogo from '@/assets/work-experience/paypal.svg';

import officeOne from '@/assets/work-experience/adobe-office.svg';
import officeTwo from '@/assets/work-experience/dribbble-office.svg';
import officeThree from '@/assets/work-experience/dropbox-office.svg';
import officeFour from '@/assets/work-experience/paypal-office.svg';

export const experiences: Experience[] = [
  {
    id: 1,
    company: 'Adobe',
    logo: adobeLogo,
    image: officeOne,
    period: '2025 - Present',
    role: 'Frontend Developer',
    description:
      'Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences.',
    active: true,
  },

  {
    id: 2,
    company: 'Dribbble',
    logo: dribbbleLogo,
    image: officeTwo,
    period: '2025 - Present',
    role: 'Frontend Developer',
    description:
      'Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences.',
  },

  {
    id: 3,
    company: 'Dropbox',
    logo: dropboxLogo,
    image: officeThree,
    period: '2025 - Present',
    role: 'Frontend Developer',
    description:
      'Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences.',
  },

  {
    id: 4,
    company: 'PayPal',
    logo: paypalLogo,
    image: officeFour,
    period: '2025 - Present',
    role: 'Frontend Developer',
    description:
      'Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences.',
  },
];

console.log(experiences);
