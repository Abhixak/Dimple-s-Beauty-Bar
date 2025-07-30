import React, { useRef, useState, useEffect } from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import BackIMG from "../assets/backImage2.png";
import BackIMG2 from "../assets/backImage.png";
import Header from "./Header";
import Advertise from "./Advertise";
import PopularServices from "./PopularServices";

const Landing = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    updateScrollButtons(); // Initial check

    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", updateScrollButtons);
      window.addEventListener("resize", updateScrollButtons);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", updateScrollButtons);
        window.removeEventListener("resize", updateScrollButtons);
      }
    };
  }, []);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="!mx-auto font-serif">
      <Header isScrolled={isScrolled} />

      {/* Image when NOT scrolled */}
      <img
        src={BackIMG}
        alt="background"
        className={`w-[100dvw] h-screen object-cover transition-opacity duration-500 fixed top-0 left-0 z-0 ${
          isScrolled ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Image when scrolled */}
      <img
        src={BackIMG2}
        alt="background"
        className={`w-[100dvw] h-screen object-cover transition-opacity duration-500 fixed top-0 left-0 z-0 ${
          isScrolled ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="h-170 xl:h-200 w-full text-center flex flex-col justify-center relative z-40 items-center transition-colors duration-300">
        <h1
          className={`text-[50px] lg:text-[80px] transition-colors duration-300 ${
            isScrolled ? "text-white" : "text-black"
          }`}
        >
          DIMPLE's
        </h1>
        <p
          className={`text-[25px] !lg:text-[40px] transition-colors duration-300 ${
            isScrolled ? "text-white" : "text-black"
          }`}
        >
          Beauty Bar
        </p>
        <p
          className={`text-[15px] !lg:text-[30px] relative top-5 transition-colors duration-300 ${
            isScrolled ? "text-pink-500" : "text-pink-600"
          }`}
        >
          "Where Style Meets Confidence."
        </p>
      </div>
      <div className="bg-black !mt-70 md:!mt-0 relative z-60 h-auto !p-4 w-full">
        <Advertise />
        <PopularServices />
      </div>
    </div>
  );
};

export default Landing;
