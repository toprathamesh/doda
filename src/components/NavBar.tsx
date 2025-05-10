
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const NavBar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    
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
    { text: "Services", path: "/services" },
    { text: "Projects", path: "/projects" },
    { text: "About", path: "/about" },
    { text: "Contact", path: "/#contact" }
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const isActive = (path: string) => {
    if (path.startsWith('/#')) {
      return location.pathname === '/' && location.hash === path.substring(1);
    }
    return location.pathname === path;
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "py-2 bg-obvian-black/95 backdrop-blur-md shadow-[0_0_30px_-10px_rgba(33,230,193,0.3)]" 
          : "py-4 bg-transparent"
      } ${mounted ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}
    >
      <div className="container px-4 mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center group transition-all duration-300 hover:scale-105">
          <Logo size={scrolled ? "small" : "medium"} />
        </Link>
        
        <nav className={`hidden md:block ${mobileMenuOpen ? 'flex' : ''}`}>
          <ul className="flex items-center gap-8">
            {navItems.map((item, index) => (
              <li key={item.text} className={`opacity-0 animate-fade-in animation-delay-${index * 300}`} style={{animationDelay: `${index * 100}ms`, animationFillMode: 'forwards'}}>
                <Link 
                  to={item.path}
                  className={`text-white transition-opacity hover-link relative ${
                    isActive(item.path) 
                      ? "opacity-100 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-obvian-cyan" 
                      : "opacity-80 hover:opacity-100"
                  }`}
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
            className="hidden md:inline-flex border-obvian-cyan text-obvian-cyan hover:bg-obvian-cyan hover:text-obvian-black button-hover opacity-0 animate-fade-in animation-delay-900"
            style={{animationDelay: '600ms', animationFillMode: 'forwards'}}
          >
            Book Tour
          </Button>
          <Button 
            variant="default" 
            className="bg-obvian-cyan text-obvian-black hover:bg-obvian-cyan/80 button-hover opacity-0 animate-fade-in animation-delay-900"
            style={{animationDelay: '800ms', animationFillMode: 'forwards'}}
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
              {navItems.map((item, index) => (
                <li 
                  key={item.text}
                  className="opacity-0 animate-fade-in"
                  style={{animationDelay: `${index * 100}ms`, animationFillMode: 'forwards'}}
                >
                  <Link
                    to={item.path}
                    className={`text-white block py-2 px-4 rounded-lg transition-colors ${
                      isActive(item.path)
                        ? "bg-obvian-cyan/20 border-l-2 border-obvian-cyan pl-3" 
                        : "hover:bg-obvian-cyan/10"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-white/10 opacity-0 animate-fade-in" style={{animationDelay: '400ms', animationFillMode: 'forwards'}}>
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
