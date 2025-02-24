import { motion } from 'framer-motion';
import { ArrowRight, Award, TrendingUp, ChevronRight } from 'lucide-react';
import FeaturesSection from './FeaturesSection';
import TestimonialsSection from './TestimonialsSection';
import { CTASection } from './AwardsSection';
import { Link } from 'react-router-dom';
import LogoMarquee from './LogoMarquee';

const HeroSection = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative pt-20 pb-32 bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 overflow-hidden"
      >
        {/* Background Decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -right-1/4 -top-1/4 w-1/2 h-1/2 bg-blue-200 rounded-full opacity-20 blur-3xl"
          />
          <motion.div
            animate={{
              rotate: -360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -left-1/4 -bottom-1/4 w-1/2 h-1/2 bg-indigo-200 rounded-full opacity-20 blur-3xl"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="relative z-10"
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="absolute -left-4 top-0 w-20 h-20 bg-blue-100 rounded-full opacity-50 blur-xl"
              />
              <h1 className="text-5xl font-bold text-gray-900 sm:text-6xl md:text-7xl leading-tight">
                Transform Your
                <span className="relative">
                  <span className="relative z-10 text-blue-600"> Business</span>
                  <motion.svg
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute bottom 0 left-0 w-full"
                    viewBox="0 0 200 20"
                  >
                    <path
                      d="M 0 10 C 50 0, 150 0, 200 10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-blue-300"
                    />
                  </motion.svg>
                </span>
                <br />
                With Our Expertise
              </h1>
              <p className="mt-8 text-xl text-gray-600 leading-relaxed">
                Comprehensive financial solutions and business optimization services
                tailored to your needs. We help you achieve sustainable growth
                through strategic planning and execution.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 text-white px-8 py-4 rounded-lg flex items-center justify-center space-x-2 shadow-lg shadow-blue-200"
                  >
                    Get Started <ArrowRight className="ml-2" />
                  </motion.button>
                </Link>
                <Link to="/services">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-lg flex items-center justify-center space-x-2 border-2 border-gray-300 hover:border-blue-400 transition-colors"
                  >
                    Watch Demo <ChevronRight className="ml-2" />
                  </motion.button>
                </Link>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-4">
                {[
                  { number: "95%", text: "Client Satisfaction" },
                  { number: "500+", text: "Projects Completed" },
                  { number: "15+", text: "Years Experience" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl font-bold text-blue-600">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.text}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="mt-12 lg:mt-0 relative"
            >
              <motion.div
                animate={{
                  rotate: [0, 10, 0],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative z-10"
              >
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Business illustration"
                  className="rounded-2xl shadow-2xl"
                />
                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -right-8 -top-8 bg-white p-4 rounded-lg shadow-lg"
                >
                  <TrendingUp className="text-blue-600 w-8 h-8" />
                  <div className="mt-2 text-sm font-semibold">+125% Growth</div>
                </motion.div>
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -left-8 bottom-1/4 bg-white p-4 rounded-lg shadow-lg"
                >
                  <Award className="text-blue-600 w-8 h-8" />
                  <div className="mt-2 text-sm font-semibold">Top Rated</div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
      <FeaturesSection />
      <CTASection />
      {/* <TestimonialsSection /> */}
      <LogoMarquee />
    </>
  );
};


export default HeroSection;