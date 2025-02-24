import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navbar";
import HeroSection from "./components/Home";
import AboutPage from "./components/About";
import ServicesSection from "./components/Services";
import ContactPage from "./components/Contact";
import Footer from "./components/Footer";
import CareerPage from "./components/Carrer";
import { BusinessOptimization, FinancialControls, InternalAudits, VirtualCFO } from "./components/services/VirtualCFO";

// Main App Component
const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            {/* Main Routes */}
            <Route path="/" element={<HeroSection />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/career" element={<CareerPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* Services Routes */}
            <Route path="/services" element={<ServicesSection />} />
            <Route path="/services/virtual-cfo" element={<VirtualCFO />} />
            <Route path="/services/business-optimization" element={<BusinessOptimization />} />
            <Route path="/services/internal-audits" element={<InternalAudits />} />
            <Route path="/services/financial-controls" element={<FinancialControls />} />

            {/* 404 Route */}
            <Route path="*" element={
              <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">404 - Page Not Found</h1>
                  <p className="text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
                  <a 
                    href="/" 
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Go Home
                  </a>
                </div>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;