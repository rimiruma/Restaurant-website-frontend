"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/Images/logo.png";

import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-gray-300">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Logo & About */}
        <div>
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
          <p className="text-sm leading-relaxed">
            Delicious food, cozy atmosphere and friendly service.
            Enjoy our chef's special dishes made with love.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <SocialIcon><FaFacebookF /></SocialIcon>
            <SocialIcon><FaInstagram /></SocialIcon>
            <SocialIcon><FaTwitter /></SocialIcon>
            <SocialIcon><FaYoutube /></SocialIcon>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-orange-500 cursor-pointer">Home</li>
            <li className="hover:text-orange-500 cursor-pointer">Menu</li>
            <li className="hover:text-orange-500 cursor-pointer">About Us</li>
            <li className="hover:text-orange-500 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Opening Hours
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaClock className="text-orange-500" />
              Mon – Fri: 10AM – 10PM
            </li>
            <li className="flex items-center gap-2">
              <FaClock className="text-orange-500" />
              Sat – Sun: 12PM – 11PM
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Contact Us
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-orange-500" />
              Dhaka, Bangladesh
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-orange-500" />
              +880 1234 567 890
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} FoodHouse. All rights reserved.
      </div>
    </footer>
  );
};

const SocialIcon = ({ children }) => (
  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#2a2a2a] text-white
    hover:bg-orange-500 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
    {children}
  </div>
);

export default Footer;
