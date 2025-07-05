import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Logo from "@/components/Logo";
import BuildingAnimation3 from "@/components/ui/BuildingAnimation3";
import { slideUp } from "@/lib/animations";

const AboutPage = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    window.scrollTo(0, 0);
  }, []);
  
  // Company timeline data
  const timeline = [
    {
      year: "2020",
      title: "The Idea",
      description: "Doda was born from a simple observation: urban spaces are static, while our needs are dynamic."
    },
    {
      year: "2021",
      title: "Research & Development",
      description: "Our team of architects, engineers, and designers developed the core technology behind Doda's transformable spaces."
    },
    {
      year: "2023",
      title: "First Prototype",
      description: "The first fully functional Doda space was built and tested, proving that our vision could become reality."
    },
    {
      year: "2024",
      title: "Launch",
      description: "Doda opened its doors to the first residents and flexible space users in major metropolitan areas."
    },
    {
      year: "2025",
      title: "The Future",
      description: "Expansion to new cities and continual innovation in flexible, transformable urban living solutions."
    }
  ];
  
  // Team members data
  const team = [
    {
      name: "Alex Rivera",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=300&h=300&auto=format&fit=crop"
    },
    {
      name: "Morgan Chen",
      role: "Chief Design Officer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&h=300&auto=format&fit=crop"
    },
    {
      name: "Taylor Williams",
      role: "Head of Technology",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=300&h=300&auto=format&fit=crop"
    },
    {
      name: "Jordan Lee",
      role: "Operations Director",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=300&h=300&auto=format&fit=crop"
    }
  ];

  return (
    <motion.div
      className={`min-h-screen bg-doda-black ${mounted ? 'animate-fade-in' : 'opacity-0'}`}
      variants={slideUp}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <NavBar />
      
      {/* Hero section */}
      <section className="pt-32 pb-20 relative bg-doda-black overflow-hidden">
        <BuildingAnimation3 className="absolute inset-0 w-full h-full z-0" />
        <div className="absolute inset-0 bg-grid-doda-cyan/10 [mask-image:linear-gradient(to_bottom,white_5%,transparent_50%)]"></div>
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-doda-cyan/10 animate-pulse-soft"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-doda-cyan/5 animate-pulse-soft animation-delay-300"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="mx-auto flex justify-center mb-8">
            <Logo size="large" />
          </div>
          <motion.h1 
            className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About <span className="bg-gradient-to-r from-doda-cyan to-doda-gray bg-clip-text text-transparent">Doda</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-doda-gray/90 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            We are reimagining the relationship between people and their physical environments.
          </motion.p>
        </div>
      </section>
      
      {/* Our mission */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up delay-100">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our <span className="text-doda-cyan">Mission</span>
              </h2>
              <p className="text-doda-gray/90 mb-6">
                At Doda, we believe that urban spaces should adapt to people's lives, not the other way around. Our mission is to create living environments that transform based on your needs, seamlessly shifting between functions throughout the day.
              </p>
              <p className="text-doda-gray/90">
                We're challenging the traditional notion of static spaces by developing innovative technology and design solutions that make every square foot more valuable, useful, and delightful.
              </p>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden neon-glow animate-fade-in-up delay-200">
              <div className="absolute inset-0 bg-gradient-to-br from-doda-black/40 to-doda-black/95 backdrop-blur-sm z-10"></div>
              <video
                src="https://static.vecteezy.com/system/resources/previews/033/658/784/mp4/modern-office-building-with-silhouettes-of-businessmen-walking-on-sidewalk-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="absolute inset-0 w-full h-full object-cover opacity-60 blur-sm scale-105"
                style={{ zIndex: 0 }}
                aria-hidden="true"
              />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="glass-card border border-cyan-400/10 p-8 max-w-md text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Adaptive Living</h3>
                  <p className="text-doda-gray">Spaces that evolve with your lifestyle, needs, and aspirations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Timeline section */}
      <section className="py-20 relative overflow-hidden bg-doda-darkblack">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Our <span className="text-doda-cyan">Journey</span>
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-doda-cyan/20"></div>
            
            {/* Timeline events */}
            <div className="space-y-20">
              {timeline.map((event, index) => (
                <div 
                  key={event.year}
                  className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-doda-cyan neon-glow"></div>
                  
                  {/* Content */}
                  <div className="w-full md:w-5/12 p-6 glass-card rounded-xl">
                    <div className="text-doda-cyan text-2xl font-bold mb-2">{event.year}</div>
                    <h3 className="text-xl text-white font-bold mb-4">{event.title}</h3>
                    <p className="text-doda-gray/90">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Team section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 animate-fade-in-up delay-100">
            Our <span className="text-doda-cyan">Team</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={member.name}
                className="glass-card border border-cyan-400/10 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(33,230,193,0.2)] animate-fade-in-up"
                style={{ animationDelay: `${100 + index * 80}ms`, animationFillMode: 'forwards' }}
              >
                <div className="relative h-80">
                  <img 
                    src={member.image} 
                    alt={`Team member: ${member.name}`} 
                    className="w-full h-full object-cover" 
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-doda-black to-transparent"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl text-white font-bold mb-1">{member.name}</h3>
                  <p className="text-doda-cyan">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </motion.div>
  );
};

export default AboutPage;
