import { Code, Smartphone, Zap, Shield } from 'lucide-react';

export const heroData = {
  title: "Website Development",
  subtitle: "Build responsive, fast, and user-friendly websites that convert visitors into customers"
};

export const overviewData = {
  title: "Modern Web Development",
  paragraphs: [
    "Our website development services combine cutting-edge technology with user-centered design to create websites that not only look great but also perform exceptionally across all devices and platforms.",
    "We specialize in building responsive, fast-loading websites that provide excellent user experiences while being optimized for search engines and conversion optimization.",
    "From simple landing pages to complex e-commerce platforms, we deliver custom web solutions that help businesses establish a strong online presence and achieve their digital goals."
  ],
  imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
  imageAlt: "Website development"
};

export const servicesData = {
  title: "Our Development Services",
  subtitle: "Comprehensive web development solutions for businesses of all sizes",
  services: [
    {
      icon: <Code className="w-12 h-12 text-blue-600" />,
      title: "Custom Development",
      description: "Build tailored websites and web applications using modern technologies and best practices."
    },
    {
      icon: <Smartphone className="w-12 h-12 text-teal-600" />,
      title: "Responsive Design",
      description: "Create websites that work perfectly on all devices, from desktop computers to mobile phones."
    },
    {
      icon: <Zap className="w-12 h-12 text-blue-600" />,
      title: "Performance Optimization",
      description: "Ensure fast loading times and smooth user experiences through advanced optimization techniques."
    },
    {
      icon: <Shield className="w-12 h-12 text-teal-600" />,
      title: "Security & Maintenance",
      description: "Implement robust security measures and provide ongoing maintenance to keep your website secure."
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
  title: "Our Development Process",
  subtitle: "A systematic approach to building high-quality websites that meet your business objectives",
  steps: [
    {
      step: "01",
      title: "Planning & Analysis",
      description: "We analyze your requirements, define project scope, and create detailed development plans and wireframes."
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "We create beautiful designs and interactive prototypes that align with your brand and user expectations."
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "We build your website using best practices and conduct thorough testing to ensure quality and performance."
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "We deploy your website and provide ongoing support, maintenance, and optimization services."
    }
  ]
};

export const websiteTypesData = {
  title: "Types of Websites We Build",
  subtitle: "From simple business websites to complex web applications, we build it all",
  benefits: [
    {
      title: "Business Websites",
      description: "Professional corporate websites that showcase your services and build credibility with potential customers.",
      benefits: ["Professional Design", "Contact Forms", "Service Pages", "About Us Sections"]
    },
    {
      title: "E-commerce Platforms",
      description: "Full-featured online stores with secure payment processing, inventory management, and customer accounts.",
      benefits: ["Shopping Cart", "Payment Gateway", "Inventory Management", "User Accounts"]
    },
    {
      title: "Portfolio Websites",
      description: "Stunning portfolio sites for creatives and professionals to showcase their work and attract new clients.",
      benefits: ["Gallery Displays", "Project Showcases", "Client Testimonials", "Contact Integration"]
    },
    {
      title: "Landing Pages",
      description: "High-converting landing pages designed to capture leads and drive specific business objectives.",
      benefits: ["Lead Capture Forms", "Call-to-Action Buttons", "Social Proof", "Mobile Optimization"]
    },
    {
      title: "Web Applications",
      description: "Custom web applications with advanced functionality tailored to your specific business needs.",
      benefits: ["User Authentication", "Database Integration", "API Development", "Admin Dashboards"]
    },
    {
      title: "Content Management",
      description: "Easy-to-manage websites with content management systems that allow you to update content yourself.",
      benefits: ["CMS Integration", "Content Editor", "Media Management", "SEO Tools"]
    }
  ]
};

export const ctaData = {
  title: "Ready to Build Your Website?",
  subtitle: "Let our development team create a custom website that perfectly represents your brand and drives business results.",
  buttonText: "Start Your Project",
  buttonLink: "/contact"
};