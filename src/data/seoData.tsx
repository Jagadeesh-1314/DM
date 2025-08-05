import { Search, Target, TrendingUp, BarChart3 } from 'lucide-react';

export const heroData = {
  title: "SEO Services",
  subtitle: "Boost your search engine rankings and drive organic traffic with our comprehensive SEO strategies"
};

export const overviewData = {
  title: "Search Engine Optimization",
  paragraphs: [
    "Our SEO services are designed to improve your website's visibility in search engine results, driving qualified organic traffic that converts. We use proven strategies and white-hat techniques to ensure sustainable, long-term growth.",
    "From keyword research and on-page optimization to technical SEO and link building, we cover all aspects of search engine optimization to help your business rank higher and attract more customers.",
    "Our data-driven approach ensures that every SEO strategy is tailored to your specific business goals and target audience, delivering measurable results that impact your bottom line."
  ],
  imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  imageAlt: "SEO analytics dashboard"
};

export const servicesData = {
  title: "Our SEO Services",
  subtitle: "Comprehensive SEO solutions to improve your search engine visibility and drive organic growth",
  services: [
    {
      icon: <Search className="w-12 h-12 text-blue-600" />,
      title: "Keyword Research",
      description: "Identify high-value keywords and search terms that your target audience uses to find your products or services."
    },
    {
      icon: <Target className="w-12 h-12 text-teal-600" />,
      title: "On-Page SEO",
      description: "Optimize your website's content, meta tags, and internal linking structure for better search engine rankings."
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-blue-600" />,
      title: "Technical SEO",
      description: "Improve your website's technical foundation, including site speed, mobile-friendliness, and crawlability."
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-teal-600" />,
      title: "SEO Analytics",
      description: "Track and analyze your SEO performance with detailed reporting and insights to measure success and ROI."
    }
  ]
};

export const technologiesData = {
  title: "Technologies We Use",
  subtitle: "We leverage the latest technologies and frameworks to build modern, scalable websites",
  technologies: [
    {
      category: "Frontend Development",
      technologies: ["React", "Vue.js", "Angular", "TypeScript", "Tailwind CSS", "SASS/SCSS"],
      description: "Modern frontend frameworks and tools for creating interactive user interfaces."
    },
    {
      category: "Backend Development",
      technologies: ["Node.js", "Python", "PHP", "Express.js", "Django", "Laravel"],
      description: "Robust backend technologies for server-side logic and API development."
    },
    {
      category: "Database & Hosting",
      technologies: ["MySQL", "PostgreSQL", "MongoDB", "AWS", "Google Cloud", "Firebase"],
      description: "Reliable databases and cloud hosting solutions for scalable applications."
    }
  ]
};

export const processData = {
  title: "Our SEO Process",
  subtitle: "A systematic approach to improving your search engine rankings and online visibility",
  steps: [
    {
      step: "01",
      title: "SEO Audit & Analysis",
      description: "We conduct a comprehensive audit of your website to identify opportunities for improvement and develop a customized SEO strategy."
    },
    {
      step: "02",
      title: "Strategy Implementation",
      description: "Our team implements on-page optimizations, technical improvements, and content strategies to boost your search engine rankings."
    },
    {
      step: "03",
      title: "Monitoring & Optimization",
      description: "We continuously monitor your SEO performance and make data-driven optimizations to ensure sustained growth and improved rankings."
    }
  ]
};

export const benefitsData = {
  title: "Why SEO Matters",
  subtitle: "The benefits of professional SEO services for your business growth",
  benefits: [
    {
      title: "Increased Organic Traffic",
      description: "Higher search rankings lead to more qualified visitors discovering your website through search engines."
    },
    {
      title: "Better User Experience",
      description: "SEO improvements often enhance overall user experience, leading to higher engagement and conversions."
    },
    {
      title: "Cost-Effective Marketing",
      description: "Organic search traffic provides excellent ROI compared to paid advertising channels over the long term."
    },
    {
      title: "Brand Credibility",
      description: "Higher search rankings establish trust and credibility with potential customers searching for your services."
    },
    {
      title: "Competitive Advantage",
      description: "Effective SEO strategies help you outrank competitors and capture more market share in your industry."
    },
    {
      title: "Long-Term Results",
      description: "SEO provides sustainable, long-lasting results that continue to benefit your business over time."
    }
  ]
};

export const ctaData = {
  title: "Ready to Improve Your Search Rankings?",
  subtitle: "Let our SEO experts help you climb the search engine rankings and drive more organic traffic to your website.",
  buttonText: "Get SEO Consultation",
  buttonLink: "/contact"
};