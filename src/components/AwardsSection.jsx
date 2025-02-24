import { Zap, Award, Users, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// const AwardsSection = () => {
//   const awards = [
//     {
//       title: "Business Innovation Award",
//       organization: "Global Business Forum",
//       year: "2022",
//       icon: <Zap className="w-10 h-10 text-yellow-500" />,
//     },
//     {
//       title: "Best Consulting Firm",
//       organization: "Finance Excellence Awards",
//       year: "2021",
//       icon: <Award className="w-10 h-10 text-yellow-500" />,
//     },
//     {
//       title: "Client Satisfaction Excellence",
//       organization: "International Service Standards",
//       year: "2020",
//       icon: <Users className="w-10 h-10 text-yellow-500" />,
//     },
//     {
//       title: "Top Growth Consultancy",
//       organization: "Business Growth Alliance",
//       year: "2019",
//       icon: <TrendingUp className="w-10 h-10 text-yellow-500" />,
//     },
//   ];

//   return (
//     <div className="py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ y: -20, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center max-w-3xl mx-auto mb-16"
//         >
//           <div className="inline-block bg-yellow-100 rounded-full px-4 py-1.5 text-yellow-600 text-sm font-medium mb-6">
//             Recognition
//           </div>
//           <h2 className="text-4xl font-bold text-gray-900 mb-6">
//             Awards & Accolades
//           </h2>
//           <p className="text-xl text-gray-600">
//             We're proud to be recognized for our commitment to excellence and innovation in the industry.
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {awards.map((award, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.4, delay: index * 0.1 }}
//               whileHover={{
//                 y: -10,
//                 boxShadow: "0px 20px 25px -5px rgba(0,0,0,0.1), 0px 10px 10px -5px rgba(0,0,0,0.04)",
//               }}
//               className="bg-white rounded-xl border border-gray-100 p-8 shadow-md transition-all duration-300"
//             >
//               <motion.div
//                 initial={{ rotateY: 180, opacity: 0 }}
//                 whileInView={{ rotateY: 0, opacity: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
//                 className="mb-6 flex justify-center"
//               >
//                 {award.icon}
//               </motion.div>
//               <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
//                 {award.title}
//               </h3>
//               <p className="text-gray-600 text-center mb-4">
//                 {award.organization}
//               </p>
//               <div className="flex justify-center">
//                 <span className="inline-block bg-yellow-50 text-yellow-700 text-sm px-3 py-1 rounded-full">
//                   {award.year}
//                 </span>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// CTA Section Component
const CTASection = () => {
    return (
        <div className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 relative overflow-hidden">
            {/* Background Decorations */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: 360,
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute -top-32 -right-32 w-96 h-96 bg-blue-400 rounded-full opacity-30 blur-3xl"
            ></motion.div>
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: -360,
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute -bottom-40 -left-20 w-80 h-80 bg-indigo-400 rounded-full opacity-20 blur-3xl"
            ></motion.div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center"
                >
                    <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
                        Ready to Transform Your Business?
                    </h2>
                    <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
                        Schedule a consultation with our experts to discuss how we can help you achieve your business goals.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                                className="inline-flex justify-center items-center px-8 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                            >
                                Get Started
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export { CTASection };
