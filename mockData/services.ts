// mockData/services.ts
export interface Service {
  icon: string; // Placeholder for icon, e.g., component or class name
  title: string;
  description: string;
  link: string;
}

export const servicesData: Service[] = [
  {
    icon: 'MobileIcon', // Replace with actual icon components or paths
    title: 'Mobile Development',
    description: 'Native and cross-platform solutions with React Native and Flutter',
    link: '/services/mobile-development',
  },
  {
    icon: 'WebIcon', // Replace with actual icon components or paths
    title: 'Web Development',
    description: 'Modern web applications with React and Next.js',
    link: '/services/web-development',
  },
  {
    icon: 'DesignIcon', // Replace with actual icon components or paths
    title: 'UI/UX Design',
    description: 'User-centered design solutions that engage and convert',
    link: '/services/ui-ux-design',
  },
]; 