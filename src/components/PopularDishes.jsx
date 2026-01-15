"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const dishes = [
  {
    id: 1,
    name: "Grilled Chicken",
    price: "$12.99",
    image: "/Images/GrilledChicken.png",
    desc: "Juicy grilled chicken with herbs and spices, served hot.",
  },
  {
    id: 2,
    name: "Beef Burger",
    price: "$9.99",
    image: "/Images/Beef Burger.png",
    desc: "Classic beef burger with cheese, lettuce, and our special sauce.",
  },
  {
    id: 3,
    name: "Italian Pizza",
    price: "$14.50",
    image: "/Images/ItalianPizza.png",
    desc: "Freshly baked Italian pizza topped with mozzarella and basil.",
  },
  {
    id: 4,
    name: "Pasta Alfredo",
    price: "$11.75",
    image: "/Images/PastaAlfredo.png",
    desc: "Creamy Alfredo pasta with parmesan and garlic, a classic delight.",
  },
];

const PopularDishes = () => {
  return (
    <section
      className="
        relative w-full py-20 overflow-hidden
        bg-gradient-to-br
        from-[#fff7ed]
        via-[#fff1e6]
        to-[#ffe4cc]
      "
    >
      {/* Texture */}
      <div className="absolute inset-0 bg-[url('/Images/noise.png')] opacity-10 pointer-events-none" />

      {/* Header (centered, limited width) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative text-center mb-14 max-w-3xl mx-auto px-4"
      >
        <p className="text-orange-500 font-semibold tracking-widest uppercase">
          Popular Items
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold mt-3">
          Our Popular Dishes
        </h2>
        <p className="text-gray-600 mt-4">
          Discover our most loved dishes, crafted with fresh ingredients
          and authentic flavors.
        </p>
      </motion.div>

      {/* 🔥 FULL WIDTH GRID */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 px-5">
        {dishes.map((dish, index) => (
          <motion.div
            key={dish.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="
              bg-white overflow-hidden
              shadow-md hover:shadow-[0_20px_40px_rgba(255,140,0,0.25)]
              transition duration-300 group
            "
          >
            {/* Image */}
            <div className="relative h-60 xl:h-72 overflow-hidden">
              <Image
                src={dish.image}
                alt={dish.name}
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-gray-900">
                {dish.name}
              </h3>

              <p className="text-orange-500 font-semibold mt-2 text-lg">
                {dish.price}
              </p>

              {/* ✅ New Description */}
              <p className="text-gray-500 text-sm mt-2">
                {dish.desc}
              </p>

              <button
                className="
                  btn w-full mt-5
                  bg-orange-600 hover:bg-orange-700
                  text-white border-none
                  px-6
                "
              >
                Order Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PopularDishes;
