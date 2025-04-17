import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Check } from 'lucide-react';

export default function TestimonialSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const testimonials = [
        {
            id: 1,
            title: "Streamlining Reimbursements for a Leading FinTech Company",
            description: "A FinTech company with 500 employees faced challenges in managing reimbursements. The manual process was time-consuming, error-prone, lacked visibility, and increased operational costs.",
            objectives: [
                "Automate reimbursement processing",
                "Enhance transparency and tracking",
                "Centralize data management",
                "Reduce operational costs"
            ],
            bgColor: "bg-purple-50",
            image: "https://www.joomdev.com/wp-content/uploads/2024/09/vector.png",
            imageAlt: "FinTech dashboard with analytics"
        },
        {
            id: 2,
            title: "Streamlining Line of Credit Processing with QuickBase CRM",
            description: "A leading California-based fintech company specializing in providing lines of credit to businesses sought to enhance their application processing efficiency. Faced with increasing application volumes from their website, third-party partners, independent sales organizations, and API integrations, the company needed a robust solution to manage and expedite their workflow without compromising on quality or customer satisfaction.",
            challenges: [
                "Fragmented Application Sources: Applications were coming from multiple channels, including the company's website, third-party companies, independent sales organizations, and APIs, making it difficult to maintain a centralized and organized system.",
                "Inefficient Processing Workflow: The existing manual review process was time-consuming, leading to longer turnaround times and potential loss of business opportunities.",
                "Scalability Issues: As the business grew, the lack of an automated system hindered the ability"
            ],
            bgColor: "bg-green-50",
            image: "https://www.joomdev.com/wp-content/uploads/2024/09/fintech-1024x892.png",
            imageAlt: "Laptop with credit card processing"
        },
        {
            id: 3,
            title: "Streamlining E-commerce and Inventory Management for Miami Jet Ski Rentals",
            description: "A Miami-based jet ski rental company faced inefficiencies with manual booking and inventory management, leading to booking errors and resource allocation issues during peak and off-peak seasons.",
            objectives: [
                "Automate booking and inventory management",
                "Optimize workforce scheduling",
                "Scale business operations efficiently"
            ],
            bgColor: "bg-yellow-50",
            image: "https://www.joomdev.com/wp-content/uploads/2024/09/inventry-mgt-1024x1005.png",
            imageAlt: "Computer monitor with e-commerce system"
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h2 className="text-center text-gray-600 mb-8">
                Discover real-world success stories that show the tangible benefits of automation in action.
            </h2>

            <div className="relative">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="flex"
                    >
                        <div className={`grid grid-cols-1 md:grid-cols-2 shadow-lg rounded-lg overflow-hidden ${testimonials[currentSlide].bgColor}`}>
                            <div className="p-8 flex items-center justify-center">
                                <img
                                    src={testimonials[currentSlide].image}
                                    alt={testimonials[currentSlide].imageAlt}
                                    className="max-w-full h-auto"
                                />
                            </div>
                            <div className="p-8 bg-white relative">
                                <div className="absolute top-0 right-0 w-1 h-full bg-green-500"></div>

                                <h3 className="text-2xl font-bold text-indigo-900 mb-4">
                                    {testimonials[currentSlide].title}
                                </h3>

                                <p className="text-gray-600 mb-6">
                                    {testimonials[currentSlide].description}
                                </p>

                                {testimonials[currentSlide].objectives && (
                                    <>
                                        <h4 className="text-xl font-bold text-indigo-900 mb-4">Objectives</h4>
                                        <ul className="space-y-2 mb-6">
                                            {testimonials[currentSlide].objectives.map((objective, index) => (
                                                <li key={index} className="flex items-start">
                                                    <span className="mr-2 mt-1 text-green-500">
                                                        <Check size={18} />
                                                    </span>
                                                    <span>{objective}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                )}

                                {testimonials[currentSlide].challenges && (
                                    <>
                                        <h4 className="text-xl font-bold text-indigo-900 mb-4">Challenges</h4>
                                        <ul className="space-y-3 mb-6">
                                            {testimonials[currentSlide].challenges.map((challenge, index) => (
                                                <li key={index} className="flex items-start">
                                                    <span className="mr-2 text-gray-400">•</span>
                                                    <span className="text-gray-600">{challenge}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                )}

                                {currentSlide === 0 || currentSlide === 2 ? (
                                    <div>
                                        {/* <h4 className="text-xl font-bold text-indigo-900 mb-2">Solution</h4> */}
                                        <div className="flex justify-end mt-2">
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="text-indigo-500 hover:text-indigo-700"
                                            >
                                                <ChevronDown size={20} />
                                            </motion.button>
                                        </div>
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                <div className="absolute top-1/2 -left-4 transform -translate-y-1/2">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={prevSlide}
                        className="bg-white rounded-full p-2 shadow-md"
                    >
                        <ChevronLeft size={24} className="text-gray-600" />
                    </motion.button>
                </div>

                <div className="absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={nextSlide}
                        className="bg-white rounded-full p-2 shadow-md"
                    >
                        <ChevronRight size={24} className="text-gray-600" />
                    </motion.button>
                </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentSlide === index ? 'bg-indigo-700' : 'bg-gray-300'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

// Extra component for the dropdown icon
function ChevronDown(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.size || 24}
            height={props.size || 24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={props.className}
        >
            <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
    );
}