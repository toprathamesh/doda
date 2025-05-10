import React from "react";

const BuildingLogo = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="10" width="24" height="18" rx="3" fill="#21E6C1" stroke="#1A2238" strokeWidth="2"/>
    <rect x="12" y="18" width="4" height="6" fill="#1A2238"/>
    <rect x="20" y="18" width="4" height="6" fill="#1A2238"/>
    <rect x="16" y="14" width="4" height="3" fill="#1A2238"/>
    <rect x="10" y="14" width="2" height="3" fill="#1A2238"/>
    <rect x="24" y="14" width="2" height="3" fill="#1A2238"/>
    <rect x="17" y="25" width="2" height="4" fill="#FFD700"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-obvian-black/80 to-obvian-blue/90 text-white py-16 overflow-hidden backdrop-blur-xl border-t border-cyan-400/10">
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-tr from-obvian-cyan/10 via-transparent to-obvian-cyan/10 animate-gradient-move" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="animate-fade-in-up delay-100">
            <div className="flex items-center mb-6">
              <span className="mr-2"><BuildingLogo /></span>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-obvian-cyan bg-clip-text text-transparent">Obvian</span>
            </div>
            <p className="text-obvian-gray/80 max-w-xs">
              Spaces that adapt to your life, work, and needs—in an instant. The future of flexible urban living.
            </p>
            <div className="flex space-x-4 mt-6">
              {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
                <a
                  key={social}
                  href={`#${social}`}
                  className="group border border-obvian-cyan/30 rounded-full p-2 text-obvian-cyan hover:bg-obvian-cyan/10 hover:shadow-cyan-glow transition-all duration-200"
                  aria-label={social}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          <div className="animate-fade-in-up delay-200">
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
          <div className="animate-fade-in-up delay-300">
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
          <div className="animate-fade-in-up delay-400">
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
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center animate-fade-in-up delay-500">
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
