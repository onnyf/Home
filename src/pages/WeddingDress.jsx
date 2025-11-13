import React, { useState } from "react";
import { motion } from "framer-motion";

const dresses = [
  {
    id: 1,
    name: "Elegant Lace Gown",
    image: "/MF7 5.jpg",
    price: "$450",
    description:
      "A classic lace wedding gown with a fitted bodice and flowing skirt, perfect for a timeless bridal look.",
  },
  {
    id: 2,
    name: "Royal Satin Dress",
    image: "/MF7 6.jpg",
    price: "$520",
    description:
      "A luxurious satin wedding dress featuring an off-shoulder neckline and elegant train for a royal feel.",
  },
  {
    id: 3,
    name: "Boho Chic Dress",
    image: "/wedding3.jpg",
    price: "$390",
    description:
      "Lightweight and free-spirited bohemian-style dress with floral lace and open back design.",
  },
  {
    id: 4,
    name: "Mermaid Silhouette",
    image: "/wedding4.jpg",
    price: "$480",
    description:
      "Form-fitting mermaid gown that highlights the bride’s figure with sparkling details and soft tulle.",
  },
  {
    id: 5,
    name: "Princess Ball Gown",
    image: "/wedding5.jpg",
    price: "$600",
    description:
      "An extravagant ball gown with layered tulle skirt and crystal-embellished bodice — made for a fairytale wedding.",
  },
];

const WeddingDress = () => {
  const [selectedDress, setSelectedDress] = useState(null);

  return (
    <div className="py-16 px-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Our Wedding Dresses
      </h1>

      {/* Dresses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {dresses.map((dress) => (
          <motion.div
            key={dress.id}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer border border-gray-200 transition-transform duration-300"
            onClick={() => setSelectedDress(dress)}
          >
            <div className="w-full h-96 flex items-center justify-center bg-gray-100">
              <img
                src={dress.image}
                alt={dress.name}
                className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-5 text-center">
              <h2 className="text-lg font-semibold text-gray-800">
                {dress.name}
              </h2>
              <p className="text-pink-600 font-bold mt-2">{dress.price}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedDress && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl shadow-xl max-w-lg w-full relative"
          >
            <button
              onClick={() => setSelectedDress(null)}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-xl"
            >
              ✕
            </button>

            <div className="w-full h-96 flex items-center justify-center bg-gray-50 rounded-t-2xl">
              <img
                src={selectedDress.image}
                alt={selectedDress.name}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {selectedDress.name}
              </h2>
              <p className="text-gray-600 mb-4">{selectedDress.description}</p>
              <p className="text-xl font-semibold text-pink-600">
                {selectedDress.price}
              </p>
              <button className="mt-4 bg-pink-600 text-white px-5 py-2 rounded-lg hover:bg-pink-500 transition">
                Add to Cart
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default WeddingDress;
