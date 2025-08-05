import React from 'react';
import AnimatedSection from '../AnimatedSection';
import SectionTitle from './SectionTitle';

interface ContentType {
  category: string;
  types: string[];
  description: string;
}

interface ContentTypesSectionProps {
  title: string;
  subtitle: string;
  contentTypes: ContentType[];
}

const ContentTypesSection: React.FC<ContentTypesSectionProps> = ({ 
  title, 
  subtitle, 
  contentTypes 
}) => {
  return (
    <AnimatedSection>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle title={title} subtitle={subtitle} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentTypes.map((content, index) => (
              <AnimatedSection key={index} delay={index * 150}>
                <div className="bg-slate-50 p-8 rounded-2xl">
                  <h3 className="text-2xl font-semibold text-slate-800 mb-4">{content.category}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{content.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {content.types.map((type, typeIndex) => (
                      <span
                        key={typeIndex}
                        className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {type}
                      </span>
                    ))}
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

export default ContentTypesSection;