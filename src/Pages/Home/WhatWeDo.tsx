import { Card, CardContent } from '@mui/material';
import { Code, Users, Briefcase, Zap, Monitor, Heart } from 'lucide-react';

const WhatWeDo = () => {
  const services = [
    {
      icon: Code,
      title: 'Digital Transformation',
      description: 'Modernize your business processes with cutting-edge digital solutions and technologies.',
      features: ['Cloud Migration', 'Process Automation', 'Digital Strategy'],
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Users,
      title: 'Business Strategy',
      description: 'Develop comprehensive strategies that align with your business goals and market opportunities.',
      features: ['Market Analysis', 'Strategic Planning', 'Growth Strategies'],
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Briefcase,
      title: 'Operations Consulting',
      description: 'Optimize your operations for maximum efficiency and sustainable growth.',
      features: ['Process Optimization', 'Cost Reduction', 'Quality Improvement'],
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Zap,
      title: 'Technology Solutions',
      description: 'Implement innovative technology solutions tailored to your specific business needs.',
      features: ['Custom Software', 'System Integration', 'Tech Architecture'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Monitor,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights for better decision-making.',
      features: ['Business Intelligence', 'Predictive Analytics', 'Data Visualization'],
      color: 'from-teal-500 to-teal-600',
    },
    {
      icon: Heart,
      title: 'Change Management',
      description: 'Guide your organization through successful transformation with minimal disruption.',
      features: ['Training Programs', 'Cultural Change', 'Stakeholder Engagement'],
      color: 'from-red-500 to-red-600',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-navy-900 mb-6">
            What We Do
          </h2>
          <p className="text-lg text-navy-600 max-w-3xl mx-auto">
            We provide comprehensive consulting services to help your business thrive in today's competitive landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 relative">
                {/* Background Gradient Circle */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${service.color} opacity-10 rounded-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500`} />

                {/* Icon */}
                <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold font-poppins text-navy-900 mb-4 group-hover:text-teal-600 transition-colors relative z-10">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-navy-600 leading-relaxed mb-4 relative z-10">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 relative z-10">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-navy-700">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover Bottom Border */}
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
