import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { 
  Users, 
  TrendingUp, 
  Award, 
  BookOpen, 
  Coffee,
  DollarSign,
  Clock,
  Laptop
} from 'lucide-react';

const CareerPage = () => {
  const [selectedPosition, setSelectedPosition] = useState(null);

  const benefits = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Competitive Salary",
      description: "Industry-leading compensation packages with regular reviews"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Flexible Hours",
      description: "Work-life balance with flexible scheduling options"
    },
    {
      icon: <Laptop className="w-6 h-6" />,
      title: "Remote Work",
      description: "Hybrid working model with work from home options"
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Great Culture",
      description: "Inclusive environment with regular team activities"
    }
  ];

  const openPositions = [
    {
      title: "Senior Financial Analyst",
      department: "Finance",
      location: "New York, NY",
      type: "Full-time",
      description: "We're seeking an experienced Financial Analyst to join our team...",
      requirements: [
        "5+ years of experience in financial analysis",
        "Strong Excel and financial modeling skills",
        "CFA certification preferred",
        "Experience with financial reporting and forecasting"
      ]
    },
    {
      title: "Business Development Manager",
      department: "Sales",
      location: "Remote",
      type: "Full-time",
      description: "Looking for a dynamic BD Manager to drive growth...",
      requirements: [
        "7+ years of B2B sales experience",
        "Proven track record of closing enterprise deals",
        "Strong networking and relationship building skills",
        "Experience in financial services industry"
      ]
    },
    {
      title: "Risk Management Consultant",
      department: "Risk",
      location: "Chicago, IL",
      type: "Full-time",
      description: "Join our risk management team to help clients navigate...",
      requirements: [
        "8+ years of risk management experience",
        "Strong analytical and problem-solving skills",
        "Experience with risk assessment frameworks",
        "Excellent communication skills"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative bg-blue-600 text-white py-24 px-4 sm:px-6 lg:px-8"
      >
        <motion.div 
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          className="max-w-7xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Build your career with a company that's shaping the future of business finance
          </p>
          <motion.div 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="flex flex-wrap justify-center gap-4 text-center"
          >
            <div className="flex items-center gap-2">
              <Users className="w-6 h-6" />
              <span>50+ Employees</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-6 h-6" />
              <span>Fast Growth</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6" />
              <span>Top Rated</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-6 h-6" />
              <span>Learning Culture</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Join Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-blue-600 mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Open Positions Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
          <div className="grid gap-6">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div 
                  className="p-6 cursor-pointer"
                  onClick={() => setSelectedPosition(selectedPosition === index ? null : index)}
                >
                  <div className="flex flex-wrap justify-between items-start gap-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-3 text-sm">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                          {position.department}
                        </span>
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
                          {position.location}
                        </span>
                        <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
                          {position.type}
                        </span>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium"
                    >
                      Apply Now
                    </motion.button>
                  </div>
                  
                  <AnimatePresence>
                    {selectedPosition === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="mt-6 overflow-hidden"
                      >
                        <p className="text-gray-600 mb-4">{position.description}</p>
                        <h4 className="font-semibold mb-2">Requirements:</h4>
                        <ul className="list-disc list-inside text-gray-600">
                          {position.requirements.map((req, i) => (
                            <li key={i} className="mb-1">{req}</li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-blue-600 text-white py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Our Team?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Take the first step towards an exciting career in business finance
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-medium text-lg shadow-lg"
          >
            View All Positions
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default CareerPage;