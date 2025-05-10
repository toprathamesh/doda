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
            className="relative h-[400px] md:h-[500px] flex items-center justify-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {/* New animated 3D cityscape with floating glowing shapes and parallax */}
            <div className="relative w-full h-full flex items-center justify-center">
              <svg viewBox="0 0 400 400" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g>
                  {/* 3D cityscape buildings with parallax effect */}
                  <rect x="60" y="220" width="40" height="120" rx="10" fill="#21E6C1" opacity="0.22">
                    <animate attributeName="y" values="220;210;220" dur="7s" repeatCount="indefinite" />
                  </rect>
                  <rect x="120" y="160" width="70" height="180" rx="14" fill="#21E6C1" opacity="0.28">
                    <animate attributeName="y" values="160;150;160" dur="8s" repeatCount="indefinite" />
                  </rect>
                  <rect x="210" y="250" width="40" height="90" rx="8" fill="#21E6C1" opacity="0.18">
                    <animate attributeName="y" values="250;240;250" dur="6s" repeatCount="indefinite" />
                  </rect>
                  <rect x="270" y="180" width="90" height="160" rx="16" fill="#21E6C1" opacity="0.32">
                    <animate attributeName="y" values="180;170;180" dur="9s" repeatCount="indefinite" />
                  </rect>
                  {/* Glowing windows */}
                  <rect x="75" y="320" width="8" height="16" fill="#fff" opacity="0.8">
                    <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2.2s" repeatCount="indefinite" />
                  </rect>
                  <rect x="140" y="300" width="10" height="20" fill="#fff" opacity="0.8">
                    <animate attributeName="opacity" values="0.8;0.1;0.8" dur="2.7s" repeatCount="indefinite" />
                  </rect>
                  <rect x="290" y="320" width="12" height="18" fill="#fff" opacity="0.8">
                    <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2.4s" repeatCount="indefinite" />
                  </rect>
                  {/* Floating glowing shapes */}
                  <circle cx="100" cy="100" r="18" fill="#21E6C1" opacity="0.12">
                    <animate attributeName="cy" values="100;80;100" dur="7s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="320" cy="70" r="12" fill="#21E6C1" opacity="0.16">
                    <animate attributeName="cy" values="70;90;70" dur="8s" repeatCount="indefinite" />
                  </circle>
                  <rect x="200" y="60" width="22" height="22" rx="6" fill="#21E6C1" opacity="0.10">
                    <animate attributeName="y" values="60;40;60" dur="6s" repeatCount="indefinite" />
                  </rect>
                  {/* Parallax glowing dots */}
                  <circle cx="80" cy="370" r="4" fill="#21E6C1">
                    <animate attributeName="cx" values="80;320;80" dur="7s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="320" cy="390" r="3" fill="#fff" opacity="0.7">
                    <animate attributeName="cx" values="320;80;320" dur="8s" repeatCount="indefinite" />
                  </circle>
                </g>
              </svg>
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
