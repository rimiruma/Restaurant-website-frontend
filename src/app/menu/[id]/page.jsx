"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";

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
        if (!res.ok) {
          const data = await res.json();
          throw new Error(data.message || "Something went wrong");
        }
        const data = await res.json();
        setItem(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]);
console.log(item);
  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error)
    return (
      <div className="text-center mt-10">
        <p className="text-xl font-semibold">{error}</p>
        <button
          onClick={() => router.push("/menu")}
          className="mt-4 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors duration-300"
        >
          Back to Menu
        </button>
      </div>
    );

  return (
    <section className="max-w-5xl mx-auto py-16 px-4 md:px-8">
      <div className="w-full h-96 relative mb-8 rounded-lg overflow-hidden shadow-lg">
        <Image
          src={item.image}
          alt={item.name}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-lg"
        />
      </div>

      <h1 className="text-4xl md:text-5xl font-bold mb-4">{item.name}</h1>
      <p className="text-gray-700 mb-6">{item.description}</p>
      <p className="text-2xl font-semibold text-orange-500 mb-8">${item.price}</p>

      <button
        onClick={() => router.push("/menu")}
        className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-orange-600 transition-colors duration-300"
      >
        Back to Menu
      </button>
    </section>
  );
}
