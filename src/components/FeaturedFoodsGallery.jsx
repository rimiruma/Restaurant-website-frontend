"use client";

import Image from "next/image";

const featuredDishes = [
  { name: "Cheese Burger", image: "/Images/cheese-burger-2.png" },
  { name: "Italian Pizza", image: "/Images/Italian-Pizza.png" },
  { name: "Grilled Chicken", image: "/Images/grilled-chicken.png" },
  { name: "Chicken Sandwich", image: "/Images/chicken-sandwich.png" },
  { name: "French Fries", image: "/Images/french-fries.png" },
  { name: "Fresh Salad Bowl", image: "/Images/Fresh-Salad-Bow-l.png" },
  { name: "Pasta Alfredo", image: "/Images/Pasta-Alfredo.png" },
  { name: "Chocolate Cake", image: "/Images/Chocolate-Dessert.png" },
];

const FeaturedFoodsGallery = () => {
  return (
    <div className="py-16 bg-yellow-50 w-full px-4 sm:px-6 lg:px-16">
      
      {/* Section Header */}
      <div className="text-center mb-12">
        <h1 className="
          text-3xl sm:text-4xl md:text-5xl
          font-extrabold mb-4
          bg-gradient-to-r from-orange-700 via-pink-500 to-purple-500
          bg-clip-text text-transparent
        ">
          Our Delicious Menu 🍽️
        </h1>

        <p className="text-gray-700 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2">
          Explore our wide range of mouth-watering dishes crafted with love and fresh ingredients. Something special for everyone!
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="
        grid gap-4
        grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
      ">
        {featuredDishes.map((dish, index) => (
          <div
            key={index}
            className="
              bg-white rounded-xl shadow-lg overflow-hidden
              transition-all duration-300
              hover:scale-105 hover:shadow-2xl
              relative group
            "
          >
            {/* Image */}
            <div className="relative w-full h-40 sm:h-44 md:h-48 lg:h-52">
              <Image
                src={dish.image}
                alt={dish.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Name Overlay */}
            <div className="
              absolute bottom-0 w-full
              bg-black/60
              opacity-0 group-hover:opacity-100
              transition-opacity duration-300
              p-3 text-center
            ">
              <p className="text-white font-semibold text-base md:text-lg">
                {dish.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedFoodsGallery;
