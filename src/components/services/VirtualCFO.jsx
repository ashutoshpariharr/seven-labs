import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ChartPieIcon,
  ArrowTrendingUpIcon,
  ClipboardDocumentCheckIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  ArrowPathIcon,
  ComputerDesktopIcon
} from '@heroicons/react/24/outline';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../UI/UI';
import { ChartBarIcon, ChevronDownIcon, WrenchIcon } from 'lucide-react';

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
  return (
    <motion.div
      className="min-h-screen p-6 bg-gradient-to-br from-blue-50 to-indigo-50"
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
          <ChartPieIcon className="w-12 h-12 text-blue-600" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
            Virtual CFO Services
          </h1>
        </motion.div>

        <motion.div variants={pageVariants} className="grid gap-6 md:grid-cols-2">
          <motion.div variants={cardVariants} whileHover="hover">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 backdrop-blur">
              <CardHeader>
                <img src="https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Financial Leadership" className="rounded-t-lg mb-4" />
                <CardTitle className="text-2xl text-blue-700">Strategic Financial Leadership</CardTitle>
                <CardDescription>Expert guidance without the full-time commitment</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <motion.li whileHover={{ x: 5 }} className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span>Financial strategy development and execution</span>
                  </motion.li>
                  <motion.li whileHover={{ x: 5 }} className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span>Cash flow management and forecasting</span>
                  </motion.li>
                  <motion.li whileHover={{ x: 5 }} className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span>Budget planning and analysis</span>
                  </motion.li>
                  <motion.li whileHover={{ x: 5 }} className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span>Investment strategy consultation</span>
                  </motion.li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={cardVariants} whileHover="hover">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 backdrop-blur">
              <CardHeader>
                <img src="https://images.unsplash.com/photo-1686061594183-8c864f508b00?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D" alt="Financial Reporting" className="rounded-t-lg mb-4" />
                <CardTitle className="text-2xl text-blue-700">Financial Reporting & Analysis</CardTitle>
                <CardDescription>Data-driven insights for informed decisions</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <motion.li whileHover={{ x: 5 }} className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span>Monthly financial statement preparation</span>
                  </motion.li>
                  <motion.li whileHover={{ x: 5 }} className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span>KPI tracking and analysis</span>
                  </motion.li>
                  <motion.li whileHover={{ x: 5 }} className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span>Performance metrics dashboard</span>
                  </motion.li>
                  <motion.li whileHover={{ x: 5 }} className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span>Variance analysis and recommendations</span>
                  </motion.li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
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
  const auditTypes = [
    {
      title: "Financial Audits",
      description: "Accounting and reporting of financial transactions",
      icon: <ChartBarIcon className="w-6 h-6 text-purple-600" />,
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
      icon: <ShieldCheckIcon className="w-6 h-6 text-purple-600" />,
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
      icon: <ComputerDesktopIcon className="w-6 h-6 text-purple-600" />,
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
      icon: <ArrowPathIcon className="w-6 h-6 text-purple-600" />,
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
      icon: <WrenchIcon className="w-6 h-6 text-purple-600" />,
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
      icon: <DocumentTextIcon className="w-6 h-6 text-purple-600" />,
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

  return (
    <motion.div
      className="min-h-screen p-6 bg-gradient-to-br from-purple-50 to-pink-50"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={staggerChildren}
    >
      <motion.div variants={pageVariants} className="max-w-5xl mx-auto mt-12">
        <motion.div
          className="flex items-center space-x-4 mb-8"
          whileHover={{ scale: 1.02 }}
        >
          <ClipboardDocumentCheckIcon className="w-12 h-12 text-purple-600" />
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text mt-10">
              Internal Audits
            </h1>
            <p className="text-gray-600 mt-1">
              Comprehensive audit services to ensure compliance and drive improvement
            </p>
          </div>
        </motion.div>

        {/* Hero Section */}
        <motion.div 
          variants={cardVariants} 
          className="bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-2xl shadow-xl p-8 mb-12"
        >
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-3">
              <h2 className="text-3xl font-bold mb-4">Ensure Compliance & Optimize Operations</h2>
              <p className="mb-6">
                Our internal audit services provide an independent, objective assurance 
                designed to add value and improve your organization's operations. We help you 
                accomplish objectives by bringing a systematic, disciplined approach to evaluate 
                and enhance risk management, control, and governance processes.
              </p>
              {/* <div className="flex space-x-4">
                <button className="bg-white text-purple-600 font-medium py-2 px-6 rounded-full hover:bg-purple-100 transition-colors duration-300">
                  Request Audit
                </button>
                <button className="bg-purple-700 text-white font-medium py-2 px-6 rounded-full hover:bg-purple-800 transition-colors duration-300">
                  View Reports
                </button>
              </div> */}
            </div>
            <div className="md:col-span-2 relative">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThv9z-gsTIHueEfZgeK4yLOlTrqZQQUoREkQ&s" 
                alt="Audit Services" 
                className="rounded-lg shadow-lg object-cover h-full"
              />
            </div>
          </div>
        </motion.div>

        {/* Audit Types Section */}
        <motion.div variants={pageVariants} className="mb-12">
          <h2 className="text-2xl font-semibold text-purple-800 mb-6">Our Audit Services</h2>
          
          <div className="grid gap-4">
            {auditTypes.map((audit, index) => (
              <AuditAccordion
                key={index}
                title={audit.title}
                description={audit.description}
                items={audit.items}
                icon={audit.icon}
              />
            ))}
          </div>
        </motion.div>

        {/* External Audit Assistance */}
        <motion.div variants={cardVariants} className="mb-12">
          <Card className="shadow-lg bg-white/90 backdrop-blur border border-purple-100">
            <CardHeader>
              <CardTitle className="text-2xl text-purple-700">External Audit Assistance</CardTitle>
              <CardDescription>Supporting your financial statement audits</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-purple-50 rounded-lg">
                <p className="text-gray-700">
                  We provide comprehensive support during annual financial statement audits 
                  under the guidance of your selected external auditor. Our team assists with:
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-purple-500 rounded-full" />
                    <span>Preparation of financial statements and supporting schedules</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-purple-500 rounded-full" />
                    <span>Documentation gathering and organization</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-purple-500 rounded-full" />
                    <span>Coordination between departments and auditors</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-purple-500 rounded-full" />
                    <span>Implementation of auditor recommendations</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Monthly MIS Section */}
        <motion.div variants={cardVariants}>
          <Card className="shadow-lg bg-gradient-to-r from-pink-50 to-purple-50 border border-purple-100">
            <CardHeader>
              <CardTitle className="text-2xl text-purple-700">Monthly Management Information System</CardTitle>
              <CardDescription>Comprehensive reporting for informed decision making</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-white p-5 rounded-lg shadow-inner">
                <p className="text-gray-700 mb-4">
                  Our team prepares and finalizes detailed MIS reports on a monthly basis, 
                  providing management with clear insights into:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-medium text-purple-700 mb-2">Financial Performance</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-purple-500 rounded-full" />
                        <span>Detailed profit and loss statements</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-purple-500 rounded-full" />
                        <span>Revenue and expense analysis</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-purple-500 rounded-full" />
                        <span>Budget variance reporting</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <h4 className="font-medium text-purple-700 mb-2">Operational Metrics</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-purple-500 rounded-full" />
                        <span>Key performance indicators</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-purple-500 rounded-full" />
                        <span>Transactional component analysis</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-purple-500 rounded-full" />
                        <span>Executive summary dashboards</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
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