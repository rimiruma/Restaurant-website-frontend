"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const AddMenuPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/menu", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Menu added successfully!");
        setFormData({
          name: "",
          image: "",
          price: "",
          description: "",
        });
      } else {
        setMessage(data.message || "❌ Failed to add menu");
      }
    } catch {
      setMessage("❌ Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Animated Form */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-full max-w-lg bg-orange-50/90 backdrop-blur-md rounded-2xl shadow-2xl p-8"
      >
        <h1 className="text-3xl font-bold text-center text-orange-500 mb-6">
          Add New Menu 🍽️
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="text"
            name="name"
            placeholder="Menu Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#2F6F4E]"
          />

          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#2F6F4E]"
          />

          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#2F6F4E]"
          />

          <motion.textarea
            whileFocus={{ scale: 1.02 }}
            name="description"
            placeholder="Menu Description"
            rows={4}
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#2F6F4E]"
          />

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={loading}
            className="w-full bg-orange-600 text-white py-2 rounded-md hover:bg-orange-800 cursor-pointer transition"
          >
            {loading ? "Adding..." : "Add Menu"}
          </motion.button>
        </form>

        {message && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-4 text-sm font-medium text-gray-700"
          >
            {message}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
};

export default AddMenuPage;
