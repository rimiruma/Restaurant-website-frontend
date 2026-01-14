

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import bannerImg from "../../../public/Images/banner.png"; // তোমার banner image

const Banner = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      
      {/* 🖼️ Background Image */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src={bannerImg}
          alt="Restaurant Banner"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* 🌑 Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* 🍔 Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div className="max-w-3xl text-center text-white">

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight"
          >
            Delicious Food <br />
            <span className="text-orange-400">Made With Love</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-5 text-base md:text-lg text-gray-200"
          >
            Experience the taste of fresh ingredients, authentic recipes,
            and unforgettable flavors at TasteBite.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/menu"
              className="btn bg-orange-500 hover:bg-orange-600 text-white border-none px-8"
            >
              View Menu
            </Link>

            <Link
              href="/contact"
              className="btn btn-outline border-white text-white hover:bg-white hover:text-black px-8"
            >
              Book a Table
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
