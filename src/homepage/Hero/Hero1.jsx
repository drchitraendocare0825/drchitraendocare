"use client";
import React from "react";
import chitragohil from "../../assets/Homepage/Hero/chitragohil.png";
import { IoCall, IoTime } from "react-icons/io5";
import { motion } from "framer-motion";

export default function Hero1() {
  return (
    <section className="flex justify-center items-center relative overflow-hidden bg-[#F7F7F7]">
      <div className="w-full max-w-[1150px] flex max-lg:flex-col-reverse items-center justify-between">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-lg:text-center max-lg:w-[95%]"
        >
          <h1 className="text-5xl max-lg:text-[25px] font-extrabold font-[Noto_Sans] text-gray-900 leading-tight mb-4">
            We Don’t Just Treat Teeth <br /> We Listen, Explain, and <br />
            <span className="text-blue-500">Heal with Care</span>
          </h1>
          <p className="text-gray-600 text-base mb-8 max-w-xl">
            At Dr. Chitra Endocare, we combine advanced dental expertise with
            personalized care that makes you feel truly happier. From root
            canals to smile makeovers, we’re here to care, comfort, and create
            confident smiles.
          </p>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex max-lg:hidden max-lg:flex-col items-center gap-6 mt-10 max-w-4xl"
          >
            {[
              { number: "10+", text: "Years of Experience" },
              { number: "6000+", text: "Root Canal Treatments" },
              { number: "10,000+", text: "Restorations" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-lg px-6 py-4 border border-gray-200 rounded-xl text-center max-lg:w-[90%]"
              >
                <h3 className="text-4xl font-semibold text-blue-600">
                  {item.number}
                </h3>
                <p className="mt-2 text-gray-700 font-medium">{item.text}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Image + Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-lg:mb-8"
        >
          <img
            src={chitragohil}
            alt="Doctor"
            className="object-cover -scale-x-100 h-[35rem] max-lg:h-[25rem] pt-2"
          />

          {/* Call Info */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="absolute bottom-60 max-lg:bottom-40 -left-24 max-lg:-left-12 bg-white border border-blue-200 shadow-lg rounded-lg px-4 max-lg:px-1 py-4 max-lg:py-2 flex items-center gap-4"
          >
            <div className="text-5xl max-lg:text-2xl text-blue-500">
              <IoCall />
            </div>
            <div>
              <h1 className="font-semibold text-xl max-lg:text-base font-[Noto_Sans]">
                Need Dental Services?
              </h1>
              <a
                href="tel:+917389181481"
                className="max-lg:text-sm hover:underline"
              >
                Call: +91 7389181481
              </a>
            </div>
          </motion.div>

          {/* Time Info */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute text-white bottom-18 max-lg:bottom-0 -right-10 max-lg:-left-0 bg-blue-500 rounded-lg px-4 max-lg:px-1 py-4 max-lg:py-2 flex items-center gap-4"
          >
            <div className="text-5xl max-lg:text-2xl">
              <IoTime />
            </div>
            <a href="tel:+917389181481">
              <h1 className="font-semibold text-xl max-lg:text-base font-[Noto_Sans]">
                Opening Hours
              </h1>
              <p className="max-lg:text-sm hover:underline">
                Mon to Sat : 10 AM - 2 PM / 4 PM - 8 PM
              </p>
              <p className="max-lg:text-sm hover:underline">
                Sunday : 10 AM - 2 PM
              </p>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
