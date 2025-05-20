import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowRight, Award, TrendingUp, ChevronRight } from 'lucide-react';
import FeaturesSection from './FeaturesSection';
import TestimonialsSection from './TestimonialsSection';
import { Link } from 'react-router-dom';
import TestimonialSlider from './HomeSlider';
import { useRef, useEffect } from 'react';
import ServicesPage from './Services';
import Client from './Clients';
// import ClientSay from './clientSay';

const HeroServices = () => {

  const services = [
    {
      title: "Virtual CFO Services",
      description: "Strategic financial planning and management for startups and growing businesses.",
      icon: "💼"
    },
    {
      title: "Business Process Optimisation",
      description: "Streamline operations and improve efficiency across your organization.",
      icon: "⚡"
    },
    {
      title: "Internal Audits",
      description: "Comprehensive internal audit services to ensure compliance and identify improvements.",
      icon: "📊"
    },
    {
      title: "Startup India",
      description: "Startup India Offering a host of services for Startup India initiatives: DPIIT Registration, Seed Fund, program Soft, Loan application, Fundraising Consulting, Financial Modelling Business Plan",
      icon: "https://crystalpng.com/wp-content/uploads/2025/01/startup-india-logo-gradient-circle.png"
    },
    {
      title: "Generic Services",
      description: "Customized solutions to meet your specific business needs.",
      icon: "🎯"
    },
    {
      title: "E-Commerce sellers",
      description: "Putting your accounting and reporting at ease we are here to assist all the e-commerce sellers with auditing and reporting of your e-commerce business",
      icon: "🛒"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <>
      <div className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 mt-10">Our Services</h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions tailored to elevate your business performance and drive sustainable growth.
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                className="bg-white rounded-lg p-8 border border-gray-100 flex flex-col h-full"
              >
                <div className="mb-6 text-4xl bg-blue-50 w-16 h-16 flex items-center justify-center rounded-full overflow-hidden">
                  {service.icon.startsWith("http") ? (
                    <img src={service.icon} alt={service.title} className="w-8 h-8 object-contain" />
                  ) : (
                    service.icon
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="mt-auto flex items-center text-blue-600 font-medium group"
                >
                  Learn More
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight className="ml-1 h-4 w-4 group-hover:text-blue-800" />
                  </motion.span>
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
          {/* <div className="mt-24">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-900">What Our Clients Say</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="bg-gray-50 p-8 rounded-lg border border-gray-100 italic text-gray-700 relative"
            >
              <div className="text-blue-600 text-6xl absolute -top-6 left-6 opacity-20">"</div>
              <p className="text-lg relative z-10">
                The Virtual CFO services transformed our financial management approach.
                The team provided insights that helped us optimize our cash flow and make better strategic decisions.
              </p>
              <div className="mt-6 flex items-center">
                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center font-bold text-blue-700">MJ</div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-900">Michael Johnson</p>
                  <p className="text-sm text-gray-500">CEO, Tech Innovations</p>
                </div>
              </div>
            </motion.div>
          </div> */}
        </div>
      </div>
    </>
  )
}

const HeroSection = () => {
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });

  // Scroll-triggered animations
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.5]);

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative pt-20 pb-32 bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 overflow-hidden"
        ref={heroRef}
      >
        {/* Animated Background Elements */}
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

          {/* Additional moving particles */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                x: Math.random() * 100 - 50,
                y: Math.random() * 100 - 50,
                opacity: 0.1 + Math.random() * 0.2,
                scale: 0.5 + Math.random() * 0.5
              }}
              animate={{
                x: [Math.random() * 100 - 50, Math.random() * 100 - 50],
                y: [Math.random() * 100 - 50, Math.random() * 100 - 50],
                opacity: [0.1 + Math.random() * 0.2, 0.1 + Math.random() * 0.2],
                scale: [0.5 + Math.random() * 0.5, 0.7 + Math.random() * 0.5],
              }}
              transition={{
                duration: 15 + Math.random() * 15,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
              className="absolute w-32 h-32 bg-indigo-100 rounded-full blur-3xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              style={{ y, opacity }} // Parallax effect on scroll
              className="relative z-10"
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="absolute -left-4 top-0 w-20 h-20 bg-blue-100 rounded-full opacity-50 blur-xl"
              />

              {/* Animated heading with staggered character reveal */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <h1 className="text-5xl font-bold text-gray-900 sm:text-6xl md:text-7xl leading-tight mt-10">
                  <motion.span
                    variants={itemVariants}
                    className="inline-block"
                  >
                    Transform Your
                  </motion.span>{" "}
                  <span className="relative">
                    <motion.span
                      variants={itemVariants}
                      className="relative z-10 text-blue-600 inline-block"
                    >
                      Business
                    </motion.span>
                    <motion.svg
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 0.8 }}
                      className="absolute bottom-0 left-0 w-full"
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
                  <motion.span
                    variants={itemVariants}
                    className="inline-block"
                  >
                    With Our Expertise
                  </motion.span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="mt-8 text-xl text-gray-600 leading-relaxed"
              >
                Comprehensive financial solutions and business optimization services
                tailored to your needs. We offer a range of services to help you launch, grow and manage your business with ease. From startup india services to funding, legal compliance, bookkeeping and automation, we've got you covered
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.7 }}
                className="mt-10 flex flex-col sm:flex-row gap-4"
              >
                <Link to="/contact">
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 text-white px-8 py-4 rounded-lg flex items-center justify-center space-x-2 shadow-lg shadow-blue-200 relative overflow-hidden group"
                  >
                    <span className="relative z-10">Get Started</span>
                    <motion.span
                      initial={{ x: -5 }}
                      animate={{ x: 0 }}
                      className="ml-2 relative z-10"
                    >
                      <ArrowRight />
                    </motion.span>
                    <motion.div
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ type: "tween", ease: "easeOut" }}
                      className="absolute inset-0 bg-blue-700"
                    />
                  </motion.button>
                </Link>
                <Link to="/demo">
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      borderColor: "#3b82f6"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-lg flex items-center justify-center space-x-2 border-2 border-gray-300 hover:border-blue-400 transition-colors relative overflow-hidden"
                  >
                    <span>How do we do it</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 1.5,
                        ease: "easeInOut"
                      }}
                    >
                      <ChevronRight className="ml-2" />
                    </motion.span>
                  </motion.button>
                </Link>
              </motion.div>

              <motion.div
                ref={statsRef}
                variants={containerVariants}
                initial="hidden"
                animate={isStatsInView ? "visible" : "hidden"}
                className="mt-12 grid grid-cols-3 gap-4"
              >
                {[
                  { number: "98%", text: "Relationship rates" },
                  { number: "100+", text: "Client simulator" },
                  { number: "3+", text: "Years Experience" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="text-center"
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isStatsInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        delay: 0.2 + index * 0.1,
                        duration: 0.5,
                        type: "spring",
                        stiffness: 200
                      }}
                      className="text-2xl font-bold text-blue-600"
                    >
                      {stat.number}
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={isStatsInView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="text-sm text-gray-600"
                    >
                      {stat.text}
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                type: "spring",
                stiffness: 100
              }}
              className="mt-12 lg:mt-0 relative"
            >
              <motion.div
                whileHover={{
                  rotate: 2,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="relative z-10"
              >
                {/* Text overlay above the image */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.8,
                    duration: 0.7,
                    type: "spring",
                    stiffness: 70
                  }}
                  className="absolute -top-16 left-0 right-0 bg-gradient-to-r from-blue-600 to-indigo-600 p-4 rounded-t-xl text-white shadow-lg z-20 overflow-hidden"
                >
                  {/* Background decorative elements */}
                  <motion.div
                    className="absolute -right-8 -top-8 h-16 w-16 rounded-full bg-blue-400 opacity-20"
                    animate={{
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.div
                    className="absolute -left-4 bottom-0 h-8 w-8 rounded-full bg-indigo-300 opacity-20"
                    animate={{
                      scale: [1, 1.5, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  />

                  {/* Heading with animation */}
                  <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="text-xl font-bold text-center mb-2"
                  >
                    Become a Better Team, With us
                  </motion.h3>

                  {/* Description with character staggered animation */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    className="text-sm text-blue-100 text-center"
                  >
                    This is a team of young and energetic Chartered Accountants and Management consultants
                    whose aim is to help small business manage in an organized manner just like big corporates in a fraction of cost.
                  </motion.p>
                </motion.div>

                <motion.div
                  animate={{
                    boxShadow: [
                      "0 20px 50px rgba(59, 130, 246, 0.1)",
                      "0 20px 50px rgba(79, 70, 229, 0.2)",
                      "0 20px 50px rgba(59, 130, 246, 0.1)"
                    ]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative rounded-2xl overflow-hidden mt-16" // Added margin-top to make room for the text overlay
                >
                  {/* Shimmering effect overlay */}
                  <motion.div
                    animate={{
                      x: ["0%", "100%"],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      repeatDelay: 1
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 z-10"
                    style={{ width: "50%" }}
                  />

                  <img
                    src="https://static.wixstatic.com/media/c837a6_7ec5a1cc9c44437b8bd302c800e892eb~mv2.png/v1/fill/w_854,h_424,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Group%2019.png"
                    alt="Business illustration"
                    className="rounded-2xl relative z-0"
                  />
                </motion.div>

                {/* Floating elements around the image */}

                <motion.div
                  initial={{ opacity: 0, scale: 0, x: 20, y: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="absolute -right-4 -bottom-4 bg-indigo-500 rounded-full text-white p-3 shadow-lg"
                >
                  <TrendingUp size={20} />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
      <HeroServices />
      {/* <ClientSay /> */}
      <Client />
    </>
  );
};

export default HeroSection;
