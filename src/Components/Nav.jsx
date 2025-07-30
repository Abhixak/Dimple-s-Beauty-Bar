import React, { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "/LogoFavicon.png";
import { Link } from "react-router-dom";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    
      <div className="flex flex-wrap items-center justify-between bg-gray-400 !px-3 sm:!px-6 text-white">
        <img src={Logo} alt="LOGO" className="h-30 sm:h-28" />

        {/* Desktop Menu */}
        <ul className="hidden !px-6 md:flex gap-8 text-xl font-normal">
          <li>
            <Link to="/" className="hover:text-pink-500 font-semibold">
              Home
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-pink-500 font-semibold">
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-pink-500 font-semibold">
              Services
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-pink-500 font-semibold">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            exit={{ x: 200 }}
            transition={{ duration: 0.1 }}
            className="md:hidden fixed top-0 right-0 w-2/3 h-full bg-black/80 backdrop-blur-md text-white text-center text-lg !py-10 space-y-6 z-50"
          >
            <button
              className="absolute top-14 left-8 text-2xl text-white hover:text-pink-500"
              onClick={() => setMenuOpen(false)}
            >
              <HiOutlineX />
            </button>

            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="block !mt-20 text-2xl hover:text-pink-500"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="block !mt-6 text-2xl hover:text-pink-500"
            >
              About
            </Link>
            <Link
              to="/services"
              onClick={() => setMenuOpen(false)}
              className="block !mt-6 text-2xl hover:text-pink-500"
            >
              Services
            </Link>
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="block !mt-6 text-2xl hover:text-pink-500"
            >
              Contact
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
