import React from 'react';
import AnimatedSection from '../AnimatedSection';

interface MarketingOverviewProps {
  title: string;
  paragraphs: string[];
  imageUrl: string;
  imageAlt: string;
}

const MarketingOverview: React.FC<MarketingOverviewProps> = ({ 
  title, 
  paragraphs, 
  imageUrl, 
  imageAlt 
}) => {
  return (
    <AnimatedSection>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={imageUrl}
                alt={imageAlt}
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-800 mb-6">{title}</h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                {paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default MarketingOverview;