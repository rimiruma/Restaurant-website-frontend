"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import bannerImage from "../../public/Images/Chicken Pasta1.png"; // আপনার ইমেজ path

const FeatureSection = () => {
  return (
    <section
      className="
        relative w-full py-20
        bg-gradient-to-r from-[#fffaf5] via-[#fff2e8] to-[#ffe6d1]
        overflow-hidden
      "
    >
      {/* Texture overlay */}
      <div className="absolute inset-0 bg-[url('/Images/noise.png')] opacity-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">

        {/* 🔹 Section Header (H1 + Paragraph) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Taste the Difference
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            Explore our chef’s handpicked signature dishes, crafted with
            fresh ingredients and authentic flavors to delight your senses.
          </p>
        </motion.div>

        {/* 🔹 Main Content: Left Text + Right Image */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <p className="text-orange-500 font-semibold uppercase tracking-wide mb-2">
              Chef’s Recommendation
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Try Our Signature Dish Today
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              Experience the rich flavors and fresh ingredients our chefs craft
              specially for you. A perfect blend of taste and presentation.
            </p>
            <button className="btn bg-orange-500 hover:bg-orange-600 text-white px-6 py-3">
              Order Now
            </button>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 relative w-full h-80 sm:h-96 lg:h-112"
          >
            <Image
              src={bannerImage}
              alt="Signature Dish"
              fill
              className="object-cover rounded-3xl shadow-xl"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
