import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-700 text-lg">No user found. Please login.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">

        <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
          Profile
        </h2>

        <div className="flex flex-col items-center">
          <img
            src="/profile.png"
            alt="Profile"
            className="w-24 h-24 rounded-full mb-4 border"
          />

          <p className="text-gray-700 text-lg font-semibold">
            {user.name || "User"}
          </p>

          <p className="text-gray-600">{user.email}</p>
        </div>

        <button
          onClick={() => navigate("/logout")}
          className="mt-6 w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
