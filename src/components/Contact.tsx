import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const contactInfo = [
  { icon: Phone, title: "Call Us", details: ["(555) 123-4567"] },
  { icon: Mail, title: "Email Us", details: ["hello@doda.com"] },
  { icon: MapPin, title: "Visit Us", details: ["123 Innovation Ave", "San Francisco, CA 94105"] }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "living",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Thank you for your interest!",
        description: "We'll be in touch with you shortly.",
        duration: 5000,
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        interest: "living",
        message: ""
      });
    }, 1500);
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8,
        staggerChildren: 0.2 
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="contact" className="py-24 bg-doda-black relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="container mx-auto px-4 z-10 relative">
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Get in <span className="text-doda-cyan">Touch</span>
          </h2>
          <p className="text-lg md:text-xl text-doda-gray/90 max-w-3xl mx-auto">
            Have questions or want to learn more? Reach out to us or schedule a virtual tour to see how Doda can transform your lifestyle.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            {contactInfo.map((info, index) => (
              <motion.div key={index} className="flex items-start space-x-6" variants={itemVariants}>
                <div className="bg-doda-cyan/20 p-4 rounded-xl inline-flex text-doda-cyan">
                  <info.icon size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{info.title}</h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-doda-gray/80 text-lg">{detail}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="p-8 rounded-2xl bg-doda-gray/5 border border-doda-gray/20 shadow-2xl"
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="sr-only">Full Name</label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" required />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email Address</label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Your Message</label>
                <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Your Message..." rows={4} />
              </div>
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-doda-cyan text-doda-black hover:bg-doda-cyan/80 py-4 font-bold text-lg"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
