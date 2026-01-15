"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const specials = [
  {
    id: 1,
    name: "Salmon Teriyaki",
    desc: "Grilled salmon glazed with our special teriyaki sauce.",
    price: "$18.99",
    image: "/Images/SalmonTeriyaki.png",
  },
  {
    id: 2,
    name: "Lobster Roll",
    desc: "Fresh lobster with garlic butter, served on a toasted bun.",
    price: "$24.50",
    image: "/Images/LobsterRoll.png",
  },
  {
    id: 3,
    name: "Veggie Delight Bowl",
    desc: "A healthy bowl packed with fresh veggies and grains.",
    price: "$12.75",
    image: "/Images/VeggieBowl.png",
  },
];

const ChefSpecials = () => {
  return (
    <section
      className="
        relative w-full py-20
        bg-gradient-to-r from-[#fff9f0] via-[#fff2e5] to-[#ffe6cc]
        overflow-hidden
      "
    >
      {/* Texture overlay */}
      <div className="absolute inset-0 bg-[url('/Images/noise.png')] opacity-10 pointer-events-none" />

      <div className="relative w-full px-4 sm:px-6 lg:px-16 xl:px-24">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14 max-w-3xl mx-auto"
        >
          <p className="text-orange-500 font-semibold tracking-widest uppercase">
            Chef’s Special
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-3 text-gray-900">
            Featured Dishes
          </h2>
          <p className="text-gray-600 mt-4">
            Hand-picked by our chefs, these dishes are sure to delight your taste buds.
          </p>
        </motion.div>

        {/* Specials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          {specials.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="
                bg-white rounded-2xl overflow-hidden shadow-md
                hover:shadow-[0_20px_40px_rgba(255,140,0,0.25)]
                transition duration-300 group
              "
            >
              {/* Image */}
              <div className="relative h-60 xl:h-64 overflow-hidden">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900">{dish.name}</h3>
                <p className="text-gray-500 text-sm mt-2">{dish.desc}</p>
                <p className="text-orange-500 font-semibold mt-2 text-lg">{dish.price}</p>
                <button
                  className="
                    btn btn-sm mt-5
                    bg-orange-500 hover:bg-orange-600
                    text-white border-none px-6
                  "
                >
                  Order Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChefSpecials;
