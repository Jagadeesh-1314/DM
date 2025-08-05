import { Star, Quote, ChevronRight, ChevronLeft } from 'lucide-react';
import { Card, CardContent } from '../../components/Card';
import { useState, useRef, useEffect } from 'react';

const testimonials = [
    {
        name: 'Sarah Johnson',
        role: 'CEO, TechFlow Solutions',
        content: 'Nexus transformed our operations completely. Their strategic approach and execution excellence helped us increase efficiency by 40% while reducing costs.',
        rating: 5,
        company: 'TechFlow'
    },
    {
        name: 'Michael Chen',
        role: 'Director of Operations, HealthCare Plus',
        content: 'The digital transformation roadmap they provided was exactly what we needed. Implementation was smooth and results exceeded our expectations.',
        rating: 5,
        company: 'HealthCare Plus'
    },
    {
        name: 'Emily Rodriguez',
        role: 'Founder, EcoCommerce',
        content: 'Working with Nexus was a game-changer for our e-commerce platform. Their insights and solutions drove a 60% increase in customer engagement.',
        rating: 5,
        company: 'EcoCommerce'
    },
    {
        name: 'Arya Johnson',
        role: 'CEO, TechFlow Solutions',
        content: 'Nexus transformed our operations completely. Their strategic approach and execution excellence helped us increase efficiency by 40% while reducing costs.',
        rating: 4,
        company: 'TechFlow'
    },
    {
        name: 'Michael Chen',
        role: 'Director of Operations, HealthCare Plus',
        content: 'The digital transformation roadmap they provided was exactly what we needed. Implementation was smooth and results exceeded our expectations.',
        rating: 3,
        company: 'HealthCare Plus'
    },
    {
        name: 'Emily Rodriguez',
        role: 'Founder, EcoCommerce',
        content: 'Working with Nexus was a game-changer for our e-commerce platform. Their insights and solutions drove a 60% increase in customer engagement.',
        rating: 2,
        company: 'EcoCommerce'
    }
];

const Clients = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const [slidesToShow, setSlidesToShow] = useState(3);

    // Determine slides to show based on screen size
    const updateSlidesToShow = () => {
        const width = window.innerWidth;
        if (width < 640) setSlidesToShow(1);
        else if (width < 1024) setSlidesToShow(2);
        else setSlidesToShow(3);
    };

    useEffect(() => {
        updateSlidesToShow();
        window.addEventListener('resize', updateSlidesToShow);
        return () => window.removeEventListener('resize', updateSlidesToShow);
    }, []);

    // Auto-slide
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 8000);
        return () => clearInterval(interval);
    }, [currentIndex, slidesToShow]);

    const prevSlide = () => {
        setCurrentIndex((prev: number) =>
            prev === 0 ? testimonials.length - slidesToShow : prev - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prev: number) =>
            prev + slidesToShow >= testimonials.length ? 0 : prev + 1
        );
    };

    const clientLogos = [
        'TechFlow', 'HealthCare+', 'EcoCommerce', 'DataVision', 'InnovateCorp', 'FutureFinance'
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-poppins text-navy-900 mb-6">
                        What Our Clients Say
                    </h2>
                    <p className="text-lg text-navy-600 max-w-3xl mx-auto">
                        Don't just take our word for it. Here's what our clients have to say about their experience working with us.
                    </p>
                </div>

                <div className="relative">
                    {/* Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-teal-100 z-10"
                    >
                        <ChevronLeft className="w-5 h-5 text-teal-600" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-teal-100 z-10"
                    >
                        <ChevronRight className="w-5 h-5 text-teal-600" />
                    </button>

                    {/* Slider */}
                    <div className="overflow-hidden mb-20">
                        <div
                            ref={containerRef}
                            className="flex transition-transform duration-700 ease-in-out"
                            style={{
                                transform: `translateX(-${(100 / slidesToShow) * currentIndex}%)`,
                                width: `${(100 / slidesToShow) * testimonials.length}%`,
                            }}
                        >
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="w-full px-2"
                                    style={{ width: `${100 / testimonials.length}%` }}
                                >
                                    <Card className="h-full">
                                        <CardContent className="p-6 relative">
                                            <div className="absolute top-4 right-4 opacity-10">
                                                <Quote className="w-8 h-8 text-teal-600" />
                                            </div>
                                            <div className="flex items-center mb-4">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                                ))}
                                            </div>
                                            <p className="text-navy-600 mb-6 italic">
                                                "{testimonial.content}"
                                            </p>
                                            <div className="flex items-center">
                                                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-navy-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                                                    {testimonial.name.charAt(0)}
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-navy-900">
                                                        {testimonial.name}
                                                    </h4>
                                                    <p className="text-sm text-navy-600">{testimonial.role}</p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Client Logos */}
                <div className="text-center">
                    <h3 className="text-2xl font-semibold font-poppins text-navy-900 mb-8">
                        Trusted by Leading Companies
                    </h3>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
                        {clientLogos.map((logo, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center h-16 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 animate-fade-in"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <span className="text-navy-700 font-semibold text-lg">
                                    {logo}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
                    {[
                        { number: '98%', label: 'Client Satisfaction' },
                        { number: '150+', label: 'Successful Projects' },
                        { number: '25+', label: 'Industry Awards' },
                        { number: '24/7', label: 'Support Available' }
                    ].map((stat, index) => (
                        <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="text-3xl md:text-4xl font-bold font-poppins text-navy-800 mb-2">
                                {stat.number}
                            </div>
                            <div className="text-sm md:text-base text-navy-600">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clients;



//  {/* Testimonials */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
//                     {testimonials.map((testimonial, index) => (
//                         <Card
//                             key={index}
//                             className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white animate-fade-in"
//                             style={{ animationDelay: `${index * 0.1}s` }}
//                         >
//                             <CardContent className="p-8 relative">
//                                 {/* Quote Icon */}
//                                 <div className="absolute top-4 right-4 opacity-10">
//                                     <Quote className="w-8 h-8 text-teal-600" />
//                                 </div>

//                                 {/* Rating */}
//                                 <div className="flex items-center mb-4">
//                                     {[...Array(testimonial.rating)].map((_, i) => (
//                                         <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
//                                     ))}
//                                 </div>

//                                 <p className="text-navy-600 mb-6 leading-relaxed italic">
//                                     "{testimonial.content}"
//                                 </p>

//                                 <div className="flex items-center">
//                                     <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-navy-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
//                                         {testimonial.name.charAt(0)}
//                                     </div>
//                                     <div>
//                                         <h4 className="font-semibold text-navy-900">
//                                             {testimonial.name}
//                                         </h4>
//                                         <p className="text-sm text-navy-600">
//                                             {testimonial.role}
//                                         </p>
//                                     </div>
//                                 </div>
//                             </CardContent>
//                         </Card>
//                     ))}
//                 </div>