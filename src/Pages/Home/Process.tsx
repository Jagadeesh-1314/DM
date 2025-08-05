import { Card, CardContent } from '../../components/Card';
import { Search, Users, Code, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Process = () => {
    const navigate = useNavigate();
    const steps = [
        {
            number: '01',
            icon: Search,
            title: 'Discovery & Analysis',
            description: 'We start by understanding your business, challenges, and goals through comprehensive analysis and stakeholder interviews.',
            duration: '1-2 weeks'
        },
        {
            number: '02',
            icon: Users,
            title: 'Strategy Development',
            description: 'Our team develops a customized strategy and roadmap tailored to your specific needs and market conditions.',
            duration: '2-3 weeks'
        },
        {
            number: '03',
            icon: Code,
            title: 'Implementation',
            description: 'We work closely with your team to implement solutions, ensuring smooth execution and minimal disruption.',
            duration: '4-12 weeks'
        },
        {
            number: '04',
            icon: Zap,
            title: 'Optimization & Support',
            description: 'Continuous monitoring, optimization, and ongoing support to ensure sustained success and growth.',
            duration: 'Ongoing'
        }
    ];

    return (
        <section id="process" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-poppins text-navy-900 mb-6">
                        Our Process
                    </h2>
                    <p className="text-lg text-navy-600 max-w-3xl mx-auto">
                        We follow a proven methodology that ensures successful project delivery and measurable results for every client engagement.
                    </p>
                </div>

                {/* Process Steps */}
                <div className="relative">
                    {/* Connection Line */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-pink-600 transform -translate-y-1/2 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <Card
                                key={index}
                                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white animate-fade-in relative"
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                <CardContent className="p-8 text-center relative">
                                    {/* Step Number */}
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                        {step.number}
                                    </div>

                                    {/* Icon */}
                                    <div className="flex items-center justify-center w-16 h-16 bg-teal-600 rounded-xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 mt-4">
                                        <step.icon className="w-8 h-8 text-white" />
                                    </div>

                                    <h3 className="text-xl font-semibold font-poppins text-navy-900 mb-4 group-hover:text-teal-600 transition-colors">
                                        {step.title}
                                    </h3>

                                    <p className="text-navy-600 mb-4 leading-relaxed">
                                        {step.description}
                                    </p>

                                    {/* Duration Badge */}
                                    <div className="inline-block px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium">
                                        {step.duration}
                                    </div>
                                </CardContent>
                                {/* Hover Effect */}
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <div className="bg-gradient-to-r from-teal-50 to-navy-50 rounded-2xl p-8 max-w-3xl mx-auto">
                        <h3 className="text-2xl font-bold font-poppins text-navy-900 mb-4">
                            Ready to Start Your Transformation?
                        </h3>
                        <p className="text-navy-600 mb-6">
                            Let's discuss how our proven process can help you achieve your business goals.
                        </p>
                        <button
                            onClick={() => {navigate('/contact')}}
                            className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 font-medium"
                        >
                            Schedule a Consultation
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;