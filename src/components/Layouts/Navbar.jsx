import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/Images/logo (2).png";
import { auth, signOut } from "@/auth";

const Navbar = async () => {
  const session = await auth();

  return (
    <>
      {/* 🍔 Fixed Navbar */}
      <div
        className="
          navbar
          fixed top-0 left-0 w-full z-50
          bg-gradient-to-r from-orange-50 via-white to-orange-50
          backdrop-blur-md
          border-b border-orange-200
          shadow-md
        "
      >
        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-orange-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2
               bg-white/90 backdrop-blur-md shadow rounded-box w-52"
            >
              <li><Link href="/">Home</Link></li>
              <li><Link href="/menu">AllMenu</Link></li>
              {session && (
                <>
                  <li><Link href="/addMenu">AddMenu</Link></li>
                  <li><Link href="/manage-items">Manage Items</Link></li>
                </>
              )}
              <li><Link href="/aboutUs">AboutUs</Link></li>
              <li><Link href="/ContactUs">ContactUs</Link></li>
              {!session ? (
                <li><Link href="/login">Login</Link></li>
              ) : (
                <li>
                  <form action={async () => {
                    "use server"
                    await signOut()
                  }}>
                    <button type="submit">Logout</button>
                  </form>
                </li>
              )}
            </ul>
          </div>

          {/* 🍽️ Logo + Brand */}
          <Link href="/" className="flex items-center gap-3 ml-2">
            <div className="relative w-11 h-11 rounded-full ring-2 ring-orange-400 overflow-hidden hover:scale-105 transition">
              <Image
                src={logo}
                alt="TasteBite Logo"
                fill
                className="object-cover"
              />
            </div>
            <h1 className="text-xl font-extrabold text-orange-600">
              TasteBite
            </h1>
          </Link>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium text-gray-700">
            <li><Link className="hover:text-orange-500" href="/">Home</Link></li>
            <li><Link className="hover:text-orange-500" href="/menu">AllMenu</Link></li>
            <li><Link className="hover:text-orange-500" href="/aboutUs">AboutUs</Link></li>
            <li><Link className="hover:text-orange-500" href="/ContactUs">ContactUs</Link></li>
            {session && (
              <>
                <li><Link className="hover:text-orange-500" href="/addMenu">AddMenu</Link></li>
                <li><Link className="hover:text-orange-500" href="/manage-items">Manage Items</Link></li>
              </>
            )}
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end">
          {!session ? (
            <Link
              href="/login"
              className="btn btn-sm bg-orange-500 hover:bg-orange-600 text-white border-none"
            >
              Login
            </Link>
          ) : (
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-orange-600 hidden md:block">
                {session.user?.name || "User"}
              </span>
              <form action={async () => {
                "use server"
                await signOut()
              }}>
                <button type="submit" className="btn btn-sm bg-red-500 hover:bg-red-600 text-white border-none">
                  Logout
                </button>
              </form>
            </div>
          )}
        </div>
      </div>

      {/* 🧱 Spacer for fixed navbar */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;
