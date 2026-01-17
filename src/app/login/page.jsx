"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    if (email === "admin@example.com" && password === "123456") {
      router.push("/dashboard");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        backgroundImage: "url('/Images/banner.png')", // আগের image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Login Card */}
      <div className="relative w-full max-w-md bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-orange-500 mb-6 text-center">
          Login to Your Account
        </h2>

        {error && (
          <p className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4 text-center">
            {error}
          </p>
        )}

        <form className="space-y-4" onSubmit={handleLogin}>
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
            Login
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Don't have an account?{" "}
          <a href="/register" className="text-orange-500 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </section>
  );
}
