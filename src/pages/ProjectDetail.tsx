import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, MapPin, Calendar, Users, ArrowRight } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { useToast } from "@/components/ui/use-toast";
import { slideUp } from "@/lib/animations";

// Add this type above the projects array:
type Project = {
  id: string;
  title: string;
  location: string;
  date: string;
  description: string;
  longDescription: string;
  gallery: string[];
  stats: { label: string; value: string }[];
  features: string[];
  testimonials: { text: string; author: string; role: string }[];
  tags: string[];
  image?: string;
};

// This would usually come from an API, but for now we'll define it here
const projects = [
  {
    id: "neo-living-nyc",
    title: "Neo Living NYC",
    location: "New York City, NY",
    date: "2024",
    description: "A flagship residential building featuring 200 Doda-enabled apartments in the heart of Manhattan. Each unit showcases our latest adaptive living technology, allowing residents to transform their spaces from bedroom to office to entertainment area at the touch of a button.",
    longDescription: "Neo Living represents the pinnacle of Doda's residential implementation, with each apartment serving as a showcase for our transformative technology. Located in Manhattan's vibrant Chelsea district, this 25-story tower features 200 units ranging from studios to two-bedrooms. The building also features common areas with Doda technology, including flex spaces that serve as co-working environments during weekdays and transform into community gathering spaces during evenings and weekends.",
    gallery: [
      "https://images.unsplash.com/photo-1577495508326-19a1b3cf65b7",
      "https://images.unsplash.com/photo-1556702585-52825a741353",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
    ],
    stats: [
      { label: "Units", value: "200" },
      { label: "Stories", value: "25" },
      { label: "Technology", value: "Doda Core 2.0" }
    ],
    features: [
      "Robotic furniture systems",
      "AI-powered environmental controls",
      "Automated moving walls and partitions",
      "Smart home integration"
    ],
    testimonials: [
      {
        text: "As a developer, incorporating Doda's systems has allowed us to offer unprecedented functionality in smaller units, making urban living more accessible and practical.",
        author: "Jane Doe",
        role: "CEO, UrbanScape Developments"
      }
    ],
    tags: ["Residential", "Urban", "Flagship"]
  },
  {
    id: "tech-hub-sf",
    title: "Tech Hub SF",
    location: "San Francisco, CA",
    date: "2023",
    description: "A revolutionary co-working space with Doda's flexible workstations that transform based on daily needs.",
    longDescription: "Located in the heart of Silicon Valley, Tech Hub SF sets a new standard for flexible workspace. Developed in partnership with a leading tech real estate firm, this 45,000 sq ft facility features Doda's commercial workspace systems throughout.\n\nThe space includes 150 adaptive workstations that can transform from individual focus spaces to collaborative team environments in seconds. Conference rooms reconfigure automatically based on meeting size and purpose, and even common areas can adapt for presentations or functions.\n\nTech Hub SF serves as Doda's West Coast showcase for our commercial applications, demonstrating how adaptive spaces can maximize real estate efficiency while providing optimal working environments for different activities.",
    gallery: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
      "https://images.unsplash.com/photo-1552664730-d307ca884978",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7"
    ],
    stats: [
      { label: "Workstations", value: "150" },
      { label: "SQFT", value: "45,000" },
      { label: "Technology", value: "Doda Business Suite" }
    ],
    features: [
      "Transforming desks and partitions",
      "Automated meeting room layouts",
      "Acoustic privacy on demand",
      "Integrated booking and management system"
    ],
    testimonials: [
      {
        text: "Tech Hub has completely changed how our team works. We can reconfigure our space multiple times a day depending on our needs.",
        author: "David W.",
        role: "Startup Founder"
      },
      {
        text: "The flexibility of the space means we only pay for what we need, when we need it. It's like having a custom office that evolves with our business.",
        author: "Jennifer K.",
        role: "CFO, TechVentures"
      }
    ],
    tags: ["Commercial", "Co-working", "Tech"]
  },
  {
    id: "wellness-center-la",
    title: "Wellness Center LA",
    location: "Los Angeles, CA",
    date: "2024",
    description: "An integrated healthcare and wellness facility with adaptive treatment rooms and recovery spaces.",
    longDescription: "placeholder",
    gallery: [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d",
      "https://images.unsplash.com/photo-1535914254981-b5012eebbd15",
      "https://images.unsplash.com/photo-1598446322291-1979e4223559",
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09"
    ],
    stats: [
      { label: "Treatment rooms", value: "35" },
      { label: "Floor area", value: "28,000 sq ft" },
      { label: "Completion", value: "2024" }
    ],
    features: [
      "Transformable treatment spaces for different modalities",
      "Privacy-optimized consultation rooms",
      "Relaxation areas with personalized environment settings",
      "Advanced sanitation systems",
      "Integrated medical technology interfaces",
      "Accessibility features throughout"
    ],
    testimonials: [
      {
        text: "The adaptive treatment rooms allow us to offer more services without requiring more physical space.",
        author: "Dr. Lisa M.",
        role: "Medical Director"
      }
    ],
    tags: ["Healthcare", "Wellness", "Innovation"]
  }
];

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);
  
  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      const foundProject = projects.find(p => p.id === id);
      if (foundProject) {
        setProject(foundProject);
      } else {
        toast({
          title: "Project not found",
          description: "The project you're looking for doesn't exist.",
          variant: "destructive"
        });
        navigate("/projects");
      }
      setLoading(false);
    }, 500);
    
    window.scrollTo(0, 0);
  }, [id, navigate, toast]);

  if (loading) {
    return (
      <div className="min-h-screen bg-doda-black text-white">
        <NavBar />
        <div className="flex flex-col items-center justify-center h-screen">
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-doda-cyan/30 border-t-doda-cyan animate-spin"
            style={{ width: 100, height: 100 }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          ></motion.div>
          <p className="mt-32 text-xl">Loading Project...</p>
        </div>
      </div>
    );
  }
  
  if (!project) return null;

  return (
    <motion.div
      className="min-h-screen bg-doda-black text-white"
      variants={slideUp}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <NavBar />
      
      {/* Hero section */}
      <section className="pt-32 pb-12 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-doda-black/70 z-10"></div>
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
        </div>
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="mb-8">
            <Button 
              variant="ghost" 
              className="text-white hover:bg-doda-black/20 group"
              onClick={() => navigate("/projects")}
            >
              <ChevronLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Projects
            </Button>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-end gap-6 max-w-4xl">
            <div>
              <div className="flex items-center gap-2 text-doda-cyan mb-2">
                <MapPin className="w-4 h-4" />
                <span>{project.location}</span>
                <span className="mx-1">•</span>
                <Calendar className="w-4 h-4" />
                <span>{project.date}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                {project.title}
              </h1>
              
              <p className="text-lg text-doda-gray/90 max-w-2xl">
                {project.description}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Gallery section */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <div className="relative h-80 md:h-[500px] rounded-xl overflow-hidden">
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
            </div>
          </div>
        </div>
      </section>
      
      {/* Details section */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-6 text-white animate-fade-in-up delay-100">About this Project</h2>
              {project.longDescription.split('\n\n').map((paragraph: string, index: number) => (
                <p key={index} className="text-doda-gray/90 mb-4 animate-fade-in-up" style={{animationDelay: `${100 + index * 60}ms`, animationFillMode: 'forwards'}}>
                  {paragraph}
                </p>
              ))}
              <h3 className="text-xl font-bold mt-8 mb-4 text-white animate-fade-in-up delay-200">Key Features</h3>
              <ul className="space-y-3">
                {project.features?.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start animate-fade-in-up" style={{animationDelay: `${200 + index * 60}ms`, animationFillMode: 'forwards'}}>
                    <div className="bg-doda-cyan/20 p-1 rounded-full mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 text-doda-cyan">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <span className="ml-3 text-doda-gray/90">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card border border-cyan-400/10 rounded-2xl shadow-lg p-6 animate-fade-in-up delay-200">
              <h3 className="text-lg font-bold text-white mb-4">Testimonials</h3>
              <ul className="space-y-4">
                {project.testimonials?.map((testimonial, idx) => (
                  <li key={idx} className="animate-fade-in-up" style={{animationDelay: `${300 + idx * 80}ms`, animationFillMode: 'forwards'}}>
                    <blockquote className="text-doda-gray/90 italic mb-2">“{testimonial.text}”</blockquote>
                    <div className="text-doda-cyan font-semibold">{testimonial.author}</div>
                    <div className="text-doda-gray/70 text-sm">{testimonial.role}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related projects */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-white animate-fade-in-up delay-100">Related Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projects
              .filter(p => p.id !== project.id)
              .filter(p => p.tags.some(tag => project.tags.includes(tag)))
              .slice(0, 3)
              .map((relatedProject, idx) => (
                <div
                  key={relatedProject.id}
                  className="glass-card border border-cyan-400/10 bg-doda-black/60 rounded-xl overflow-hidden group hover:border-doda-cyan/50 transition-all animate-fade-in-up"
                  style={{animationDelay: `${100 + idx * 100}ms`, animationFillMode: 'forwards'}}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={relatedProject.gallery?.[0]}
                      alt={relatedProject.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-doda-black to-transparent"></div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold mb-2 text-white">{relatedProject.title}</h3>
                    <p className="text-doda-gray/80 text-sm mb-4 line-clamp-2">{relatedProject.description}</p>
                    <Link
                      to={`/projects/${relatedProject.id}`}
                      className="text-doda-cyan flex items-center hover:underline"
                    >
                      View Project
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
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

export default ProjectDetail;
