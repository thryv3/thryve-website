import React from 'react';
import { servicesData } from '../mockData/services';
import Link from 'next/link';
import { Phone, Code, Palette } from 'lucide-react'; // Example icons

const iconMap: { [key: string]: React.ElementType } = {
    MobileIcon: Phone,
    WebIcon: Code,
    DesignIcon: Palette,
};


const Services = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-black">Our Services</h2>
        <p className="text-gray-600 mb-12">Comprehensive Digital Solutions</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
             const IconComponent = iconMap[service.icon];
             return (
                <div key={index} className="bg-white p-8 rounded-lg shadow hover:shadow-md transition-shadow duration-300 text-left text-black">
                 {IconComponent && <IconComponent className="w-10 h-10 text-teal-500 mb-4" />}
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link href={service.link} className="text-teal-600 hover:text-teal-700 font-medium flex items-center">
                    Learn More <span className="ml-1">→</span>
                  </Link>
                </div>
             )
          })}
        </div>
      </div>
    </section>
  );
};

export default Services; 