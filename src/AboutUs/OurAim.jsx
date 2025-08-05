"use client";
import React from "react";
import { motion } from "framer-motion";
import chitragohil from "../assets/AboutUs/ourmission.jpg";

export default function OurAim() {
  return (
    <section className="bg-[#F7F7F7] py-12 px-4 flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-[1200px] w-full flex flex-col-reverse max-lg:flex-col lg:flex-row-reverse justify-center items-center gap-12"
      >
        {/* Doctor Image */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img
            src={chitragohil}
            alt="Dr. Chitra Gohil"
            className="w-64 sm:w-80 md:w-[28rem] lg:w-[30rem] -scale-x-100 rounded-3xl shadow-lg"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="text-left max-w-xl"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl max-lg:text-center md:text-4xl font-[Noto_Sans] font-extrabold text-blue-600 mb-4">
            Our Mission
          </h2>
          <ul className="text-gray-700 text-base md:text-lg leading-relaxed list-disc pl-5 space-y-2">
            <li>To listen carefully to your concerns and needs.</li>
            <li>
              To provide clear explanations and transparent treatment plans.
            </li>
            <li>To deliver high-quality treatment with care.</li>
            <li>To support you throughout your treatment journey.</li>
            <li>To help in achieving a healthy, confident smile.</li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
