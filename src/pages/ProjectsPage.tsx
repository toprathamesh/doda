import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronRight, MapPin, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import BuildingAnimation2 from "@/components/ui/BuildingAnimation2";

const projects = [
  {
    id: "neo-living-nyc",
    title: "Neo Living NYC",
    location: "New York City, NY",
    date: "2024",
    description: "A flagship residential building featuring 200 Obvian-enabled apartments in the heart of Manhattan.",
    image: "https://images.unsplash.com/photo-1577495508326-19a1b3cf65b7",
    stats: [
      { label: "Units", value: "200" },
      { label: "Floor area", value: "180,000 sq ft" },
      { label: "Completion", value: "2024" }
    ],
    tags: ["Residential", "Urban", "Flagship"]
  },
  {
    id: "tech-hub-sf",
    title: "Tech Hub SF",
    location: "San Francisco, CA",
    date: "2023",
    description: "A revolutionary co-working space with Obvian's flexible workstations that transform based on daily needs.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
    stats: [
      { label: "Workspaces", value: "150" },
      { label: "Floor area", value: "45,000 sq ft" },
      { label: "Completion", value: "2023" }
    ],
    tags: ["Commercial", "Co-working", "Tech"]
  },
  {
    id: "wellness-center-la",
    title: "Wellness Center LA",
    location: "Los Angeles, CA",
    date: "2024",
    description: "An integrated healthcare and wellness facility with adaptive treatment rooms and recovery spaces.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d",
    stats: [
      { label: "Treatment rooms", value: "35" },
      { label: "Floor area", value: "28,000 sq ft" },
      { label: "Completion", value: "2024" }
    ],
    tags: ["Healthcare", "Wellness", "Innovation"]
  },
  {
    id: "cloud-kitchens-chicago",
    title: "Cloud Kitchens Chicago",
    location: "Chicago, IL",
    date: "2023",
    description: "A multi-unit culinary hub with transforming kitchen spaces for emerging food businesses.",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba",
    stats: [
      { label: "Kitchen units", value: "24" },
      { label: "Floor area", value: "18,000 sq ft" },
      { label: "Completion", value: "2023" }
    ],
    tags: ["Commercial", "Culinary", "Startup"]
  },
  {
    id: "future-campus-boston",
    title: "Future Campus Boston",
    location: "Boston, MA",
    date: "2025",
    description: "A university partnership creating adaptable learning and research environments.",
    image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3",
    stats: [
      { label: "Learning spaces", value: "45" },
      { label: "Floor area", value: "65,000 sq ft" },
      { label: "Completion", value: "2025 (In Progress)" }
    ],
    tags: ["Educational", "Research", "Partnership"]
  },
  {
    id: "micro-living-seattle",
    title: "Micro Living Seattle",
    location: "Seattle, WA",
    date: "2024",
    description: "Compact urban apartments that maximize functionality through Obvian's transforming systems.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    stats: [
      { label: "Units", value: "120" },
      { label: "Avg unit size", value: "380 sq ft" },
      { label: "Completion", value: "2024" }
    ],
    tags: ["Residential", "Micro-living", "Urban"]
  }
];

const ProjectsPage = () => {
  const [mounted, setMounted] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  
  useEffect(() => {
    setMounted(true);
    window.scrollTo(0, 0);
    
    // Add parallax effect
    const handleScroll = () => {
      document.querySelectorAll('.parallax-bg').forEach((element) => {
        const speed = parseFloat(element.getAttribute('data-speed') || '0.5');
        const yPos = -(window.scrollY * speed);
        element.setAttribute('style', `transform: translate3d(0, ${yPos}px, 0)`);
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Extract unique tags for filtering
  const tags = ["All", ...new Set(projects.flatMap(project => project.tags))];
  
  // Filter projects based on selected tag
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <motion.div 
      className={`min-h-screen bg-obvian-black ${mounted ? 'animate-fade-in' : 'opacity-0'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <NavBar />
      
      {/* Hero section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <BuildingAnimation2 className="absolute inset-0 w-full h-full z-0" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-obvian-black via-obvian-black/90 to-obvian-black"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-obvian-cyan to-white bg-clip-text text-transparent">
                Our Projects
              </span>
            </h1>
            <p className="text-obvian-gray/90 text-lg mb-8">
              Explore our portfolio of revolutionary adaptive spaces across different sectors, from residential towers to healthcare facilities.
            </p>
            
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {tags.map((tag) => (
                <motion.button
                  key={tag}
                  onClick={() => setActiveFilter(tag)}
                  className={`px-4 py-2 rounded-full text-sm transition-all ${
                    activeFilter === tag 
                      ? "bg-obvian-cyan text-obvian-black" 
                      : "bg-obvian-black/60 border border-obvian-cyan/30 text-white hover:bg-obvian-cyan/10"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tag}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Projects grid */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-obvian-black/60 backdrop-blur-sm border border-obvian-cyan/20 rounded-xl overflow-hidden group hover:border-obvian-cyan/50 transition-all"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(33,230,193,0.3)" }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obvian-black to-transparent"></div>
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="bg-obvian-cyan/20 backdrop-blur-md text-white text-xs py-1 px-2 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 text-obvian-gray mb-2 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                    <span className="mx-1">•</span>
                    <Calendar className="w-4 h-4" />
                    <span>{project.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                  <p className="text-obvian-gray/80 text-sm mb-4">{project.description}</p>
                  
                  <div className="grid grid-cols-3 gap-2 mb-5">
                    {project.stats.map(stat => (
                      <div key={stat.label} className="text-center p-2 bg-obvian-black/40 rounded-lg">
                        <div className="text-obvian-cyan font-bold">{stat.value}</div>
                        <div className="text-obvian-gray/70 text-xs">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-obvian-cyan text-obvian-cyan hover:bg-obvian-cyan hover:text-obvian-black group"
                    asChild
                  >
                    <Link to={`/projects/${project.id}`}>
                      <span>View Project</span>
                      <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-obvian-cyan/5"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-obvian-cyan/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-obvian-cyan/30 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h2 
              className="text-3xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Want to Create the Next Obvian Project?
            </motion.h2>
            <motion.p 
              className="text-obvian-gray/80 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Whether you're a developer, architect, or business owner, we'd love to discuss how Obvian can transform your spaces.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Button className="bg-obvian-cyan text-obvian-black hover:bg-obvian-cyan/80">
                Schedule a Consultation
              </Button>
              <Button variant="outline" className="border-obvian-cyan text-obvian-cyan hover:bg-obvian-cyan/10">
                Download Brochure
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </motion.div>
  );
};

export default ProjectsPage;
