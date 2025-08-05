import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../AnimatedSection';

interface CTASectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const CTASection: React.FC<CTASectionProps> = ({ 
  title, 
  subtitle, 
  buttonText, 
  buttonLink 
}) => {
  return (
    <AnimatedSection>
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            {title}
          </h2>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            {subtitle}
          </p>
          <Link
            to={buttonLink}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            {buttonText}
          </Link>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default CTASection;