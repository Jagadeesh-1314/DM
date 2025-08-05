import React from 'react';
import BenefitsSection from '../../components/custom/BenefitsSection';
import CTASection from '../../components/custom/CTASection';
import HeroSection from '../../components/custom/HeroSection';
import MarketingOverview from '../../components/custom/MarketingOverview';
import ProcessSection from '../../components/custom/ProcessSection';
import ServicesSection from '../../components/custom/ServicesSection';
import {
  heroData,
  overviewData,
  servicesData,
  processData,
  platformsData,
  campaignTypesData,
  ctaData
} from '../../data/ppcData';
import ContentTypesSection from '../../components/custom/ContentTypesSection';

const PPCAdvertising: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title={heroData.title}
        subtitle={heroData.subtitle}
      />

      {/* Content Marketing Overview */}
      <MarketingOverview
        title={overviewData.title}
        paragraphs={overviewData.paragraphs}
        imageUrl={overviewData.imageUrl}
        imageAlt={overviewData.imageAlt}
      />

      {/* Content Services */}
      <ServicesSection
        title={servicesData.title}
        subtitle={servicesData.subtitle}
        services={servicesData.services}
      />

      {/* Content Types */}
      <ContentTypesSection
        title={platformsData.title}
        subtitle={platformsData.subtitle}
        contentTypes={platformsData.platforms.map(platform => ({
          category: platform.platform,
          types: platform.features,
          description: platform.description
        }))}
      />

      {/* Content Process */}
      <ProcessSection
        title={processData.title}
        subtitle={processData.subtitle}
        steps={processData.steps}
      />

      {/* Content Benefits */}
      <BenefitsSection
        title={campaignTypesData.title}
        subtitle={campaignTypesData.subtitle}
        benefits={campaignTypesData.campaigns.map(
          ({ title, description, objectives }) => ({
            title,
            description,
            benefits: objectives
          })
        )}
      />

      {/* CTA Section */}
      <CTASection
        title={ctaData.title}
        subtitle={ctaData.subtitle}
        buttonText={ctaData.buttonText}
        buttonLink={ctaData.buttonLink}
      />
    </div>
  );
};

export default PPCAdvertising;