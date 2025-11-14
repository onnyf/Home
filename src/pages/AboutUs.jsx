import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section
      className="relative bg-cover bg-center min-h-screen flex items-center justify-center px-4"
      style={{ backgroundImage: "url('/San 1.jpg')" }} // Replace with your preferred background
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl text-center text-white py-16">
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-bold mb-6"
        >
          About Motrust Fashion
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg sm:text-xl leading-relaxed mb-4"
        >
          Motrust Fashion is a leading fashion brand dedicated to creating elegant,
          timeless, and modern designs for every occasion. Our mission is to make
          every client feel confident and stylish in our custom-made pieces — from
          Ankara styles to bridal gowns and luxury jumpsuits.
        </motion.p>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg sm:text-xl leading-relaxed"
        >
          With a passion for detail and a love for African-inspired fashion, we
          blend creativity with quality to deliver outstanding pieces tailored just
          for you. Visit us today and experience the Motrust difference.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutUs;
