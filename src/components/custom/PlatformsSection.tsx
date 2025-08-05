import React from 'react';
import AnimatedSection from '../AnimatedSection';
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Music2 as Tiktok
} from 'lucide-react';

interface PlatformItem {
  platform: string;
  description: string;
}

interface PlatformsSectionProps {
  title: string;
  subtitle: string;
  platforms: PlatformItem[];
}

const platformIcons: Record<string, React.ReactNode> = {
  Facebook: <Facebook className="w-8 h-8 text-blue-600" />,
  Instagram: <Instagram className="w-8 h-8 text-pink-500" />,
  LinkedIn: <Linkedin className="w-8 h-8 text-blue-700" />,
  Twitter: <Twitter className="w-8 h-8 text-sky-500" />,
  YouTube: <Youtube className="w-8 h-8 text-red-600" />,
  TikTok: <Tiktok className="w-8 h-8 text-fuchsia-500" />
};

const PlatformsSection: React.FC<PlatformsSectionProps> = ({ title, subtitle, platforms }) => {
  return (
    <AnimatedSection>
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-800">{title}</h2>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto">{subtitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((item, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-2px]">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-slate-100 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                      {platformIcons[item.platform] || <div className="w-8 h-8" />}
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800">{item.platform}</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default PlatformsSection;
