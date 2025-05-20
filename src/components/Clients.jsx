import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Testimonial data
const testimonials = [
    {
        id: 1,
        text: "The Virtual CFO services transformed our financial management approach. The team provided insights that helped us optimize our cash flow and make better strategic decisions.",
        name: "Michael Johnson",
        title: "CEO, Tech Innovations",
        initials: "MJ"
    },
    {
        id: 2,
        text: "Working with this team of chartered accountants has been a game-changer for our small business. Their organized approach and attention to detail helped us streamline operations significantly.",
        name: "Sarah Williams",
        title: "Founder, Creative Solutions",
        initials: "SW"
    },
    {
        id: 3,
        text: "The tax planning strategies they implemented saved us thousands in the first year alone. Their young and energetic team brings fresh perspectives while maintaining professional excellence.",
        name: "David Chen",
        title: "CFO, Growth Ventures",
        initials: "DC"
    },
    {
        id: 4,
        text: "Their bookkeeping services are exceptional. We now have complete visibility into our finances, which has empowered us to make data-driven decisions we couldn't before.",
        name: "Priya Patel",
        title: "Director, Innovative Retail",
        initials: "PP"
    },
    {
        id: 5,
        text: "The team's knowledge of compliance regulations saved us from potential issues we weren't even aware of. They provide big-company expertise with personalized attention.",
        name: "Robert Anderson",
        title: "Owner, Anderson Manufacturing",
        initials: "RA"
    }
];

const Client = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const sliderRef = useRef(null);

    // Auto-advance the slider
    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                setDirection(1);
                setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
            }, 6000);

            return () => clearInterval(interval);
        }
    }, [isPaused]);

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    };

    // Animation variants
    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 500 : -500,
            opacity: 0,
            scale: 0.9,
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        },
        exit: (direction) => ({
            x: direction > 0 ? -500 : 500,
            opacity: 0,
            scale: 0.9,
            transition: {
                duration: 0.5
            }
        })
    };

    return (
        <div
            className="relative py-16 bg-gradient-to-r from-gray-50 to-gray-100 overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            ref={sliderRef}
        >
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        rotate: 360,
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute -right-1/4 -top-1/4 w-1/2 h-1/2 bg-blue-100 rounded-full opacity-20 blur-3xl"
                />
                <motion.div
                    animate={{
                        rotate: -360,
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute -left-1/4 -bottom-1/4 w-1/2 h-1/2 bg-indigo-100 rounded-full opacity-20 blur-3xl"
                />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-3">What Our Clients Say</h2>
                    <motion.div
                        className="w-24 h-1 bg-blue-500 mx-auto rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "6rem" }}
                        transition={{ delay: 0.5, duration: 0.7 }}
                    />
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        See how our team of chartered accountants and management consultants has helped businesses thrive
                    </p>
                </motion.div>

                <div className="items-center">

                    {/* Right column with slider */}
                    <div className="lg:col-span-7 mt-12 lg:mt-0 relative">
                        <div className="relative h-96 overflow-hidden">
                            <AnimatePresence custom={direction} initial={false} mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    custom={direction}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    className="absolute w-full"
                                >
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.2, duration: 0.8 }}
                                        className="bg-white p-8 rounded-lg border border-gray-100 shadow-lg italic text-gray-700 relative"
                                    >
                                        <div className="text-blue-600 text-6xl absolute -top-6 left-6 opacity-20">"</div>
                                        <p className="text-lg relative z-10">
                                            {testimonials[currentIndex].text}
                                        </p>
                                        <div className="mt-6 flex items-center">
                                            <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center font-bold text-blue-700">
                                                {testimonials[currentIndex].initials}
                                            </div>
                                            <div className="ml-4">
                                                <p className="font-semibold text-gray-900">{testimonials[currentIndex].name}</p>
                                                <p className="text-sm text-gray-500">{testimonials[currentIndex].title}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Dot Indicators */}
                            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
                                {testimonials.map((_, index) => (
                                    <motion.button
                                        key={index}
                                        onClick={() => {
                                            setDirection(index > currentIndex ? 1 : -1);
                                            setCurrentIndex(index);
                                        }}
                                        aria-label={`Go to testimonial ${index + 1}`}
                                        className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? 'bg-blue-600 scale-110' : 'bg-gray-300 hover:bg-blue-400'
                                            }`}
                                        whileHover={{ scale: 1.3 }}
                                        transition={{ duration: 0.2 }}
                                    />
                                ))}
                            </div>

                            {/* Arrow Navigation Buttons */}
                            <button
                                onClick={prevSlide}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-blue-600 hover:bg-blue-100 border border-gray-200 rounded-full p-3 shadow-md transition-all duration-200 z-10"
                                aria-label="Previous testimonial"
                            >
                                <ChevronLeft size={22} />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-blue-600 hover:bg-blue-100 border border-gray-200 rounded-full p-3 shadow-md transition-all duration-200 z-10"
                                aria-label="Next testimonial"
                            >
                                <ChevronRight size={22} />
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Client;
