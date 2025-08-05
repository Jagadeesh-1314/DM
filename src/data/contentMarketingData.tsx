import { FileText, Mic, PenTool, Video } from 'lucide-react';

export const heroData = {
  title: "Content Marketing",
  subtitle: "Create compelling content that engages your audience and drives meaningful business results"
};

export const overviewData = {
  title: "Strategic Content Creation",
  paragraphs: [
    "Our content marketing services focus on creating valuable, relevant content that attracts and engages your target audience while driving profitable customer action.",
    "We develop comprehensive content strategies that align with your business goals, from blog posts and social media content to video marketing and email campaigns.",
    "Every piece of content is crafted to build trust, establish authority, and guide prospects through their buyer's journey toward conversion."
  ],
  imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
  imageAlt: "Content marketing strategy"
};

export const servicesData = {
  title: "Our Content Marketing Services",
  subtitle: "Comprehensive content solutions that drive engagement and conversions",
  services: [
    {
      icon: <PenTool className="w-12 h-12 text-purple-600" />,
      title: "Blog Writing",
      description: "Engaging blog content that drives traffic and establishes your authority in your industry."
    },
    {
      icon: <Video className="w-12 h-12 text-indigo-600" />,
      title: "Video Content",
      description: "Compelling video content that captures attention and increases engagement across platforms."
    },
    {
      icon: <FileText className="w-12 h-12 text-purple-600" />,
      title: "Content Strategy",
      description: "Comprehensive content strategies aligned with your business goals and target audience."
    },
    {
      icon: <Mic className="w-12 h-12 text-indigo-600" />,
      title: "Podcast Production",
      description: "Professional podcast content that builds relationships and expands your reach."
    }
  ]
};

export const contentTypesData = {
  title: "Content Types We Create",
  subtitle: "Diverse content formats tailored to your audience preferences and platform requirements",
  contentTypes: [
    {
      category: "Written Content",
      types: ["Blog Posts", "Articles", "Whitepapers", "Case Studies", "Ebooks", "Email Newsletters"],
      description: "Engaging written content that educates, informs, and converts your audience."
    },
    {
      category: "Visual Content",
      types: ["Infographics", "Social Graphics", "Presentations", "Interactive Content", "Charts", "Illustrations"],
      description: "Eye-catching visual content that simplifies complex information and drives engagement."
    },
    {
      category: "Multimedia Content",
      types: ["Videos", "Podcasts", "Webinars", "Live Streams", "Audio Content", "Interactive Media"],
      description: "Dynamic multimedia content that captures attention and builds stronger connections."
    }
  ]
};

export const processData = {
  title: "Our Content Creation Process",
  subtitle: "A systematic approach to creating content that resonates with your audience and drives results",
  steps: [
    {
      step: "01",
      title: "Strategy & Planning",
      description: "We analyze your audience, competitors, and goals to develop a comprehensive content strategy."
    },
    {
      step: "02",
      title: "Content Creation",
      description: "Our team creates high-quality, engaging content that aligns with your brand voice and objectives."
    },
    {
      step: "03",
      title: "Distribution & Promotion",
      description: "We distribute your content across relevant channels and promote it to maximize reach and engagement."
    },
    {
      step: "04",
      title: "Analysis & Optimization",
      description: "We track performance metrics and continuously optimize your content strategy for better results."
    }
  ]
};

export const benefitsData = {
  title: "Why Content Marketing Matters",
  subtitle: "Quality content is the foundation of successful digital marketing campaigns",
  benefits: [
    {
      title: "Brand Authority",
      description: "Establish your business as a thought leader and trusted authority in your industry through valuable content.",
      benefits: ["Industry Expertise", "Trust Building", "Thought Leadership", "Credibility Enhancement"]
    },
    {
      title: "Audience Engagement",
      description: "Create meaningful connections with your audience through content that educates, entertains, and inspires.",
      benefits: ["Increased Engagement", "Community Building", "Social Sharing", "Customer Loyalty"]
    },
    {
      title: "Lead Generation",
      description: "Attract and nurture qualified leads through strategic content that guides prospects through the sales funnel.",
      benefits: ["Quality Leads", "Conversion Optimization", "Sales Support", "Customer Education"]
    },
    {
      title: "SEO Benefits",
      description: "Improve your search engine rankings and organic visibility with fresh, relevant, and optimized content.",
      benefits: ["Higher Rankings", "Organic Traffic", "Keyword Targeting", "Link Building"]
    },
    {
      title: "Cost-Effective Marketing",
      description: "Generate long-term results with content that continues to drive traffic and leads over time.",
      benefits: ["Long-term ROI", "Sustainable Growth", "Compound Returns", "Budget Efficiency"]
    },
    {
      title: "Customer Education",
      description: "Help your customers make informed decisions by providing valuable information and insights.",
      benefits: ["Product Awareness", "Feature Education", "Problem Solving", "Customer Success"]
    }
  ]
};

export const ctaData = {
  title: "Ready to Transform Your Content Strategy?",
  subtitle: "Let our content marketing experts create engaging content that drives real business results.",
  buttonText: "Start Your Content Journey",
  buttonLink: "/contact"
};