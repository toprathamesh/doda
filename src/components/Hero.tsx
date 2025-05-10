import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import Animation1 from "./ui/BuildingAnimation1";
import Animation2 from "./ui/BuildingAnimation2";
import Animation3 from "./ui/BuildingAnimation3";

const spaceTypes = [
  { name: "Living", description: "Cozy apartment living with smart features" },
  { name: "Working", description: "Modern office space for productive days" },
  { name: "Healthcare", description: "On-demand healthcare facilities" },
  { name: "Dining", description: "Cloud kitchen ready for culinary creativity" }
];

const Hero = () => {
  const [activeSpace, setActiveSpace] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSpace((prev) => (prev + 1) % spaceTypes.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const scrollToHowItWorks = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="pt-32 pb-20 min-h-screen flex flex-col justify-center relative bg-obvian-black overflow-hidden"
    >
      {/* Animated SVG building background */}
      <Animation1 className="absolute inset-0 z-0 pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight"
              animate={{ scale: [1, 1.01, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              Obvian: <span className="animated-gradient-text">The Future of Flexible Urban Living</span>
            </motion.h1>
            <motion.p 
              className="mt-6 text-xl md:text-2xl text-obvian-gray/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Spaces that adapt to your life, work, and needs—in an instant.
            </motion.p>
            <motion.div
              className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <Button 
                className="bg-obvian-cyan text-obvian-black hover:bg-obvian-cyan/80 px-8 py-6 text-lg button-hover group relative overflow-hidden"
                onClick={scrollToHowItWorks}
              >
                <span className="relative z-10 flex items-center">
                  See How It Works
                  <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-obvian-cyan via-white/20 to-obvian-cyan opacity-0 group-hover:opacity-30 transition-opacity duration-500"></span>
              </Button>
              <Button 
                variant="outline" 
                className="border-obvian-gray text-obvian-gray hover:bg-obvian-gray/10 px-8 py-6 text-lg button-hover relative overflow-hidden group"
                asChild
              >
                <Link to="/services">
                  <span className="relative z-10">Explore Services</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-obvian-gray/10 via-obvian-gray/5 to-obvian-gray/10 opacity-0 group-hover:opacity-30 transition-opacity duration-500"></span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            className="relative h-[400px] md:h-[500px]"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {/* Morphing room visualization */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(33,230,193,0.2)] animate-morph-shape">
              {/* Add a solid/opaque background behind the SVG */}
              <div className="absolute inset-0 bg-obvian-black/90 z-0" />
              <div className="absolute inset-0 bg-gradient-to-br from-obvian-black/40 to-obvian-black/95 backdrop-blur-sm z-10"></div>
              {/* Animated SVG cityscape inside the bubble */}
              <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full z-20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g>
                  {/* Buildings */}
                  <rect x="40" y="220" width="40" height="120" rx="8" fill="#21E6C1" opacity="0.28">
                    <animate attributeName="y" values="220;210;220" dur="6s" repeatCount="indefinite" />
                  </rect>
                  <rect x="100" y="180" width="60" height="160" rx="12" fill="#21E6C1" opacity="0.32">
                    <animate attributeName="y" values="180;170;180" dur="7s" repeatCount="indefinite" />
                  </rect>
                  <rect x="180" y="250" width="30" height="90" rx="6" fill="#21E6C1" opacity="0.22">
                    <animate attributeName="y" values="250;240;250" dur="5.5s" repeatCount="indefinite" />
                  </rect>
                  <rect x="230" y="200" width="80" height="140" rx="14" fill="#21E6C1" opacity="0.30">
                    <animate attributeName="y" values="200;190;200" dur="8s" repeatCount="indefinite" />
                  </rect>
                  <rect x="330" y="270" width="30" height="70" rx="6" fill="#21E6C1" opacity="0.19">
                    <animate attributeName="y" values="270;260;270" dur="6.5s" repeatCount="indefinite" />
                  </rect>
                  {/* Glowing windows */}
                  <rect x="50" y="320" width="8" height="16" fill="#fff" opacity="0.9">
                    <animate attributeName="opacity" values="0.9;0.2;0.9" dur="2s" repeatCount="indefinite" />
                  </rect>
                  <rect x="120" y="300" width="10" height="20" fill="#fff" opacity="0.9">
                    <animate attributeName="opacity" values="0.9;0.1;0.9" dur="2.5s" repeatCount="indefinite" />
                  </rect>
                  <rect x="250" y="320" width="12" height="18" fill="#fff" opacity="0.9">
                    <animate attributeName="opacity" values="0.9;0.3;0.9" dur="2.2s" repeatCount="indefinite" />
                  </rect>
                  {/* Moving lights */}
                  <circle cx="80" cy="370" r="4" fill="#21E6C1">
                    <animate attributeName="cx" values="80;320;80" dur="7s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="320" cy="390" r="3" fill="#fff" opacity="0.8">
                    <animate attributeName="cx" values="320;80;320" dur="8s" repeatCount="indefinite" />
                  </circle>
                  {/* Floating tech elements */}
                  <rect x="180" y="120" width="18" height="18" rx="4" fill="#21E6C1" opacity="0.18">
                    <animate attributeName="y" values="120;100;120" dur="5s" repeatCount="indefinite" />
                  </rect>
                  <circle cx="300" cy="100" r="10" fill="#21E6C1" opacity="0.16">
                    <animate attributeName="cy" values="100;80;100" dur="6s" repeatCount="indefinite" />
                  </circle>
                </g>
              </svg>
              <motion.div 
                className="bg-obvian-black/60 backdrop-blur-md p-4 rounded-xl border border-obvian-cyan/20"
                animate={{ 
                  y: [0, -5, 0],
                  boxShadow: [
                    "0 0 20px rgba(33,230,193,0.1)", 
                    "0 0 25px rgba(33,230,193,0.2)", 
                    "0 0 20px rgba(33,230,193,0.1)"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.h3 
                  className="text-2xl font-bold text-white mb-2 flex items-center"
                  key={spaceTypes[activeSpace].name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="flex h-3 w-3 mr-2">
                    <span className="animate-ping absolute h-3 w-3 rounded-full bg-obvian-cyan opacity-75"></span>
                    <span className="relative rounded-full h-3 w-3 bg-obvian-cyan"></span>
                  </span>
                  {spaceTypes[activeSpace].name} Space
                </motion.h3>
                <motion.p 
                  className="text-obvian-gray"
                  key={`desc-${spaceTypes[activeSpace].name}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  {spaceTypes[activeSpace].description}
                </motion.p>
                <div className="flex gap-2 mt-4">
                  {spaceTypes.map((space, index) => (
                    <button
                      key={space.name}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === activeSpace ? 'bg-obvian-cyan w-6' : 'bg-obvian-gray/50'
                      }`}
                      onClick={() => setActiveSpace(index)}
                      aria-label={`Switch to ${space.name}`}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <button 
            onClick={scrollToHowItWorks}
            aria-label="Scroll down"
            className="text-obvian-cyan hover:text-obvian-cyan/80 transition-colors"
          >
            <ArrowDown className="w-8 h-8" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
