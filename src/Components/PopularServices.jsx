import React, { useRef, useState, useEffect } from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

const PopularServices = () => {
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

  return (
    <div className="max-w-6xl !mx-auto !px-4 sm:!px-6 lg:!px-8 !py-10">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold !mb-6 sm:!mb-8 text-center text-pink-600">
        Popular Services
      </h2>

      <div className="relative">
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex items-center justify-center absolute left-1 top-1/2 transform -translate-y-1/2 bg-pink-600 hover:bg-pink-700 text-white rounded-full !p-2 z-10"
          >
            <HiOutlineChevronLeft size={24} />
          </button>
        )}

        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className="hidden md:flex items-center justify-center absolute right-1 top-1/2 transform -translate-y-1/2 bg-pink-600 hover:bg-pink-700 text-white rounded-full !p-2 z-10"
          >
            <HiOutlineChevronRight size={24} />
          </button>
        )}

        <div
          id="PopularServices"
          ref={scrollRef}
          className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-none md:flex md:space-x-5 md:overflow-x-auto md:scrollbar-hide"
        >
          {[
            {
              title: "Patch Test",
              items: [{ name: "Patch Test", duration: "5 mins", price: "£5" }],
            },
            {
              title: "Eyebrow & Eyelash Tinting",
              items: [
                { name: "Eyebrow", duration: "15 mins", price: "£15" },
                { name: "Eyelash", duration: "15 mins", price: "£20" },
                { name: "Eyebrow & Eyelash", duration: "20 mins", price: "£25" },
              ],
            },
            {
              title: "Ladies' Waxing - Leg",
              items: [
                { name: "Half Leg", duration: "20 mins", price: "£18" },
                { name: "Three-Quarter Leg", duration: "20 mins", price: "£20" },
                { name: "Full Leg", duration: "30 mins", price: "£25" },
              ],
            },
            {
              title: "Ladies - Wash & Blow Dry",
              items: [
                { name: "Short Hair", duration: "30 mins", price: "£35" },
                { name: "Medium Length Hair", duration: "45 mins", price: "£40" },
                { name: "Long Hair", duration: "45 mins", price: "£45" },
              ],
            },
            {
              title: "Foot & Leg Massage",
              items: [
                { name: "30 minutes", duration: "30 mins", price: "£35" },
                { name: "15 minutes", duration: "15 mins", price: "£50" },
              ],
            },
          ].map((service, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md !p-3 sm:!p-4 md:!p-6 border border-gray-100 
                         min-w-[140px] sm:min-w-[180px] md:min-w-[250px] lg:min-w-[280px] 
                         flex-shrink-0"
            >
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-black !mb-2 sm:!mb-3">
                {service.title}
              </h3>

              <div className="space-y-2 sm:space-y-3">
                {service.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center border-t !pt-2 sm:!pt-3"
                  >
                    <div>
                      <p className="text-xs sm:text-sm font-medium text-pink-600">
                        {item.name}
                      </p>
                      <p className="text-[11px] sm:text-xs !mt-1 text-gray-400">
                        {item.duration}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs sm:text-sm text-green-700 font-semibold">
                        {item.price}
                      </p>
                      <button className="!my-2 text-[11px] sm:text-xs text-pink-600 font-medium">
                        Select
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularServices;
