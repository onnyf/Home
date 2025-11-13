import React, { useState } from "react";
import { FaInstagram, FaWhatsapp, FaXTwitter } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const MAILCHIMP_URL =
    "https://xxxxxxx.usX.list-manage.com/subscribe/post?u=xxxx&id=xxxx"; // <-- Replace with your Mailchimp action URL

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setStatus("Please enter a valid email.");
      return;
    }

    // Mailchimp form submission via GET request
    const params = new URLSearchParams({
      EMAIL: email,
    });

    try {
      const response = await fetch(`${MAILCHIMP_URL}&${params.toString()}`, {
        method: "POST",
        mode: "no-cors",
      });
      setStatus("Thank you for subscribing!");
      setEmail("");
    } catch (error) {
      setStatus("There was an error. Please try again.");
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Brand Info */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl font-bold">Motrust Fashion</h2>
          <p className="text-gray-400">77, Akanro Street, Ilasa, Mushin Lagos</p>
          <p className="text-gray-400">Email: motrustf7@gmail.com</p>
        </div>

        {/* Newsletter */}
        <div className="mb-6 md:mb-0 text-center">
          <h3 className="font-semibold mb-2">Subscribe to our Newsletter</h3>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-2 justify-center items-center"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 rounded-l-md text-gray-900 outline-none w-64 sm:w-auto"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-r-md font-semibold transition duration-300"
            >
              Subscribe
            </button>
          </form>
          {status && <p className="text-green-400 mt-2 text-sm">{status}</p>}
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6 text-2xl">
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/08053108889"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition-colors duration-300"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            <FaXTwitter />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Motrust Fashion. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
