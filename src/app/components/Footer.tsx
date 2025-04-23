import { Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer id="contact" className="mt-8 text-center p-8 bg-gray-900 text-gray-300">
      {/* Section for Logo and address | contact */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white">TRAVEL TIMES</h2>
          <div className="text-sm">
            <p className="mb-2">
              123 Travel Lane <br /> Adventure City, Country
            </p>
            <ul className="space-y-1">
              <li>Email: traveltimes@tt.com</li>
              <li>Phone: +91934309094</li>
            </ul>
          </div>
        </div>
        <div className="hidden md:block border-l border-gray-600 h-32"></div>
        <div className="max-w-md text-center md:text-left">
          <h2 className="text-3xl font-bold text-white mb-4">Breifly About Us</h2>
          <p className="text-sm leading-relaxed">
            At Travel Times, we believe that every journey tells a story. Our
            mission is to inspire and guide travelers to explore the world with
            confidence and excitement. Whether you're seeking adventure,
            relaxation, or cultural experiences, we're here to make your travel
            dreams a reality.
          </p>
          <p className="text-sm leading-relaxed mt-4">
            Join us on this incredible journey as we explore the beauty of the
            world together. At Travel Times, your adventure begins here, and we
            are honored to be a part of your travel story.
          </p>
        </div>
      </div>

      <hr className="border-gray-700 my-8" />
      {/* Section for copyright and social media links */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Travel Times. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <Link
            href="https://facebook.com"
            target="_blank"
            className="p-2 rounded-full bg-gray-800 hover:bg-blue-500 transition-colors"
          >
            <Facebook className="w-6 h-6 text-gray-300 hover:text-white" />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            className="p-2 rounded-full bg-gray-800 hover:bg-pink-500 transition-colors"
          >
            <Instagram className="w-6 h-6 text-gray-300 hover:text-white" />
          </Link>
          <Link
            href="https://youtube.com"
            target="_blank"
            className="p-2 rounded-full bg-gray-800 hover:bg-red-500 transition-colors"
          >
            <Youtube className="w-6 h-6 text-gray-300 hover:text-white" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
