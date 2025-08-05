import { useRef } from 'react';
import { motion } from 'framer-motion';
import {
    Building2,
    Globe,
    ShoppingCart,
    Laptop,
    Briefcase,
    ExternalLink,
    TrendingUp,
    Users,
    Target,
    Award,
    Heart,
    Zap,
    Star,
    DollarSign,
    Calendar,
    BarChart3,
    PieChart,
    Activity
} from 'lucide-react';
import { Card, CardContent } from '../../components/Card';

const portfolioCompanies = [
    {
        name: 'TechFlow Solutions',
        industry: 'Technology',
        logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
        heroImage: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        description: 'Leading SaaS platform for enterprise workflow automation and productivity enhancement',
        challenge: 'TechFlow needed to increase their B2B lead generation and establish thought leadership in the competitive SaaS market.',
        solution: 'We implemented a comprehensive digital strategy focusing on content marketing, SEO optimization, and targeted PPC campaigns.',
        services: ['SEO Optimization', 'Content Marketing', 'PPC Campaigns', 'Social Media Strategy', 'Email Marketing'],
        results: {
            traffic: '+340%',
            leads: '+280%',
            revenue: '+450%',
            duration: '18 months',
            conversionRate: '+125%',
            brandAwareness: '+200%'
        },
        testimonial: 'TJ Arya transformed our digital presence completely. Our lead generation increased by 280% in just 18 months, and we\'ve established ourselves as industry leaders.',
        clientName: 'David Chen',
        clientRole: 'CEO & Founder',
        clientImage: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face',
        color: 'from-blue-600 to-cyan-600',
        icon: Laptop,
        website: 'techflow.com',
        tags: ['B2B', 'SaaS', 'Enterprise', 'Technology']
    },
    {
        name: 'EcoVibe Marketplace',
        industry: 'E-commerce',
        logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
        heroImage: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        description: 'Sustainable products marketplace connecting eco-conscious consumers with ethical brands worldwide',
        challenge: 'EcoVibe needed to build brand awareness in the sustainability space and drive e-commerce sales while maintaining their eco-friendly values.',
        solution: 'We created an authentic brand story through influencer partnerships, social media campaigns, and targeted content marketing.',
        services: ['Social Media Marketing', 'Influencer Partnerships', 'Email Marketing', 'Content Creation', 'Brand Strategy'],
        results: {
            traffic: '+520%',
            leads: '+380%',
            revenue: '+600%',
            duration: '12 months',
            conversionRate: '+190%',
            brandAwareness: '+350%'
        },
        testimonial: 'The team at TJ Arya helped us reach our target audience and build a community around sustainability. Our sales have grown beyond our wildest expectations.',
        clientName: 'Maria Rodriguez',
        clientRole: 'Founder & CEO',
        clientImage: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face',
        color: 'from-green-500 to-emerald-600',
        icon: ShoppingCart,
        website: 'ecovibe.com',
        tags: ['E-commerce', 'Sustainability', 'B2C', 'Marketplace']
    },
    {
        name: 'FinanceForward',
        industry: 'Financial Services',
        logo: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
        heroImage: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        description: 'Modern financial advisory platform providing personalized investment strategies for millennials and Gen Z',
        challenge: 'FinanceForward needed to build trust in the financial services sector and attract younger demographics to their platform.',
        solution: 'We developed educational content, transparent communication strategies, and targeted digital campaigns to build credibility.',
        services: ['Content Marketing', 'SEO Strategy', 'Social Proof Campaigns', 'Video Marketing', 'Lead Generation'],
        results: {
            traffic: '+290%',
            leads: '+320%',
            revenue: '+380%',
            duration: '15 months',
            conversionRate: '+150%',
            brandAwareness: '+240%'
        },
        testimonial: 'TJ Arya helped us break through the trust barrier in financial services. We now have a steady stream of qualified leads and happy clients.',
        clientName: 'James Wilson',
        clientRole: 'Managing Director',
        clientImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face',
        color: 'from-purple-600 to-indigo-600',
        icon: Briefcase,
        website: 'financeforward.com',
        tags: ['FinTech', 'B2C', 'Financial Services', 'Investment']
    },
    {
        name: 'HealthHub Connect',
        industry: 'Healthcare',
        logo: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
        heroImage: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        description: 'Telemedicine platform connecting patients with healthcare professionals for remote consultations and care',
        challenge: 'HealthHub needed to increase patient acquisition while maintaining compliance with healthcare regulations and building trust.',
        solution: 'We created HIPAA-compliant marketing strategies focusing on patient education, testimonials, and healthcare professional endorsements.',
        services: ['Healthcare Marketing', 'Compliance Strategy', 'Patient Education Content', 'Local SEO', 'Reputation Management'],
        results: {
            traffic: '+410%',
            leads: '+350%',
            revenue: '+480%',
            duration: '20 months',
            conversionRate: '+180%',
            brandAwareness: '+300%'
        },
        testimonial: 'TJ Arya understood the unique challenges of healthcare marketing. They helped us grow our patient base while maintaining the highest standards of compliance.',
        clientName: 'Dr. Sarah Kim',
        clientRole: 'Chief Medical Officer',
        clientImage: 'https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face',
        color: 'from-red-500 to-pink-600',
        icon: Heart,
        website: 'healthhubconnect.com',
        tags: ['Healthcare', 'Telemedicine', 'B2C', 'Compliance']
    },
    {
        name: 'EduTech Academy',
        industry: 'Education',
        logo: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
        heroImage: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        description: 'Online learning platform offering professional development courses and certifications for working professionals',
        challenge: 'EduTech needed to compete with established players in the online education space and demonstrate the value of their courses.',
        solution: 'We developed a content-first strategy showcasing student success stories, expert instructors, and measurable learning outcomes.',
        services: ['Content Marketing', 'Student Success Campaigns', 'SEO Optimization', 'Social Media Strategy', 'Email Nurturing'],
        results: {
            traffic: '+380%',
            leads: '+420%',
            revenue: '+550%',
            duration: '16 months',
            conversionRate: '+200%',
            brandAwareness: '+280%'
        },
        testimonial: 'TJ Arya helped us tell our story and showcase the real impact of our courses. Our enrollment has increased dramatically, and student satisfaction is at an all-time high.',
        clientName: 'Michael Thompson',
        clientRole: 'Head of Marketing',
        clientImage: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face',
        color: 'from-orange-500 to-yellow-600',
        icon: Building2,
        website: 'edutechacademy.com',
        tags: ['EdTech', 'Online Learning', 'B2C', 'Professional Development']
    },
    {
        name: 'FoodieDelight',
        industry: 'Food & Beverage',
        logo: 'https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
        heroImage: 'https://images.pexels.com/photos/3184389/pexels-photo-3184389.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        description: 'Premium meal delivery service specializing in locally-sourced, chef-prepared meals for busy professionals',
        challenge: 'FoodieDelight needed to differentiate from competitors in the crowded meal delivery market and build a loyal customer base.',
        solution: 'We created a premium brand experience through visual storytelling, chef spotlights, and customer journey optimization.',
        services: ['Brand Strategy', 'Visual Content Creation', 'Influencer Marketing', 'Customer Retention Campaigns', 'Local Marketing'],
        results: {
            traffic: '+460%',
            leads: '+390%',
            revenue: '+520%',
            duration: '14 months',
            conversionRate: '+170%',
            brandAwareness: '+320%'
        },
        testimonial: 'TJ Arya elevated our brand from a simple delivery service to a premium culinary experience. Our customer retention has improved significantly.',
        clientName: 'Chef Isabella Martinez',
        clientRole: 'Founder & Head Chef',
        clientImage: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face',
        color: 'from-amber-500 to-orange-600',
        icon: Globe,
        website: 'foodiedelight.com',
        tags: ['Food & Beverage', 'Delivery', 'B2C', 'Premium']
    }
];

