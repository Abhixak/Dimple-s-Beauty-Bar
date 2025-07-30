import React, { useState } from "react";
import { FaMale, FaFemale } from "react-icons/fa";
import Img1 from "../assets/img1.webp"; // Laser Hair Removal
import Img2 from "../assets/img2.jpg"; // Dermal Fillers
import Img3 from "../assets/img3.webp"; // Vitamin Drips
import Whitebg from "../assets/Whitebg.png";

// Item-specific images (you can replace with real ones)
import ItemImg1 from "../assets/Services/Electrolysis.webp";
import ItemImg2 from "../assets/Services/HydraFacial.webp";
import ItemImg3 from "../assets/Services/LyconWaxing.jpg";
import ItemImg4 from "../assets/Services/Dermapen.jpg";
import ItemImg5 from "../assets/Services/Mesotherapy.jpg";
import ItemImg6 from "../assets/Services/SkinTanRemoval.jpg";
import ItemImg7 from "../assets/Services/PRPHair&SkinTreatment.avif";
import ItemImg8 from "../assets/Services/GlutathioneDrip.jpeg";
import ItemImg9 from "../assets/Services/B12Injection.webp";
import ItemImg10 from "../assets/Services/VitaminDInjection.jpg";
import ItemImg11 from "../assets/Services/LemonBottleSkinBooster.webp";
import ItemImg12 from "../assets/Services/LemonBottleFatDissolve.webp";

const Wwd = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const services = [
    {
      title: "Laser Hair Removal",
      image: Img1,
      description:
        "Laser hair removal is a medical procedure that uses a concentrated beam of light to remove unwanted hair.",
      items: [
        {
          name: "Electrolysis",
          image: ItemImg1,
          description:
            "Electrolysis is a method of removing individual hairs using electric current.",
        },
        {
          name: "Hydra Facial",
          image: ItemImg2,
          description:
            "HydraFacial deeply cleanses, exfoliates, and hydrates the skin.",
        },
        {
          name: "Lycon Waxing",
          image: ItemImg3,
          description:
            "Lycon Waxing is a gentle hair removal method, great for sensitive skin.",
        },
      ],
    },
    {
      title: "Dermal Fillers",
      image: Img2,
      description:
        "Dermal fillers help to diminish facial lines and restore volume and fullness in the face.",
      items: [
        {
          name: "Dermapen",
          image: ItemImg4,
          description:
            "Dermapen stimulates collagen and improves skin texture.",
        },
        {
          name: "Mesotherapy",
          image: ItemImg5,
          description:
            "Mesotherapy rejuvenates skin using vitamins and plant extracts.",
        },
        {
          name: "Skin Tan Removal",
          image: ItemImg6,
          description:
            "Quick and safe removal of skin tan using advanced tools.",
        },
        {
          name: "PRP Hair & Skin Treatment",
          image: ItemImg7,
          description:
            "Platelet-rich plasma stimulates natural growth and skin healing.",
        },
      ],
    },
    {
      title: "Vitamin Drips",
      image: Img3,
      description:
        "Vitamin Drips are intravenous infusions designed to deliver essential nutrients directly into the bloodstream.",
      items: [
        {
          name: "Glutathione Drip",
          image: ItemImg8,
          description: "Helps detoxify your body and improve skin brightness.",
        },
        {
          name: "B12 Injection",
          image: ItemImg9,
          description: "Boosts energy and supports nerve and brain function.",
        },
        {
          name: "Vitamin D Injection",
          image: ItemImg10,
          description: "Strengthens bones and supports immunity.",
        },
        {
          name: "Lemon Bottle Skin Booster",
          image: ItemImg11,
          description: "Brightens and revitalizes dull skin.",
        },
        {
          name: "Lemon Bottle Fat Dissolve",
          image: ItemImg12,
          description: "Targets and melts stubborn fat pockets.",
        },
      ],
    },
  ];

  return (
    <div
      className="w-full bg-cover bg-no-repeat bg-center !py-6 !px-4 sm:!px-8"
      style={{ backgroundImage: `url(${Whitebg})` }}
    >
      <h1 className="text-[20px] md:text-[25px] font-bold text-black text-center">
        WHAT WE DO?
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-20 !pt-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-white cursor-pointer"
            onClick={() => setSelectedService(service)}
            
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-70 h-40 rounded md:w-34 md:h-34 object-cover md:rounded-full shadow-md hover:scale-105 transition-transform duration-300 !mb-3"
            />
            <div className="flex gap-3 !mb-2">
              <FaMale title="Men" className="text-xl text-blue-600" />
              <FaFemale title="Women" className="text-xl text-pink-600" />
            </div>
            <h2 className="text-lg font-semibold text-black text-center !mb-2">
              {service.title}
            </h2>

            <div className="grid grid-cols-2 gap-3 text-sm text-gray-700 text-center !pb-4">
              {service.items.map((item, idx) => {
                const isLastOdd =
                  service.items.length % 2 !== 0 &&
                  idx === service.items.length - 1;

                return (
                  <button
                    key={idx}
                    className={`bg-gray-100 hover:bg-blue-50 rounded !px-3 !py-2 transition ${
                      isLastOdd ? "col-span-2 justify-self-center" : ""
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedItem(item);
                    }}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Category Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-lg max-w-md w-full !p-6 shadow-lg relative">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl font-bold"
            >
              &times;
            </button>
            <img
              src={selectedService.image}
              alt={selectedService.title}
              className="w-full h-48 object-cover rounded-md !mb-4"
            />
            <h2 className="text-xl font-bold !mb-2 text-black">
              {selectedService.title}
            </h2>
            <p className="text-gray-700">{selectedService.description}</p>
          </div>
        </div>
      )}

      {/* Item Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-lg max-w-md w-full !p-6 shadow-lg relative">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-2 right-2 text-red-500 hover:text-black text-2xl font-bold"
            >
              &times;
            </button>
            <img
              src={selectedItem.image}
              alt={selectedItem.name}
              className="w-full h-48 object-cover rounded-md !mb-4"
            />
            <h2 className="text-xl font-bold text-black !mb-2">
              {selectedItem.name}
            </h2>
            <p className="text-gray-700">{selectedItem.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Wwd;
