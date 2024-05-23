import React from "react";
import { servicesData } from "../../Data";

const Services = () => {

  return (
      <div className="section" id="services">
        <div className="text-center text-gray-900">
          <div className="text-[32px] font-space-grotesk ">
            We Provide <span className="text-Teal">Top Services</span>
          </div>
          <p className="font-f37 text-sm mt-5 mb-5">
            "We believe in developing blue collar worker's proficiency to render
            professional services with unparalleled ethics. We provide a diverse
            set of services from skilling and placement to fully managed
            solutions to suit the needs of households and businesses across
            various industries, alike."
          </p>
        </div>
        <div className="flex flex-col justify-evenly">
            {servicesData.map((service) => (
              <div key={service.id} className="px-2">
                <div className="bg-white md:w-[320px] w-[250px] overflow-hidden transition-transform transform hover:scale-105 m-2 rounded-lg shadow-lg">
                  <div className="p-8">
                    <h2 className="text-2xl font-bold text-center mb-4">
                      {service.category}
                    </h2>
                    <ul className="text-md container mx-auto list-disc">
                      {service.description &&
                        service.description.map((item, index) => (
                          <li key={index} className="ml-2">
                            {item}
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
  );
};

export default Services;
