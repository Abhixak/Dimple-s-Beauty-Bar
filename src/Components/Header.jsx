import React, { useState, useEffect } from "react";
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
  );
};

export default Header;
