import React from 'react';
import { motion } from 'framer-motion';

// Sample data for 6 Aso-Ebi styles
const asoEbiData = [
  {
    id: 1,
    image: './MO 5.jpg',
    name: 'Aso-Ebi Style 1',
    description: 'Elegant lace with gold accents',
    price: '₦65,000'
  },
  {
    id: 2,
    image: './MO 7.jpg',
    name: 'Aso-Ebi Style 2',
    description: 'Silk fabric with embroidery',
    price: '₦90,000'
  },
  {
    id: 3,
    image: './MO 6.jpg',
    name: 'Aso-Ebi Style 3',
    description: 'Modern Ankara design',
    price: '₦68,000'
  },
  {
    id: 4,
    image: 'https://example.com/aso4.jpg',
    name: 'Aso-Ebi Style 4',
    description: 'Beaded lace with unique pattern',
    price: '₦375,000'
  },
  {
    id: 5,
    image: 'https://example.com/aso5.jpg',
    name: 'Aso-Ebi Style 5',
    description: 'Classic chiffon with ruffles',
    price: '₦27,000'
  },
  {
    id: 6,
    image: 'https://example.com/aso6.jpg',
    name: 'Aso-Ebi Style 6',
    description: 'Sequin detailing for glam',
    price: '₦40,000'
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 }
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const AsoEbiBridals = () => {
  return (
    <div className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Aso-Ebi Bridals</h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {asoEbiData.map((item) => (
          <motion.div
            key={item.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          >
            <img src={item.image} alt={item.name} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-gray-600">{item.description}</p>
              <p className="text-indigo-600 font-bold mt-2">{item.price}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AsoEbiBridals;
