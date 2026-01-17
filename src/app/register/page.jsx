"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("Please fill all fields");
      return;
    }

    // Dummy registration (replace later with API)
    console.log({ name, email, password });
    router.push("/login");
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        backgroundImage: "url('/Images/banner.png')", // same as login
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Register Card */}
      <div className="relative w-full max-w-md bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-orange-500 mb-6 text-center">
          Create Your Account
        </h2>

        {error && (
          <p className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4 text-center">
            {error}
          </p>
        )}

        <form className="space-y-4" onSubmit={handleRegister}>
          <div>
            <label className="block text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-orange-600 transition"
          >
            Register
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-orange-500 hover:underline">
            Login
          </a>
        </p>
      </div>
    </section>
  );
}
