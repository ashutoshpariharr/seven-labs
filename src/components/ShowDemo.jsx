import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import vedioFall from "../assets/video/fall.mp4"

export default function GAcconUI() {
    const [activeTab, setActiveTab] = useState('overview');

    const tabs = [
        { id: 'overview', label: 'OVERVIEW' },
        { id: 'reporting', label: 'REPORTING TEMPLATES' }
    ];

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            {/* Header */}
            <div className="text-center mb-8 mt-20">
                <h1 className="text-4xl font-bold text-slate-800 mb-6">
                    Seven labs some demos
                </h1>
                <p className="text-2xl text-slate-700">See it in action now:</p>
            </div>

            {/* Tab Navigation */}
            <div className="flex justify-center mb-8">
                <div className="flex space-x-4">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-6 py-3 rounded-full font-medium transition-colors duration-300 relative ${activeTab === tab.id
                                ? 'bg-orange-400 text-white'
                                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                                }`}
                        >
                            {tab.label}
                            {activeTab === tab.id && (
                                <motion.div
                                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="w-4 h-4 bg-orange-400 rotate-45"></div>
                                </motion.div>
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content Area */}
            <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="relative"
            >
                <div className="rounded-lg overflow-hidden border border-gray-200 shadow-lg">
                    {/* Video Player Mockup */}
                    <div className="relative bg-gray-100">
                        {activeTab === 'overview' && (
                            <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                                <video
                                    className="w-full h-full object-cover"
                                    src={vedioFall}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                />
                                {/* <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="bg-slate-800 bg-opacity-70 text-white p-8 max-w-md text-center">
                                        <h2 className="text-2xl font-bold mb-2">Bring your accounting data</h2>
                                        <h2 className="text-2xl font-bold">into Google Sheets</h2>
                                    </div>
                                </div> */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <button className="absolute right-4 bottom-4 bg-indigo-900 rounded-full p-4 text-white shadow-lg hover:bg-indigo-800 transition-colors duration-300">
                                        <Play size={32} fill="white" />
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </motion.div>
        </div>
    );
}