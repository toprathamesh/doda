import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import BuildingAnimation2 from "@/components/ui/BuildingAnimation2";

const BookTour = () => (
  <div className="min-h-screen bg-obvian-black relative overflow-hidden">
    <BuildingAnimation2 className="absolute inset-0 w-full h-full z-0" />
    <NavBar />
    <main className="flex flex-col items-center justify-center min-h-[70vh] relative z-10">
      <div className="glass-card border border-cyan-400/10 p-12 mt-32 text-center max-w-lg">
        <h1 className="text-4xl font-bold mb-4 text-white">Book a Tour</h1>
        <p className="text-obvian-cyan text-xl mb-6">Coming Soon</p>
        <p className="text-obvian-gray/80 mb-4">We're working hard to bring you a seamless booking experience. Stay tuned!</p>
      </div>
    </main>
    <Footer />
  </div>
);

export default BookTour; 