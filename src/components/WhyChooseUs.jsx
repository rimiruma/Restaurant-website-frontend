"use client";

import { motion } from "framer-motion";
import { Utensils, Leaf, Clock } from "lucide-react";

const features = [
  {
    icon: <Utensils size={36} />,
    title: "Delicious Recipes",
    desc: "Crafted by expert chefs using authentic and time-tested recipes."
  },
  {
    icon: <Leaf size={36} />,
    title: "Fresh Ingredients",
    desc: "We use only farm-fresh and high-quality ingredients every day"
  },
  {
    icon: <Clock size={36} />,
    title: "Fast & Friendly Service",
    desc: "Enjoy quick service with a warm and welcoming atmosphere."
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            Why Choose <span className="text-orange-500">TasteBite</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            We serve more than just food — we serve an unforgettable dining experience.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md p-8 text-center
                         hover:shadow-xl hover:-translate-y-2 transition"
            >
              <div className="flex justify-center text-orange-500 mb-5">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
