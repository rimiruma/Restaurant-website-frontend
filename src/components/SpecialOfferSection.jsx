"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const SpecialOfferSection = () => {
  return (
    <div className="w-full bg-gradient-to-r from-orange-50 via-yellow-50 to-yellow-100 py-16">
      
      {/* Section Header */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-pulse">
          Chef's Special Picks 🍲
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-base md:text-lg">
          Discover our chef's handpicked special dishes of the week. Each dish is crafted with love and fresh ingredients to delight your taste buds.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4 md:px-0">
        
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 w-full relative h-80 sm:h-96 md:h-96 rounded-xl overflow-hidden shadow-xl"
        >
          <Image
            src="/Images/Chocolate-Dessert.png" // এখানে ইমেজ চেঞ্জ করতে পারো
            alt="Special Dish"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-xl"
          />
        </motion.div>

        {/* Right Side - Text + Button */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 w-full flex flex-col justify-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-orange-500">
            This Week's Special!
          </h3>
          <p className="text-gray-700 mb-6 text-base md:text-lg">
            Treat yourself with our most popular dishes selected by our chef. Freshly made with premium ingredients to satisfy your cravings.
          </p>
          <button className="bg-orange-500 btn text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-orange-600 transition-colors duration-300 w-fit px-20">
            Explore Now
          </button>
        </motion.div>

      </div>
    </div>
  );
};

export default SpecialOfferSection;
