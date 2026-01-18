"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { motion } from "framer-motion";

// Image listlist
const images = [
  "/Images/cheese-burger-2.png",
  "/Images/grilled-chicken.png",
  "/Images/beef-burger.png",
  "/Images/Italian-Pizza.png",
  "/Images/Chocolate-Dessert.png",
  "/Images/French-Fries.png",
  "/Images/Fresh-Salad-Bow-l.png",
  "/Images/Italian Pizza1.png",
];

const settings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
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

      {/* 🔹 Slick dots mobile fix */}
      {/* <style jsx global>{`
        .slick-dots {
          bottom: -35px;
        }
      `}</style> */}
    </div>
  );
};

export default FeaturedFoods;
