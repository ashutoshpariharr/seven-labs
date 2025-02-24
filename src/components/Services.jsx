import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
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
            title: "Internal Financial Controls",
            description: "Establish and maintain robust financial control systems.",
            icon: "🔒"
        },
        {
            title: "Generic Services",
            description: "Customized solutions to meet your specific business needs.",
            icon: "🎯"
        }
    ];

    // Animation variants
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
        <div className="bg-gradient-to-b from-gray-50 to-white py-20">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Our Services</h1>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Comprehensive solutions tailored to elevate your business performance and drive sustainable growth.
                    </p>
                </motion.div>

                {/* Services Grid */}
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
                            <div className="mb-6 text-4xl bg-blue-50 w-16 h-16 flex items-center justify-center rounded-full">
                                {service.icon}
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

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="mt-24 bg-blue-600 rounded-xl p-10 text-center shadow-xl"
                >
                    <h2 className="text-3xl font-bold text-white mb-4">Ready to transform your business?</h2>
                    <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                        Our team of experts is ready to provide tailored solutions that address your specific business challenges.
                    </p>
                    <Link to="/contact">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-white text-blue-700 px-8 py-3 rounded-md font-semibold hover:bg-blue-50 transition duration-300"
                        >
                            Schedule a Consultation
                        </motion.button>
                    </Link>
                </motion.div>

                {/* Testimonials Section */}
                <div className="mt-24">
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
                </div>

                {/* FAQ Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4, duration: 0.8 }}
                    className="mt-24"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                    </div>

                    <div className="space-y-6 max-w-4xl mx-auto">
                        <div className="bg-white p-6 rounded-lg border border-gray-100">
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">How does the Virtual CFO service work?</h3>
                            <p className="text-gray-600">
                                Our Virtual CFO service provides you with an experienced financial professional who works closely with your team to provide strategic financial guidance, reporting, and analysis without the cost of a full-time executive.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg border border-gray-100">
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">What size businesses do you typically work with?</h3>
                            <p className="text-gray-600">
                                We work with businesses of all sizes, from startups to established enterprises. Our services are scalable and can be tailored to meet the specific needs of your organization regardless of its size.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg border border-gray-100">
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">How are your services priced?</h3>
                            <p className="text-gray-600">
                                We offer flexible pricing models including project-based fees, monthly retainers, and customized packages based on the scope and complexity of your needs. Contact us for a personalized quote.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ServicesPage;