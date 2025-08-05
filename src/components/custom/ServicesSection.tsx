import React from 'react';
import AnimatedSection from '../AnimatedSection';
import SectionTitle from './SectionTitle';

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ServicesSectionProps {
  title: string;
  subtitle: string;
  services: ServiceItem[];
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ 
  title, 
  subtitle, 
  services 
}) => {
  return (
    <AnimatedSection>
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle title={title} subtitle={subtitle} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default ServicesSection;