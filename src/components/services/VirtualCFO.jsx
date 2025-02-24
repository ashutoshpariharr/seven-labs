import { motion } from 'framer-motion';
import { 
  ChartPieIcon, 
  ArrowTrendingUpIcon,
  ClipboardDocumentCheckIcon,
  ShieldCheckIcon 
} from '@heroicons/react/24/outline';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../UI/UI';

// Shared animation variants
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
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
      className="min-h-screen p-6 bg-gray-50"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={staggerChildren}
    >
      <motion.div variants={pageVariants} className="max-w-4xl mx-auto">
        <div className="flex items-center space-x-4 mb-8">
          <ChartPieIcon className="w-12 h-12 text-blue-600" />
          <h1 className="text-4xl font-bold text-gray-900">Virtual CFO Services</h1>
        </div>

        <motion.div variants={pageVariants} className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Strategic Financial Leadership</CardTitle>
              <CardDescription>Expert guidance without the full-time commitment</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>Financial strategy development and execution</li>
                <li>Cash flow management and forecasting</li>
                <li>Budget planning and analysis</li>
                <li>Investment strategy consultation</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Financial Reporting & Analysis</CardTitle>
              <CardDescription>Data-driven insights for informed decisions</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>Monthly financial statement preparation</li>
                <li>KPI tracking and analysis</li>
                <li>Performance metrics dashboard</li>
                <li>Variance analysis and recommendations</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const BusinessOptimization = () => {
  return (
    <motion.div
      className="min-h-screen p-6 bg-gray-50"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={staggerChildren}
    >
      <motion.div variants={pageVariants} className="max-w-4xl mx-auto">
        <div className="flex items-center space-x-4 mb-8">
          <ArrowTrendingUpIcon className="w-12 h-12 text-green-600" />
          <h1 className="text-4xl font-bold text-gray-900">Business Optimization</h1>
        </div>

        <motion.div variants={pageVariants} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Process Improvement</CardTitle>
              <CardDescription>Streamline operations for maximum efficiency</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>Workflow analysis and optimization</li>
                <li>Cost reduction strategies</li>
                <li>Resource allocation improvement</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Revenue Enhancement</CardTitle>
              <CardDescription>Maximize your earning potential</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>Pricing strategy optimization</li>
                <li>Market opportunity analysis</li>
                <li>Customer segmentation</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Digital Transformation</CardTitle>
              <CardDescription>Embrace modern solutions</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>Technology stack assessment</li>
                <li>Automation opportunities</li>
                <li>Digital workflow implementation</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const InternalAudits = () => {
  return (
    <motion.div
      className="min-h-screen p-6 bg-gray-50"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={staggerChildren}
    >
      <motion.div variants={pageVariants} className="max-w-4xl mx-auto">
        <div className="flex items-center space-x-4 mb-8">
          <ClipboardDocumentCheckIcon className="w-12 h-12 text-purple-600" />
          <h1 className="text-4xl font-bold text-gray-900">Internal Audits</h1>
        </div>

        <motion.div variants={pageVariants} className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Comprehensive Audit Services</CardTitle>
              <CardDescription>Ensure compliance and identify improvements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h3 className="font-semibold mb-2">Financial Audits</h3>
                  <ul className="space-y-2">
                    <li>Account reconciliation</li>
                    <li>Transaction verification</li>
                    <li>Financial statement review</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Operational Audits</h3>
                  <ul className="space-y-2">
                    <li>Process efficiency review</li>
                    <li>Control effectiveness</li>
                    <li>Risk assessment</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Audit Reports & Recommendations</CardTitle>
              <CardDescription>Actionable insights for improvement</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>Detailed findings documentation</li>
                <li>Risk-based recommendations</li>
                <li>Implementation guidance</li>
                <li>Follow-up assessments</li>
              </ul>
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
      className="min-h-screen p-6 bg-gray-50"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={staggerChildren}
    >
      <motion.div variants={pageVariants} className="max-w-4xl mx-auto">
        <div className="flex items-center space-x-4 mb-8">
          <ShieldCheckIcon className="w-12 h-12 text-red-600" />
          <h1 className="text-4xl font-bold text-gray-900">Financial Controls</h1>
        </div>

        <motion.div variants={pageVariants} className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Internal Control Framework</CardTitle>
              <CardDescription>Protect your financial assets</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <h3 className="font-semibold mb-2">Preventive Controls</h3>
                  <ul className="space-y-2">
                    <li>Authorization procedures</li>
                    <li>Segregation of duties</li>
                    <li>Access controls</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Detective Controls</h3>
                  <ul className="space-y-2">
                    <li>Reconciliations</li>
                    <li>Audit trails</li>
                    <li>Physical inventories</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Corrective Controls</h3>
                  <ul className="space-y-2">
                    <li>Backup systems</li>
                    <li>Insurance coverage</li>
                    <li>Disaster recovery</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Compliance & Monitoring</CardTitle>
              <CardDescription>Ensure ongoing effectiveness</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>Regular control assessments</li>
                <li>Compliance monitoring</li>
                <li>Performance reporting</li>
                <li>Control environment updates</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// Export all components
export { VirtualCFO, BusinessOptimization, InternalAudits, FinancialControls };