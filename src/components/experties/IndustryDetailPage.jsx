import { ArrowLeft, ArrowRight } from "lucide-react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function IndustryDetailPage() {
    const { industryId } = useParams();
    const navigate = useNavigate();
    const [industry, setIndustry] = useState(null);
    const [loading, setLoading] = useState(true);

    // Industry data with detailed information
    const industriesData = {
        "infrastructure-civil-engineering": {
            name: "Infrastructure & Civil Engineering",
            icon: "🏗️",
            description: "Building the foundations of modern society through innovative construction solutions and infrastructure development.",
            longDescription: "At 7 Labs Vision, we partner with contractors, construction companies, and interior design firms to bring structure, clarity, and control to their complex project operations.",
            overview: "From large-scale infrastructure projects like station construction to high-end commercial and residential interiors, the Infrastructure & Civil Engineering space operates under high pressure and tight deadlines. Yet, many firms struggle with project delays, poor coordination between teams, lack of centralized documentation, and material wastage—leading to cost overruns and client dissatisfaction.",
            services: [
                "Project Planning & Task Scheduling: Breaking down large construction timelines into actionable and trackable tasks.",
                "ERP & Workflow Setup: Designing simple but effective systems for managing inventory, resources, and daily progress.",
                "Site Reporting & Daily Logs: Standardized formats for reporting site updates, helping teams stay aligned.",
                "Inventory Management: Real-time tracking of materials to reduce wastage and ensure availability on-site.",
                "Human Resource Management: Setting up systems to track on-site staff attendance, productivity, and performance."
            ],
            tools: [
                "Zoho Projects for task, progress, and milestone tracking",
                "Documentation, SOPs, and internal workflows",
                "Google Sheets Automation for real-time dashboards and centralized data reporting"
            ],
            impact: [
                "Reduced project delays by improving visibility into timelines and responsibilities",
                "Enhanced coordination across on-site and back-office teams",
                "Eliminated material overspending through better inventory control",
                "Provided management with a single view of project progress, staff performance, and resource allocation"
            ]
        },
        "food-service": {
            name: "Food Service",
            icon: "🍽️",
            description: "Delivering exceptional culinary experiences through streamlined operations and quality service management.",
            longDescription: "In the fast-paced world of food service, operational efficiency is everything. At 7 Labs Vision, we support industrial catering companies and QSR chains that operate across multiple locations and serve diverse industries, helping them scale without losing control of operations.",
            overview: "Managing food service at scale comes with unique challenges: high staff turnover, complex inventory cycles, inconsistent standard operating procedures (SOPs), and order delays. Many of our clients also face difficulties in tracking financials across outlets, maintaining compliance, and streamlining site-wise reporting—especially as they expand.",
            services: [
                "Staff Tracking & Attendance: Designed easy-to-use attendance tracking systems and integrated payroll management to streamline monthly HR processes.",
                "Inventory Management: Created real-time Google Sheets dashboards to track raw material usage, stock levels, and reordering patterns.",
                "Process Standardization: Built centralized SOPs and operational manuals using Notion, ensuring consistency across all outlets.",
                "MIS & Site-level Reporting: Set up daily/weekly MIS reports, cashbooks, and profit-tracking dashboards—site-wise and consolidated—for better financial visibility.",
                "Company Incorporation & Compliance: Assisted with legal setup, tax audits, balance sheets, company filings, and internal audits.",
                "Project Financing & Fundraising Support: Advised on preparing business plans, investor decks, and documentation for project financing and fundraising.",
                "Agreements & Legal Support: Drafted vendor agreements, employment contracts, and investor agreements, tailored to food service operations."
            ],
            impact: [
                "Drastically reduced order delays through real-time communication and stock visibility",
                "Improved staff productivity and lowered absenteeism with proper attendance tracking",
                "Created full financial clarity across sites, enabling better budget planning",
                "Helped companies become audit-ready and legally compliant during their growth phase",
                "Secured funding for scaling through structured project financing documentation"
            ]
        },
        "publishing": {
            name: "Publishing",
            icon: "📚",
            description: "Transforming content creation, distribution, and monetization in the digital age of media.",
            longDescription: "The publishing industry demands precision, creativity, and consistency—qualities that are hard to maintain without the right systems in place. At 7 Labs Vision, we assist publishing houses and media firms in structuring their operations, improving team productivity, and ensuring clear performance metrics across their workforce.",
            overview: "Publishing involves complex workflows with tight deadlines, multiple teams, and creative processes that must align seamlessly. For many of our clients, managing team performance, clarifying roles, and ensuring that every employee is aligned with company goals can be challenging.",
            services: [
                "SOP Creation: Developed clear, accessible SOPs for all critical processes, ensuring every team member understood their responsibilities and workflows.",
                "KRA & KPI Development: Defined KRAs and KPIs for every employee, setting clear goals and expectations tied to individual roles and company objectives.",
                "Performance Tracking: Set up systems to track performance based on KPIs, allowing managers to have real-time insights into team and individual progress.",
                "Training & Onboarding: Developed onboarding processes to get new employees up to speed quickly and consistently."
            ],
            impact: [
                "Enhanced team alignment through clearly defined roles and performance metrics",
                "Improved employee productivity by setting measurable targets and tracking performance",
                "Ensured smoother onboarding and training for new hires, reducing ramp-up time",
                "Increased overall operational efficiency by standardizing workflows and processes across departments"
            ]
        },
        "apparel": {
            name: "Apparel",
            icon: "👗",
            description: "Revolutionizing fashion through sustainable practices and technology-driven supply chain solutions.",
            longDescription: "In the fast-moving world of apparel, managing production schedules, inventory, and workforce efficiency are key to staying competitive. At 7 Labs Vision, we help apparel brands streamline operations by creating simple yet effective systems for tracking employee tasks, attendance, and project timelines.",
            overview: "The apparel industry is marked by quick turnaround times, seasonal trends, and a heavy reliance on smooth, efficient operations. For many clothing brands, managing employee tasks and attendance—especially across multiple teams—can be a logistical challenge. Furthermore, tracking production and task progress on the ground requires centralized systems that reduce errors and improve transparency.",
            services: [
                "Employee Attendance Tracking: Set up automated Google Sheets to track employee attendance, eliminating manual errors and ensuring accurate payroll calculations.",
                "Task Management: Developed systems to track daily tasks, deadlines, and progress, giving both managers and employees clear visibility into daily operations.",
                "Process Automation: Automated key workflows within Google Sheets, allowing teams to focus on production rather than administrative tasks."
            ],
            impact: [
                "Reduced administrative burden by automating attendance tracking and task management",
                "Improved team accountability through transparent task assignment and real-time tracking",
                "Enhanced overall workflow efficiency, enabling the brand to meet production deadlines on time."
            ]
        },
        "information-technology": {
            name: "Information Technology",
            icon: "💻",
            description: "Empowering businesses with cutting-edge technology solutions and digital transformation strategies.",
            longDescription: "Startups and tech companies grow fast—and often outpace their internal systems. At 7 Labs Vision, we support IT firms and SaaS startups by acting as their virtual CFO, guiding them through financial planning, compliance, and fundraising, while helping them stay investor-ready at every stage.",
            overview: "Whether it's a bootstrapped SaaS venture or a VC-backed tech firm, the challenges are consistent: managing cash flow, preparing for due diligence, keeping up with MCA & RBI compliances, and planning for future funding rounds. These companies need financial clarity, investor confidence, and streamlined statutory processes—especially when scaling across geographies.",
            services: [
                "Virtual CFO Services: Budgeting & Financial Forecasting, Cash Flow Management, MIS Reporting, Financial Health Check",
                "Venture Funding Consultancy: Investor Pitch Decks & Financial Models, Due Diligence Support, Valuation Advisory",
                "MCA & RBI Compliance: MCA Filings, RBI Compliances, Statutory Registers & Minutes"
            ],
            impact: [
                "Helped startups raise equity and convertible debt by being investor-ready at every stage",
                "Reduced compliance risk and penalties by staying ahead of filing deadlines",
                "Provided founders with accurate financial visibility, enabling faster, data-driven decisions",
                "Acted as a one-stop financial partner—from startup to Series A and beyond"
            ]
        },
        "digital-creative-design": {
            name: "Digital & Creative Design",
            icon: "🎨",
            description: "Creating memorable brand experiences through innovative design thinking and visual storytelling.",
            longDescription: "In the competitive world of digital and creative design, delivering innovative solutions while maintaining operational efficiency is key to success.",
            overview: "Design agencies face unique challenges balancing creative excellence with project timelines, client management, and resource allocation. Our focus is on creating systems that support the creative process without stifling it.",
            services: [
                "Project Management Workflows: Customized systems that track creative projects from concept to delivery",
                "Resource Allocation: Tools to optimize designer time and creative resources",
                "Client Management: Streamlined processes for feedback, approvals, and revisions",
                "Digital Asset Management: Systems for organizing and accessing design files and brand assets"
            ],
            impact: [
                "Reduced project bottlenecks and improved on-time delivery",
                "Enhanced client satisfaction through transparent communication",
                "Improved profitability through better resource planning",
                "Created more space for creativity by reducing administrative overhead"
            ]
        },
        "crafts": {
            name: "Crafts",
            icon: "🧶",
            description: "Supporting artisans and small-scale producers with business strategy and market expansion.",
            longDescription: "The crafts industry combines artisanal skill with business acumen. We help craftspeople and small producers build sustainable businesses while preserving traditional techniques.",
            overview: "Artisans and craft businesses often excel in production but struggle with scalable business processes, market access, and financial planning.",
            services: [
                "Production Planning: Balancing handmade quality with sustainable output volume",
                "Market Access Strategies: Identifying and entering appropriate markets",
                "E-commerce Setup: Building digital presence and sales channels",
                "Financial Planning: Creating pricing strategies that value craftsmanship"
            ],
            impact: [
                "Increased market reach while maintaining product integrity",
                "Improved pricing strategies that reflect true value",
                "Developed sustainable business models for traditional crafts",
                "Enhanced digital presence and direct-to-consumer channels"
            ]
        },
        "pharmaceuticals": {
            name: "Pharmaceuticals",
            icon: "💊",
            description: "Advancing healthcare through operational excellence and regulatory compliance expertise.",
            longDescription: "In a heavily regulated and mission-critical industry like pharmaceuticals, startups and established firms alike need robust systems to ensure financial compliance, operational clarity, and strategic growth. At 7 Labs Vision, we work with both medicine manufacturers and pathology labs, helping them structure their operations from the ground up and prepare for sustained scaling.",
            overview: "Pharmaceutical startups face intense scrutiny—from funding regulations to production compliance. Meanwhile, diagnostic labs like pathology centers must manage rapid growth, ensure service quality, and build capable internal teams. We step in as a strategic consulting partner to bridge gaps in finance, HR, compliance, and operations.",
            services: [
                "For Medicine Manufacturers: Startup Consulting, CFO Services, Venture Funding Advisory, MCA & RBI Compliances",
                "For Pathology Labs: Startup Consulting & Budgeting, HR Support, Operational SOPs"
            ],
            impact: [
                "Enabled successful investor engagement by structuring compliant and transparent financial systems",
                "Helped founders focus on scaling while ensuring back-end operations ran seamlessly",
                "Structured hiring processes that reduced recruitment turnaround time",
                "Improved HR capability through hands-on training",
                "Better financial visibility with tailored budgeting and planning support"
            ]
        },
        "architecture-construction": {
            name: "Architecture & Construction",
            icon: "🏛️",
            description: "Building sustainable futures through innovative design and construction management.",
            longDescription: "The architecture and construction industry requires precision coordination between creative vision and practical execution. We partner with firms to create systems that bridge this gap.",
            overview: "Architecture firms and construction companies often struggle with project coordination, documentation management, and client communication across complex, long-running projects.",
            services: [
                "Design Process Management: Structured workflows from concept to delivery",
                "Project Documentation: Systems for organizing plans, permits, and specifications",
                "Client Communication: Frameworks for regular updates and feedback cycles",
                "Resource Planning: Tools for forecasting and allocating staff and materials"
            ],
            impact: [
                "Reduced design revision cycles through better client communication",
                "Improved project handovers between design and construction phases",
                "Enhanced documentation compliance and accessibility",
                "More accurate project timelines and resource forecasting"
            ]
        },
        "tourism-travel": {
            name: "Tourism & Travel",
            icon: "✈️",
            description: "Creating unforgettable experiences through customer-centric hospitality and destination management.",
            longDescription: "In the travel and tourism industry, efficiency and responsiveness are everything. Travel agencies often juggle complex itineraries, customer communication, and internal team management—all at once. At 7 Labs Vision, we help modern travel companies streamline their operations, automate routine tasks, and track team performance with clarity.",
            overview: "Travel agencies face challenges with lack of centralized systems to track bookings, client follow-ups, and inquiries, manual workload leading to missed follow-ups and client dissatisfaction, and poor visibility on employee tasks and performance KPIs.",
            services: [
                "CRM Structuring & Automation: Created centralized dashboards using Google Sheets or integrated tools for lead tracking, inquiry status, booking confirmations, and follow-up schedules.",
                "Team Task Management: Designed task and workflow trackers for sales and operations teams, helping improve accountability and turnaround times.",
                "Attendance & HR Automation: Setup automate performance monitoring for staff."
            ],
            impact: [
                "Improved lead follow-up by up to 70% through centralized inquiry tracking",
                "Reduced operational errors and duplication with automated task workflows",
                "Real-time tracking of staff performance",
                "Saved over 20+ hours/month in manual coordination and reporting"
            ]
        },
        "corrugated-packaging": {
            name: "Corrugated Packaging",
            icon: "📦",
            description: "Revolutionizing sustainable packaging solutions for the modern supply chain.",
            longDescription: "Corrugated packaging manufacturers operate in a fast-paced, volume-driven environment where production efficiency, inventory accuracy, and customer order tracking are vital to success. At 7 Labs Vision, we've helped packaging manufacturers build systems that simplify operations, improve visibility, and drive profitability.",
            overview: "Packaging manufacturers face challenges with lack of real-time visibility into production schedules, order tracking, and inventory movement, disconnected workflows between sales, production, and dispatch, manual data entry causing delays, duplication, and errors, and no structured system for employee performance tracking and task delegation.",
            services: [
                "Process Mapping & Workflow Setup: Documented end-to-end operations—from sales orders to dispatch—and created a structured, streamlined workflow.",
                "Production & Dispatch Tracking: Built Google Sheets–based systems to track production schedules, raw material consumption, order status, and daily dispatches.",
                "Inventory Management: Designed inventory tools to monitor raw material usage, finished goods stock, reorder levels, and wastage tracking.",
                "Employee Task Monitoring: Created role-specific dashboards to assign, track, and evaluate individual employee tasks, ensuring clarity and accountability.",
                "KRA & KPI Framework: Defined Key Result Areas (KRAs) and Key Performance Indicators (KPIs) for departments and individuals, helping streamline performance reviews and appraisal processes.",
                "MIS Reporting: Developed automated dashboards and daily/weekly reporting sheets to provide real-time business insights for top management."
            ],
            tools: [
                "Google Sheets (for daily logs, stock updates, production reporting)",
                "App Script Automation (for report generation, alerts, and exception tracking)",
                "Custom Dashboards for management visibility"
            ],
            impact: [
                "Reduced production errors by up to 40% with streamlined workflows",
                "Improved order tracking accuracy and dispatch timelines",
                "Enabled faster decision-making through real-time MIS dashboards",
                "Empowered team leads with clear task allocation and accountability"
            ]
        },
        "glass-manufacturing": {
            name: "Glass Manufacturing",
            icon: "🏺",
            description: "Crafting transparency through innovative processes and sustainable materials science.",
            longDescription: "Glass manufacturing combines precision engineering with artistic craftsmanship. Our systems help manufacturers balance quality control with production efficiency.",
            overview: "Glass manufacturers face unique challenges in material consistency, production scheduling, and quality assurance across multiple product lines.",
            services: [
                "Quality Control Systems: Implementing tracking methods for consistent quality",
                "Production Scheduling: Optimizing furnace operations and resource usage",
                "Inventory Management: Tracking raw materials and finished products",
                "Training Programs: Documenting specialized skills and techniques"
            ],
            impact: [
                "Reduced waste through better production planning",
                "Improved quality consistency across product lines",
                "Enhanced knowledge transfer of specialized techniques",
                "Better resource utilization and energy efficiency"
            ]
        },
        "carpet-rug-manufacturing": {
            name: "Carpet & Rug Manufacturing",
            icon: "🧶",
            description: "Weaving comfort and sustainability into interior design solutions and floor coverings.",
            longDescription: "Carpet and rug manufacturing involves intricate processes—from loom-side production tracking to dispatch planning. We helped weaving businesses build efficient systems to monitor workflows, reduce wastage, and enable real-time visibility for decision-making.",
            overview: "Weaving businesses face challenges with no real-time visibility of loom-wise production, manual tracking of orders, dispatches, and inventory, difficulty in monitoring weaver performance and material usage, and lack of centralized reporting for management overview.",
            services: [
                "Production Tracking: Designed loom-wise tracking sheets to monitor what is being produced, by whom, and at what stage—updated daily by supervisors.",
                "Order & Dispatch Management: Set up structured Google Sheets to manage order intake, priority flags, and dispatch timelines—ensuring smoother coordination between production and logistics.",
                "Material Consumption Logs: Created tools to track the quantity of yarn, dyes, and other materials consumed per order, helping control wastage.",
                "Weaver Performance Dashboards: Implemented performance tracking to help evaluate individual weavers on speed, accuracy, and output.",
                "MIS & Business Dashboards: Consolidated reports for top management with weekly/monthly snapshots of production, pending orders, and stock."
            ],
            tools: [
                "Google Sheets + Google App Script",
                "Custom formulas for production metrics",
                "Role-based dashboards for floor supervisors and management"
            ],
            impact: [
                "Improved on-time dispatch rate by up to 30%",
                "Reduced material wastage through detailed consumption logs",
                "Enabled weaver-level performance analysis, helping with incentive and training decisions",
                "Centralized dashboards improved clarity and faster decision-making"
            ]
        }
    };

    useEffect(() => {
        // Find the industry based on the URL parameter
        if (industryId) {
            setLoading(true);
            // Simulate API fetch with a slight delay
            setTimeout(() => {
                const foundIndustry = industriesData[industryId];
                if (foundIndustry) {
                    setIndustry(foundIndustry);
                } else {
                    // Handle case when industry is not found
                    console.error("Industry not found");
                }
                setLoading(false);
            }, 200);
        }
    }, [industryId]);

    // Handle back navigation
    const handleBack = () => {
        navigate(-1);
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-xl text-gray-600">Loading...</div>
            </div>
        );
    }

    if (!industry) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen px-4">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Industry Not Found</h1>
                <p className="text-gray-600 mb-6">Sorry, we couldn't find the industry you're looking for.</p>
                <button
                    onClick={handleBack}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                >
                    <ArrowLeft className="mr-2 w-4 h-4" /> Back to Industries
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
                <div className="max-w-7xl mt-20 mx-auto px-4 sm:px-6 lg:px-8">
                    <button
                        onClick={handleBack}
                        className="mb-8 inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                    >
                        <ArrowLeft className="mr-2 w-4 h-4" /> Back to Industries
                    </button>

                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                        <span className="text-6xl">{industry.icon}</span>
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{industry.name}</h1>
                            <p className="text-xl text-gray-700 max-w-3xl">{industry.longDescription}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Sections */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Overview Section */}
                <div className="mb-16">
                    <div className="inline-block bg-blue-100 rounded-full px-4 py-1.5 text-blue-600 text-sm font-medium mb-4">
                        Industry Overview
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding the Challenges</h2>
                    <p className="text-lg text-gray-700">{industry.overview}</p>
                </div>

                {/* How We Help Section */}
                <div className="mb-16">
                    <div className="inline-block bg-green-100 rounded-full px-4 py-1.5 text-green-600 text-sm font-medium mb-4">
                        Our Approach
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Help</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gray-50 rounded-xl p-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Services Provided</h3>
                            <ul className="space-y-4">
                                {industry.services && industry.services.map((service, index) => (
                                    <li key={index} className="flex items-start">
                                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3">
                                            <svg className="h-4 w-4 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-700">{service}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {industry.tools && (
                            <div className="bg-gray-50 rounded-xl p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Tools Used</h3>
                                <ul className="space-y-4">
                                    {industry.tools.map((tool, index) => (
                                        <li key={index} className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mt-1 mr-3">
                                                <svg className="h-4 w-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                                                </svg>
                                            </div>
                                            <span className="text-gray-700">{tool}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                {/* Impact Section */}
                <div className="mb-16">
                    <div className="inline-block bg-purple-100 rounded-full px-4 py-1.5 text-purple-600 text-sm font-medium mb-4">
                        Results
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Impact Delivered</h2>

                    <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8">
                        <ul className="space-y-4">
                            {industry.impact && industry.impact.map((result, index) => (
                                <li key={index} className="flex items-start">
                                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center mt-1 mr-3">
                                        <svg className="h-4 w-4 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700">{result}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-blue-600 rounded-xl p-8 text-center">
                    <h2 className="text-2xl font-bold text-white mb-4">Ready to transform your {industry.name.toLowerCase()} operations?</h2>
                    <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                        Let's discuss how our expertise can help your business overcome industry-specific challenges and achieve operational excellence.
                    </p>
                    <Link to="/contact">
                        <button className="px-8 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors inline-flex items-center">
                            Request a consultation <ArrowRight className="ml-2 w-4 h-4" />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default IndustryDetailPage;