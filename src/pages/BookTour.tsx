import React from "react";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { slideUp } from '@/lib/animations';
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import BuildingAnimation2 from "@/components/ui/BuildingAnimation2";

const BookTour = () => {
  return (
    <motion.div
      className="min-h-screen bg-doda-black relative overflow-hidden"
      variants={slideUp}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <BuildingAnimation2 className="absolute inset-0 w-full h-full z-0" />
      <NavBar />
      <main className="flex flex-col items-center justify-center min-h-[70vh] relative z-10">
        <div className="glass-card border border-cyan-400/10 p-12 mt-32 text-center max-w-lg">
          <Link to="/" className="absolute top-8 left-8 text-white hover:text-doda-cyan transition-colors">
            &larr; Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-4 text-white">Book a Tour</h1>
          <p className="text-doda-cyan text-xl mb-6">Coming Soon</p>
          <p className="text-doda-gray/80 mb-4">We're working hard to bring you a seamless booking experience. Stay tuned!</p>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default BookTour; 