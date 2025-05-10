
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-obvian-blue text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center mb-6">
              <div className="h-10 w-10 bg-obvian-cyan rounded-full animate-morph-shape mr-2"></div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-obvian-cyan bg-clip-text text-transparent">
                Obvian
              </span>
            </div>
            <p className="text-obvian-gray/80 max-w-xs">
              Spaces that adapt to your life, work, and needs—in an instant. The future of flexible urban living.
            </p>
            <div className="flex space-x-4 mt-6">
              {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
                <a 
                  key={social}
                  href={`#${social}`}
                  className="text-obvian-gray hover:text-obvian-cyan transition-colors"
                  aria-label={social}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              {["About Us", "Our Vision", "Careers", "Press", "Contact"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="text-obvian-gray/80 hover:text-obvian-cyan transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Spaces</h3>
            <ul className="space-y-4">
              {["Living Spaces", "Working Spaces", "Healthcare", "Cloud Kitchens", "Amenities", "Pricing"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="text-obvian-gray/80 hover:text-obvian-cyan transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-4">
              {["Blog", "Community", "Events", "FAQ", "Privacy Policy", "Terms of Service"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="text-obvian-gray/80 hover:text-obvian-cyan transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-obvian-gray/60 text-sm">
            &copy; {new Date().getFullYear()} Obvian Living. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#privacy-policy" className="text-obvian-gray/60 hover:text-obvian-cyan text-sm">
              Privacy
            </a>
            <a href="#terms" className="text-obvian-gray/60 hover:text-obvian-cyan text-sm">
              Terms
            </a>
            <a href="#sitemap" className="text-obvian-gray/60 hover:text-obvian-cyan text-sm">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
