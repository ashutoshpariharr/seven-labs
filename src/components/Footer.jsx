import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowRight,
  Send,
  Clock,
  Award,
  CheckCircle
} from 'lucide-react';

const Footer = () => {
  const fadeInUpVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5 }
  };

  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-blue-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -right-1/4 -top-1/4 w-1/2 h-1/2 bg-blue-500 rounded-full opacity-10 blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 1.3, 1],
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -left-1/4 -bottom-1/4 w-1/2 h-1/2 bg-blue-400 rounded-full opacity-10 blur-3xl"
        />
      </div>

      {/* Newsletter Section */}
      <div className="relative max-w-7xl mx-auto px-4 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10 pb-12">
          {/* Company Info */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 text-transparent bg-clip-text">
                7-Labs vision
              </span>
            </div>
            <p className="text-gray-300 mb-6">
              Empowering businesses through innovative financial solutions and strategic optimization.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['About Us', 'Services', 'Career', 'Contact'].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-center"
                >
                  <ArrowRight className="w-4 h-4 mr-2 text-blue-400" />
                  <a href="/" className="text-gray-300 hover:text-white transition-colors">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-4">
              {[
                'Virtual CFO Services',
                'Business Optimization',
                'Internal Audits',
                'Financial Controls',
                'Strategic Planning'
              ].map((service, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-center"
                >
                  <CheckCircle className="w-4 h-4 mr-2 text-blue-400" />
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    {service}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-blue-400 mt-1" />
                <span className="text-gray-300">
                  123 Business Avenue, Suite 500<br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-blue-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-blue-400" />
                <span className="text-gray-300">contact@7-labs.com</span>
              </li>
              <li className="flex items-center">
                <Clock className="w-5 h-5 mr-3 text-blue-400" />
                <span className="text-gray-300">Mon - Fri: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
          className="border-t border-white/10 py-8 mt-8 relative z-10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              {/* © 2024 7-Labs. All rights reserved. */}
              © {year} seven-Labs-vision. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;