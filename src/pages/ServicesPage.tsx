
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    id: "smart-living",
    title: "Smart Living",
    description: "Our smart living spaces adapt to your lifestyle with intelligent furniture and automated systems that learn your preferences and routines.",
    features: [
      "Adaptive furniture arrangements",
      "Voice-controlled environment settings",
      "Mood-based lighting systems",
      "Smart storage solutions"
    ],
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7"
  },
  {
    id: "workspace-solutions",
    title: "Workspace Solutions",
    description: "Transform any room into a productive workspace in seconds with our workspace conversion technology.",
    features: [
      "Ergonomic desk systems",
      "Professional lighting arrangements",
      "Acoustic optimization",
      "Integrated tech connectivity"
    ],
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2"
  },
  {
    id: "healthcare",
    title: "Healthcare Spaces",
    description: "Private, sanitized healthcare environments that provide the perfect setting for telehealth or in-person medical consultations.",
    features: [
      "Medical-grade sanitation",
      "Privacy-optimized environments",
      "Integrated health monitoring",
      "Accessible design features"
    ],
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d"
  },
  {
    id: "culinary",
    title: "Culinary Experiences",
    description: "Professional kitchen setups that transform your living space into a culinary creation center.",
    features: [
      "Professional appliance systems",
      "Optimized workflow layouts",
      "Specialized storage solutions",
      "Chef-designed environments"
    ],
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba"
  }
];

const ServicesPage = () => {
  const [mounted, setMounted] = useState(false);
  const [activeService, setActiveService] = useState(0);
  
  useEffect(() => {
    setMounted(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      className={`min-h-screen bg-obvian-black ${mounted ? 'animate-fade-in' : 'opacity-0'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <NavBar />
      
      {/* Hero section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-obvian-cyan/10 animate-pulse-soft"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-obvian-cyan/5 animate-pulse-soft animation-delay-300"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-obvian-cyan to-white bg-clip-text text-transparent">
                Our Services
              </span>
            </h1>
            <p className="text-obvian-gray/90 text-xl max-w-3xl mx-auto mb-8">
              Discover how Obvian's technology transforms static spaces into dynamic environments that adapt to your needs.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Services section */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap mb-12 justify-center">
            {services.map((service, index) => (
              <motion.button
                key={service.id}
                className={`px-6 py-3 m-2 rounded-full transition-all ${
                  activeService === index
                    ? "bg-obvian-cyan text-obvian-black font-medium"
                    : "bg-obvian-black border border-obvian-cyan/30 text-obvian-cyan hover:bg-obvian-cyan/10"
                }`}
                onClick={() => setActiveService(index)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {service.title}
              </motion.button>
            ))}
          </div>
          
          <motion.div 
            className="bg-obvian-black/80 backdrop-blur-sm rounded-2xl border border-obvian-cyan/20 overflow-hidden shadow-[0_0_30px_rgba(33,230,193,0.1)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            layoutId="serviceContainer"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              <motion.div 
                className="p-8 lg:p-12"
                key={`content-${activeService}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-4 text-white">
                  {services[activeService].title}
                </h2>
                <div className="w-16 h-1 bg-obvian-cyan mb-6"></div>
                <p className="text-obvian-gray/90 mb-8 text-lg">
                  {services[activeService].description}
                </p>
                
                <h3 className="text-xl font-medium mb-4 text-obvian-cyan">Key Features</h3>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {services[activeService].features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * idx }}
                    >
                      <div className="w-2 h-8 bg-obvian-cyan rounded-full"></div>
                      <span className="text-white">{feature}</span>
                    </motion.div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <Button 
                    className="bg-obvian-cyan text-obvian-black hover:bg-obvian-cyan/80 button-hover"
                    asChild
                  >
                    <Link to={`/services/${services[activeService].id}`}>
                      Learn More
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-obvian-cyan text-obvian-cyan hover:bg-obvian-cyan/10"
                    asChild
                  >
                    <Link to="/#contact">
                      Contact Us
                    </Link>
                  </Button>
                </div>
              </motion.div>
              
              <motion.div 
                className="h-80 lg:h-auto relative overflow-hidden"
                key={`image-${activeService}`}
                layoutId={`image-${services[activeService].id}`}
              >
                <motion.div
                  className="absolute inset-0"
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.7 }}
                >
                  <img 
                    src={services[activeService].image} 
                    alt={services[activeService].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-obvian-black via-transparent to-transparent"></div>
                </motion.div>
                
                <div className="absolute bottom-6 right-6 flex items-center space-x-2 bg-obvian-black/70 backdrop-blur-sm py-2 px-4 rounded-full">
                  <div className="h-2.5 w-2.5 rounded-full bg-obvian-cyan animate-pulse"></div>
                  <span className="text-obvian-cyan text-sm font-semibold">Available Now</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Additional offerings */}
      <section className="py-16 bg-obvian-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-obvian-cyan/30 to-transparent"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">
              <span className="bg-gradient-to-r from-obvian-cyan to-white bg-clip-text text-transparent">
                Additional Services
              </span>
            </h2>
            <p className="text-obvian-gray/80 max-w-3xl mx-auto">
              Beyond our core offerings, Obvian provides these supplementary services to enhance your experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Space Design Consultation",
                description: "Work with our expert designers to create your perfect adaptive space."
              },
              {
                title: "Technology Integration",
                description: "Seamlessly connect your existing smart home devices with Obvian systems."
              },
              {
                title: "Maintenance & Support",
                description: "24/7 technical support and regular maintenance to keep your space functioning perfectly."
              },
              {
                title: "Upgrade Packages",
                description: "Enhance your Obvian experience with premium feature upgrades."
              },
              {
                title: "Community Events",
                description: "Join exclusive events for Obvian users to network and share experiences."
              },
              {
                title: "Custom Solutions",
                description: "Bespoke adaptations for unique space requirements and special needs."
              }
            ].map((item, index) => (
              <motion.div 
                key={item.title}
                className="bg-obvian-black/50 border border-obvian-cyan/20 rounded-xl p-6 backdrop-blur-sm hover:border-obvian-cyan/50 transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(33,230,193,0.3)" }}
              >
                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-obvian-gray/80">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </motion.div>
  );
};

export default ServicesPage;
