import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../UI/UI';
import { ChartBarIcon, ChevronDownIcon, WrenchIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChartPieIcon,
  CurrencyDollarIcon,
  DocumentChartBarIcon,
  BanknotesIcon,
  UserGroupIcon,
  BuildingLibraryIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  ArrowsRightLeftIcon,
  Cog6ToothIcon,
  CalculatorIcon,
  ClipboardDocumentCheckIcon,
  UserIcon,
  AcademicCapIcon,
  ArrowTrendingUpIcon,
  DocumentTextIcon,
  ArrowPathIcon,
  ComputerDesktopIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

// Shared animation variants
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -20 }
};

const cardVariants = {
  initial: { scale: 0.95, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
  hover: { scale: 1.02, transition: { duration: 0.2 } }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const VirtualCFO = () => {
  const [selectedService, setSelectedService] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const cardHoverVariants = {
    hover: {
      scale: 1.03,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const services = [
    {
      id: 1,
      title: "Financial Planning & Analysis",
      icon: ChartPieIcon,
      color: "from-blue-500 to-blue-700",
      description: "Comprehensive FP&A solutions for strategic decision-making",
      details: [
        "Develop and Analyze Financial Plans and Forecasts",
        "Develop key metrics for stakeholder requirements",
        "Provide Insights and Recommendations Based on Financial Analysis",
        "Financial Structuring of Government/Private Deals"
      ]
    },
    {
      id: 2,
      title: "Budgeting & Forecasting",
      icon: DocumentChartBarIcon,
      color: "from-emerald-500 to-emerald-700",
      description: "Strategic budget planning aligned with business goals",
      details: [
        "Create Detailed Budgets Aligned with Business Goals",
        "Monitor Financial Performance and Adjust Forecasts",
        "Regular monitoring and adjustments for relevance",
        "Comprehensive budget development"
      ]
    },
    {
      id: 3,
      title: "Cash Flow Management",
      icon: CurrencyDollarIcon,
      color: "from-purple-500 to-purple-700",
      description: "Optimize liquidity and cash flow strategies",
      details: [
        "Ensure Adequate Liquidity for Short-Term and Long-Term Obligations",
        "Implement Strategies to Optimize Cash Flow",
        "Support operational and strategic initiatives",
        "Maintain sufficient liquidity for business needs"
      ]
    },
    {
      id: 4,
      title: "Financial Reporting",
      icon: BanknotesIcon,
      color: "from-orange-500 to-orange-700",
      description: "Comprehensive reporting and analysis solutions",
      details: [
        "Generate Regular Financial Reports for Management",
        "Summarize Key Financial Metrics and Trends",
        "Timely and accurate financial reporting",
        "Critical metrics highlighting for decision-making"
      ]
    },
    {
      id: 5,
      title: "Investor Relations",
      icon: UserGroupIcon,
      color: "from-teal-500 to-teal-700",
      description: "Professional stakeholder and investor management",
      details: [
        "Creating Dockets for Investors Due Diligence",
        "Providing Stakeholders with Necessary Reports",
        "Comprehensive due diligence facilitation",
        "Accurate and relevant financial information delivery"
      ]
    },
    {
      id: 6,
      title: "Banking Partnerships",
      icon: BuildingLibraryIcon,
      color: "from-indigo-500 to-indigo-700",
      description: "Strategic banking relationships and fund management",
      details: [
        "Getting Banking Channels on Board for Projects",
        "Bringing Banking Partners for Fund Management",
        "Establish and manage banking relationships",
        "Enhance fund management capabilities"
      ]
    },
    {
      id: 7,
      title: "Business Strategy",
      icon: LightBulbIcon,
      color: "from-pink-500 to-pink-700",
      description: "Strategic financial alignment with business objectives",
      details: [
        "Collaborate with Executive Leadership",
        "Align Financial Strategies with Business Goals",
        "Provide Financial Input for Strategic Decisions",
        "Support strategic decision-making processes"
      ]
    },
    {
      id: 8,
      title: "Fundraising & Capital",
      icon: RocketLaunchIcon,
      color: "from-red-500 to-red-700",
      description: "Capital raising and structure optimization",
      details: [
        "Advise on Capital Raising and Investor Relations",
        "Optimize Company's Capital Structure",
        "Guidance on capital raising strategies",
        "Support growth and stability optimization"
      ]
    },
    {
      id: 9,
      title: "Policy & Compliance",
      icon: ShieldCheckIcon,
      color: "from-cyan-500 to-cyan-700",
      description: "Legal compliance and policy implementation",
      details: [
        "Policy implementation for Company's growth",
        "ESOP, Advisory, Employee policies",
        "Optimize legal compliances",
        "Regular and fundraising activity compliance"
      ]
    },
    {
      id: 10,
      title: "M&A Services",
      icon: ArrowsRightLeftIcon,
      color: "from-yellow-500 to-yellow-700",
      description: "Comprehensive merger and acquisition support",
      details: [
        "Financial Due Diligence and Valuation",
        "Integration Process Support",
        "Financial Expertise During M&A Activities",
        "Complete M&A financial guidance"
      ]
    },
    {
      id: 11,
      title: "Process Restructuring",
      icon: Cog6ToothIcon,
      color: "from-slate-500 to-slate-700",
      description: "Business process optimization and efficiency",
      details: [
        "Analyze Inefficiencies and Redesign Processes",
        "SOP framing for business processes",
        "Implement Streamlined Processes",
        "Deploy optimized business operations"
      ]
    },
    {
      id: 12,
      title: "Tax Planning",
      icon: CalculatorIcon,
      color: "from-green-500 to-green-700",
      description: "Strategic tax optimization and compliance",
      details: [
        "Collaborate with Tax Professionals",
        "Optimize Company's Tax Strategy",
        "Ensure Compliance with Tax Regulations",
        "Develop optimal tax strategies"
      ]
    },
    {
      id: 13,
      title: "Regulatory Compliance",
      icon: ClipboardDocumentCheckIcon,
      color: "from-violet-500 to-violet-700",
      description: "Comprehensive regulatory adherence",
      details: [
        "Ensure Adherence to Financial Regulations",
        "Prepare and Submit Regulatory Filings",
        "Meet all financial regulations",
        "Handle regulatory filing preparation"
      ]
    },
    {
      id: 14,
      title: "Interim CFO Services",
      icon: UserIcon,
      color: "from-rose-500 to-rose-700",
      description: "Temporary CFO support during transitions",
      details: [
        "Interim CFO Support During Transitions",
        "Leadership Change Management",
        "Ensure business continuity",
        "Professional transition support"
      ]
    },
    {
      id: 15,
      title: "Training & Development",
      icon: AcademicCapIcon,
      color: "from-amber-500 to-amber-700",
      description: "Finance team enhancement and training",
      details: [
        "Guidance and Training to Finance Teams",
        "Enhance Financial Acumen",
        "Foster Team Development",
        "Support finance team skill building"
      ]
    }
  ];

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Section */}
      <motion.div
        className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700"
        variants={itemVariants}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white/10 rounded-full"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <motion.div
            className="text-center"
            variants={itemVariants}
          >
            <motion.div
              className="flex justify-center mb-8"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.8 }}
            >
              <ChartPieIcon className="w-20 h-20 text-white" />
            </motion.div>

            <motion.h1
              className="text-6xl md:text-7xl font-bold text-white mb-6"
              variants={itemVariants}
            >
              Virtual CFO
              <motion.span
                className="block bg-gradient-to-r from-yellow-300 to-orange-300 text-transparent bg-clip-text"
                animate={{ opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Services
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Comprehensive financial leadership and strategic guidance for your business growth and success
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4 mt-8"
              variants={itemVariants}
            >
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        className="max-w-7xl mx-auto px-6 py-20"
        variants={containerVariants}
      >
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 text-transparent bg-clip-text mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive financial solutions tailored to drive your business forward with expert guidance and strategic insights
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                className="group cursor-pointer"
                variants={itemVariants}
                whileHover="hover"
                onClick={() => setSelectedService(service)}
              >
                <motion.div
                  className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full"
                  variants={cardHoverVariants}
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                  {/* Content */}
                  <div className="relative p-8">
                    <motion.div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </motion.div>

                    <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, height: 0 }}
                      whileHover={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                    >
                      {service.details.slice(0, 2).map((detail, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center text-sm text-gray-500"
                          initial={{ x: -10, opacity: 0 }}
                          whileHover={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></span>
                          {detail}
                        </motion.div>
                      ))}
                    </motion.div>

                    <motion.div
                      className="mt-6 text-sm font-semibold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      Click to learn more →
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`bg-gradient-to-r ${selectedService.color} p-8 text-white`}>
                <div className="flex items-center space-x-4 mb-4">
                  <selectedService.icon className="w-12 h-12" />
                  <h2 className="text-3xl font-bold">{selectedService.title}</h2>
                </div>
                <p className="text-lg opacity-90">{selectedService.description}</p>
              </div>

              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Key Services Include:</h3>
                <div className="space-y-4">
                  {selectedService.details.map((detail, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className={`w-3 h-3 rounded-full bg-gradient-to-r ${selectedService.color} mt-1.5`}></span>
                      <span className="text-gray-700 leading-relaxed">{detail}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  className={`w-full mt-8 py-4 bg-gradient-to-r ${selectedService.color} text-white rounded-xl font-semibold hover:shadow-lg transition-shadow`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedService(null)}
                >
                  Get Started with {selectedService.title}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call to Action */}
      <motion.div
        className="bg-gradient-to-r from-blue-600 to-purple-600 py-20"
        variants={itemVariants}
      >
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            variants={itemVariants}
          >
            Ready to Transform Your Financial Strategy?
          </motion.h2>
          <motion.p
            className="text-xl text-blue-100 mb-8"
            variants={itemVariants}
          >
            Let our expert Virtual CFO team guide your business to new heights with strategic financial leadership
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <Link to="/contact">
              <motion.button
                className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Consultation
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const BusinessOptimization = () => {
  return (
    <motion.div
      className="min-h-screen p-6 bg-gradient-to-br from-green-50 to-emerald-50"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={staggerChildren}
    >
      <motion.div variants={pageVariants} className="max-w-4xl mx-auto mt-20">
        <motion.div
          className="flex items-center space-x-4 mb-8"
          whileHover={{ scale: 1.02 }}
        >
          <ArrowTrendingUpIcon className="w-12 h-12 text-green-600" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 text-transparent bg-clip-text">
            Business Optimization
          </h1>
        </motion.div>

        <motion.div variants={pageVariants} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Process Improvement",
              description: "Streamline operations for maximum efficiency",
              items: ["Workflow analysis and optimization", "Cost reduction strategies", "Resource allocation improvement"]
            },
            {
              title: "Revenue Enhancement",
              description: "Maximize your earning potential",
              items: ["Pricing strategy optimization", "Market opportunity analysis", "Customer segmentation"]
            },
            {
              title: "Digital Transformation",
              description: "Embrace modern solutions",
              items: ["Technology stack assessment", "Automation opportunities", "Digital workflow implementation"]
            }
          ].map((card, index) => (
            <motion.div key={index} variants={cardVariants} whileHover="hover">
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 backdrop-blur">
                <CardHeader>
                  <img src={`https://images.unsplash.com/photo-1674027001844-6ad209efd09e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIxfHx8ZW58MHx8fHx8${300 + index}`} alt={card.title} className="rounded-t-lg mb-4" />
                  <CardTitle className="text-2xl text-green-700">{card.title}</CardTitle>
                  <CardDescription>{card.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {card.items.map((item, i) => (
                      <motion.li key={i} whileHover={{ x: 5 }} className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const AuditAccordion = ({ title, description, items, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="border border-purple-100 rounded-lg overflow-hidden bg-white shadow-sm"
      variants={cardVariants}
    >
      <div
        className="flex justify-between items-center p-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center space-x-3">
          {icon}
          <div>
            <h3 className="font-medium text-purple-800">{title}</h3>
            <p className="text-sm text-gray-500">{description}</p>
          </div>
        </div>
        <ChevronDownIcon
          className={`w-5 h-5 text-purple-600 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
        />
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="px-4 pb-4 border-t border-purple-100 pt-2"
        >
          <ul className="space-y-2 text-gray-700">
            {items.map((item, i) => (
              <motion.li
                key={i}
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start space-x-2"
              >
                <span className="mt-1.5 w-1.5 h-1.5 bg-purple-500 rounded-full flex-shrink-0" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.div>
  );
};

const InternalAudits = () => {
  const [selectedAudit, setSelectedAudit] = useState(null);
  const [expandedAccordion, setExpandedAccordion] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const cardHoverVariants = {
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const auditTypes = [
    {
      title: "Financial Audits",
      description: "Accounting and reporting of financial transactions",
      icon: ChartBarIcon,
      color: "from-purple-500 to-purple-700",
      bgColor: "from-purple-50 to-purple-100",
      items: [
        "Reviews accounting and reporting of financial transactions",
        "Verifies controls over cash and other assets",
        "Validates acquisition and use of resources",
        "Examines commitments, authorizations, receipts, and disbursements of funds",
        "Ensures accurate financial statement preparation"
      ]
    },
    {
      title: "Compliance Audits",
      description: "Adherence to laws, regulations, and policies",
      icon: ShieldCheckIcon,
      color: "from-emerald-500 to-emerald-700",
      bgColor: "from-emerald-50 to-emerald-100",
      items: [
        "Reviews adherence to laws, regulations, policies, and procedures",
        "Evaluates compliance with federal and state laws",
        "Assesses alignment with Trustee policies",
        "Examines organizational and departmental directives",
        "Recommends improvements for compliance processes and controls"
      ]
    },
    {
      title: "Information Systems Audits",
      description: "Control environment of automated systems",
      icon: ComputerDesktopIcon,
      color: "from-blue-500 to-blue-700",
      bgColor: "from-blue-50 to-blue-100",
      items: [
        "Examines internal control of automated information processing systems",
        "Evaluates system input, output, and processing controls",
        "Reviews backup and recovery plans",
        "Assesses system security measures",
        "Conducts computer facility reviews",
        "Can focus on existing or in-development systems"
      ]
    },
    {
      title: "Internal Control Reviews",
      description: "Components of major organizational activities",
      icon: ArrowPathIcon,
      color: "from-indigo-500 to-indigo-700",
      bgColor: "from-indigo-50 to-indigo-100",
      items: [
        "Focuses on components of the organization's major activities",
        "Reviews payroll and benefits systems",
        "Examines cash handling procedures",
        "Inventories equipment and physical security measures",
        "Evaluates grants and contracts management",
        "Assesses financial reporting systems"
      ]
    },
    {
      title: "Operational Audits",
      description: "Resource usage effectiveness and efficiency",
      icon: WrenchScrewdriverIcon,
      color: "from-orange-500 to-orange-700",
      bgColor: "from-orange-50 to-orange-100",
      items: [
        "Examines resource usage effectiveness and efficiency",
        "Evaluates alignment with organization's mission and objectives",
        "Identifies opportunities for process improvements",
        "May include elements of other audit techniques",
        "Focuses on operational performance and outcomes"
      ]
    },
    {
      title: "Advisory Services",
      description: "Consultations and specialized reviews",
      icon: DocumentTextIcon,
      color: "from-pink-500 to-pink-700",
      bgColor: "from-pink-50 to-pink-100",
      items: [
        "Consultative services performed at Board of Directors' request",
        "Enhances awareness of risk, control, and compliance issues",
        "Provides proactive independent review of specific concerns",
        "Includes internal control and risk management reviews",
        "Conducts transition reviews and business process assessments",
        "Prepares monthly MIS reports with profit/loss components for management"
      ]
    }
  ];

  const AuditAccordion = ({ audit, index, isExpanded, onToggle }) => {
    const IconComponent = audit.icon;

    return (
      <motion.div
        className="group"
        variants={itemVariants}
        whileHover="hover"
      >
        <motion.div
          className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
          variants={cardHoverVariants}
        >
          <motion.div
            className={`bg-gradient-to-r ${audit.bgColor} p-6 cursor-pointer`}
            onClick={() => onToggle(index)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <motion.div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${audit.color} flex items-center justify-center`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <IconComponent className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {audit.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {audit.description}
                  </p>
                </div>
              </div>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDownIcon className="w-6 h-6 text-gray-500" />
              </motion.div>
            </div>
          </motion.div>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-6 bg-white">
                  <div className="space-y-3">
                    {audit.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: itemIndex * 0.1 }}
                      >
                        <span className={`w-3 h-3 rounded-full bg-gradient-to-r ${audit.color} mt-1.5 flex-shrink-0`}></span>
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    className={`w-full mt-6 py-3 bg-gradient-to-r ${audit.color} text-white rounded-xl font-semibold hover:shadow-lg transition-shadow`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedAudit(audit)}
                  >
                    Learn More About {audit.title}
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-100"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Section */}
      <motion.div
        className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-700"
        variants={itemVariants}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-pink-600/90"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white/10 rounded-full"
              style={{
                width: Math.random() * 80 + 40,
                height: Math.random() * 80 + 40,
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <motion.div
                className="flex items-center mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <ClipboardDocumentCheckIcon className="w-16 h-16 text-white mr-4" />
                </motion.div>
                <div>
                  <motion.h1
                    className="text-5xl md:text-6xl font-bold text-white mb-2"
                    variants={itemVariants}
                  >
                    Internal
                    <motion.span
                      className="block bg-gradient-to-r from-yellow-300 to-orange-300 text-transparent bg-clip-text"
                      animate={{ opacity: [1, 0.7, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Audits
                    </motion.span>
                  </motion.h1>
                  <motion.p
                    className="text-xl text-purple-100"
                    variants={itemVariants}
                  >
                    Comprehensive audit services to ensure compliance and drive improvement
                  </motion.p>
                </div>
              </motion.div>

              <motion.p
                className="text-lg text-purple-100 mb-8 leading-relaxed"
                variants={itemVariants}
              >
                Our internal audit services provide an independent, objective assurance designed to add value and improve your organization's operations. We help you accomplish objectives by bringing a systematic, disciplined approach to evaluate and enhance risk management, control, and governance processes.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4"
                variants={itemVariants}
              >
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              variants={itemVariants}
            >
              <motion.div
                className="relative z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThv9z-gsTIHueEfZgeK4yLOlTrqZQQUoREkQ&s"
                  alt="Audit Services"
                  className="rounded-2xl shadow-2xl object-cover w-full h-80"
                />
              </motion.div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-pink-500/30 to-purple-500/30 rounded-2xl"></div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="max-w-6xl mx-auto px-6 py-20"
        variants={containerVariants}
      >
        {/* Audit Services Section */}
        <motion.div variants={itemVariants} className="mb-16">
          <motion.div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-800 to-pink-600 text-transparent bg-clip-text mb-4">
              Our Audit Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive audit solutions designed to enhance your organization's performance and compliance
            </p>
          </motion.div>

          <div className="space-y-6">
            {auditTypes.map((audit, index) => (
              <AuditAccordion
                key={index}
                audit={audit}
                index={index}
                isExpanded={expandedAccordion === index}
                onToggle={(idx) => setExpandedAccordion(expandedAccordion === idx ? null : idx)}
              />
            ))}
          </div>
        </motion.div>

        {/* External Audit Assistance */}
        <motion.div
          variants={itemVariants}
          className="mb-16"
          whileHover="hover"
        >
          <motion.div
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            variants={cardHoverVariants}
          >
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8">
              <div className="flex items-center mb-6">
                <motion.div
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-700 flex items-center justify-center mr-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <ShieldCheckIcon className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-700 mb-1">External Audit Assistance</h3>
                  <p className="text-blue-600">Supporting your financial statement audits</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-inner">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  We provide comprehensive support during annual financial statement audits
                  under the guidance of your selected external auditor. Our team assists with:
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Preparation of financial statements and supporting schedules",
                    "Documentation gathering and organization",
                    "Coordination between departments and auditors",
                    "Implementation of auditor recommendations"
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mt-1.5"></span>
                      <span className="text-gray-700">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Monthly MIS Section */}
        <motion.div
          variants={itemVariants}
          whileHover="hover"
        >
          <motion.div
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            variants={cardHoverVariants}
          >
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-8">
              <div className="flex items-center mb-6">
                <motion.div
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-purple-700 flex items-center justify-center mr-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <ChartBarIcon className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-purple-700 mb-1">Monthly Management Information System</h3>
                  <p className="text-purple-600">Comprehensive reporting for informed decision making</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-inner">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Our team prepares and finalizes detailed MIS reports on a monthly basis,
                  providing management with clear insights into:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    className="bg-purple-50 p-6 rounded-xl"
                    whileHover={{ scale: 1.02 }}
                  >
                    <h4 className="font-bold text-purple-700 mb-4 text-lg">Financial Performance</h4>
                    <div className="space-y-3">
                      {[
                        "Detailed profit and loss statements",
                        "Revenue and expense analysis",
                        "Budget variance reporting"
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <span className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-1.5"></span>
                          <span className="text-gray-700">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    className="bg-pink-50 p-6 rounded-xl"
                    whileHover={{ scale: 1.02 }}
                  >
                    <h4 className="font-bold text-purple-700 mb-4 text-lg">Operational Metrics</h4>
                    <div className="space-y-3">
                      {[
                        "Key performance indicators",
                        "Transactional component analysis",
                        "Executive summary dashboards"
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + 0.3 }}
                        >
                          <span className="w-3 h-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mt-1.5"></span>
                          <span className="text-gray-700">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedAudit && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedAudit(null)}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-3xl w-full max-h-[80vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`bg-gradient-to-r ${selectedAudit.color} p-8 text-white`}>
                <div className="flex items-center space-x-4 mb-4">
                  <selectedAudit.icon className="w-12 h-12" />
                  <div>
                    <h2 className="text-3xl font-bold">{selectedAudit.title}</h2>
                    <p className="text-lg opacity-90">{selectedAudit.description}</p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Comprehensive Coverage Includes:</h3>
                <div className="space-y-4">
                  {selectedAudit.items.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className={`w-3 h-3 rounded-full bg-gradient-to-r ${selectedAudit.color} mt-1.5`}></span>
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex gap-4 mt-8">
                  <Link to="/contact">
                    <motion.button
                      className={`flex-1 py-4 bg-gradient-to-r ${selectedAudit.color} text-white rounded-xl font-semibold hover:shadow-lg transition-shadow`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Schedule {selectedAudit.title}
                    </motion.button>
                  </Link>
                  <motion.button
                    className="px-6 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedAudit(null)}
                  >
                    Close
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call to Action */}
      <motion.div
        className="bg-gradient-to-r from-purple-600 to-pink-600 py-20"
        variants={itemVariants}
      >
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            variants={itemVariants}
          >
            Ready to Enhance Your Audit Process?
          </motion.h2>
          <motion.p
            className="text-xl text-purple-100 mb-8"
            variants={itemVariants}
          >
            Let our expert audit team help you achieve compliance excellence and operational efficiency
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <Link to="/contact">
              <motion.button
                className="px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold hover:bg-purple-50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Consultation
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const FinancialControls = () => {
  return (
    <motion.div
      className="min-h-screen p-6 bg-gradient-to-br from-red-50 to-orange-50"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={staggerChildren}
    >
      <motion.div variants={pageVariants} className="max-w-4xl mx-auto mt-20">
        <motion.div
          className="flex items-center space-x-4 mb-8"
          whileHover={{ scale: 1.02 }}
        >
          <ShieldCheckIcon className="w-12 h-12 text-red-600" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-orange-600 text-transparent bg-clip-text">
            Financial Controls
          </h1>
        </motion.div>

        <motion.div variants={pageVariants} className="grid gap-6">
          <motion.div variants={cardVariants} whileHover="hover">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 backdrop-blur">
              <CardHeader>
                <img src="https://images.unsplash.com/photo-1625296276703-3fbc924f07b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU0fHx8ZW58MHx8fHx8" alt="Control Framework" className="rounded-t-lg mb-4" />
                <CardTitle className="text-2xl text-red-700">Internal Control Framework</CardTitle>
                <CardDescription>Protect your financial assets</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-3">
                  {[
                    {
                      title: "Preventive Controls",
                      items: ["Authorization procedures", "Segregation of duties", "Access controls"]
                    },
                    {
                      title: "Detective Controls",
                      items: ["Reconciliations", "Audit trails", "Physical inventories"]
                    },
                    {
                      title: "Corrective Controls",
                      items: ["Backup systems", "Insurance coverage", "Disaster recovery"]
                    }
                  ].map((section, index) => (
                    <div key={index}>
                      <h3 className="font-semibold mb-4 text-lg text-red-600">{section.title}</h3>
                      <ul className="space-y-3">
                        {section.items.map((item, i) => (
                          <motion.li key={i} whileHover={{ x: 5 }} className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-red-500 rounded-full" />
                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export { VirtualCFO, BusinessOptimization, InternalAudits, FinancialControls };