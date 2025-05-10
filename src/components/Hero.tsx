
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const spaceTypes = [
  { name: "Living", description: "Cozy apartment living with smart features" },
  { name: "Working", description: "Modern office space for productive days" },
  { name: "Healthcare", description: "On-demand healthcare facilities" },
  { name: "Dining", description: "Cloud kitchen ready for culinary creativity" }
];

const Hero = () => {
  const [activeSpace, setActiveSpace] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSpace((prev) => (prev + 1) % spaceTypes.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-32 pb-20 min-h-screen flex flex-col justify-center relative bg-obvian-blue overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-obvian-cyan/10 animate-pulse-soft"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-obvian-cyan/5 animate-pulse-soft animation-delay-300"></div>
        <div className="absolute top-1/3 left-1/4 w-40 h-40 rounded-full bg-obvian-gray/5 animate-pulse-soft animation-delay-600"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left opacity-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight">
              Obvian: <span className="bg-gradient-to-r from-obvian-cyan to-obvian-cyan/70 bg-clip-text text-transparent">The Future of Flexible Urban Living</span>
            </h1>
            
            <p className="mt-6 text-xl md:text-2xl text-obvian-gray/90">
              Spaces that adapt to your life, work, and needs—in an instant.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Button 
                className="bg-obvian-cyan text-obvian-blue hover:bg-obvian-cyan/80 px-8 py-6 text-lg button-hover"
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              >
                See How It Works
              </Button>
              
              <Button 
                variant="outline" 
                className="border-obvian-gray text-obvian-gray hover:bg-obvian-gray/10 px-8 py-6 text-lg button-hover"
              >
                Book a Tour
              </Button>
            </div>
          </div>
          
          <div className="relative h-[400px] md:h-[500px] opacity-0 animate-fade-in animation-delay-300">
            {/* Morphing room visualization */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-obvian-blue/40 to-obvian-blue/95 backdrop-blur-sm z-10"></div>
              
              {spaceTypes.map((space, index) => (
                <div 
                  key={space.name}
                  className={`absolute inset-0 transition-opacity duration-1000 flex items-center justify-center ${
                    index === activeSpace ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img 
                    src={`https://images.unsplash.com/photo-1${486 + index * 10}312338219-ce68d2c6f44d`} 
                    alt={`Obvian ${space.name} Space`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              ))}
              
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <div className="bg-obvian-blue/60 backdrop-blur-md p-4 rounded-xl">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {spaceTypes[activeSpace].name} Space
                  </h3>
                  <p className="text-obvian-gray">
                    {spaceTypes[activeSpace].description}
                  </p>
                  
                  <div className="mt-4 flex justify-center gap-2">
                    {spaceTypes.map((space, index) => (
                      <button
                        key={space.name}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === activeSpace ? 'bg-obvian-cyan w-6' : 'bg-obvian-gray/50'
                        }`}
                        onClick={() => setActiveSpace(index)}
                        aria-label={`Switch to ${space.name}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
            aria-label="Scroll down"
            className="text-obvian-cyan"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
