"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const EditMenuPage = () => {
    const router = useRouter();
    const params = useParams();
    const { id } = params;

    const [formData, setFormData] = useState({
        name: "",
        image: "",
        price: "",
        category: "Pizza",
        description: "",
    });

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    const categories = ["Pizza", "Burger", "Pasta", "Salad", "Dessert", "Drinks", "Sushi", "Others"];

    // Fetch existing data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`/api/menu/${id}`);
                const data = await res.json();
                if (res.ok) {
                    setFormData({
                        name: data.name,
                        image: data.image,
                        price: data.price,
                        category: data.category || "Pizza",
                        description: data.description,
                    });
                } else {
                    toast.error("Failed to load item data");
                }
            } catch (err) {
                toast.error("Error fetching data");
            } finally {
                setLoading(false);
            }
        };

        if (id) fetchData();
    }, [id]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);

        try {
            const res = await fetch(`/api/menu/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...formData,
                    price: parseFloat(formData.price),
                }),
            });

            if (res.ok) {
                toast.success("Updated successfully! Redirecting...");
                setTimeout(() => {
                    router.push("/manage-items");
                    router.refresh();
                }, 1000);
            } else {
                toast.error("Failed to update");
            }
        } catch {
            toast.error("Error updating item");
        } finally {
            setSaving(false);
        }
    };

    if (loading) return <div className="text-center mt-20 text-orange-500 font-bold">Loading Item Data...</div>;

    return (
        <section
            className="min-h-screen flex items-center justify-center px-4"
            style={{
                backgroundImage: "url('/Images/banner.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="absolute inset-0 bg-black/50"></div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative w-full max-w-lg bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8"
            >
                <h1 className="text-3xl font-bold text-center text-orange-500 mb-6">
                    Edit Menu Item ✏️
                </h1>

                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Inputs reuse similar styling as AddMenu */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Image URL</label>
                        <input
                            type="text"
                            name="image"
                            value={formData.image}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                            required
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Price ($)</label>
                            <input
                                type="number"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Category</label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none bg-white"
                                required
                            >
                                {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Description</label>
                        <textarea
                            rows={4}
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none resize-none"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={saving}
                        className="w-full bg-orange-500 text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition disabled:opacity-70"
                    >
                        {saving ? "Updating..." : "Update Item"}
                    </button>
                </form>
            </motion.div>
        </section>
    );
};

export default EditMenuPage;
