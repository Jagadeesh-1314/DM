import React from 'react';
import AnimatedSection from '../AnimatedSection';

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <AnimatedSection>
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{title}</h1>
            <p className="text-xl md:text-2xl text-purple-200 max-w-4xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default HeroSection;