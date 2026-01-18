"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaEdit, FaTrash, FaEye, FaPlus } from "react-icons/fa";
import toast from "react-hot-toast";

const ManageMenuPage = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const fetchMenu = async () => {
        try {
            const res = await fetch("/api/menu");
            const data = await res.json();
            if (res.ok) {
                setMenuItems(data);
            } else {
                setError("Failed to fetch menu items");
            }
        } catch {
            setError("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMenu();
    }, []);

    const handleDelete = async (id) => {
        if (!confirm("Are you sure you want to delete this item?")) return;

        try {
            const res = await fetch(`/api/menu/${id}`, {
                method: "DELETE",
            });

            if (res.ok) {
                setMenuItems((prev) => prev.filter((item) => item._id !== id));
                toast.success("Item deleted successfully");
            } else {
                toast.error("Failed to delete item");
            }
        } catch {
            toast.error("Error deleting item");
        }
    };

    if (loading) return <div className="text-center mt-20 text-orange-500 font-bold">Loading...</div>;
    if (error) return <div className="text-center mt-20 text-red-500 font-bold">{error}</div>;

    return (
        <section className="min-h-screen p-4 md:p-8 pt-24 bg-orange-50/30">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Manage Menu Items 📋</h1>
                    <Link href="/addMenu" className="btn bg-orange-500 hover:bg-orange-600 text-white border-none flex items-center gap-2 w-full md:w-auto">
                        <FaPlus /> Add New Item
                    </Link>
                </div>

                <div className="overflow-x-auto bg-white rounded-xl shadow-lg border border-orange-100">
                    <table className="table w-full">
                        {/* head */}
                        <thead className="bg-orange-100 text-orange-800 font-semibold text-base">
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th className="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {menuItems.length === 0 ? (
                                <tr>
                                    <td colSpan="5" className="text-center py-8 text-gray-500">
                                        No menu items found. Add some!
                                    </td>
                                </tr>
                            ) : (
                                menuItems.map((item) => (
                                    <motion.tr
                                        key={item._id}
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="hover:bg-orange-50 transition"
                                    >
                                        <td>
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <Image
                                                        src={item.image || "/placeholder.png"}
                                                        alt={item.name}
                                                        width={48}
                                                        height={48}
                                                        className="object-cover"
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="font-semibold text-gray-700 whitespace-nowrap">{item.name}</td>
                                        <td><span className="badge badge-ghost badge-sm whitespace-nowrap">{item.category || "General"}</span></td>
                                        <td className="text-orange-600 font-bold">${parseFloat(item.price).toFixed(2)}</td>
                                        <td>
                                            <div className="flex items-center justify-center gap-3">
                                                <Link href={`/menu/${item._id}`} className="text-blue-500 hover:text-blue-700 tooltip tooltip-bottom" data-tip="View">
                                                    <FaEye size={18} />
                                                </Link>
                                                <Link href={`/manage-items/edit/${item._id}`} className="text-green-500 hover:text-green-700 tooltip tooltip-bottom" data-tip="Edit">
                                                    <FaEdit size={18} />
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(item._id)}
                                                    className="text-red-500 hover:text-red-700 tooltip tooltip-bottom"
                                                    data-tip="Delete"
                                                >
                                                    <FaTrash size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </motion.tr>
                                )))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default ManageMenuPage;