const Portfolio = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const FloatingElement = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
        <motion.div
            initial={{ y: 0 }}
            animate={{ y: [-10, 10, -10] }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay
            }}
        >
            {children}
        </motion.div>
    );

    const MetricCard = ({ icon: Icon, value, label, color }: { icon: any, value: string, label: string, color: string }) => (
        <motion.div
            className={`bg-gradient-to-r ${color} rounded-xl p-4 text-white text-center shadow-lg`}
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <Icon className="w-6 h-6 mx-auto mb-2" />
            <div className="text-2xl font-bold mb-1">{value}</div>
            <div className="text-sm opacity-90">{label}</div>
        </motion.div>
    );

    return (
        <div className="min-h-screen overflow-hidden relative" ref={containerRef}>
            {/* Animated Background */}
            <div className="fixed inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50"></div>
                <motion.div
                    className="absolute inset-0 opacity-30"
                    style={{
                        background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
                    }}
                    animate={{
                        background: [
                            'radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
                            'radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)',
                            'radial-gradient(circle at 40% 40%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)',
                            'radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
                        ]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
            </div>

            {/* Hero Section */}
            <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        className="text-center mb-12 sm:mb-16 lg:mb-20"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h1
                            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 lg:mb-8 leading-tight"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Our{' '}
                            <motion.span
                                className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                                animate={{
                                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                                }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                style={{ backgroundSize: '200% 200%' }}
                            >
                                Portfolio
                            </motion.span>
                        </motion.h1>

                        <motion.p
                            className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-8 lg:mb-12 leading-relaxed max-w-4xl mx-auto"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Discover the success stories of companies we've partnered with to achieve remarkable digital growth.
                            Each project represents our commitment to delivering exceptional results and building lasting partnerships.
                        </motion.p>

                        <motion.div
                            className="flex flex-wrap justify-center gap-4 sm:gap-6"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-lg border border-white/20">
                                <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                                <span className="text-sm sm:text-base font-semibold text-gray-900">6+ Industries</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-lg border border-white/20">
                                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                                <span className="text-sm sm:text-base font-semibold text-gray-900">400% Avg Growth</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-lg border border-white/20">
                                <Award className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                                <span className="text-sm sm:text-base font-semibold text-gray-900">100% Success Rate</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Portfolio Companies */}
            <section className="py-16 sm:py-24 lg:py-32 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-16 sm:space-y-24 lg:space-y-32">
                        {portfolioCompanies.map((company, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <Card className="overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm">
                                    <CardContent className="p-0">
                                        {/* Company Header */}
                                        <div className={`bg-gradient-to-r ${company.color} p-6 sm:p-8 lg:p-12 text-white relative overflow-hidden`}>
                                            <div className="absolute inset-0 opacity-20">
                                                <motion.div
                                                    className="absolute inset-0"
                                                    style={{
                                                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                                                    }}
                                                    animate={{ x: [0, 60, 0] }}
                                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                                />
                                            </div>

                                            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                                                <div>
                                                    <div className="flex items-center gap-4 mb-4 lg:mb-6">
                                                        <motion.div
                                                            className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center"
                                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                                            transition={{ type: "spring", stiffness: 300 }}
                                                        >
                                                            <company.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                                                        </motion.div>
                                                        <div>
                                                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">{company.name}</h3>
                                                            <p className="text-lg sm:text-xl opacity-90">{company.industry}</p>
                                                        </div>
                                                    </div>

                                                    <p className="text-base sm:text-lg lg:text-xl opacity-90 leading-relaxed mb-6">
                                                        {company.description}
                                                    </p>

                                                    <div className="flex flex-wrap gap-2 mb-6">
                                                        {company.tags.map((tag, tagIndex) => (
                                                            <span
                                                                key={tagIndex}
                                                                className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium"
                                                            >
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>

                                                    <motion.a
                                                        href={`https://${company.website}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 px-4 sm:px-6 py-2 sm:py-3 rounded-xl transition-all duration-300 font-semibold"
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                    >
                                                        <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                                                        Visit Website
                                                    </motion.a>
                                                </div>

                                                <FloatingElement delay={index * 0.5}>
                                                    <motion.div
                                                        className="relative"
                                                        whileHover={{ scale: 1.02 }}
                                                        transition={{ type: "spring", stiffness: 300 }}
                                                    >
                                                        <img
                                                            src={company.heroImage}
                                                            alt={company.name}
                                                            className="rounded-2xl shadow-2xl w-full h-48 sm:h-64 lg:h-80 object-cover"
                                                        />
                                                        <motion.div
                                                            className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"
                                                            initial={{ opacity: 0 }}
                                                            whileHover={{ opacity: 1 }}
                                                            transition={{ duration: 0.3 }}
                                                        />
                                                    </motion.div>
                                                </FloatingElement>
                                            </div>
                                        </div>

                                        {/* Company Details */}
                                        <div className="p-6 sm:p-8 lg:p-12">
                                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-8 lg:mb-12">
                                                {/* Challenge & Solution */}
                                                <div className="space-y-6 lg:space-y-8">
                                                    <div>
                                                        <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 lg:mb-4 flex items-center gap-2">
                                                            <Target className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
                                                            Challenge
                                                        </h4>
                                                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{company.challenge}</p>
                                                    </div>

                                                    <div>
                                                        <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 lg:mb-4 flex items-center gap-2">
                                                            <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />
                                                            Solution
                                                        </h4>
                                                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{company.solution}</p>
                                                    </div>
                                                </div>

                                                {/* Services */}
                                                <div>
                                                    <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 lg:mb-6 flex items-center gap-2">
                                                        <Star className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
                                                        Services Provided
                                                    </h4>
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                        {company.services.map((service, serviceIndex) => (
                                                            <motion.div
                                                                key={serviceIndex}
                                                                className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl"
                                                                whileHover={{ scale: 1.02, backgroundColor: '#f8fafc' }}
                                                                transition={{ type: "spring", stiffness: 300 }}
                                                            >
                                                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${company.color}`}></div>
                                                                <span className="text-sm sm:text-base text-gray-700 font-medium">{service}</span>
                                                            </motion.div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Results */}
                                            <div className="mb-8 lg:mb-12">
                                                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 lg:mb-8 flex items-center gap-2">
                                                    <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
                                                    Results Achieved
                                                </h4>

                                                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                                                    <MetricCard
                                                        icon={TrendingUp}
                                                        value={company.results.traffic}
                                                        label="Traffic Growth"
                                                        color="from-blue-500 to-blue-600"
                                                    />
                                                    <MetricCard
                                                        icon={Users}
                                                        value={company.results.leads}
                                                        label="Lead Increase"
                                                        color="from-green-500 to-green-600"
                                                    />
                                                    <MetricCard
                                                        icon={DollarSign}
                                                        value={company.results.revenue}
                                                        label="Revenue Growth"
                                                        color="from-purple-500 to-purple-600"
                                                    />
                                                    <MetricCard
                                                        icon={Calendar}
                                                        value={company.results.duration}
                                                        label="Timeline"
                                                        color="from-orange-500 to-orange-600"
                                                    />
                                                    <MetricCard
                                                        icon={Activity}
                                                        value={company.results.conversionRate}
                                                        label="Conversion Rate"
                                                        color="from-pink-500 to-pink-600"
                                                    />
                                                    <MetricCard
                                                        icon={PieChart}
                                                        value={company.results.brandAwareness}
                                                        label="Brand Awareness"
                                                        color="from-indigo-500 to-indigo-600"
                                                    />
                                                </div>
                                            </div>

                                            {/* Testimonial */}
                                            <motion.div
                                                className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 sm:p-8 relative overflow-hidden"
                                                whileHover={{ scale: 1.01 }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                            >
                                                <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                                                    <div className="text-4xl sm:text-6xl text-blue-200 font-serif">"</div>
                                                </div>

                                                <div className="relative z-10 pt-4 sm:pt-8">
                                                    <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-6 lg:mb-8 italic">
                                                        {company.testimonial}
                                                    </p>

                                                    <div className="flex items-center gap-4">
                                                        <img
                                                            src={company.clientImage}
                                                            alt={company.clientName}
                                                            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover shadow-lg"
                                                        />
                                                        <div>
                                                            <div className="font-bold text-gray-900 text-sm sm:text-base">{company.clientName}</div>
                                                            <div className="text-gray-600 text-xs sm:text-sm">{company.clientRole}</div>
                                                            <div className={`text-xs sm:text-sm font-semibold bg-gradient-to-r ${company.color} bg-clip-text text-transparent`}>
                                                                {company.name}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6">
                            Ready to Join Our Success Stories?
                        </h2>
                        <p className="text-lg sm:text-xl text-white/90 mb-8 lg:mb-12 max-w-2xl mx-auto">
                            Let's create the next remarkable success story together. Your business deserves the same exceptional results.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                className="bg-white text-gray-900 px-8 sm:px-12 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg shadow-2xl hover:shadow-3xl transition-all duration-300"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => window.location.href = '/contact'}
                            >
                                Start Your Success Story
                            </motion.button>

                            <motion.button
                                className="border-2 border-white text-white px-8 sm:px-12 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                View Case Studies
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;