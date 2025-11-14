import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, ChevronDown } from "lucide-react";

const Navbar = ({ products = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({ asoEbi: false, corporate: false });

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const location = useLocation();
  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { name: "Home", path: "/" },
    {
      name: "Aso-Ebi",
      path: "/aso-ebi-bridals",
      subLinks: [{ name: "Ankara", path: "/ankara" }],
    },
    {
      name: "Corporate Wear",
      path: "/corporate-wear",
      subLinks: [
        { name: "Jumpsuits", path: "/corporate-wear/jumpsuits" },
        { name: "Office Wear", path: "/corporate-wear/office-wear" },
      ],
    },
    { name: "Wedding Dresses", path: "/wedding-dress" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.length > 0) {
      const filtered = products.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  };

  const highlightMatch = (name) => {
    const regex = new RegExp(`(${searchQuery})`, "gi");
    return name.split(regex).map((part, idx) =>
      regex.test(part) ? (
        <span key={idx} className="font-bold text-blue-600">
          {part}
        </span>
      ) : (
        <span key={idx}>{part}</span>
      )
    );
  };

  // Form handlers
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can replace with API call to send email or store request
    console.log("Consultation Request Submitted:", formData);
    alert("Your consultation request has been submitted!");
    setFormData({ name: "", email: "", phone: "", message: "" });
    setShowModal(false);
  };

  return (
    <>
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
            <div className="hidden md:flex flex-1 justify-center space-x-6 items-center">
              {links.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() =>
                    link.subLinks &&
                    setDropdownOpen((prev) => ({
                      ...prev,
                      [link.name === "Aso-Ebi" ? "asoEbi" : "corporate"]: true,
                    }))
                  }
                  onMouseLeave={() =>
                    link.subLinks &&
                    setDropdownOpen((prev) => ({
                      ...prev,
                      [link.name === "Aso-Ebi" ? "asoEbi" : "corporate"]: false,
                    }))
                  }
                >
                  <Link
                    to={link.path}
                    className={`${
                      location.pathname === link.path
                        ? "text-blue-600 font-semibold"
                        : "text-gray-700 hover:text-blue-500"
                    } flex items-center gap-1`}
                  >
                    {link.name} {link.subLinks && <ChevronDown size={14} />}
                  </Link>

                  {link.subLinks && (
                    <div
                      className={`absolute top-full left-0 bg-white border rounded shadow-md py-2 w-44 z-50 transition-all duration-200 ${
                        dropdownOpen[link.name === "Aso-Ebi" ? "asoEbi" : "corporate"]
                          ? "opacity-100 visible"
                          : "opacity-0 invisible"
                      }`}
                    >
                      {link.subLinks.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop Search + Auth + Consultation */}
            <div className="hidden md:flex items-center space-x-4 relative">
              {/* Search Input */}
              <div className="relative w-28 sm:w-32 md:w-48 lg:w-64">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={handleSearch}
                  className="w-full border rounded-lg pl-3 pr-9 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <Search
                  size={18}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
                />
                {filteredProducts.length > 0 && (
                  <div className="absolute top-full left-0 w-full bg-white border mt-1 rounded shadow-lg max-h-64 overflow-y-auto z-50">
                    {filteredProducts.map((product) => (
                      <Link
                        key={product.id}
                        to={`/product/${product.id}`}
                        className="block px-4 py-2 hover:bg-gray-100"
                        onClick={() => setSearchQuery("")}
                      >
                        {highlightMatch(product.name)}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

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
              <button
                onClick={() => setShowModal(true)}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 flex items-center gap-1"
              >
                Book a Consultation <ChevronDown size={16} />
              </button>
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
            {links.map((link) => (
              <div key={link.name} className="relative">
                <button
                  onClick={() => {
                    if (link.subLinks) {
                      setDropdownOpen((prev) => ({
                        ...prev,
                        [link.name === "Aso-Ebi" ? "asoEbi" : "corporate"]:
                          !prev[link.name === "Aso-Ebi" ? "asoEbi" : "corporate"],
                      }));
                    } else {
                      setIsOpen(false);
                    }
                  }}
                  className="w-full flex justify-between px-3 py-2 rounded-md text-gray-700 hover:text-blue-500"
                >
                  {link.name} {link.subLinks && <ChevronDown size={14} />}
                </button>

                {link.subLinks &&
                  dropdownOpen[link.name === "Aso-Ebi" ? "asoEBi" : "corporate"] && (
                    <div className="ml-4 mt-1 space-y-1">
                      {link.subLinks.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          onClick={() => setIsOpen(false)}
                          className="block px-3 py-2 text-gray-600 hover:text-blue-500 rounded"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
              </div>
            ))}

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
              <button
                onClick={() => {
                  setShowModal(true);
                  setIsOpen(false);
                }}
                className="block w-full text-center px-3 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Book a Consultation
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Consultation Modal with Form */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              onClick={() => setShowModal(false)}
            >
              ✖
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">
              Book a Consultation
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <textarea
                name="message"
                placeholder="Message / Inquiry"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
