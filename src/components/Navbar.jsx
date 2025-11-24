import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Search } from "lucide-react";

import {
  Sparkles,
  Users,
  Diamond,
  Camera,
  Feather,
  Crown,
  Heart,
  Baby,
} from "lucide-react";

const Navbar = ({ products = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [profileDropdown, setProfileDropdown] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // GET LOGIN STATE
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const user = JSON.parse(localStorage.getItem("user")) || {};

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    window.location.reload();
  };

  const location = useLocation();

  // -------------------------
  // WEDDING SUBCATEGORIES
  // -------------------------
  const weddingCategories = [
    { name: "Bridal Train", path: "/wedding-dress/bridal-train", icon: Users },
    { name: "Luxury Wedding Gowns", path: "/wedding-dress/luxury-gowns", icon: Crown },
    { name: "Reception Dresses", path: "/wedding-dress/reception-dresses", icon: Sparkles },
    { name: "Pre-Wedding Shoot Dresses", path: "/wedding-dress/pre-wedding", icon: Camera },
    { name: "Veils & Accessories", path: "/wedding-dress/veils", icon: Feather },
    { name: "Bridesmaids Dresses", path: "/wedding-dress/bridesmaids", icon: Heart },
    { name: "Engagement / Traditional Wear", path: "/wedding-dress/engagement", icon: Diamond },
    { name: "Maternity Bridal Gowns", path: "/wedding-dress/maternity", icon: Baby },
  ];

  // -------------------------
  // MAIN NAV LINKS
  // -------------------------
  const links = [
    { name: "Home", path: "/" },
    {
      name: "Aso-Ebi",
      path: "/aso-ebi-bridals",
      subLinks: [{ name: "Ankara", path: "/ankara", icon: Sparkles }],
    },
    {
      name: "Corporate Wear",
      path: "/corporate-wear",
      subLinks: [
        { name: "Jumpsuits", path: "/jumpsuit", icon: Users },
        { name: "Office Wear", path: "/corporate-wear/office-wear", icon: Diamond },
      ],
    },
    {
      name: "Wedding Dresses",
      path: "/wedding-dress",
      subLinks: weddingCategories,
    },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  // FILTER SEARCH RESULTS
  const filteredResults = products.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex justify-between h-16 items-center">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/Untitled_design-removebg-preview.png"
              alt="Logo"
              className="h-14 w-auto"
            />
          </Link>

          {/* SEARCH BAR */}
          <div className="hidden md:flex items-center relative">
            <input
              type="text"
              placeholder="Search..."
              className="border px-3 py-1 rounded-full text-sm w-36 focus:w-52 transition-all duration-300 outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search size={16} className="absolute right-3 text-gray-500" />

            {searchQuery && (
              <div className="absolute top-10 left-0 bg-white w-52 shadow-md border rounded-md z-50">
                {filteredResults.length ? (
                  filteredResults.map((item) => (
                    <div
                      key={item.id}
                      className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                    >
                      {item.name}
                    </div>
                  ))
                ) : (
                  <p className="px-3 py-2 text-gray-500 text-sm">No results found</p>
                )}
              </div>
            )}
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex flex-1 justify-center space-x-6 items-center">
            {links.map((link) => (
              <Link key={link.name} to={link.path} className="hover:text-blue-500">
                {link.name}
              </Link>
            ))}
          </div>

          {/* RIGHT SIDE — LOGIN / SIGNUP OR PROFILE */}
          <div className="hidden md:flex items-center space-x-4">

            {!isLoggedIn ? (
              <>
                <Link
                  to="/login"
                  className="px-4 py-1 border rounded-full text-sm hover:bg-gray-100"
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  className="px-4 py-1 bg-blue-600 text-white rounded-full text-sm hover:bg-blue-700"
                >
                  Signup
                </Link>
              </>
            ) : (
              <div className="relative">
                {/* Profile Avatar */}
                <img
                  src={user.avatar || "/default-avatar.png"}
                  alt="profile"
                  className="w-10 h-10 rounded-full border cursor-pointer"
                  onClick={() => setProfileDropdown(!profileDropdown)}
                />

                {/* Dropdown */}
                {profileDropdown && (
                  <div className="absolute right-0 mt-2 bg-white shadow-md border rounded-md w-40 py-2">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Profile
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* MOBILE TOGGLE */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-3 pb-4">

          {!isLoggedIn ? (
            <>
              <Link to="/login" className="block py-2">Login</Link>
              <Link to="/signup" className="block py-2">Signup</Link>
            </>
          ) : (
            <>
              <Link to="/profile" className="block py-2">Profile</Link>
              <button onClick={handleLogout} className="block py-2 text-red-600">
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
