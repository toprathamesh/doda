
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
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

  const navItems = [
    { text: "How It Works", path: "/#how-it-works" },
    { text: "Features", path: "/#features" },
    { text: "Spaces", path: "/spaces" },
    { text: "Contact", path: "/#contact" }
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "py-3 bg-obvian-black/90 backdrop-blur-md shadow-[0_5px_25px_-10px_rgba(33,230,193,0.2)]" 
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container px-4 mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          <div className="h-10 w-10 bg-obvian-cyan rounded-full animate-morph-shape mr-2 group-hover:animate-pulse-glow transition-all"></div>
          <span className="text-2xl font-bold bg-gradient-to-r from-white to-obvian-cyan bg-clip-text text-transparent group-hover:from-obvian-cyan group-hover:to-white transition-all duration-500">
            Obvian
          </span>
        </Link>
        
        <nav className={`hidden md:block ${mobileMenuOpen ? 'flex' : ''}`}>
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.text}>
                <Link 
                  to={item.path}
                  className="text-white opacity-80 hover:opacity-100 transition-opacity relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-obvian-cyan after:transition-all"
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="flex items-center gap-3">
          <Button 
            variant="outline" 
            className="hidden md:inline-block border-obvian-cyan text-obvian-cyan hover:bg-obvian-cyan hover:text-obvian-black button-hover"
          >
            Book Tour
          </Button>
          <Button 
            variant="default" 
            className="bg-obvian-cyan text-obvian-black hover:bg-obvian-cyan/80 button-hover"
          >
            Join Waitlist
          </Button>
          
          <button className="md:hidden text-white" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-obvian-black/95 backdrop-blur-lg border-t border-obvian-cyan/20 shadow-lg animate-fade-in">
          <nav className="container px-4 py-6">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.text}>
                  <Link
                    to={item.path}
                    className="text-white block py-2 px-4 rounded-lg hover:bg-obvian-cyan/10 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-white/10">
                <Button 
                  variant="outline" 
                  className="w-full border-obvian-cyan text-obvian-cyan hover:bg-obvian-cyan hover:text-obvian-black"
                >
                  Book Tour
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavBar;
