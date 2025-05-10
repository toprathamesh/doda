
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

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
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        interest: "living",
        message: ""
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-obvian-gray/10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="opacity-0 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-obvian-blue mb-6">
              Join the <span className="text-obvian-cyan">Obvian</span> Community
            </h2>
            
            <p className="text-lg text-obvian-blue/70 mb-8">
              Ready to experience the future of flexible urban living? Join our waitlist or schedule a virtual tour today to see how Obvian can transform your lifestyle.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-obvian-cyan mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-1">Contact Us</h3>
                <p className="text-obvian-blue/70">(555) 123-4567</p>
                <p className="text-obvian-blue/70">hello@obvian.com</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-obvian-cyan mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-1">Visit Us</h3>
                <p className="text-obvian-blue/70">123 Innovation Ave</p>
                <p className="text-obvian-blue/70">San Francisco, CA 94105</p>
              </div>
            </div>
            
            <div className="flex space-x-4">
              {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
                <a 
                  key={social}
                  href={`#${social}`}
                  className="bg-white w-10 h-10 rounded-full flex items-center justify-center text-obvian-blue hover:bg-obvian-cyan hover:text-white transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 opacity-0 animate-fade-in animation-delay-300">
            <h3 className="text-2xl font-bold text-obvian-blue mb-6">
              Get on the Waitlist
            </h3>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-obvian-blue/70 mb-1">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="border-obvian-gray/30 focus-visible:ring-obvian-cyan"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-obvian-blue/70 mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="border-obvian-gray/30 focus-visible:ring-obvian-cyan"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-obvian-blue/70 mb-1">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                    className="border-obvian-gray/30 focus-visible:ring-obvian-cyan"
                  />
                </div>
                
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-obvian-blue/70 mb-1">
                    I'm interested in
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full rounded-md border border-obvian-gray/30 py-2 px-3 text-obvian-blue shadow-sm focus:border-obvian-cyan focus:outline-none focus:ring-1 focus:ring-obvian-cyan"
                  >
                    <option value="living">Living Space</option>
                    <option value="working">Working Space</option>
                    <option value="healthcare">Healthcare Space</option>
                    <option value="kitchen">Kitchen Space</option>
                    <option value="amenities">Amenities Only</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-obvian-blue/70 mb-1">
                    Message (Optional)
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your needs..."
                    className="border-obvian-gray/30 focus-visible:ring-obvian-cyan"
                    rows={4}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-obvian-blue hover:bg-obvian-blue/90 text-white py-6 button-hover"
                >
                  {isSubmitting ? "Submitting..." : "Join the Waitlist"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
