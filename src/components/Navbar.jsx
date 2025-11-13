import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const links = [
    { name: "Home", path: "/" },
    {
      name: "Services",
      path: "#",
      dropdown: [
        { name: "Ankara", path: "/ankara" },
        { name: "Aso-Ebi", path: "/aso-ebi-bridals" },
        { name: "Jumpsuits", path: "/jumpsuit" },
        { name: "Wedding Dresses", path: "/wedding-dress" },
      ],
    },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/Untitled_design-removebg-preview.png"
                alt="Motrust Logo"
                className="h-14 w-auto"
              />
              <span className="text-2xl font-bold text-gray-800">Motrust</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {links.map((link) =>
              link.dropdown ? (
                <div key={link.name} className="relative">
                  <button
                    onClick={toggleDropdown}
                    className={`flex items-center gap-1 ${
                      location.pathname.includes("ankara") ||
                      location.pathname.includes("aso-ebi") ||
                      location.pathname.includes("jumpsuit") ||
                      location.pathname.includes("wedding-dress")
                        ? "text-blue-600 font-semibold"
                        : "text-gray-700 hover:text-blue-500"
                    }`}
                  >
                    {link.name} <ChevronDown size={16} />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute mt-2 bg-white shadow-md rounded w-48 py-2">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          onClick={() => setDropdownOpen(false)}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`${
                    location.pathname === link.path
                      ? "text-blue-600 font-semibold"
                      : "text-gray-700 hover:text-blue-500"
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}

            {/* Auth Buttons */}
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="px-4 py-2 text-gray-700 border rounded hover:bg-gray-100"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Sign Up
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-2 pt-2 pb-3 space-y-1 shadow-md">
          {links.map((link) =>
            link.dropdown ? (
              <div key={link.name}>
                <button
                  onClick={toggleDropdown}
                  className="w-full text-left px-3 py-2 rounded-md text-gray-700 hover:text-blue-500 flex justify-between items-center"
                >
                  {link.name} <ChevronDown size={16} />
                </button>
                {dropdownOpen &&
                  link.dropdown.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => {
                        setIsOpen(false);
                        setDropdownOpen(false);
                      }}
                      className="block px-6 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                    >
                      {item.name}
                    </Link>
                  ))}
              </div>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-500"
              >
                {link.name}
              </Link>
            )
          )}

          {/* Mobile Auth Buttons */}
          <div className="mt-3 space-y-2 border-t pt-3">
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-3 py-2 border rounded text-gray-700 hover:bg-gray-100"
            >
              Login
            </Link>
            <Link
              to="/signup"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
