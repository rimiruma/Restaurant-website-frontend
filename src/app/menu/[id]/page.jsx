"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

export default function MenuDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const res = await fetch(`/api/menu/${id}`);
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || "Something went wrong");
        }

        setItem(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchItem();
  }, [id]);

  if (loading) return <p className="text-center mt-20">Loading...</p>;
  if (error)
    return <p className="text-center mt-20 text-red-500">{error}</p>;

  if (!item) return null; // ✅ prevents "item is not defined"

  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Image */}
        <div className="relative w-full h-[420px] rounded-xl overflow-hidden shadow-lg">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
          />
        </div>
        {/* Content */}
        <div>
          <h1 className="text-4xl font-extrabold text-orange-500 mb-3">
            {item.name}
          </h1>

          {/* Reviews */}
          <div className="flex items-center gap-2 mb-5">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar key={star} className="text-yellow-400" />
            ))}
            <span className="text-sm text-gray-500">(120 reviews)</span>
          </div>

          <p className="text-gray-600 text-lg mb-6">
            {item.description}
          </p>

          <p className="text-3xl font-bold text-orange-500 mb-8">
            ${item.price}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            {/* Add to Cart */}
            <button
              className="bg-orange-500 text-white px-8 py-6 rounded-full text-lg font-semibold btn shadow-lg hover:bg-orange-600 hover:scale-105 transition-all duration-300"
            >
              🛒 Add to Cart
            </button>

            {/* Back to Menu */}
            <button
              onClick={() => router.push("/menu")}
              className="border border-gray-300 btn px-8 py-6 rounded-full text-lg hover:bg-gray-100 transition"
            >
              Back to Menu
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
