import { ArrowRight, Filter, Search } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function IndustriesSection() {
    const [filter, setFilter] = useState('');
    const [showAll, setShowAll] = useState(false);

    const industries = [
        {
            id: "infrastructure-civil-engineering",
            name: "Infrastructure & Civil Engineering",
            icon: "🏗️",
            description: "Building the foundations of modern society through innovative construction solutions and infrastructure development.",
            featured: true
        },
        {
            id: "food-service",
            name: "Food Service",
            icon: "🍽️",
            description: "Delivering exceptional culinary experiences through streamlined operations and quality service management.",
            featured: true
        },
        {
            id: "publishing",
            name: "Publishing",
            icon: "📚",
            description: "Transforming content creation, distribution, and monetization in the digital age of media.",
            featured: true
        },
        {
            id: "apparel",
            name: "Apparel",
            icon: "👕",
            description: "Revolutionizing fashion through sustainable practices and technology-driven supply chain solutions.",
            featured: true
        },
        {
            id: "information-technology",
            name: "Information Technology",
            icon: "💻",
            description: "Empowering businesses with cutting-edge technology solutions and digital transformation strategies.",
            featured: true
        },
        {
            id: "digital-creative-design",
            name: "Digital & Creative Design",
            icon: "🎨",
            description: "Creating memorable brand experiences through innovative design thinking and visual storytelling.",
            featured: true
        },
        {
            id: "crafts",
            name: "Crafts",
            icon: "🧶",
            description: "Supporting artisans and small-scale producers with business strategy and market expansion.",
            featured: false
        },
        {
            id: "pharmaceuticals",
            name: "Pharmaceuticals",
            icon: "💊",
            description: "Advancing healthcare through operational excellence and regulatory compliance expertise.",
            featured: false
        },
        {
            id: "architecture-construction",
            name: "Architecture & Construction",
            icon: "🏛️",
            description: "Building sustainable futures through innovative design and construction management.",
            featured: false
        },
        {
            id: "footwear",
            name: "Footwear",
            icon: "👟",
            description: "Stepping into the future with advanced manufacturing and sustainable materials innovation.",
            featured: false
        },
        {
            id: "tourism-travel",
            name: "Tourism & Travel",
            icon: "✈️",
            description: "Creating unforgettable experiences through customer-centric hospitality and destination management.",
            featured: false
        },
        {
            id: "corrugated-packaging",
            name: "Corrugated Packaging",
            icon: "📦",
            description: "Revolutionizing sustainable packaging solutions for the modern supply chain.",
            featured: false
        },
        {
            id: "glass-manufacturing",
            name: "Glass Manufacturing",
            icon: "🏺",
            description: "Crafting transparency through innovative processes and sustainable materials science.",
            featured: false
        },
        {
            id: "carpet-rug-manufacturing",
            name: "Carpet & Rug Manufacturing",
            icon: "🧶",
            description: "Weaving comfort and sustainability into interior design solutions and floor coverings.",
            featured: false
        }
    ];

    const filteredIndustries = filter
        ? industries.filter(industry => industry.name.toLowerCase().includes(filter.toLowerCase()))
        : showAll
            ? industries
            : industries.filter(industry => industry.featured);

    return (
        <div className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <div className="inline-block bg-blue-100 rounded-full px-4 py-1.5 text-blue-600 text-sm font-medium mb-6">
                        Industries We Serve
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        Expertise Across Multiple Sectors
                    </h2>
                    <p className="text-xl text-gray-600">
                        Our specialized knowledge and tailored solutions help businesses thrive in these diverse industries.
                    </p>
                </div>

                <div className="mb-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="relative w-full sm:w-auto">
                        <input
                            type="text"
                            placeholder="Search industries..."
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full sm:w-64 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                        />
                        <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
                    </div>

                    <div className="flex items-center gap-2">
                        <Filter className="text-gray-500 w-5 h-5" />
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${showAll
                                ? 'bg-blue-600 text-white'
                                : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-100'
                                }`}
                        >
                            {showAll ? 'Showing All' : 'Featured Only'}
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredIndustries.map((industry, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                        >
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-4xl">{industry.icon}</span>
                                    {industry.featured && (
                                        <span className="bg-blue-50 text-blue-600 text-xs py-1 px-2 rounded-full">
                                            Featured
                                        </span>
                                    )}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{industry.name}</h3>
                                <p className="text-gray-600 mb-4">{industry.description}</p>
                                <Link to={`/industry/${industry.id}`}>
                                    <button className="text-blue-600 font-medium inline-flex items-center hover:underline">
                                        Learn more <ArrowRight className="ml-1 w-4 h-4" />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredIndustries.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">No industries found matching your search.</p>
                        <button
                            onClick={() => setFilter('')}
                            className="mt-4 text-blue-600 font-medium"
                        >
                            Clear search
                        </button>
                    </div>
                )}

                <div className="mt-16 text-center">
                    <Link to="/contact">
                        <button
                            className="px-8 py-3 bg-blue-600 text-white rounded-lg inline-flex items-center hover:bg-blue-700 transition-colors"
                        >
                            Request a consultation <ArrowRight className="ml-2 w-4 h-4" />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default IndustriesSection;