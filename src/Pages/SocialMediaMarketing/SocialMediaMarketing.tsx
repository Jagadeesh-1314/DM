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
    benefitsData,
    ctaData
} from '../../data/socialMediaData';
import PlatformsSection from '../../components/custom/PlatformsSection';


const SocialMediaMarketing: React.FC = () => {
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
            {/* <ContentTypesSection 
                title={platformsData.title}
                subtitle={platformsData.subtitle}
                contentTypes={platformsData.contentTypes}
            /> */}

            {/* PlatformsSection */}
            <PlatformsSection
                title={platformsData.title}
                subtitle={platformsData.subtitle}
                platforms={platformsData.platforms}
            />


            {/* Content Process */}
            <ProcessSection
                title={processData.title}
                subtitle={processData.subtitle}
                steps={processData.steps}
            />

            {/* Content Benefits */}
            <BenefitsSection
                title={benefitsData.title}
                subtitle={benefitsData.subtitle}
                benefits={benefitsData.benefits}
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

export default SocialMediaMarketing;