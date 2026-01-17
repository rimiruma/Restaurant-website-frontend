"use client";

import React, { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

const AllItems = () => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/menu");
        const data = await res.json();
        setItems(data);
      } catch (error) {
        console.error("Failed to fetch all menu items:", error);
      }
    };
    fetchData();
  }, []);

  // 🔍 Search + Sort logic
  const filteredItems = useMemo(() => {
    let data = [...items];

    // Search by name
    if (searchTerm) {
      data = data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort by price
    if (sortOrder === "low") {
      data.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "high") {
      data.sort((a, b) => b.price - a.price);
    }

    return data;
  }, [items, searchTerm, sortOrder]);

  return (
    <section className="max-w-7xl mx-auto py-10 px-4 bg-orange-50 rounded-lg">
      <h1 className="text-2xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-pulse text-center">
        All Menu Items
      </h1>

      {/* 🔎 Search & Sort Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        {/* Search Box */}
        <input
          type="text"
          placeholder="Search menu by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#2F6F4E]"
        />

        {/* Sort Box */}
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="w-full md:w-1/4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#2F6F4E]"
        >
          <option value="">Sort by Price</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </select>
      </div>

      {/* 🧾 Menu Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item._id}
            className="bg-white border rounded-xl p-4 shadow hover:shadow-xl transition flex flex-col"
          >
            <div className="w-full h-48 relative mb-4">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="rounded-lg object-cover"
              />
            </div>

            <h2 className="font-semibold text-lg text-gray-800">
              {item.name}
            </h2>

            <p className="text-sm text-gray-600 mt-2 flex-grow">
              {item.description.slice(0, 80)}...
            </p>

            <p className="font-bold mt-2 mb-4 text-[#2F6F4E]">
              ${item.price}
            </p>

            <Link href={`/menu/${item._id}`}>
              <button className="bg-orange-600 btn text-white px-4 py-2 rounded-md hover:bg-orange-800 transition w-full">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredItems.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No menu items found 😔
        </p>
      )}
    </section>
  );
};

export default AllItems;
