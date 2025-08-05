"use client";
import React from "react";
import { motion } from "framer-motion";
import doctor from "../assets/AboutUs/chitragohil.png";

export default function KnowYourDoctor() {
  return (
    <section className="flex justify-center items-center flex-col py-10">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-[1100px] justify-center w-full flex flex-col lg:flex-row-reverse items-center gap-10"
      >
        {/* Doctor Image */}
        <motion.img
          src={doctor}
          alt="Dr. Chitra Gohil"
          className="w-[24rem] border-4 border-gray-50 rounded-3xl shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        />

        {/* Doctor Content */}
        <motion.div
          className="w-full max-lg:w-[95%] max-lg:text-center"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-[Noto_Sans] font-bold text-blue-600 mb-4">
            Know Your Doctor
          </h2>
          <p className="mb-4 font-[Noto_Sans] text-base font-bold text-gray-700">
            M.D.S in 2015 from Bapuji Dental College, Karnataka
          </p>
          <div className="space-y-1 mb-8">
            <p className="text-gray-700 leading-relaxed text-[17px]">
              With a reputation for exceptional skill,{" "}
              <strong>Dr. Chitra Gohil</strong> is a leading endodontist in
              Raipur. Her expertise in Root Canal treatment and restorations has
              earned her the trust of countless patients.
            </p>
            <p className="text-gray-700 leading-relaxed text-[17px]">
              She completed her <strong>B.D.S</strong> from Shri Ramchandra
              Medical College, Chennai and her <strong>M.D.S</strong> in 2015
              from Bapuji Dental College, Karnataka. She also pursued a
              Fellowship in Esthetic Dentistry from Chennai.
            </p>
            <p className="text-gray-700 leading-relaxed text-[17px]">
              Currently serving as an Associate Professor at{" "}
              <strong>Shri Balaji Dental Hospital</strong>, she specializes in
              procedures such as veneers, composite buildup, direct & indirect
              restorations, and root canal treatments.
            </p>
            <p className="text-gray-700 leading-relaxed text-[17px]">
              She has successfully performed{" "}
              <strong>6000+ root canal treatments</strong> and over{" "}
              <strong>10,000 restorations</strong>.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
