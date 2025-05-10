import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChevronRight, Star } from "lucide-react";

const spaceTypes = [
  {
    id: 1,
    name: "Living Space",
    description: "Convertible living spaces with smart furniture that adapts to your lifestyle needs.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    features: ["Smart furniture", "Modular walls", "Voice control", "Climate optimization"]
  },
  {
    id: 2,
    name: "Working Space",
    description: "Productive workspaces that transform from your living room with ergonomic setups.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
    features: ["Ergonomic setup", "Video conferencing", "Noise cancellation", "Collaborative tools"]
  },
  {
    id: 3,
    name: "Healthcare Space",
    description: "Private healthcare suites for telehealth or in-person medical consultations.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d",
    features: ["Medical grade sanitization", "Telehealth setup", "Privacy features", "Medical storage"]
  },
  {
    id: 4,
    name: "Cloud Kitchen",
    description: "Professional-grade kitchen setups for culinary adventures or food businesses.",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba",
    features: ["Professional appliances", "Food delivery integration", "Smart inventory", "Ventilation system"]
  }
];

const SpacesPage = () => {
  const [activeSpace, setActiveSpace] = useState(0);

  return (
    <div className="min-h-screen bg-obvian-black text-white">
      <NavBar />
      
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 opacity-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-obvian-cyan to-white bg-clip-text text-transparent">
                Spaces That Adapt To You
              </span>
            </h1>
            <p className="text-obvian-gray/80 text-lg md:text-xl max-w-3xl mx-auto">
              Discover our range of convertible spaces that transform to meet your needs at the touch of a button.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 mb-16">
            <div className="lg:col-span-4">
              <div className="bg-obvian-darkblack/60 rounded-xl p-6 backdrop-blur-md border border-obvian-cyan/20 sticky top-24">
                <h2 className="text-2xl font-bold mb-6 text-obvian-cyan">Space Types</h2>
                
                <div className="space-y-3">
                  {spaceTypes.map((space, index) => (
                    <button
                      key={space.id}
                      onClick={() => setActiveSpace(index)}
                      className={`w-full text-left p-4 rounded-lg transition-all duration-300 flex items-center justify-between ${
                        index === activeSpace 
                          ? "bg-obvian-cyan/20 text-white border-l-4 border-obvian-cyan" 
                          : "bg-obvian-darkblack/40 text-obvian-gray/70 hover:bg-obvian-darkblack/80"
                      }`}
                    >
                      <span className="font-medium">{space.name}</span>
                      <ChevronRight className={`h-5 w-5 transition-transform ${index === activeSpace ? "rotate-90" : ""}`} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-8">
              <div className="grid md:grid-cols-2 gap-8">
                {spaceTypes.map((space, idx) => (
                  <div
                    key={space.id}
                    className="glass-card border border-cyan-400/10 rounded-2xl shadow-lg overflow-hidden animate-fade-in-up"
                    style={{ animationDelay: `${100 + idx * 100}ms`, animationFillMode: 'forwards' }}
                  >
                    <div className="relative h-64 w-full">
                      <video
                        src="https://static.vecteezy.com/system/resources/previews/033/658/784/mp4/modern-office-building-with-silhouettes-of-businessmen-walking-on-sidewalk-video.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        className="w-full h-full object-cover opacity-60 blur-sm scale-105 absolute inset-0"
                        style={{ zIndex: 0 }}
                        aria-hidden="true"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-obvian-black/70 to-transparent"></div>
                    </div>
                    <div className="p-6 md:p-8">
                      <h2 className="text-3xl font-bold mb-3 text-white">{space.name}</h2>
                      <p className="text-obvian-gray/80 mb-6 text-base md:text-lg">{space.description}</p>
                      <div className="grid md:grid-cols-2 gap-4 mb-8">
                        {space.features.map((feature, fidx) => (
                          <div key={fidx} className="flex items-center space-x-3 bg-obvian-black/50 p-3 rounded-lg animate-fade-in-up" style={{animationDelay: `${fidx * 80}ms`, animationFillMode: 'forwards'}}>
                            <div className="bg-obvian-cyan/20 p-1.5 rounded-full">
                              <Star className="h-4 w-4 text-obvian-cyan" />
                            </div>
                            <span className="text-white text-sm md:text-base">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button className="bg-obvian-cyan text-obvian-black hover:bg-obvian-cyan/80 button-hover font-semibold shadow-cyan-glow">
                          Book a Tour
                        </Button>
                        <Button variant="outline" className="border-obvian-cyan/50 text-obvian-cyan hover:bg-obvian-cyan/10 button-hover font-semibold">
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-obvian-cyan">Ready to Experience Obvian?</h2>
            <p className="text-obvian-gray/80 mb-8 max-w-2xl mx-auto">
              Join our waitlist to be among the first to experience the future of flexible urban living.
            </p>
            <Button className="bg-obvian-cyan text-obvian-black hover:bg-obvian-cyan/80 button-hover px-8 py-6 text-lg">
              Join Waitlist
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SpacesPage;
