import React from "react";

const AllServices = () => {
  const services = [
    {
      name: "Ladies - Wash & Blow Dry",
      duration: "30 mins - 45 mins",
      price: "from £35",
    },
    {
      name: "Ladies - Curly Blow Dry",
      duration: "30 mins",
      price: "£60",
    },
    {
      name: "Ladies - Wash, Haircut & Blow Dry",
      duration: "45 mins",
      price: "£50",
    },
    {
      name: "Ladies - Wash & Haircut",
      duration: "45 mins",
      price: "£45",
    },
    {
      name: "Patch Test",
      duration: "5 mins",
      price: "£5",
    },
  ];

  return (
    <div className="overflow-x-auto !px-4 md:!px-8 lg:!px-6 !py-10 ">
      <h2 className="text-2xl font-semibold text-pink-500 !mb-6 text-center">
        Our Salon Services
      </h2>
      <table className="min-w-full text-sm text-gray-700 border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-gray-100 text-gray-800 text-left">
          <tr>
            <th className="!p-4 font-bold border-b border-gray-200">Service</th>
            <th className="!p-4 font-bold border-b border-gray-200">Duration</th>
            <th className="!p-4 font-bold border-b border-gray-200">Price</th>
            <th className="!p-4 font-bold border-b border-gray-200 text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {services.map((service, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              <td className="!p-4 border-b border-gray-200">{service.name}</td>
              <td className="!p-4 border-b border-gray-200">{service.duration}</td>
              <td className="!p-4 border-b border-gray-200">{service.price}</td>
              <td className="!p-4 border-b border-gray-200 text-center">
                <button className="bg-black text-white !px-5 !py-2 rounded-md text-sm hover:bg-gray-800 transition-all">
                  Select
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllServices;
