import React from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">Contact Us</h1>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <FiPhone className="text-blue-500 text-xl" />
            <div>
              <h2 className="font-semibold">Phone Number:</h2>
              <p className="text-gray-700">0805 310 8889</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FiMail className="text-green-500 text-xl" />
            <div>
              <h2 className="font-semibold">Email:</h2>
              <p className="text-gray-700">motrustf7@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FiMapPin className="text-red-500 text-xl" />
            <div>
              <h2 className="font-semibold">Address:</h2>
              <p className="text-gray-700">77, Akanro Street, Ilasa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
