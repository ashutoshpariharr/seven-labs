import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');
  const [scrolled, setScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const navigate = useNavigate(); // Use the useNavigate hook

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // Set active item based on current path
    const path = window.location.pathname;
    const currentPath = path === '/' ? 'Home' : path.substring(1);
    const matchingItem = navItems.find(
      (item) =>
        item.path === path ||
        item.name.toLowerCase() === currentPath.toLowerCase()
    );
    if (matchingItem) {
      setActiveItem(matchingItem.name);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    {
      name: 'Services',
      path: '/services',
      subItems: [
        { name: 'Virtual CFO', path: '/services/virtual-cfo' },
        { name: 'Business Optimization', path: '/services/business-optimization' },
        { name: 'Internal Audits', path: '/services/internal-audits' },
        { name: 'Financial Controls', path: '/services/financial-controls' },
      ],
    },
    { name: 'Career', path: '/career' },
  ];

  const handleNavigation = (itemName, path) => {
    setActiveItem(itemName);
    setIsOpen(false);
    navigate(path);
  };

  return (
    <>
      {/* Top Info Bar
      <motion.div
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        className="hidden md:block bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2"
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <Phone className="w-4 h-4 mr-2" /> +919193580737
            </span>
            <span className="flex items-center">
              <Mail className="w-4 h-4 mr-2" /> admin@brnco.in
            </span>
          </div>
          <div className="flex space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-4 py-1 bg-white text-blue-600 rounded-full text-sm font-medium"
            >
              Get a Quote
            </motion.button>
          </div>
        </div>
      </motion.div> */}

      {/* Main Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full bg-white z-50 transition-all duration-300 ${
          scrolled ? 'shadow-lg py-2' : 'py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center space-x-2"
            >
              <div className="relative">
                <img src="/LOGO.png" alt="logo" width={100} />
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <motion.div
                    className="px-4 py-2 relative"
                    onHoverStart={() => item.subItems && setIsServicesOpen(true)}
                    onHoverEnd={() => item.subItems && setIsServicesOpen(false)}
                  >
                    <Link
                      to={item.path}
                      className={`text-gray-700 hover:text-blue-600 font-medium flex items-center ${
                        activeItem === item.name ? 'text-blue-600' : ''
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation(item.name, item.path);
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {item.name}
                      {item.subItems && <ChevronDown className="ml-1 w-4 h-4" />}
                    </Link>

                    {/* Dropdown for Services */}
                    {item.subItems && (
                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 z-50"
                          >
                            {item.subItems.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.path}
                                className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleNavigation(item.name, subItem.path);
                                }}
                                whileHover={{ x: 5 }}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </motion.div>

                  {/* Animated underline */}
                  {activeItem === item.name && (
                    <motion.div
                      layoutId="underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                    />
                  )}
                </div>
              ))}

              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="ml-4 px-6 py-2 bg-blue-600 text-white rounded-full font-medium shadow-lg shadow-blue-200"
                >
                  Contact
                </motion.button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg bg-blue-50 text-blue-600"
            >
              {isOpen ? <X /> : <Menu />}
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden overflow-hidden bg-white"
              >
                {navItems.map((item) => (
                  <motion.div
                    key={item.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    className="py-2"
                  >
                    <Link
                      to={item.path}
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation(item.name, item.path);
                      }}
                    >
                      {item.name}
                    </Link>
                    {item.subItems && activeItem === item.name && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="pl-8 space-y-2 mt-2"
                      >
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block py-2 text-gray-600 hover:text-blue-600"
                            onClick={(e) => {
                              e.preventDefault();
                              handleNavigation(item.name, subItem.path);
                            }}
                            whileHover={{ x: 5 }}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-4 mt-2 bg-blue-50 rounded-lg"
                >
                  <Link to="/contact">
                    <button className="w-full py-2 bg-blue-600 text-white rounded-lg font-medium">
                      Get Started
                    </button>
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  );
};

export default Navigation;