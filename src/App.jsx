import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout Wrapper
import Layout from "./components/Layout";

// Pages
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Ankara from "./pages/Ankara";
import AsoEbiBridals from "./pages/AsoEbiBridals";
import Jumpsuit from "./pages/Jumpsuit";
import WeddingDress from "./pages/WeddingDress";
import Profile from "./pages/Profile";
import Logout from "./pages/Logout";

// NEW Bridal Train page
import BridalTrain from "./pages/BridalTrain";

// Auth Pages
import Login from "./authentications/Login";
import Signup from "./authentications/Signup";

const App = () => {
  const products = [
    { id: 1, name: "Ankara Dress" },
    { id: 2, name: "Wedding Gown" },
    { id: 3, name: "Corporate Jumpsuit" },
    { id: 4, name: "Office Wear Set" },
  ];

  return (
    <Router>
      {/* Layout wraps the whole site */}
      <Layout products={products}>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/ankara" element={<Ankara />} />
          <Route path="/aso-ebi-bridals" element={<AsoEbiBridals />} />
          <Route path="/jumpsuit" element={<Jumpsuit />} />
          <Route path="/wedding-dress" element={<WeddingDress />} />
          <Route path="/profile" element={<Profile />} />
<Route path="/logout" element={<Logout />} />

          {/* NEW Bridal Train Page */}
          <Route path="/wedding-dress/bridal-train" element={<BridalTrain />} />

          <Route path="/contact" element={<Contact />} />

          {/* Auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
