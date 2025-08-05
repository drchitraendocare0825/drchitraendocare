"use client";
import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import patient1 from "../assets/Homepage/Testimonials/patient1.png";
import patient2 from "../assets/Homepage/Testimonials/patient2.png";
import patient3 from "../assets/Homepage/Testimonials/patient3.png";
import patient4 from "../assets/Homepage/Testimonials/patient4.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Anup Dave",
    title: "Patient",
    quote: "It is very genuine clinic. Charges are very reasonable and treatment is excellent.",
    image: patient1,
  },
  {
    name: "Vinayak Dave",
    title: "Patient",
    quote:
      "Excellent dental clinic with highly skilled dentist and modern equipment. The clinic maintains top-notch hygiene standards. The staff is friendly, professional, and always attentive to patient comfort. Highly recommended for anyone looking for reliable and good dental care in Raipur!",
    image: patient3,
  },
  {
    name: "Kesri Rituraj",
    title: "Patient",
    quote: "Great ambience and humble doctor — a rare combination.",
    image: patient2,
  },
  {
    name: " Pramod Kr Dalmia",
    title: "Patient",
    quote:
      "Very polite & accurate work. Not like typical dentist clinics where one work becomes multiple sittings. Quite reasonable treatment cost. Good advice for dental care.",
    image: patient4,
  },
];

const Testimonials = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768, settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="bg-white py-12 px-4 md:px-10 lg:px-20 flex flex-col items-center">
      <div className="max-w-[1200px] w-full mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-[Noto_Sans]">
          What Our <span className="text-blue-600">Patients Say</span>
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-8 md:mb-12 text-sm md:text-base">
          Real experiences from our happy clients who trusted us with their dental care.
        </p>

        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              className="px-3 md:px-4"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#F8FAFC] p-6 rounded-xl shadow hover:shadow-md transition duration-300 max-w-xl mx-auto">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.title}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  "{item.quote}"
                </p>
              </div>
            </motion.div>
          ))}
        </Slider>

        <a
          href="https://www.google.com/search?q=chitra+dental+clinic#lrd=0x3a28dd69bfaa335d:0x3f1ae16ce2a60c6c,1"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8"
        >
          <button
            className="bg-yellow-300 hover:bg-yellow-400 text-black font-[Noto_Sans] 
              font-semibold px-6 py-3 rounded-lg w-full sm:w-auto"
          >
            Read Our Latest Reviews
          </button>
        </a>
      </div>
    </section>
  );
};

export default Testimonials;
