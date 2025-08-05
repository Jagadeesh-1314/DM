import React from 'react';
import AnimatedSection from '../AnimatedSection';
import SectionTitle from './SectionTitle';

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

interface ProcessSectionProps {
  title: string;
  subtitle: string;
  steps: ProcessStep[];
}

const ProcessSection: React.FC<ProcessSectionProps> = ({ 
  title, 
  subtitle, 
  steps 
}) => {
  return (
    <AnimatedSection>
      <section className="py-20 bg-gradient-to-br from-purple-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle 
            title={title} 
            subtitle={subtitle} 
            textColor="light" 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((process, index) => (
              <AnimatedSection key={index} delay={index * 150}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-lg">{process.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-purple-300">{process.title}</h3>
                  <p className="text-purple-100 leading-relaxed">{process.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default ProcessSection;