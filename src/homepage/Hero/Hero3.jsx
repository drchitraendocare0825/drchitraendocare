import React from "react";
import ladyPointing from "../../assets/Homepage/Hero/pointinglady.png";

import tooth_filling from "/src/assets/Homepage/Services/tooth-filling.png";
import root_canal_icon from "/src/assets/Homepage/Services/root-canal.png";
import tooth_extraction_icon from "/src/assets/Homepage/Services/tooth-extraction.png";
import tooth_whitening_icon from "/src/assets/Homepage/Services/tooth-whitening.png";
import cosmetic_icon from "/src/assets/Homepage/Services/cosmetic.png";
import prevention_icon from "/src/assets/Homepage/Services/prevention.png";
import specialist_icon from "/src/assets/Homepage/Services/specialist.png";
import dental_implant from "/src/assets/Homepage/Services/dental-implant.png";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const services = [
    { name: "Gentle Dental Fillings", icon: tooth_filling, link: "" },
    { name: "Root Canal Therapy", icon: root_canal_icon, link: "" },
    { name: "Tooth Extractions", icon: tooth_extraction_icon, link: "" },
    { name: "Teeth Whitening", icon: tooth_whitening_icon, link: "" },
    { name: "Cosmetic Dentistry", icon: cosmetic_icon, link: "" },
    { name: "Pediatric Treatment", icon: prevention_icon, link: "" },
    { name: "Orthodontic Braces", icon: specialist_icon, link: "" },
    { name: "Dental Implant", icon: dental_implant, link: "" },
  ];

  return (
    <section className="bg-[#F9FAFB] pt-4 px-4 md:px-10">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-start justify-between gap-10">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center max-lg:pb-10 lg:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Bring the Bright Smile <br />
            Using Our <span className="text-blue-600">Dental Services</span>
          </h1>
          <p className="text-gray-600 text-base ">
            We offer a wide range of dental care services designed to make your smile brighter.
          </p>

          {/* Services Grid */}
          <div className="grid grid-cols-2 gap-4 mt-8 max-lg:mb-10">
            {services.map((service, index) => (
              <a href="/services"
                key={index}
                className="flex items-center gap-4 bg-white shadow-md hover:shadow-xl transition p-2 max-lg:p-2 rounded-xl"
              >
                <img
                  src={service.icon}
                  alt={service.name}
                  className="w-10 max-lg:w-8 h-10 max-lg:h-8 object-contain"
                />
                <p className="text-sm text-left font-medium text-gray-700">{service.name}</p>
              </a>
            ))}
          </div>
          <a href="/services">
              <button className="bg-yellow-300 px-10 py-2 duration-300 rounded-md font-semibold hover:bg-yellow-500">
              Our Services
            </button>
            </a>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:w-1/2 max-lg:hidden">
          <img
            src={ladyPointing}
            alt="Lady pointing towards dental services"
            className="w-[28rem] max-w-full rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
