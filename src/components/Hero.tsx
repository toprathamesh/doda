
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

const spaceTypes = [
  { name: "Living", description: "Cozy apartment living with smart features" },
  { name: "Working", description: "Modern office space for productive days" },
  { name: "Healthcare", description: "On-demand healthcare facilities" },
  { name: "Dining", description: "Cloud kitchen ready for culinary creativity" }
];

const Hero = () => {
  const [activeSpace, setActiveSpace] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSpace((prev) => (prev + 1) % spaceTypes.length);
    }, 3000);
    
    setIsVisible(true);
    
    // Create particle effects
    if (particlesRef.current) {
      createParticles();
    }
    
    return () => clearInterval(interval);
  }, []);

  const createParticles = () => {
    const particles = particlesRef.current;
    if (!particles) return;
    
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      particle.classList.add(
        'absolute', 
        'rounded-full', 
        'bg-obvian-cyan/20', 
        'pointer-events-none'
      );
      
      // Random size
      const size = Math.random() * 8 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random position
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      
      // Random animation
      const duration = Math.random() * 20 + 10;
      particle.style.animation = `float ${duration}s infinite ease-in-out`;
      particle.style.animationDelay = `${Math.random() * 5}s`;
      
      particles.appendChild(particle);
    }
  };

  const scrollToHowItWorks = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={heroRef}
      className="pt-32 pb-20 min-h-screen flex flex-col justify-center relative bg-obvian-black overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div ref={particlesRef} className="absolute inset-0"></div>
        
        <motion.div 
          className="absolute top-20 right-10 w-64 h-64 rounded-full bg-obvian-cyan/10"
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-obvian-cyan/5"
          animate={{ scale: [1, 1.15, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div 
          className="absolute top-1/3 left-1/4 w-40 h-40 rounded-full bg-obvian-gray/5"
          animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        
        {/* Dynamic grid lines */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        {/* Glowing lines */}
        <motion.div 
          className="absolute h-px w-full top-1/4 left-0 bg-gradient-to-r from-transparent via-obvian-cyan/20 to-transparent"
          animate={{ 
            opacity: [0.2, 0.5, 0.2],
            scaleY: [1, 1.5, 1]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute h-px w-full top-2/4 left-0 bg-gradient-to-r from-transparent via-obvian-cyan/10 to-transparent"
          animate={{ 
            opacity: [0.1, 0.3, 0.1],
            scaleY: [1, 1.5, 1]  
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div 
          className="absolute h-px w-full top-3/4 left-0 bg-gradient-to-r from-transparent via-obvian-cyan/30 to-transparent"
          animate={{ 
            opacity: [0.3, 0.6, 0.3],
            scaleY: [1, 1.5, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>
      
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
              <div className="absolute inset-0 bg-gradient-to-br from-obvian-black/40 to-obvian-black/95 backdrop-blur-sm z-10"></div>
              
              {spaceTypes.map((space, index) => (
                <motion.div 
                  key={space.name}
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: index === activeSpace ? 1 : 0,
                    scale: index === activeSpace ? 1 : 1.1
                  }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                >
                  <img 
                    src={`https://images.unsplash.com/photo-1${486 + index * 10}312338219-ce68d2c6f44d`} 
                    alt={`Obvian ${space.name} Space`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </motion.div>
              ))}
              
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
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
                  
                  <div className="mt-4 flex justify-center gap-2">
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
