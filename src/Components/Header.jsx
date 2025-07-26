import React, { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import AdVideo1 from "../assets/AdVideo1.mp4"
import { BiBorderRadius } from "react-icons/bi";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <header className="w-full h-24 flex justify-between items-center !px-6 md:!px-10 bg-black relative z-50">
        <img
          src="/LogoFavicon.png"
          alt="Dimple's Beauty Bar"
          className="h-16 sm:h-20 md:h-24"
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex text-white gap-6">
          <li className="hover:text-pink-400 cursor-pointer transition">
            Home
          </li>
          <li className="hover:text-pink-400 cursor-pointer transition">
            Services
          </li>
          <li className="hover:text-pink-400 cursor-pointer transition">
            Book Appointment
          </li>
          <li className="hover:text-pink-400 cursor-pointer transition">
            Contact Us
          </li>
        </ul>

        {/* Mobile Hamburger Icon with Animation */}
        <div
          className="md:hidden text-white text-3xl cursor-pointer"
          onClick={toggleMenu}
        >
          <AnimatePresence mode="wait">
            {menuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <HiOutlineX />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <HiOutlineMenu />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Slide Menu */}
        <div
          className={`fixed top-20 right-0 rounded w-56 bg-black font-bold text-white border-pink-400 border-2 transform ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-200 ease-in-out z-40 !p-6 md:hidden`}
        >
          <ul className="flex flex-col gap-4 md:gap-6">
            <li
              className="hover:text-pink-400 cursor-pointer transition"
              onClick={toggleMenu}
            >
              Home
            </li>
            <li
              className="hover:text-pink-400 cursor-pointer transition"
              onClick={toggleMenu}
            >
              Services
            </li>
            <li
              className="hover:text-pink-400 cursor-pointer transition"
              onClick={toggleMenu}
            >
              Book Appointment
            </li>
            <li
              className="hover:text-pink-400 cursor-pointer transition"
              onClick={toggleMenu}
            >
              Contact Us
            </li>
          </ul>
        </div>
      </header>
      <video
        src={AdVideo1}
        autoPlay
        loop
        muted
        playsInline
        alt="Ad Video"
        className="w-full !px-6 h-auto"
      />
    </>
  );
};

export default Header;
