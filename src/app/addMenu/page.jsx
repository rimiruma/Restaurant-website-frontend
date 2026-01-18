"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const AddMenuPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: "",
    category: "Pizza", // Default category
    description: "",
  });

  const [loading, setLoading] = useState(false);

  const categories = ["Pizza", "Burger", "Pasta", "Salad", "Dessert", "Drinks", "Sushi", "Others"];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!formData.category) {
      toast.error("Please select a category");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/menu", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          price: parseFloat(formData.price),
        }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Menu added successfully! Redirecting...");
        setFormData({
          name: "",
          image: "",
          price: "",
          category: "Pizza",
          description: "",
        });

        setTimeout(() => {
          router.push("/menu");
          router.refresh();
        }, 1500);

      } else {
        toast.error(data.message || "Failed to add menu");
      }
    } catch {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        backgroundImage: "url('/Images/banner.png')", // Consistent with Login page
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
        className="relative w-full max-w-lg bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8"
      >
        <h1 className="text-3xl font-bold text-center text-orange-500 mb-6">
          Add New Menu 🍽️
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Menu Name
            </label>
            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="text"
              name="name"
              placeholder="e.g. Delicious Pizza"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Image URL
            </label>
            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="text"
              name="image"
              placeholder="https://example.com/image.jpg"
              value={formData.image}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Price ($)
              </label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="number"
                name="price"
                placeholder="0.00"
                value={formData.price}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Category
              </label>
              <motion.select
                whileFocus={{ scale: 1.01 }}
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition bg-white"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </motion.select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Description
            </label>
            <motion.textarea
              whileFocus={{ scale: 1.01 }}
              name="description"
              placeholder="Describe the dish..."
              rows={4}
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition resize-none"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? "Adding Item..." : "Add to Menu"}
          </motion.button>
        </form>

      </motion.div>
    </section>
  );
};

export default AddMenuPage;
