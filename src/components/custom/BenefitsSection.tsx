import React from 'react';
import AnimatedSection from '../AnimatedSection';
import SectionTitle from './SectionTitle';

interface Benefit {
  title: string;
  description: string;
  benefits?: string[]; // Optional for bullet list
  image?: string;      // Optional for image layout
}

interface BenefitsSectionProps {
  title: string;
  subtitle: string;
  benefits: Benefit[];
}

const BenefitsSection: React.FC<BenefitsSectionProps> = ({
  title,
  subtitle,
  benefits,
}) => {
  return (
    <AnimatedSection>
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle title={title} subtitle={subtitle} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={index} delay={index * 150}>
                <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  {benefit.image && (
                    <img
                      src={benefit.image}
                      alt={benefit.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-slate-800 mb-3">{benefit.title}</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">{benefit.description}</p>

                    {benefit.benefits && (
                      <ul className="space-y-2">
                        {benefit.benefits.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center text-sm text-slate-600">
                            <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default BenefitsSection;
