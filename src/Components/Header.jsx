import React, { useState, useEffect } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 h-20 md:h-24 flex justify-between items-center !px-4 sm:!px-6 md:!px-10 transition-colors duration-300 ${
          isScrolled ? "bg-black text-white shadow-md" : "bg-black/0 text-black"
        }`}
      >
        {/* Logo */}
        <img
          src="/LogoFavicon.png"
          alt="Dimple's Beauty Bar"
          className="h-24 sm:h-26 md:h-30 object-contain"
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex font-semibold gap-4 lg:gap-6 text-sm lg:text-base">
          <li className="hover:text-pink-400 cursor-pointer transition-colors duration-300">
            Home
          </li>
          <li className="hover:text-pink-400 cursor-pointer transition-colors duration-300">
            Services
          </li>
          <li className="hover:text-pink-400 cursor-pointer transition-colors duration-300">
            Book Appointment
          </li>
          <li className="hover:text-pink-400 cursor-pointer transition-colors duration-300">
            Contact Us
          </li>
        </ul>

        {/* Mobile Hamburger Icon */}
        <div
          className="md:hidden text-2xl sm:text-3xl cursor-pointer"
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
          className={`fixed top-14 right-0 h-full w-3/4 max-w-xs rounded bg-black font-bold text-white border-gray-50 transform ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out z-40 !p-6 md:hidden`}
        >
          <ul className="flex flex-col gap-5 text-center text-base sm:text-lg">
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
    </>
  );
};

export default Header;
