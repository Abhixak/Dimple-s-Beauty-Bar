import React, { useState, useEffect } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const Header = ({ isScrolled }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  // const [isScrolled, setIsScrolled] = useState(false);

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
        className={`fixed top-0 left-0 w-full z-50 h-20 md:h-24 !px-4 md:!px-6 !lg:px-8 flex justify-between items-center transition-colors duration-300 ${
          isScrolled ? "bg-black text-white shadow-md" : "bg-black/0 text-black"
        }`}
      >
        {/* Logo */}
        <img
          src="/LogoFavicon2.png"
          alt="Dimple's Beauty Bar"
          className="h-24 sm:h-26 md:h-30 object-contain"
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex font-semibold gap-4 lg:gap-4 text-lg md:text-sm lg:text-xl">
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
          className={`md:hidden text-2xl sm:text-3xl z-50 cursor-pointer transition-colors duration-300 ${
            isScrolled ? "text-white" : "text-black"
          }`}
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
          className={`fixed z-40 top-0 right-0 h-full w-3/4 max-w-xs transform ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out z-40 p-6 pt-24 md:hidden
  ${isScrolled ? "bg-black text-white" : "bg-white text-black"}`}
        >
          <ul className="flex flex-col font-serif gap-8 relative top-20 sm:gap-10 text-center text-base sm:text-lg">
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
