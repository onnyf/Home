import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // REMOVE STORED USER
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");

    // redirect after 1 sec
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <p className="text-gray-700 font-medium text-lg">Logging out...</p>
    </div>
  );
};

export default Logout;
