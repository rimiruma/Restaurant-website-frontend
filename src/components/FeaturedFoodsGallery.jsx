"use client";

import Image from "next/image";

const featuredDishes = [
  { name: "Cheese Burger", image: "/Images/cheese-burger-2.png" },
  { name: "Italian Pizza", image: "/Images/italian-pizza.png" },
  { name: "Grilled Chicken", image: "/Images/grilled-chicken.png" },
  { name: "Chicken Sandwich", image: "/Images/chicken-sandwich.png" },
  { name: "French Fries", image: "/Images/french-fries.png" },
  { name: "Fresh Salad Bowl", image: "/Images/Fresh-Salad-bow-l.png" },
  { name: "Pasta Alfredo", image: "/Images/Grilled-Chicken-1.png" },
  { name: "Chocolate Cake", image: "/Images/Pasta-Alfredo.png" },
];

const FeaturedFoodsGallery = () => {
  return (
    <div className="py-16 bg-yellow-50 w-full px-4 md:px-8 lg:px-16">
      {/* Section Header with gradient + animation */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-orange-700 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-pulse">
          Our Delicious Menu 🍽️
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto text-base md:text-lg px-2">
          Explore our wide range of mouth-watering dishes crafted with love and fresh ingredients. Something special for everyone!
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {featuredDishes.map((dish, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 hover:shadow-2xl transition-transform duration-300 relative group"
          >
            {/* Image */}
            <div className="relative w-full h-48 sm:h-48 md:h-52">
              <Image
                src={dish.image}
                alt={dish.name}
                fill
                style={{ objectFit: "cover" }}
                className="group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Name Overlay on hover */}
            <div className="absolute bottom-0 w-full bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-3 text-center">
              <p className="text-white font-semibold text-lg">{dish.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedFoodsGallery;
