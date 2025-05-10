
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "py-3 bg-obvian-blue/90 backdrop-blur-md shadow-md" 
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container px-4 mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="h-10 w-10 bg-obvian-cyan rounded-full animate-morph-shape mr-2"></div>
          <span className="text-2xl font-bold bg-gradient-to-r from-white to-obvian-cyan bg-clip-text text-transparent">
            Obvian
          </span>
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {["How It Works", "Features", "Spaces", "Contact"].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-white opacity-80 hover:opacity-100 transition-opacity relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-obvian-cyan after:transition-all"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="flex items-center gap-3">
          <Button 
            variant="outline" 
            className="hidden md:inline-block border-obvian-cyan text-obvian-cyan hover:bg-obvian-cyan hover:text-obvian-blue button-hover"
          >
            Book Tour
          </Button>
          <Button 
            variant="default" 
            className="bg-obvian-cyan text-obvian-blue hover:bg-obvian-cyan/80 button-hover"
          >
            Join Waitlist
          </Button>
          
          <button className="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
