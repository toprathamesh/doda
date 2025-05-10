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
          ? "py-2 bg-obvian-black/80 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(33,230,193,0.10)] border-b border-cyan-400/10" 
          : "py-4 bg-transparent"
      } ${mounted ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}
    >
      <div className="container px-4 mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center group transition-all duration-300 hover:scale-105">
          <Logo size={scrolled ? "small" : "medium"} />
        </Link>
        
        <nav className={`hidden md:block`}>
          <ul className="flex items-center gap-8">
            {navItems.map((item, index) => (
              <li key={item.text} className={`opacity-0 animate-fade-in-up`} style={{animationDelay: `${index * 80}ms`, animationFillMode: 'forwards'}}>
                <Link 
                  to={item.path}
                  className={`text-white transition-all relative px-1 py-0.5 font-medium ${
                    isActive(item.path) 
                      ? "after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-obvian-cyan after:to-white after:rounded-full after:transition-all after:duration-300"
                      : "opacity-80 hover:opacity-100 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-obvian-cyan after:rounded-full after:transition-all after:duration-300 hover:after:w-full"
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
            className="hidden md:inline-flex border-cyan-400/60 text-obvian-cyan bg-obvian-black/40 backdrop-blur-md hover:bg-obvian-cyan hover:text-obvian-black font-semibold shadow-cyan-glow button-hover animate-fade-in-up"
            style={{animationDelay: '600ms', animationFillMode: 'forwards'}}
            asChild
          >
            <Link to="/book-tour">Book Tour</Link>
          </Button>
          <Button 
            variant="default" 
            className="bg-gradient-to-r from-obvian-cyan to-cyan-200 text-obvian-black font-bold shadow-cyan-glow hover:scale-105 button-hover animate-fade-in-up"
            style={{animationDelay: '800ms', animationFillMode: 'forwards'}}
            asChild
          >
            <Link to="/join-waitlist">Join Waitlist</Link>
          </Button>
          
          <button className="md:hidden text-white ml-2" onClick={toggleMobileMenu} aria-label="Toggle menu">
            {mobileMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-obvian-black/90 backdrop-blur-2xl border-t border-cyan-400/10 shadow-2xl animate-fade-in-up">
          <nav className="container px-4 py-6">
            <ul className="space-y-4">
              {navItems.map((item, index) => (
                <li 
                  key={item.text}
                  className="opacity-0 animate-fade-in-up"
                  style={{animationDelay: `${index * 80}ms`, animationFillMode: 'forwards'}}
                >
                  <Link
                    to={item.path}
                    className={`text-white block py-2 px-4 rounded-lg font-medium transition-colors ${
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
              <li className="pt-2 border-t border-white/10 opacity-0 animate-fade-in-up" style={{animationDelay: '400ms', animationFillMode: 'forwards'}}>
                <Button 
                  variant="outline" 
                  className="w-full border-cyan-400/60 text-obvian-cyan bg-obvian-black/40 backdrop-blur-md hover:bg-obvian-cyan hover:text-obvian-black font-semibold shadow-cyan-glow"
                  asChild
                >
                  <Link to="/book-tour">Book Tour</Link>
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
