import React from "react";

const BridalTrain = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        Bridal Train Collection
      </h1>

      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Explore our stunning bridal train selection tailored to make your big
        day unforgettable. Elegant, sophisticated, and beautifully crafted.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* SAMPLE IMAGES — Replace with real ones */}
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={`/bridal${i}.jpg`}
              alt={`Bridal Train ${i}`}
              className="w-full h-72 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">Bridal Look {i}</h2>
              <p className="text-sm text-gray-500 mt-1">Beautiful & elegant</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BridalTrain;
