import { BarChart2, DollarSign, LineChart, ShieldCheck, TrendingUp, Users, Zap } from "lucide-react";
import { motion } from 'framer-motion';


const FeaturesSection = () => {
  const features = [
    {
      icon: <BarChart2 className="w-8 h-8 text-blue-600" />,
      title: "Data-Driven Insights",
      description: "Make informed decisions with our comprehensive analytics and reporting tools."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Expert Team",
      description: "Work with seasoned professionals who understand your industry needs."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: "Scalable Solutions",
      description: "Solutions that grow with your business, from startup to enterprise."
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Increased Productivity",
      description: "Automate time-consuming tasks, allowing your team to focus on more strategic work, boosting overall productivity."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-blue-600" />,
      title: "Cost Savings",
      description: "Lower operational costs by cutting down manual labor, reducing errors, and improving resource allocation through automation."
    },
    {
      icon: <LineChart className="w-8 h-8 text-blue-600" />,
      title: "Better Decision-Making",
      description: "Gain real-time insights from automated data analytics, enabling faster, more informed decisions that drive growth."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      title: "Reduced Errors",
      description: "Minimize human errors by automating repetitive and data-heavy processes, ensuring accuracy in every step."
    },
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-gray-900">Why Choose Us</h2>
          <p className="mt-4 text-xl text-gray-600">
            We bring together expertise, innovation, and dedication to help your business succeed.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-blue-50 rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
              <div className="relative p-8">
                <div className="p-4 bg-white rounded-xl inline-block shadow-md">
                  {feature.icon}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-4 text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;