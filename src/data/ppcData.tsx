import { Search, Users, ShoppingCart, Target } from 'lucide-react';

export const heroData = {
  title: "PPC Advertising",
  subtitle: "Drive immediate traffic and conversions with strategic pay-per-click advertising campaigns"
};

export const overviewData = {
  title: "Strategic PPC Management",
  paragraphs: [
    "Our PPC advertising services deliver immediate results through expertly managed campaigns across Google Ads, Facebook, Instagram, and other major advertising platforms.",
    "We focus on maximizing your return on ad spend (ROAS) through precise targeting, compelling ad copy, and continuous optimization based on real-time performance data.",
    "From keyword research to landing page optimization, we handle every aspect of your PPC campaigns to ensure maximum profitability and growth."
  ],
  imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  imageAlt: "PPC advertising dashboard"
};

export const servicesData = {
  title: "Our PPC Advertising Services",
  subtitle: "Comprehensive pay-per-click solutions that drive immediate results and long-term growth",
  services: [
    {
      icon: <Search className="w-12 h-12 text-orange-600" />,
      title: "Google Ads",
      description: "Strategic Google Ads campaigns that target high-intent keywords and drive qualified traffic."
    },
    {
      icon: <Users className="w-12 h-12 text-red-600" />,
      title: "Social Media Ads",
      description: "Targeted Facebook, Instagram, and LinkedIn advertising campaigns that reach your ideal customers."
    },
    {
      icon: <ShoppingCart className="w-12 h-12 text-orange-600" />,
      title: "Shopping Campaigns",
      description: "Product-focused shopping campaigns that showcase your inventory and drive sales."
    },
    {
      icon: <Target className="w-12 h-12 text-red-600" />,
      title: "Display Advertising",
      description: "Eye-catching display ads that build brand awareness across the Google Display Network."
    }
  ]
};

export const platformsData = {
  title: "Advertising Platforms We Master",
  subtitle: "Expert management across all major advertising platforms for maximum reach and impact",
  platforms: [
    {
      platform: "Google Ads",
      features: ["Search Ads", "Display Ads", "Shopping Ads", "YouTube Ads", "App Promotion", "Local Campaigns"],
      description: "Reach customers when they're searching for products or services like yours on Google."
    },
    {
      platform: "Facebook & Instagram",
      features: ["Feed Ads", "Story Ads", "Video Ads", "Carousel Ads", "Lead Generation", "Retargeting"],
      description: "Connect with your audience on the world's largest social media platforms."
    },
    {
      platform: "LinkedIn & Professional",
      features: ["Sponsored Content", "Message Ads", "Dynamic Ads", "Lead Gen Forms", "Event Promotion", "Company Pages"],
      description: "Target professionals and decision-makers in your industry for B2B campaigns."
    }
  ]
};

export const processData = {
  title: "Our PPC Management Process",
  subtitle: "A data-driven approach to maximizing your advertising ROI and campaign performance",
  steps: [
    {
      step: "01",
      title: "Research & Strategy",
      description: "We conduct thorough keyword research, competitor analysis, and develop comprehensive campaign strategies."
    },
    {
      step: "02",
      title: "Campaign Setup",
      description: "We create optimized campaigns with precise targeting, compelling ad copy, and strategic bidding."
    },
    {
      step: "03",
      title: "Monitor & Optimize",
      description: "We continuously monitor performance and make data-driven optimizations to improve results."
    },
    {
      step: "04",
      title: "Report & Scale",
      description: "We provide detailed reports and scale successful campaigns to maximize your advertising ROI."
    }
  ]
};

export const campaignTypesData = {
  title: "Types of PPC Campaigns We Run",
  subtitle: "Tailored campaign types designed to achieve your specific business objectives",
  campaigns: [
    {
      title: "Search Campaigns",
      description: "Target users actively searching for your products or services with keyword-targeted ads.",
      objectives: ["Lead Generation", "Sales Conversion", "Brand Awareness", "Local Traffic"]
    },
    {
      title: "Display Campaigns",
      description: "Build brand awareness and reach potential customers across millions of websites and apps.",
      objectives: ["Brand Awareness", "Remarketing", "Audience Building", "Visual Impact"]
    },
    {
      title: "Shopping Campaigns",
      description: "Showcase your products directly in search results with rich product information and images.",
      objectives: ["Product Sales", "Inventory Promotion", "E-commerce Growth", "Price Comparison"]
    },
    {
      title: "Video Campaigns",
      description: "Engage audiences with compelling video content on YouTube and across the web.",
      objectives: ["Brand Storytelling", "Product Demos", "Audience Engagement", "Video Views"]
    },
    {
      title: "App Campaigns",
      description: "Promote your mobile app across Google's network to drive downloads and in-app actions.",
      objectives: ["App Downloads", "User Acquisition", "In-app Actions", "App Engagement"]
    },
    {
      title: "Local Campaigns",
      description: "Drive foot traffic to your physical locations with location-based advertising.",
      objectives: ["Store Visits", "Local Awareness", "Foot Traffic", "Location Promotion"]
    }
  ]
};

export const ctaData = {
  title: "Ready to Launch Your PPC Campaigns?",
  subtitle: "Let our PPC experts create high-performing campaigns that deliver immediate results and maximum ROI.",
  buttonText: "Start Your Campaigns",
  buttonLink: "/contact"
};