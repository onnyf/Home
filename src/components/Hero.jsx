import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Example images (replace with your actual image paths)
const galleryImages = [
  "/ankara1.jpg",
  "/asoebi1.jpg",
  "/jumpsuit1.jpg",
  "/wedding1.jpg",
  "/ankara2.jpg",
  "/asoebi2.jpg",
];

const Hero = () => {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate("/services"); // Navigate to Services or any page
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

      {/* Gallery Section with full background image */}
      <div
  className="w-full max-w-7xl mx-auto px-4 py-12 bg-cover bg-center relative"
  style={{
    backgroundImage: "url('/San 4.jpg')",
    backgroundBlendMode: "overlay", // blend overlay with image
    backgroundColor: "rgba(0,0,0,0.4)", // dark fade over image
    filter: "brightness(70%)", // fade the image
  }}
>
  <div className="relative z-10">
    <h2 className="text-3xl font-bold text-center text-white mb-8">
      Our Designs
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {galleryImages.map((img, index) => (
        <motion.div
          key={index}
          className="overflow-hidden rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <img
            src={img}
            alt={`Design ${index + 1}`}
            className="w-full h-64 object-cover"
          />
        </motion.div>
      ))}
    </div>
  </div>
</div>

    </div>
  );
};

export default Hero;
