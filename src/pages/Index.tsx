
import { useEffect, useState } from "react";
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
  }, []);

  return (
    <div className={`min-h-screen bg-obvian-black ${mounted ? 'animate-fade-in' : 'opacity-0'}`}>
      <NavBar />
      <Hero />
      <HowItWorks />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
