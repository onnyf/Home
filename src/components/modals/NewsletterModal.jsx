// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const NewsletterModal = ({ mailchimpUrl }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [email, setEmail] = useState("");
//   const [status, setStatus] = useState("");

//   useEffect(() => {
//     const timer = setTimeout(() => setIsOpen(true), 2000);
//     return () => clearTimeout(timer);
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!email) {
//       setStatus("Please enter your email.");
//       return;
//     }

//     const params = new URLSearchParams({ EMAIL: email });
//     try {
//       await fetch(`${mailchimpUrl}&${params.toString()}`, {
//         method: "POST",
//         mode: "no-cors",
//       });
//       setStatus(`Thank you for subscribing, ${email}!`);
//       setEmail("");
//     } catch {
//       setStatus("There was an error. Please try again.");
//     }
//   };

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//         >
//           <motion.div
//             className="bg-white rounded-lg p-6 w-11/12 sm:w-96 relative text-center"
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             exit={{ scale: 0.8, opacity: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             <button
//               className="absolute top-2 right-2 text-gray-700 text-xl font-bold"
//               onClick={() => setIsOpen(false)}
//             >
//               &times;
//             </button>

//             <h2 className="text-2xl font-bold mb-4">Subscribe to Newsletter</h2>
//             <p className="text-gray-600 mb-4">Stay updated with our latest styles and collections.</p>

//             <form onSubmit={handleSubmit} className="flex flex-col gap-2">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="px-4 py-2 border rounded-md outline-none w-full"
//                 required
//               />
//               <button
//                 type="submit"
//                 className="bg-pink-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-pink-500 transition"
//               >
//                 Subscribe
//               </button>
//             </form>

//             {status && <p className="text-green-500 mt-2 text-sm">{status}</p>}
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default NewsletterModal;
