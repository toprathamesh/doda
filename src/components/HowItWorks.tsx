
import { useState } from "react";
import { Button } from "@/components/ui/button";

const spaceTransformations = [
  {
    title: "Living Space",
    description: "A cozy home setup with comfortable furniture, smart lighting, and entertainment options.",
    features: ["Smart furniture", "Customizable layouts", "Voice control", "Climate optimization"],
    color: "from-blue-400 to-purple-500"
  },
  {
    title: "Working Space",
    description: "Instantly transform your living area into a productive office with ergonomic furniture and tech.",
    features: ["Ergonomic desk setup", "Video conferencing", "Noise cancellation", "Collaborative tools"],
    color: "from-teal-400 to-emerald-500"
  },
  {
    title: "Healthcare Space",
    description: "Convert your space into a private healthcare suite for telehealth or in-person appointments.",
    features: ["Medical grade sanitization", "Telehealth setup", "Privacy features", "Medical storage"],
    color: "from-red-400 to-rose-500"
  },
  {
    title: "Kitchen Space",
    description: "Transform into a fully-equipped cloud kitchen for culinary adventures or food businesses.",
    features: ["Professional appliances", "Cooking station", "Smart inventory", "Delivery integration"],
    color: "from-amber-400 to-orange-500"
  }
];

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="how-it-works" className="py-24 bg-obvian-gray/10 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-obvian-blue mb-4 opacity-0 animate-fade-in">
            How <span className="text-obvian-cyan">Obvian</span> Works
          </h2>
          <p className="text-lg md:text-xl text-obvian-blue/70 max-w-3xl mx-auto opacity-0 animate-fade-in animation-delay-300">
            Our spaces transform to meet your needs at the touch of a button. See how Obvian adapts to your life, work, and everything in between.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="flex overflow-x-auto py-2 mb-8 opacity-0 animate-fade-in animation-delay-600 hide-scrollbar">
            <div className="flex space-x-2 mx-auto">
              {spaceTransformations.map((space, index) => (
                <button
                  key={space.title}
                  onClick={() => setActiveTab(index)}
                  className={`px-6 py-3 rounded-full whitespace-nowrap transition-all ${
                    activeTab === index
                      ? "bg-obvian-cyan text-obvian-blue font-medium"
                      : "bg-white text-obvian-blue/60 hover:bg-obvian-cyan/10"
                  }`}
                >
                  {space.title}
                </button>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden opacity-0 animate-fade-in animation-delay-900">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-obvian-blue mb-4">
                    {spaceTransformations[activeTab].title}
                  </h3>
                  <p className="text-obvian-blue/70 mb-8">
                    {spaceTransformations[activeTab].description}
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    {spaceTransformations[activeTab].features.map((feature) => (
                      <div key={feature} className="flex items-start">
                        <div className="bg-obvian-cyan/20 p-1 rounded-full mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 text-obvian-cyan">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </div>
                        <span className="ml-3 text-obvian-blue/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Button className="bg-obvian-blue text-white hover:bg-obvian-blue/90 mt-4 button-hover self-start">
                  See It In Action
                </Button>
              </div>
              
              <div className="relative h-80 md:h-auto">
                <div className={`absolute inset-0 bg-gradient-to-br ${spaceTransformations[activeTab].color} opacity-90`}></div>
                <img 
                  src={`https://images.unsplash.com/photo-1550${1000 + activeTab * 1000}-80022131f5a1`} 
                  alt={spaceTransformations[activeTab].title}
                  className="w-full h-full object-cover mix-blend-overlay"
                />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/40 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="w-8 h-8">
                      <path d="M8 5.14v14l11-7-11-7z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-obvian-cyan/5 rounded-full"></div>
      <div className="absolute top-32 -right-24 w-96 h-96 bg-obvian-cyan/5 rounded-full"></div>
    </section>
  );
};

export default HowItWorks;
