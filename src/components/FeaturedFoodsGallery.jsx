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
    <div className="py-16 bg-yellow-50 w-[1200px]">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-orange-600">
          Our Delicious Menu 🍽️
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto text-base md:text-lg px-2">
          Explore our wide range of mouth-watering dishes crafted with love 
          and fresh ingredients. Something special for everyone!
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {featuredDishes.map((dish, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <div className="relative w-full h-60 sm:h-72 md:h-80">
              <Image
                src={dish.image}
                alt={dish.name}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            {/* <p className="text-center text-base md:text-lg font-semibold p-3 text-gray-800">
              {dish.name}
            </p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedFoodsGallery;
