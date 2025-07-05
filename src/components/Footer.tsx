import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { Twitter, Linkedin, Instagram } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.footer 
      ref={ref}
      className="relative bg-doda-black text-white py-16 overflow-hidden border-t border-doda-cyan/20"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-grid-pattern opacity-5" />
      </div>
      <div className="container px-4 mx-auto relative z-10">
        <div className="grid md:grid-cols-12 gap-8 text-center md:text-left">
          <div className="md:col-span-4 lg:col-span-5">
            <Link to="/" className="inline-block mb-6">
              <Logo size="medium" />
            </Link>
            <p className="text-doda-gray/80 max-w-xs mx-auto md:mx-0">
              The future of flexible urban living.
            </p>
            <div className="flex space-x-4 mt-6 justify-center md:justify-start">
              <a href="#" className="group border border-doda-cyan/30 rounded-full p-2 text-doda-cyan hover:bg-doda-cyan/10 hover:shadow-cyan-glow transition-all duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="group border border-doda-cyan/30 rounded-full p-2 text-doda-cyan hover:bg-doda-cyan/10 hover:shadow-cyan-glow transition-all duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="group border border-doda-cyan/30 rounded-full p-2 text-doda-cyan hover:bg-doda-cyan/10 hover:shadow-cyan-glow transition-all duration-200">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-4 lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-doda-cyan">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-doda-gray/80 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/projects" className="text-doda-gray/80 hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/contact" className="text-doda-gray/80 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-doda-cyan">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="/blog" className="text-doda-gray/80 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/faq" className="text-doda-gray/80 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/press" className="text-doda-gray/80 hover:text-white transition-colors">Press</Link></li>
            </ul>
          </div>

          <div className="md:col-span-12 lg:col-span-3">
            <h3 className="text-lg font-semibold mb-4 text-doda-cyan">Newsletter</h3>
            <p className="text-doda-gray/80 mb-4">Stay updated on our latest developments.</p>
            {/* Add newsletter form here */}
          </div>
        </div>
        <div className="mt-12 border-t border-doda-cyan/20 pt-8 flex flex-col md:flex-row justify-between items-center text-center">
          <p className="text-doda-gray/60 text-sm">
            &copy; {new Date().getFullYear()} Doda Living. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#privacy-policy" className="text-doda-gray/60 hover:text-white text-sm">
              Privacy Policy
            </a>
            <a href="#terms" className="text-doda-gray/60 hover:text-white text-sm">
              Terms of Service
            </a>
            <a href="#sitemap" className="text-doda-gray/60 hover:text-white text-sm">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
