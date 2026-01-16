"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const AllItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/menu"); // No limit → fetch all
        const data = await res.json();
        setItems(data);
      } catch (error) {
        console.error("Failed to fetch all menu items:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="max-w-7xl mx-auto py-10 px-4 bg-green-50 rounded-lg">
      <h1 className="text-3xl font-bold mb-8 text-green-700 text-center">
        All Menu Items
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div
            key={item._id}
            className="bg-white border rounded-lg p-4 shadow hover:shadow-lg transition flex flex-col"
          >
            <div className="w-full h-48 relative mb-4">
              <Image
                src={item.image}
                alt={item.name}
                fill
                style={{ objectFit: "cover" }}
                className="rounded"
              />
            </div>
            <h2 className="font-semibold text-lg">{item.name}</h2>
            <p className="text-sm text-gray-600 mt-2 flex-grow">
              {item.description.slice(0, 80)}...
            </p>
            <p className="font-bold mt-2 mb-4">${item.price}</p>
            <Link href={`/menu/${item._id}`}>
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition w-full cursor-pointer">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllItems;
