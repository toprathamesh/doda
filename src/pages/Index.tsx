import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { slideUp } from "@/lib/animations";

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
  }, []);

  return (
    <motion.div
      className={`min-h-screen bg-doda-black ${mounted ? '' : 'opacity-0'}`}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={slideUp}
    >
      <NavBar />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Contact />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Index;
