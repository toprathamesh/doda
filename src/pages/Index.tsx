
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    
    // Smooth scroll to section if hash is in URL
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    
    // Add cursor trail effect
    const trail = document.createElement('div');
    trail.className = 'fixed w-6 h-6 rounded-full pointer-events-none z-50 opacity-0';
    trail.style.transition = 'transform 0.2s ease, opacity 0.5s ease, background 0.3s ease';
    trail.style.background = 'radial-gradient(circle, rgba(33,230,193,0.6) 0%, rgba(33,230,193,0) 70%)';
    document.body.appendChild(trail);
    
    const handleMouseMove = (e: MouseEvent) => {
      // Update trail position with slight delay for trailing effect
      setTimeout(() => {
        trail.style.opacity = '1';
        trail.style.transform = `translate(${e.clientX - 12}px, ${e.clientY - 12}px)`;
      }, 50);
      
      // When near interactive elements, change color
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
        trail.style.background = 'radial-gradient(circle, rgba(33,230,193,0.8) 0%, rgba(33,230,193,0) 70%)';
        trail.style.transform = `translate(${e.clientX - 12}px, ${e.clientY - 12}px) scale(1.5)`;
      } else {
        trail.style.background = 'radial-gradient(circle, rgba(33,230,193,0.6) 0%, rgba(33,230,193,0) 70%)';
        trail.style.transform = `translate(${e.clientX - 12}px, ${e.clientY - 12}px) scale(1)`;
      }
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (trail && trail.parentNode) {
        trail.parentNode.removeChild(trail);
      }
    };
  }, []);

  return (
    <motion.div 
      className={`min-h-screen bg-obvian-black ${mounted ? '' : 'opacity-0'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <NavBar />
      <Hero />
      <HowItWorks />
      <Features />
      <Contact />
      <Footer />
      
      {/* Animated fixed elements */}
      <div className="fixed top-0 left-0 w-full h-20 bg-gradient-to-b from-obvian-black to-transparent z-10 pointer-events-none"></div>
      <div className="fixed bottom-0 left-0 w-full h-20 bg-gradient-to-t from-obvian-black to-transparent z-10 pointer-events-none"></div>
      <div className="fixed top-0 right-0 w-40 h-40 rounded-full bg-obvian-cyan/5 filter blur-3xl animate-pulse-soft"></div>
      <div className="fixed bottom-0 left-0 w-60 h-60 rounded-full bg-obvian-cyan/3 filter blur-3xl animate-pulse-soft animation-delay-600"></div>
    </motion.div>
  );
};

export default Index;
