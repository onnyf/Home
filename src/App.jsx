import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Ankara from "./pages/Ankara";
import AsoEbiBridals from "./pages/AsoEbiBridals";
import Jumpsuit from "./pages/Jumpsuit";
import WeddingDress from "./pages/WeddingDress";

// Auth Pages
import Login from "./authentications/Login";
import Signup from "./authentications/Signup";

const App = () => {
  // Sample products for search
  const products = [
    { id: 1, name: "Ankara Dress" },
    { id: 2, name: "Wedding Gown" },
    { id: 3, name: "Corporate Jumpsuit" },
    { id: 4, name: "Office Wear Set" },
  ];

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar products={products} />

        <main className="flex-grow mt-16">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/ankara" element={<Ankara />} />
            <Route path="/aso-ebi-bridals" element={<AsoEbiBridals />} />
            <Route path="/jumpsuit" element={<Jumpsuit />} />
            <Route path="/wedding-dress" element={<WeddingDress />} />
            <Route path="/contact" element={<Contact />} />

            {/* Auth Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
