import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, Target, TrendingUp, Users, Zap, Award, Heart, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '../../components/Card';

const team = [
    {
        name: 'Sarah Johnson',
        role: 'CEO & Founder',
        image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop&crop=face',
        bio: '10+ years in digital marketing with a passion for helping businesses grow.',
        color: 'from-pink-500 to-rose-500'
    },
    {
        name: 'Michael Chen',
        role: 'Head of SEO',
        image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop&crop=face',
        bio: 'SEO expert with proven track record of improving search rankings.',
        color: 'from-blue-500 to-cyan-500'
    },
    {
        name: 'Emily Rodriguez',
        role: 'Creative Director',
        image: 'https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop&crop=face',
        bio: 'Award-winning designer specializing in brand identity and user experience.',
        color: 'from-purple-500 to-indigo-500'
    }
];

const values = [
    {
        icon: Lightbulb,
        title: 'Innovation',
        description: 'We stay ahead of the curve by embracing new technologies and creative approaches to solve our clients\' challenges.',
        color: 'from-yellow-400 to-orange-500'
    },
    {
        icon: Heart,
        title: 'Transparency',
        description: 'We believe in open communication and provide clear, honest reporting on all our campaigns and strategies.',
        color: 'from-red-400 to-pink-500'
    },
    {
        icon: Target,
        title: 'Results',
        description: 'Every strategy we develop is focused on delivering measurable results that contribute to our clients\' business growth.',
        color: 'from-green-400 to-emerald-500'
    }
];

const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients', color: 'from-blue-500 to-purple-600' },
    { icon: TrendingUp, value: '250%', label: 'Average ROI', color: 'from-green-500 to-blue-500' },
    { icon: Award, value: '15+', label: 'Industry Awards', color: 'from-purple-500 to-pink-500' },
    { icon: Zap, value: '99%', label: 'Client Retention', color: 'from-orange-500 to-red-500' }
];

const About = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

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

    return (
        <div className="min-h-screen relative overflow-hidden" ref={containerRef}>
            {/* Animated Background */}
            <div className="fixed inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50"></div>
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
            <section className="relative py-32 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <motion.h1
                                className="text-5xl sm:text-7xl font-bold text-gray-900 mb-8 leading-tight"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                About{' '}
                                <motion.span
                                    className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                                    animate={{
                                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                                    }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                    style={{ backgroundSize: '200% 200%' }}
                                >
                                    TJ ARYA
                                </motion.span>
                            </motion.h1>

                            <motion.p
                                className="text-xl text-gray-700 mb-8 leading-relaxed"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                We are a team of passionate digital marketing professionals dedicated to helping businesses
                                achieve their online goals through innovative strategies and cutting-edge technology.
                            </motion.p>

                            <motion.p
                                className="text-lg text-gray-600 leading-relaxed"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                Founded in 2019, TJ ARYA has grown from a small startup to a full-service digital
                                marketing agency serving clients across various industries worldwide.
                            </motion.p>

                            <motion.div
                                className="mt-12 flex flex-wrap gap-4"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                            >
                                {stats.map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-white/20"
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <div className={`p-2 rounded-full bg-gradient-to-r ${stat.color}`}>
                                            <stat.icon className="w-4 h-4 text-white" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-gray-900">{stat.value}</div>
                                            <div className="text-sm text-gray-600">{stat.label}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>

                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <FloatingElement>
                                <motion.div
                                    className="relative"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-xl opacity-20 scale-105"></div>
                                    <img
                                        src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                                        alt="Our Team"
                                        className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
                                    />
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"
                                        initial={{ opacity: 0 }}
                                        whileHover={{ opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </motion.div>
                            </FloatingElement>

                            {/* Floating Icons */}
                            <FloatingElement delay={1}>
                                <motion.div
                                    className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center shadow-xl"
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Star className="w-8 h-8 text-white" />
                                </motion.div>
                            </FloatingElement>

                            <FloatingElement delay={2}>
                                <motion.div
                                    className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl"
                                    whileHover={{ rotate: -360 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Zap className="w-6 h-6 text-white" />
                                </motion.div>
                            </FloatingElement>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-32 relative">
                <motion.div
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                    style={{ y, opacity }}
                >
                    <motion.div
                        className="text-center mb-20"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Purpose</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full bg-gradient-to-br from-blue-50 to-indigo-100 border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                                <CardContent className="p-10">
                                    <div className="flex items-center mb-6">
                                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
                                            <Target className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
                                    </div>
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        To empower businesses with digital marketing solutions that drive real results.
                                        We believe in building long-term partnerships with our clients and helping them
                                        navigate the ever-evolving digital landscape with confidence.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full bg-gradient-to-br from-purple-50 to-pink-100 border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                                <CardContent className="p-10">
                                    <div className="flex items-center mb-6">
                                        <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                                            <TrendingUp className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
                                    </div>
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        To be the leading digital marketing agency that businesses trust for growth,
                                        innovation, and exceptional results. We envision a future where every business
                                        can thrive online with the right digital strategy.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* Values */}
            <section className="py-32 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }} />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        className="text-center mb-20"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Our Values</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">The principles that guide everything we do</p>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                                className="relative group"
                            >
                                <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                                    <CardContent className="p-8 text-center relative">
                                        <motion.div
                                            className={`w-20 h-20 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <value.icon className="w-10 h-10 text-white" />
                                        </motion.div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{value.description}</p>

                                        <motion.div
                                            className={`absolute inset-0 bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                                        />
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-32 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-20"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">The experts behind your success</p>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {team.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                                className="relative group"
                            >
                                <Card className="h-full bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                                    <CardContent className="p-0 relative">
                                        <div className="relative overflow-hidden">
                                            <motion.img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-80 object-cover"
                                                whileHover={{ scale: 1.05 }}
                                                transition={{ duration: 0.3 }}
                                            />
                                            <motion.div
                                                className={`absolute inset-0 bg-gradient-to-t ${member.color} opacity-0 group-hover:opacity-80 transition-opacity duration-300`}
                                            />
                                            <motion.div
                                                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                initial={{ y: 20 }}
                                                whileHover={{ y: 0 }}
                                            >
                                                <div className="text-white text-center">
                                                    <p className="text-lg font-semibold mb-2">Let's Connect</p>
                                                    <div className="flex gap-3 justify-center">
                                                        <motion.div
                                                            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer"
                                                            whileHover={{ scale: 1.1 }}
                                                            whileTap={{ scale: 0.95 }}
                                                        >
                                                            <Users className="w-5 h-5 text-white" />
                                                        </motion.div>
                                                        <motion.div
                                                            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer"
                                                            whileHover={{ scale: 1.1 }}
                                                            whileTap={{ scale: 0.95 }}
                                                        >
                                                            <Star className="w-5 h-5 text-white" />
                                                        </motion.div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </div>

                                        <div className="p-8">
                                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                                            <p className={`font-semibold mb-4 bg-gradient-to-r ${member.color} bg-clip-text text-transparent`}>
                                                {member.role}
                                            </p>
                                            <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                            Ready to Grow Your Business?
                        </h2>
                        <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
                            Let's work together to create a digital marketing strategy that drives real results for your business.
                        </p>

                        <motion.button
                            className="bg-white text-gray-900 px-12 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => window.location.href = '/contact'}
                        >
                            Get Started Today
                        </motion.button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;