import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const serviceSubItems = [
  { id: 'seo', name: 'Search Engine Optimization', path: '/services/seo' },
  { id: 'branding', name: 'Brand Development', path: '/services/brand-development' },
  { id: 'social-media', name: 'Social Media Marketing', path: '/services/social-media-marketing' },
  { id: 'web-development', name: 'Web Development', path: '/services/web-development' },
  { id: 'content-marketing', name: 'Content Marketing', path: '/services/content-marketing' },
  { id: 'ppc', name: 'PPC Advertising', path: '/services/ppc-advertising' }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navItems = ['portfolio', 'about', 'contact'];

  const getLabel = (item: string) => {
    switch (item) {
      case 'home': return 'Home';
      case 'portfolio': return 'Portfolio';
      case 'about': return 'About Us';
      case 'contact': return 'Contact';
      default: return item.charAt(0).toUpperCase() + item.slice(1);
    }
  };

  const navigateToPage = (page: string) => {
    switch (page) {
      case 'home':
        navigate('/');
        break;
      case 'portfolio':
        navigate('/portfolio');
        break;
      case 'about':
        navigate('/about');
        break;
      case 'contact':
        navigate('/contact');
        break;
      default:
        navigate('/');
    }
    setIsMobileMenuOpen(false);
  };

  const navigateToService = (path: string) => {
    navigate(path);
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold font-poppins text-teal-600 cursor-pointer" onClick={() => navigate('/')}>
              TJ Arya
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {/* Home */}
              <button
                onClick={() => navigateToPage('home')}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 capitalize group ${location.pathname === '/' ? 'text-teal-500' : 'text-teal-700'}`}
              >
                Home
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-200 group-hover:w-full ${
                  location.pathname === '/' ? 'w-full' : ''
                }`}></span>
              </button>

              {/* Services Dropdown */}
              <div className="relative group" onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)} ref={servicesRef}>
                <div className="relative flex items-center text-teal-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
                  <span>Services</span>
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
                </div>
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 12, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="absolute left-0 mt-2 w-64 rounded-2xl shadow-xl bg-white ring-1 ring-black ring-opacity-5 z-50"
                    >
                      <div className="py-2 divide-y overflow-hidden divide-gray-100">
                        {serviceSubItems.map((service) => (
                          <motion.button
                            key={service.id}
                            onClick={() => navigateToService(service.path)}
                            whileHover={{
                              scale: 1.03,
                              backgroundColor: 'rgba(45, 212, 191, 0.1)',
                              color: '#0f766e',
                            }}
                            className="block w-full text-left px-4 py-3 text-sm font-medium text-gray-700 transition-all duration-200"
                          >
                            {service.name}
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Remaining nav items */}
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => navigateToPage(item)}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 capitalize group ${location.pathname.includes(item) ? 'text-teal-500' : 'text-teal-700'}`}
                >
                  {getLabel(item)}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-200 group-hover:w-full ${
                  (item === 'portfolio' && location.pathname === '/portfolio') ||
                  (item === 'about' && location.pathname === '/about') ||
                  (item === 'contact' && location.pathname === '/contact')
                    ? 'w-full'
                    : ''
                }`}></span>
                </button>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => navigateToPage('contact')}
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-teal-700 hover:text-teal-600 p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white/95 backdrop-blur-md shadow-lg rounded-lg mt-2 py-4 overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {/* Home */}
                <button
                  onClick={() => navigateToPage('home')}
                  className="block px-3 py-2 text-base font-medium capitalize w-full text-left text-teal-700 hover:text-teal-600 transition-colors duration-200"
                >
                  Home
                </button>

                {/* Services Dropdown */}
                <div>
                  <button
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-teal-700 hover:text-teal-600"
                  >
                    <span>Services</span>
                    <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isMobileServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="pl-6 space-y-1 mt-1"
                      >
                        {serviceSubItems.map((service) => (
                          <button
                            key={service.id}
                            onClick={() => navigateToService(service.path)}
                            className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-teal-600 rounded-md"
                          >
                            {service.name}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Remaining Items */}
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => navigateToPage(item)}
                    className="block px-3 py-2 text-base font-medium capitalize w-full text-left text-teal-700 hover:text-teal-600 transition-colors duration-200"
                  >
                    {getLabel(item)}
                  </button>
                ))}

                {/* CTA Button */}
                <button
                  onClick={() => navigateToPage('contact')}
                  className="bg-teal-600 hover:bg-teal-700 text-white w-full px-4 py-2 mt-4 rounded-lg transition-colors duration-200"
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
