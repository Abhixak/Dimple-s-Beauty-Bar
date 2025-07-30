import React, { useState } from "react";
import servicesData from "../Data/servicesData.json";
import Blackbg from "../assets/Blackbg.png";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

const Services = () => {
  const categories = Object.keys(servicesData);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [openDropdowns, setOpenDropdowns] = useState({});

  const toggleDropdown = (index) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <>
      <Nav />

      <div
        className="w-full !pt-6 !pb-12 !px-4 bg-cover bg-center"
        style={{ backgroundImage: `url(${Blackbg})` }}
      >
        <h1 className="text-white text-center text-2xl md:text-3xl font-bold !mb-6">
          Popular Services
        </h1>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 !mb-6">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className={`!px-4 !py-2 cursor-pointer rounded-full border text-sm transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-white text-black font-semibold"
                  : "text-white border-white hover:bg-white hover:text-black"
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services List */}
        <div className="bg-white rounded-xl !p-4 max-w-3xl !mx-auto space-y-4 shadow-lg">
          {servicesData[selectedCategory].map((service, idx) => (
            <div key={idx} className="border-b !pb-4">
              <div
                className={`flex justify-between items-start ${
                  service.subItems ? "cursor-pointer" : ""
                }`}
                onClick={() => service.subItems && toggleDropdown(idx)}
              >
                <div>
                  <h2 className="font-semibold text-lg">{service.title}</h2>
                  <p className="text-gray-600 text-sm">{service.time}</p>
                </div>
                <div className="text-right">
                  <p className="text-green-600 font-medium">{service.price}</p>
                  {!service.subItems && (
                    <button className="text-sm bg-pink-500 text-white cursor-pointer !px-3 !py-1 rounded !mt-2 hover:bg-pink-600 transition">
                      Select
                    </button>
                  )}
                </div>
              </div>

              {/* SubItems Dropdown */}
              {service.subItems && openDropdowns[idx] && (
                <div className="!mt-4 !ml-2 space-y-3">
                  {service.subItems.map((item, i) => (
                    <div
                      key={i}
                      className="flex !m-2 justify-between items-center border border-gray-300 rounded !px-3 !py-2 bg-gray-50"
                    >
                      <p>{item.title}</p>
                      <div className="flex items-center gap-3">
                        <p className="text-green-600 font-medium">
                          {item.price}
                        </p>
                        <button className="text-sm bg-pink-500 text-white !px-3 !py-1 rounded hover:bg-pink-600 transition">
                          Select
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
