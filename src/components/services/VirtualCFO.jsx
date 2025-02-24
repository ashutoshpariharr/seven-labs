import React from 'react';
import { motion } from 'framer-motion';
import {
  ChartPieIcon,
  ArrowTrendingUpIcon,
  ClipboardDocumentCheckIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';
// import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./UI/UI";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../UI/UI';

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
      className="min-h-screen p-6 bg-gradient-to-br from-blue-50 to-indigo-50 mt-30 mt-[6rem]"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={staggerChildren}
    >
      <motion.div variants={pageVariants} className="max-w-4xl mx-auto">
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
      className="min-h-screen p-6 bg-gradient-to-br from-green-50 to-emerald-50 mt-[6rem]"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={staggerChildren}
    >
      <motion.div variants={pageVariants} className="max-w-4xl mx-auto">
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

const InternalAudits = () => {
  return (
    <motion.div
      className="min-h-screen p-6 bg-gradient-to-br from-purple-50 to-pink-50 mt-[6rem]"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={staggerChildren}
    >
      <motion.div variants={pageVariants} className="max-w-4xl mx-auto">
        <motion.div
          className="flex items-center space-x-4 mb-8"
          whileHover={{ scale: 1.02 }}
        >
          <ClipboardDocumentCheckIcon className="w-12 h-12 text-purple-600" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
            Internal Audits
          </h1>
        </motion.div>

        <motion.div variants={pageVariants} className="space-y-6">
          <motion.div variants={cardVariants} whileHover="hover">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 backdrop-blur">
              <CardHeader>
                <img src="https://images.unsplash.com/photo-1674027001838-09e049c47212?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI5fHx8ZW58MHx8fHx8" alt="Audit Services" className="rounded-t-lg mb-4" />
                <CardTitle className="text-2xl text-purple-700">Comprehensive Audit Services</CardTitle>
                <CardDescription>Ensure compliance and identify improvements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="font-semibold mb-4 text-lg text-purple-600">Financial Audits</h3>
                    <ul className="space-y-3">
                      {["Account reconciliation", "Transaction verification", "Financial statement review"].map((item, i) => (
                        <motion.li key={i} whileHover={{ x: 5 }} className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-purple-500 rounded-full" />
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4 text-lg text-purple-600">Operational Audits</h3>
                    <ul className="space-y-3">
                      {["Process efficiency review", "Control effectiveness", "Risk assessment"].map((item, i) => (
                        <motion.li key={i} whileHover={{ x: 5 }} className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-purple-500 rounded-full" />
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const FinancialControls = () => {
  return (
    <motion.div
      className="min-h-screen p-6 bg-gradient-to-br from-red-50 to-orange-50 mt-[6rem]"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={staggerChildren}
    >
      <motion.div variants={pageVariants} className="max-w-4xl mx-auto">
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