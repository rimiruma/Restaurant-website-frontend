"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { motion } from "framer-motion";

// 🔹 শুধু এখানে ইমেজ লিস্ট থাকবে
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
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
};

const FeaturedFoods = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="py-10 bg-white">
      {/* 🔹 Animated Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-center text-3xl md:text-4xl font-extrabold mb-8 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent"
      >
        Our Popular Dishes 🍴
      </motion.h1>

      <div className="max-w-6xl mx-auto px-4">
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index}>
              <div className="relative h-80 w-full">
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
