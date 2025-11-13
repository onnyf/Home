import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const galleryImages = [
  "/Sandri.jpg",
  "/Sandri 2.jpg",
  "/MF7 3.jpg",
  "/MF7 4.jpg",
  "/MF7 5.jpg",
  "/MF7 6.jpg",
];

const Hero = () => {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate("/services");
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div
        className="h-screen bg-cover bg-center relative flex flex-col justify-center items-center"
        style={{ backgroundImage: "url('/San 1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>

        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-white mb-4"
          >
            Welcome to Motrust Fashion
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-white mb-6"
          >
            Discover the latest styles and designs.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleExplore}
            className="bg-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-500 transition"
          >
            Explore Collections
          </motion.button>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="w-full max-w-7xl mx-auto px-4 py-12 relative">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Our Designs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              className="relative rounded-xl overflow-hidden shadow-lg bg-white group cursor-pointer border border-gray-200"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Image with fixed height for uniform layout */}
              <img
                src={img}
                alt={`Motrust Design ${index + 1}`}
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay Text */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-500">
                <p className="text-white text-lg font-semibold text-center">
                  Exclusive Motrust Design
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
