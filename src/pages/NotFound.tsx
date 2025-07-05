import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Home, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import Logo from "@/components/Logo";
import BuildingAnimation3 from "@/components/ui/BuildingAnimation3";
import { slideUp } from "@/lib/animations";

const NotFound = () => {
  const location = useLocation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Create glitch effect
    const interval = setInterval(() => {
      const glitchElement = document.querySelector('.glitch-effect');
      if (glitchElement) {
        glitchElement.classList.add('active');
        setTimeout(() => {
          glitchElement?.classList.remove('active');
        }, 200);
      }
    }, 3000);
    
    return () => clearInterval(interval);
  }, [location.pathname]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      className={`min-h-screen flex items-center justify-center bg-doda-black text-white p-4 relative overflow-hidden ${mounted ? '' : 'opacity-0'}`}
      variants={slideUp}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Animated SVG building background */}
      <BuildingAnimation3 className="absolute inset-0 w-full h-full z-0" />
      {/* Building accent */}
      <svg className="absolute -top-10 right-10 w-40 h-40 opacity-10 z-0 animate-float" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="12" y="20" width="40" height="36" rx="4" fill="#21E6C1" stroke="#1A2238" strokeWidth="3"/>
        <rect x="24" y="36" width="8" height="12" fill="#1A2238"/>
        <rect x="36" y="36" width="8" height="12" fill="#1A2238"/>
        <rect x="28" y="28" width="8" height="6" fill="#1A2238"/>
        <rect x="20" y="28" width="4" height="6" fill="#1A2238"/>
        <rect x="40" y="28" width="4" height="6" fill="#1A2238"/>
        <rect x="30" y="48" width="4" height="8" fill="#FFD700"/>
        <rect x="18" y="56" width="28" height="4" fill="#1A2238"/>
      </svg>
      {/* Glowing elements */}
      <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-doda-cyan/5 filter blur-3xl animate-pulse-soft"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-doda-cyan/3 filter blur-3xl animate-pulse-soft animation-delay-300"></div>
      
      {/* Glitching lines */}
      <div className="glitch-effect absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="absolute h-[1px] w-full top-1/4 left-0 bg-gradient-to-r from-transparent via-doda-cyan/30 to-transparent"></div>
        <div className="absolute h-[1px] w-full top-2/4 left-0 bg-gradient-to-r from-transparent via-doda-cyan/20 to-transparent"></div>
        <div className="absolute h-[1px] w-full top-3/4 left-0 bg-gradient-to-r from-transparent via-doda-cyan/40 to-transparent"></div>
        <div className="absolute w-[1px] h-full left-1/4 top-0 bg-gradient-to-b from-transparent via-doda-cyan/20 to-transparent"></div>
        <div className="absolute w-[1px] h-full left-2/4 top-0 bg-gradient-to-b from-transparent via-doda-cyan/30 to-transparent"></div>
        <div className="absolute w-[1px] h-full left-3/4 top-0 bg-gradient-to-b from-transparent via-doda-cyan/10 to-transparent"></div>
      </div>
      
      <motion.div 
        className="glass-card p-10 max-w-md w-full text-center border-glow z-10"
        variants={itemVariants}
      >
        <motion.div variants={itemVariants} className="mb-8 flex flex-col items-center">
          <Logo size="medium" />
        </motion.div>
      
        <motion.div variants={itemVariants} className="mb-6 flex justify-center">
          <div className="w-24 h-24 rounded-full bg-doda-cyan/20 flex items-center justify-center">
            <AlertTriangle className="h-12 w-12 text-doda-cyan animate-pulse" />
          </div>
        </motion.div>
        
        <motion.h1 
          variants={itemVariants}
          className="text-6xl font-bold mb-2 animated-gradient-text"
        >
          404
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="text-xl text-doda-gray mb-8"
        >
          This space doesn't exist yet
        </motion.p>
        
        <motion.p 
          variants={itemVariants}
          className="text-doda-gray/80 mb-8 text-base md:text-lg"
        >
          The page you're looking for hasn't been built or converted yet. Let's take you back to our existing spaces.<br/>
          If you need help, <Link to="/contact" className="text-doda-cyan underline hover:text-white">contact support</Link>.
        </motion.p>
        
        <motion.div variants={itemVariants}>
          <Link to="/">
            <Button className="bg-doda-cyan text-doda-black hover:bg-doda-cyan/80 w-full button-hover">
              <Home className="mr-2 h-5 w-5" /> Return Home
            </Button>
          </Link>
        </motion.div>
      </motion.div>
      
      {/* Random floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-doda-cyan/10 pointer-events-none"
          style={{
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${Math.random() * 10 + 5}s infinite ease-in-out`,
            animationDelay: `${Math.random() * 5}s`
          }}
        ></div>
      ))}
    </motion.div>
  );
};

export default NotFound;
