"use client";

import { motion } from "framer-motion";

const ContactUspage = () => {
  return (
    <div className="w-full relative py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-50 via-orange-50 to-yellow-50 animate-[gradientBG_15s_ease_infinite]"></div>

      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-pulse"
          >
            Get in Touch 📞
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-gray-700 max-w-3xl mx-auto text-base md:text-lg"
          >
            We would love to hear from you! Send us a message, make a reservation, or ask any questions about our dishes and services.
          </motion.p>
        </div>

        {/* Contact Form & Info */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
          
          {/* Left Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="md:w-1/2 w-full bg-white rounded-xl shadow-lg p-6 md:p-10"
          >
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300"
              ></textarea>
              <button
                type="submit"
                className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-orange-600 transition-colors duration-300 w-fit"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Right Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="md:w-1/2 w-full flex flex-col justify-center gap-6"
          >
            {[
              { icon: "📍", text: "123 Delicious Street, Food City, Country" },
              { icon: "📞", text: "+123 456 7890" },
              { icon: "✉️", text: "contact@restaurant.com" },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-4 cursor-pointer"
              >
                <span className="text-orange-500 text-2xl">{item.icon}</span>
                <p className="text-gray-700 text-lg">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Background Animation CSS */}
      <style jsx>{`
        @keyframes gradientBG {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-[gradientBG_15s_ease_infinite] {
          background-size: 200% 200%;
          animation: gradientBG 15s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default ContactUspage;
