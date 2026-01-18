"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc"; // Just in case they have react-icons, package.json said they do: "react-icons": "^5.5.0"

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("test@example.com");
  const [password, setPassword] = useState("123456");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("Invalid credentials");
        setLoading(false);
      } else {
        router.push("/menu");
        router.refresh();
      }
    } catch (err) {
      setError("An error occurred");
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    signIn("google", { callbackUrl: "/menu" });
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        backgroundImage: "url('/Images/banner.png')",
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
            disabled={loading}
            className="w-full bg-orange-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-orange-600 transition disabled:opacity-70"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="mt-4">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-transparent text-gray-600">Or continue with</span>
            </div>
          </div>

          <button
            onClick={handleGoogleLogin}
            className="mt-4 w-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-bold py-2 px-4 rounded-lg flex items-center justify-center transition"
          >
            <FcGoogle className="w-5 h-5 mr-2" />
            Sign in with Google
          </button>
        </div>

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
