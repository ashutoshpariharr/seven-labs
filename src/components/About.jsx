import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Users, 
  Target, 
  Clock, 
  TrendingUp, 
  Award, 
  Zap,
  Globe,
  Briefcase,
  BarChart2,
  Shield
} from 'lucide-react';

// Hero Section Component
const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative pt-20 pb-24 bg-gradient-to-r from-indigo-50 via-blue-50 to-indigo-50 overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 bg-indigo-200 rounded-full opacity-20 blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-blue-200 rounded-full opacity-20 blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <h1 className="text-5xl font-bold text-gray-900 sm:text-6xl md:text-7xl leading-tight">
            Our
            <span className="relative mx-3">
              <span className="relative z-10 text-blue-600">Journey</span>
              <motion.svg
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, delay: 0.5 }}
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 20"
              >
                <path
                  d="M 0 10 C 50 0, 150 0, 200 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  className="text-blue-300"
                />
              </motion.svg>
            </span>
            to Excellence
          </h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-8 text-xl text-gray-600 leading-relaxed"
          >
            We're more than just a business consultancy. We're partners in your growth story, committed to transforming challenges into opportunities.
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Our Story Section Component
const OurStorySection = () => {
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="lg:grid lg:grid-cols-2 lg:gap-16 items-center"
        >
          <motion.div variants={itemVariants} className="relative">
            {/* Decorative elements */}
            <div className="absolute -left-8 -top-8 w-32 h-32 bg-blue-100 rounded-full opacity-50 blur-xl"></div>
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-indigo-100 rounded-full opacity-60 blur-xl"></div>
            
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="relative z-10 rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=2070&auto=format&fit=crop"
                alt="Our beginning"
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-8">
                  <div className="text-white text-xl font-medium">Where it all began</div>
                  <div className="text-white/80 mt-2">Founded in 2008</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12 lg:mt-0">
            <div className="inline-block bg-blue-100 rounded-full px-4 py-1.5 text-blue-600 text-sm font-medium mb-6">
              Our Story
            </div>
            <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-8">
              From Humble Beginnings to Industry Leaders
            </h2>
            
            <motion.div 
              variants={containerVariants}
              className="space-y-8"
            >
              <motion.div variants={itemVariants} className="flex gap-4">
                <div className="flex-none">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Beginning</h3>
                  <p className="text-gray-600">
                    Started by a team of three visionaries in 2008, we set out to reimagine how businesses approach financial planning and optimization.
                  </p>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex gap-4">
                <div className="flex-none">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Growth & Expansion</h3>
                  <p className="text-gray-600">
                    By 2015, we had expanded to serve clients across 12 countries, with a team of over 100 dedicated professionals committed to excellence.
                  </p>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex gap-4">
                <div className="flex-none">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Target className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Where We Are Today</h3>
                  <p className="text-gray-600">
                    Today, we're proud to be the trusted partner of Fortune 500 companies and ambitious startups alike, delivering transformative results through innovative approaches.
                  </p>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 px-6 py-3 bg-blue-50 text-blue-600 rounded-lg flex items-center border border-blue-200 hover:bg-blue-100 transition-colors"
            >
              Read our full story <ArrowRight className="ml-2 w-4 h-4" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

// Values Section Component
const ValuesSection = () => {
  const values = [
    {
      icon: <Shield className="w-10 h-10 text-blue-500" />,
      title: "Integrity",
      description: "We uphold the highest ethical standards in all our interactions and decisions."
    },
    {
      icon: <Zap className="w-10 h-10 text-blue-500" />,
      title: "Innovation",
      description: "We constantly seek new approaches and creative solutions to complex challenges."
    },
    {
      icon: <Users className="w-10 h-10 text-blue-500" />,
      title: "Collaboration",
      description: "We believe the best results come from true partnership with our clients."
    },
    {
      icon: <Target className="w-10 h-10 text-blue-500" />,
      title: "Excellence",
      description: "We are committed to delivering exceptional quality in everything we do."
    }
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block bg-blue-100 rounded-full px-4 py-1.5 text-blue-600 text-sm font-medium mb-6">
            Our Core Values
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Principles That Guide Us
          </h2>
          <p className="text-xl text-gray-600">
            Our values aren't just words on a wall—they're the foundation of how we operate and serve our clients every day.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                className="mb-5"
              >
                {value.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Team Section Component
const TeamSection = () => {
  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=988&auto=format&fit=crop",
      bio: "With over 20 years in business consulting, Sarah founded the company with a vision to redefine business transformation."
    },
    {
      name: "Michael Chen",
      role: "Chief Strategy Officer",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1170&auto=format&fit=crop",
      bio: "Michael brings his expertise from Silicon Valley to help businesses navigate digital transformation and market disruption."
    },
    {
      name: "Priya Sharma",
      role: "Head of Client Success",
      photo: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1176&auto=format&fit=crop",
      bio: "Priya ensures every client experiences exceptional service and achieves meaningful results through our partnership."
    },
    {
      name: "David Williams",
      role: "Finance Director",
      photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=987&auto=format&fit=crop",
      bio: "David's financial acumen helps our clients optimize their financial strategies for sustainable long-term growth."
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block bg-blue-100 rounded-full px-4 py-1.5 text-blue-600 text-sm font-medium mb-6">
            Meet Our Team
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            The Experts Behind Our Success
          </h2>
          <p className="text-xl text-gray-600">
            Our team brings decades of combined experience across industries to deliver exceptional results for our clients.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"
                  >
                    <div className="p-6">
                      <div className="flex space-x-3 mb-4">
                        {['LinkedIn', 'Twitter', 'Email'].map((social, i) => (
                          <motion.div
                            key={i}
                            whileHover={{ y: -3 }}
                            className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer"
                          >
                            <span className="text-white text-xs">{social[0]}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-blue-600 mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-blue-50 text-blue-600 rounded-lg inline-flex items-center border border-blue-200 hover:bg-blue-100 transition-colors"
          >
            Meet the entire team <ArrowRight className="ml-2 w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

// Milestones Section Component
const MilestonesSection = () => {
  const milestones = [
    {
      year: "2008",
      title: "Company Founded",
      description: "Started with a team of 3 consultants in a small office in Chicago.",
      icon: <Briefcase className="w-6 h-6 text-white" />
    },
    {
      year: "2012",
      title: "First International Client",
      description: "Expanded services to Europe with our first multinational client.",
      icon: <Globe className="w-6 h-6 text-white" />
    },
    {
      year: "2015",
      title: "100th Client Milestone",
      description: "Celebrated our 100th successful client partnership.",
      icon: <Users className="w-6 h-6 text-white" />
    },
    {
      year: "2018",
      title: "Digital Transformation Practice",
      description: "Launched specialized digital transformation consulting services.",
      icon: <Zap className="w-6 h-6 text-white" />
    },
    {
      year: "2021",
      title: "500+ Projects Completed",
      description: "Reached the milestone of 500 successful client projects.",
      icon: <BarChart2 className="w-6 h-6 text-white" />
    },
    {
      year: "Today",
      title: "Global Impact",
      description: "Now serving clients across 28 countries with a team of 150+ experts.",
      icon: <Target className="w-6 h-6 text-white" />
    }
  ];

  return (
    <div className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-block bg-blue-100 rounded-full px-4 py-1.5 text-blue-600 text-sm font-medium mb-6">
            Our Journey
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Key Milestones That Shaped Us
          </h2>
          <p className="text-xl text-gray-600">
            Our journey has been defined by continuous growth, innovation, and a dedication to excellence.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline connector */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-200 h-full z-0"
          ></motion.div>

          <div className="relative z-10">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center mb-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 text-right' : 'md:pl-16 text-left'}`}>
                  <div className={`p-6 bg-white rounded-xl shadow-lg border border-gray-100 ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'} max-w-md`}>
                    <span className="text-sm font-bold text-blue-600 mb-2 block">{milestone.year}</span>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="mx-auto md:mx-0 relative">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center z-20 relative"
                  >
                    {milestone.icon}
                  </motion.div>
                </div>
                
                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Awards Section Component
const AwardsSection = () => {
  const awards = [
    {
      title: "Business Innovation Award",
      organization: "Global Business Forum",
      year: "2022",
      icon: <Zap className="w-10 h-10 text-yellow-500" />
    },
    {
      title: "Best Consulting Firm",
      organization: "Finance Excellence Awards",
      year: "2021",
      icon: <Award className="w-10 h-10 text-yellow-500" />
    },
    {
      title: "Client Satisfaction Excellence",
      organization: "International Service Standards",
      year: "2020",
      icon: <Users className="w-10 h-10 text-yellow-500" />
    },
    {
      title: "Top Growth Consultancy",
      organization: "Business Growth Alliance",
      year: "2019",
      icon: <TrendingUp className="w-10 h-10 text-yellow-500" />
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block bg-yellow-100 rounded-full px-4 py-1.5 text-yellow-600 text-sm font-medium mb-6">
            Recognition
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Awards & Accolades
          </h2>
          <p className="text-xl text-gray-600">
            We're proud to be recognized for our commitment to excellence and innovation in the industry.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className="bg-white rounded-xl border border-gray-100 p-8 shadow-md transition-all duration-300"
            >
              <motion.div
                initial={{ rotateY: 180, opacity: 0 }}
                whileInView={{ rotateY: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
                className="mb-6 flex justify-center"
              >
                {award.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                {award.title}
              </h3>
              <p className="text-gray-600 text-center mb-4">
                {award.organization}
              </p>
              <div className="flex justify-center">
                <span className="inline-block bg-yellow-50 text-yellow-700 text-sm px-3 py-1 rounded-full">
                  {award.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AboutPage = () => {
    return (
      <>
        {/* Hero Section */}
        <HeroSection />
        
        {/* Our Story Section */}
        <OurStorySection />
        
        {/* Values Section */}
        <ValuesSection />
        
        {/* Team Section */}
        <TeamSection />
        
        {/* Milestones Section */}
        <MilestonesSection />
        
        {/* Awards Section */}
        <AwardsSection />
      </>
    );
  };

  export default AboutPage;
