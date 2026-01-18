"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { motion } from "framer-motion";

// Image listlist
const images = [
  "https://res.cloudinary.com/djurp0vai/image/upload/v1768587797/Chocolate_Cake_gblkzk.jpg",
  "https://res.cloudinary.com/djurp0vai/image/upload/v1768586898/Margherita_Pizza10_hrzow3.jpg",
  "https://res.cloudinary.com/djurp0vai/image/upload/v1768586700/Chocolate_Brownie3_z20w6v.jpg",
  "https://res.cloudinary.com/djurp0vai/image/upload/v1768586601/Chicken_Caesar_Salad12_gslsiq.jpg",
  "https://res.cloudinary.com/djurp0vai/image/upload/v1768586700/Chocolate_Brownie3_z20w6v.jpg",
  "https://res.cloudinary.com/djurp0vai/image/upload/v1768589071/Beverage_q0pu5t.jpg",
  "https://res.cloudinary.com/djurp0vai/image/upload/v1768588953/Lemonade_hxzfnn.jpg",
  "https://res.cloudinary.com/djurp0vai/image/upload/v1768588148/Strawberry_Milkshake_aakjrk.jpg",
];

const settings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
  adaptiveHeight: true, // ⭐ responsive feel better
};

const FeaturedFoods = () => {
  return (
    <div className="py-10 bg-white">

      {/* 🔹 Animated Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="
          text-center font-extrabold mb-8
          text-2xl sm:text-3xl md:text-4xl
          bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500
          bg-clip-text text-transparent
        "
      >
        Our Popular Dishes 🍴
      </motion.h1>

      <div className="max-w-6xl mx-auto px-4">
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index}>
              <div
                className="
                  relative w-full
                  h-56 sm:h-64 md:h-72 lg:h-80
                "
              >
                <Image
                  src={src}
                  alt={`Dish ${index + 1}`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FeaturedFoods;
