import React from "react";

const AllServices = () => {
  const menServices = [
    { name: "Haircut", duration: "45 mins", price: "£45" },
    { name: "Beard Trim", duration: "15 mins", price: "£10" },
    { name: "Head Massage", duration: "20 mins", price: "£15" },
  ];

  const womenServices = [
    { name: "Haircut", duration: "45 mins", price: "£45" },
    { name: "Facial", duration: "60 mins", price: "£50" },
    { name: "Manicure", duration: "30 mins", price: "£25" },
  ];

  return (
    <div className="max-w-6xl !mx-auto !px-4 sm:!px-6 lg:!px-8 !py-10">
      {/* <h2 className="text-3xl font-bold !mb-10 text-center text-pink-600">
        All Services
      </h2> */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Men's Services */}
        <div className="bg-white rounded-2xl shadow-lg !p-6 border border-gray-100 flex flex-col">
          <h3 className="text-xl font-semibold text-blue-600 !mb-6 text-center">
            Men's Services
          </h3>
          <div className="flex-1 space-y-5">
            {menServices.map((service, i) => (
              <div
                key={i}
                className="flex justify-between items-center border-t !pt-4"
              >
                <div>
                  <p className="text-base font-medium text-blue-600">
                    {service.name}
                  </p>
                  <p className="text-sm !mt-1 text-gray-500">{service.duration}</p>
                </div>
                <div className="text-right">
                  <p className="text-base text-green-700 font-semibold">
                    {service.price}
                  </p>
                  <button className="!my-2 text-sm text-blue-600 hover:underline font-medium">
                    Select
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Women's Services */}
        <div className="bg-white rounded-2xl shadow-lg !p-6 border border-gray-100 flex flex-col">
          <h3 className="text-xl font-semibold text-pink-600 !mb-6 text-center">
            Women's Services
          </h3>
          <div className="flex-1 space-y-5">
            {womenServices.map((service, i) => (
              <div
                key={i}
                className="flex justify-between items-center border-t !pt-4"
              >
                <div>
                  <p className="text-base font-medium text-pink-600">
                    {service.name}
                  </p>
                  <p className="text-sm !mt-1 text-gray-500">{service.duration}</p>
                </div>
                <div className="text-right">
                  <p className="text-base text-green-700 font-semibold">
                    {service.price}
                  </p>
                  <button className="!my-2 text-sm text-pink-600 hover:underline font-medium">
                    Select
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllServices;
