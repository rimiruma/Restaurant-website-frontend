"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const AboutUsSection = () => {
  return (
    <div className="w-full bg-gradient-to-b from-yellow-50 to-yellow-100 py-20 px-4 md:px-8 lg:px-16">
      
      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-pulse"
        >
          About Our Restaurant 🍽️
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-gray-700 max-w-3xl mx-auto text-base md:text-lg"
        >
          At our restaurant, we serve delicious dishes made with love, fresh ingredients, and traditional recipes. Our team of skilled chefs ensures every meal is a delightful experience for your taste buds.
        </motion.p>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 w-full relative h-80 sm:h-96 md:h-96 rounded-xl overflow-hidden shadow-2xl"
        >
          <Image
            src="/Images/banner.png" // এখানে রেস্টুরেন্টের ছবি বসাতে পারো
            alt="Restaurant Interior"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-xl"
          />
        </motion.div>

        {/* Right Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 w-full flex flex-col justify-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-orange-500">
            Our Story
          </h3>
          <p className="text-gray-700 mb-6 text-base md:text-lg">
            Founded with passion and dedication, we focus on creating a welcoming atmosphere where families and friends can enjoy authentic flavors. From our signature dishes to seasonal specials, every meal is crafted to perfection.
          </p>
          <ul className="text-gray-700 list-disc list-inside mb-6 space-y-2">
            <li>Fresh ingredients sourced daily</li>
            <li>Signature recipes crafted by expert chefs</li>
            <li>Cozy and welcoming atmosphere</li>
          </ul>
          <button className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-orange-600 transition-colors duration-300 w-fit">
            Learn More
          </button>
        </motion.div>

      </div>
    </div>
  );
};

export default AboutUsSection;
