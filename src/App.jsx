import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./pages/Contact";
import Ankara from "./pages/Ankara";
import AsoEbiBridals from "./pages/AsoEbiBridals";
import Jumpsuit from "./pages/Jumpsuit";
import WeddingDress from "./pages/WeddingDress";
import Login from "./authentications/Login"; // ✅ Added import
import Signup from "./authentications/Signup"; // ✅ Added import

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/services" element={<Services />} />
        <Route path="/ankara" element={<Ankara />} />
        <Route path="/aso-ebi-bridals" element={<AsoEbiBridals />} />
        <Route path="/jumpsuit" element={<Jumpsuit />} />
        <Route path="/wedding-dress" element={<WeddingDress />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} /> {/* ✅ Working now */}
        <Route path="/signup" element={<Signup />} /> {/* ✅ Working now */}
      </Routes>
    </Router>
  );
};

export default App;
