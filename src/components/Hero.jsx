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
      {/* ===== HERO SECTION ===== */}
      <section
        className="h-screen bg-cover bg-center relative flex flex-col justify-center items-center"
        style={{ backgroundImage: "url('/San%201.jpg')" }} // safer for spaced filenames
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4"
          >
            Welcome to Motrust Fashion
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg sm:text-xl text-gray-100 mb-6 max-w-xl mx-auto"
          >
            Discover timeless styles, elegant designs, and the latest fashion inspirations.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleExplore}
            className="bg-yellow-600 hover:bg-yellow-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition duration-300"
          >
            Explore Collections
          </motion.button>
        </div>
      </section>

      {/* ===== GALLERY SECTION ===== */}
      <section className="w-full max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          Our Designs
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              className="relative rounded-xl overflow-hidden shadow-lg bg-white border border-gray-200 group cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <img
                src={img}
                alt={`Motrust Design ${index + 1}`}
                className="w-full h-80 sm:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500">
                <p className="text-white text-lg font-semibold text-center px-4">
                  Exclusive Motrust Design
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Hero;
