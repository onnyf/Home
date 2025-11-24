import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ChatButton from "./ChatButton";

const Layout = ({ children, products }) => {
  return (
    <div className="relative">
      <Navbar products={products} />

      <main className="min-h-screen">{children}</main>

      <Footer />

      <ChatButton />
    </div>
  );
};

export default Layout;
