import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "../../components/AnimatedSection";
import CountUp from "../../components/CountUp";
import WhatWeDo from "./WhatWeDo";
import Process from "./Process";
import Clients from "./Clients";
import Contact from "../Contact/Contact";
import Services from "./Services";

export default function Home() {
    return (
        <>
            <div className="min-h-screen">
                {/* Hero Section */}
                <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-slate-900 to-teal-900 text-white overflow-hidden">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
                        style={{
                            backgroundImage: "url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1920&h=1080&fit=crop')"
                        }}
                    ></div>

                    <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                        <AnimatedSection>
                            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                                TJ ARYA
                            </h1>
                            <p className="text-xl md:text-2xl mb-8 text-slate-200 leading-relaxed">
                                Transforming businesses through innovative digital marketing strategies and cutting-edge web solutions
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    to="/portfolio"
                                    className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
                                >
                                    Get Started <ArrowRight size={20} />
                                </Link>
                                <Link
                                    to="/about"
                                    className="border-2 border-white/30 hover:border-white hover:bg-white/10 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>
            </div>
            <AnimatedSection>
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                                    <CountUp end={500} suffix="+" />
                                </div>
                                <p className="text-slate-600">Projects Completed</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-teal-600 mb-2">
                                    <CountUp end={150} suffix="+" />
                                </div>
                                <p className="text-slate-600">Happy Clients</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                                    <CountUp end={5} />
                                </div>
                                <p className="text-slate-600">Years Experience</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-teal-600 mb-2">
                                    <CountUp end={24} suffix="/7" />
                                </div>
                                <p className="text-slate-600">Support Available</p>
                            </div>
                        </div>
                    </div>
                </section>
            </AnimatedSection>
            <WhatWeDo />
            <Services />
            <Process />
            <Clients />
            <Contact />
        </>
    );
}