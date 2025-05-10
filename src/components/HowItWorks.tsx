
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";

const spaceTransformations = [
  {
    title: "Living Space",
    description: "A cozy home setup with comfortable furniture, smart lighting, and entertainment options.",
    features: ["Smart furniture", "Customizable layouts", "Voice control", "Climate optimization"],
    color: "from-blue-400 to-purple-500"
  },
  {
    title: "Working Space",
    description: "Instantly transform your living area into a productive office with ergonomic furniture and tech.",
    features: ["Ergonomic desk setup", "Video conferencing", "Noise cancellation", "Collaborative tools"],
    color: "from-teal-400 to-emerald-500"
  },
  {
    title: "Healthcare Space",
    description: "Convert your space into a private healthcare suite for telehealth or in-person appointments.",
    features: ["Medical grade sanitization", "Telehealth setup", "Privacy features", "Medical storage"],
    color: "from-red-400 to-rose-500"
  },
  {
    title: "Kitchen Space",
    description: "Transform into a fully-equipped cloud kitchen for culinary adventures or food businesses.",
    features: ["Professional appliances", "Cooking station", "Smart inventory", "Delivery integration"],
    color: "from-amber-400 to-orange-500"
  }
];

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section 
      id="how-it-works" 
      className="py-24 bg-obvian-black relative overflow-hidden"
      ref={ref}
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0"></div>
      <motion.div 
        className="absolute -bottom-16 -left-16 w-64 h-64 bg-obvian-cyan/5 rounded-full" 
        animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-32 -right-24 w-96 h-96 bg-obvian-cyan/5 rounded-full"
        animate={{ scale: [1, 1.15, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-obvian-cyan/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-obvian-cyan/30 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            How <span className="text-obvian-cyan">Obvian</span> Works
          </h2>
          <p className="text-lg md:text-xl text-obvian-gray/90 max-w-3xl mx-auto">
            Our spaces transform to meet your needs at the touch of a button. See how Obvian adapts to your life, work, and everything in between.
          </p>
        </motion.div>
        
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="flex overflow-x-auto py-2 mb-8 hide-scrollbar"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="flex space-x-2 mx-auto">
              {spaceTransformations.map((space, index) => (
                <motion.button
                  key={space.title}
                  onClick={() => setActiveTab(index)}
                  className={`px-6 py-3 rounded-full whitespace-nowrap transition-all ${
                    activeTab === index
                      ? "bg-obvian-cyan text-obvian-black font-medium"
                      : "bg-obvian-black border border-obvian-cyan/30 text-obvian-cyan hover:bg-obvian-cyan/10"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {space.title}
                </motion.button>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-obvian-black border border-obvian-cyan/20 rounded-2xl shadow-[0_0_30px_rgba(33,230,193,0.1)] overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            layoutId="transformationContainer"
          >
            <div className="grid md:grid-cols-2">
              <motion.div 
                className="p-8 md:p-12 flex flex-col justify-between"
                key={`content-${activeTab}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {spaceTransformations[activeTab].title}
                  </h3>
                  <p className="text-obvian-gray/90 mb-8">
                    {spaceTransformations[activeTab].description}
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    {spaceTransformations[activeTab].features.map((feature, idx) => (
                      <motion.div 
                        key={feature} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <div className="bg-obvian-cyan/20 p-1 rounded-full mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 text-obvian-cyan">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </div>
                        <span className="ml-3 text-obvian-gray/90">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <Button 
                  className="bg-obvian-cyan text-obvian-black hover:bg-obvian-cyan/80 mt-4 button-hover self-start"
                  asChild
                >
                  <Link to="/services">Explore Services</Link>
                </Button>
              </motion.div>
              
              <motion.div 
                className="relative h-80 md:h-auto overflow-hidden"
                key={`image-${activeTab}`}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${spaceTransformations[activeTab].color} opacity-90`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.9 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.img 
                  src={`https://images.unsplash.com/photo-1550${1000 + activeTab * 1000}-80022131f5a1`} 
                  alt={spaceTransformations[activeTab].title}
                  className="w-full h-full object-cover mix-blend-overlay"
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.7 }}
                />
                
                <div className="absolute top-4 left-4">
                  <div className="bg-obvian-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                    <div className="flex items-center space-x-2">
                      <div className="h-2 w-2 rounded-full bg-obvian-cyan animate-pulse"></div>
                      <span className="text-white text-sm">Transformation {activeTab + 1}/4</span>
                    </div>
                  </div>
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    className="text-center px-6 py-4 glass-card rounded-xl max-w-xs"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <h4 className="text-white font-bold mb-2">Transform in seconds</h4>
                    <p className="text-white/90 text-sm">
                      Spaces adapt to your needs with a simple voice command or tap in the app
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <Button 
              variant="outline" 
              className="border-obvian-cyan text-obvian-cyan hover:bg-obvian-cyan hover:text-obvian-black"
              asChild
            >
              <Link to="/projects">View Our Projects</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
