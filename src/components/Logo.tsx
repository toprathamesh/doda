
import { useEffect, useRef } from "react";

const Logo = ({ size = "medium", animated = true }: { size?: "small" | "medium" | "large", animated?: boolean }) => {
  const logoRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!animated || !logoRef.current) return;
    
    const logoElement = logoRef.current;
    
    // Add animation when the logo appears
    logoElement.classList.add('animate-fade-in');
    
    const interval = setInterval(() => {
      // Subtle pulse animation
      logoElement.classList.add('animate-pulse-glow');
      
      setTimeout(() => {
        logoElement.classList.remove('animate-pulse-glow');
      }, 2000);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [animated]);
  
  const dimensions = {
    small: "h-8 w-8",
    medium: "h-12 w-12",
    large: "h-16 w-16"
  };
  
  return (
    <div className="flex items-center gap-2">
      <div
        ref={logoRef}
        className={`relative ${dimensions[size]} bg-gradient-to-br from-obvian-cyan via-obvian-cyan/80 to-obvian-cyan/60 rounded-full overflow-hidden animate-morph-shape`}
      >
        <div className="absolute inset-0 bg-black opacity-50 mix-blend-overlay"></div>
        <div className="absolute inset-2 rounded-full bg-black"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] bg-obvian-cyan rounded-sm rotate-45"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 opacity-70"></div>
      </div>
      <span className={`font-bold bg-gradient-to-r from-obvian-cyan to-white bg-clip-text text-transparent ${
        size === "small" ? "text-lg" : size === "medium" ? "text-2xl" : "text-4xl"
      }`}>
        Obvian
      </span>
    </div>
  );
};

export default Logo;
