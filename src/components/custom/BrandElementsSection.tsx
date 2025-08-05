import React from 'react';
import AnimatedSection from '../AnimatedSection';

interface BrandElement {
  title: string;
  description: string;
}

interface BrandElementsSectionProps {
  title: string;
  subtitle: string;
  elements: BrandElement[];
}

const BrandElementsSection: React.FC<BrandElementsSectionProps> = ({ title, subtitle, elements }) => {
  return (
    <AnimatedSection>
      <section className="py-20 bg-gradient-to-br from-blue-900 to-teal-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{title}</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">{subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {elements.map((element, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                  <h3 className="text-xl font-semibold mb-3 text-blue-300">{element.title}</h3>
                  <p className="text-blue-100 leading-relaxed">{element.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default BrandElementsSection;
