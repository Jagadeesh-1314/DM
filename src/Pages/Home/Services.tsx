import { Link } from "react-router-dom";
import { Card, CardContent } from "../../components/Card";

const services = [
    {
        title: 'Search Engine Optimization',
        description: 'Boost your website\'s visibility and rank higher on search engines with our proven SEO strategies.',
        image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=300&fit=crop',
        link: '/seo'
    },
    {
        title: 'Brand Development',
        description: 'Create a powerful brand identity that resonates with your target audience and drives business growth.',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop',
        link: '/brand-development'
    },
    {
        title: 'Social Media Marketing',
        description: 'Engage your audience and build community around your brand with strategic social media campaigns.',
        image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=500&h=300&fit=crop',
        link: '/social-media-marketing'
    },
    {
        title: 'Web Development',
        description: 'Build fast, responsive, and user-friendly websites that convert visitors into customers.',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop',
        link: '/web-development'
    },
    {
        title: 'Content Marketing',
        description: 'Create compelling content that educates, entertains, and converts your target audience.',
        image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=500&h=300&fit=crop',
        link: '/content-marketing'
    },
    {
        title: 'PPC Advertising',
        description: 'Drive immediate results with targeted pay-per-click campaigns that maximize your ROI.',
        image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&h=300&fit=crop',
        link: '/ppc-advertising'
    }
];

export const Services = () => {
    return (
        <>
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 fade-in-on-scroll">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Our Services
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We offer comprehensive digital marketing solutions to help your business succeed online
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <Card key={index} className="fade-in-on-scroll hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                                <CardContent className="p-0">
                                    <div className="relative overflow-hidden rounded-t-lg">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4">
                                            {service.description}
                                        </p>
                                        <Link
                                            to={`/services${service.link}`}
                                            className="inline-block border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition-colors group-hover:bg-blue-600 group-hover:text-white"
                                        >
                                            Learn More
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Services;