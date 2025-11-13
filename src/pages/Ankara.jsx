import React, { useState } from "react";

const ankaraDesigns = [
  { id: 1, name: "Design 1", image: "/ankara1.jpg" },
  { id: 2, name: "Design 2", image: "/ankara2.jpg" },
  { id: 3, name: "Design 3", image: "/ankara3.jpg" },
  { id: 4, name: "Design 4", image: "/ankara4.jpg" },
  { id: 5, name: "Design 5", image: "/ankara5.jpg" },
  { id: 6, name: "Design 6", image: "/ankara6.jpg" },
];

const Ankara = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Ankara Designs</h1>

      {/* Grid of designs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {ankaraDesigns.map((design) => (
          <div key={design.id} className="cursor-pointer">
            <img
              src={design.image}
              alt={design.name}
              className="w-full h-64 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              onClick={() => setSelected(design)}
            />
            <p className="text-center mt-2 font-medium">{design.name}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={() => setSelected(null)}
        >
          <div className="bg-white p-4 rounded-lg max-w-lg w-full relative">
            <img
              src={selected.image}
              alt={selected.name}
              className="w-full h-auto rounded"
            />
            <p className="text-center mt-2 font-semibold">{selected.name}</p>
            <button
              className="absolute top-2 right-2 text-gray-700 font-bold text-xl"
              onClick={() => setSelected(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Ankara;
