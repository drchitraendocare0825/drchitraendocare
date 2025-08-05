import React from "react";
import { motion } from "framer-motion";
import aboutusimage1 from "../assets/Homepage/AboutUs/aboutusimage1.jpg";
import aboutusimage2 from "../assets/Homepage/AboutUs/aboutusimage2.jpg";
import aboutusimage3 from "../assets/Homepage/AboutUs/aboutusimage3.jpg";

export default function AboutUs() {
  return (
    <section className="py-16 px-4 lg:px-20 bg-white flex justify-center items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-[1200px]">
        {/* Left: Image Grid */}
        <motion.div
          className="flex gap-5 justify-center items-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col gap-8 justify-center items-end">
            <motion.img
              src={aboutusimage3}
              alt="Dental Image 1"
              className="rounded-3xl w-50 h-50 max-lg:h-38 object-cover"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            />
            <motion.img
              src={aboutusimage2}
              alt="Dental Image 2"
              className="rounded-3xl w-66 h-66 max-lg:h-60 object-cover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            />
          </div>
          <motion.img
            src={aboutusimage1}
            alt="Dental Image 3"
            className="rounded-3xl w-60 max-lg:w-44 h-full object-cover col-span-2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Right: Text Content */}
        <motion.div
          className="max-lg:text-center"
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-blue-600 font-semibold mb-2 font-[Noto_Sans]">About Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight font-[Noto_Sans]">
            Your Smile is More <br /> Than Our Goal <br /> It’s Our Shared Success Story
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl">
            At Dr. Chitra Endocare, we blend advanced dental care with a gentle
            touch. Led by Dr. Chitra Gohil specialist in Root Canals and
            Esthetic Dentistry we offer expert treatments using the latest
            technology, strict hygiene, and patient-first care.
          </p>

          <div className="grid grid-cols-0 sm:grid-cols-2 gap-y-4 gap-x-6 mb-6">
            {[
              "6,000+ Root Canals & 10,000+ Restorations",
              "Top-tier hygiene & sterilization standards",
              "Sunday appointments for your convenience",
              "Latest tech & high-quality materials",
            ].map((point, idx) => (
              <motion.p
                key={idx}
                className="flex items-start text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + idx * 0.2 }}
                viewport={{ once: true }}
              >
                <span className="text-blue-600 mr-2">✔</span> {point}
              </motion.p>
            ))}
          </div>

          <motion.a
            href="/about"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <button className=" bg-yellow-300 hover:bg-yellow-400 text-black font-[Noto_Sans] font-semibold px-8 py-3 rounded-lg">
              Read More
            </button>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
