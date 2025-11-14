import React from "react";
import { FaInstagram, FaWhatsapp, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left space-y-6 md:space-y-0">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold">Motrust Fashion</h2>
          <p className="text-gray-400 mt-2">77, Akanro Street, Ilasa, Mushin Lagos</p>
          <p className="text-gray-400 mt-1">
            Email: <a href="mailto:motrustf7@gmail.com" className="hover:underline">motrustf7@gmail.com</a>
          </p>
          <p className="text-gray-400 mt-1">
            Phone: <a href="tel:+2348053108889" className="hover:underline">+234 805 310 8889</a>
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <div className="flex flex-col space-y-2 text-gray-400">
            <Link to="/about" className="hover:text-white transition">About Us</Link>
            <Link to="/contact" className="hover:text-white transition">Contact</Link>
            <Link to="/services" className="hover:text-white transition">Services</Link>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col items-center md:items-end space-y-3">
          <p className="text-gray-300 font-medium">Follow Us</p>
          <div className="flex space-x-6 text-2xl">
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/2348053108889?text=Hello%20Motrust%20Fashion"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-8 border-t border-gray-700 w-full"></div>

      {/* Copyright */}
      <div className="mt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Motrust Fashion. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
