import React, { useState, useEffect } from "react";
<<<<<<< HEAD
import Nav from "./Nav";
import Img1 from "../assets/Salon/img1.jpeg";
import Img2 from "../assets/Salon/img2.jpeg";
import Img3 from "../assets/Salon/img3.jpeg";
import Img4 from "../assets/Salon/img4.jpeg";
import Img5 from "../assets/Salon/img5.jpeg";

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [Img1, Img2, Img3, Img4, Img5];

  // Auto slide (optional, every 5s)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const date = new Date();
  const currentHour = date.getHours();
  const day = date.getDay();

  const daysOfWeek = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ];
  const todayName = daysOfWeek[day];

  const isMonday = day === 1;
  const openTime = 10;
  const closeTime = 19;

  const isOpen = !isMonday && currentHour >= openTime && currentHour < closeTime;
  const openHoursText = isMonday
    ? "Closed Today"
    : `Open Today: ${openTime}:00 – ${closeTime}:00`;

  return (


    <div className="relative w-full h-[400px] sm:h-[500px] overflow-hidden">
    {/* Top Bar */}
      <div className="absolute top-0 z-20 bg-gray-100 backdrop-blur-sm w-full flex items-center justify-between !p-2 sm:!px-4 text-white text-[12px] sm:text-sm font-medium">
        <div className="flex flex-wrap font-normal items-center gap-x-2 gap-y-1">
          <span className="text-blue-700">{todayName} |</span>
          <span className="text-red-500">{openHoursText}</span>
          {/* <span className="hidden sm:inline">·</span>
          <span>Contact: +44-7516033509, 01895692086</span> */}
        </div>
      </div>  

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/10 z-10" /> */}
      {/* Navigation Component */}
      <div className="relative z-0 !mt-8 sm:!mt-9">
        <Nav />
      </div>
      {/* Slideshow */}
      <img
        src={images[currentIndex]}
        alt="Slideshow"
        className="absolute w-full h-full object-cover static transition-opacity duration-500"
      />

    </div>
=======
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
>>>>>>> fb34473d7420cb42a1446fa4532ca99974e0fcb1
  );
};

export default Header;
