import React from "react";
import { motion } from "framer-motion";
import ico1 from "../assets/Homepage/WhyChooseUs/shield.png";
import ico2 from "../assets/Homepage/WhyChooseUs/ico1.png";
import ico3 from "../assets/Homepage/WhyChooseUs/ico3.png";
import ico4 from "../assets/Homepage/WhyChooseUs/affordable (1).png";
import doctor1 from "../assets/Homepage/WhyChooseUs/whychooseus.jpg";

export default function WhyChooseUs() {
  const features = [
    {
      icon: ico1,
      title: "Ultra-Clean, Safe Environment",
      desc: "We follow strict sterilization and hygiene protocols to ensure every visit is worry-free and comfortable.",
    },
    {
      icon: ico2,
      title: " Advanced Tech & Materials",
      desc: "From digital X-rays to tooth-colored materials, we use the latest tools for precise, pain-free, and long-lasting care.",
    },
    {
      icon: ico3,
      title: "Experienced Dental Expertise",
      desc: "Led by Dr. Chitra, our team brings years of hands-on skill and personalized attention to every treatment.",
    },
    {
      icon: ico4,
      title: "Affordable Rates",
      desc: "We strive to provide the best quality dental care at affordable prices, making it accessible to everyone.",
    },
  ];

  return (
    <div className="bg-blue-50 w-full py-14 flex items-center justify-center">
      <section className="max-w-[1250px] w-full max-lg:w-[90%] max-lg:flex max-lg:items-center max-lg:justify-center max-lg:flex-col">
        <p className="text-blue-600 font-bold mb-3 tracking-wide text-lg font-[Noto_Sans]">
          Why Choose Us
        </p>
        <div className="mx-auto flex flex-col justify-center lg:flex-row items-start gap-12">
          {/* Left Section - Text */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="max-lg:text-3xl max-lg:text-center md:text-5xl font-bold text-gray-800 leading-tight mb-4 font-[Noto_Sans]">
              Your Smile Deserves The Best — Here’s Why Patients Trust <br />
              <span className="text-blue-500">Dr. Chitra’s Endocare</span>
            </h2>
            <p className="text-gray-600 mb-10 max-lg:text-center max-w-xl leading-relaxed">
              Your comfort and care come first. Dr. Chitra Endocare makes every
              visit stress-free while delivering high-quality dental solutions
              for every smile.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  <img src={item.icon} alt={item.title} className="w-12 h-12" />
                  <div>
                    <h4 className="font-semibold text-lg text-gray-800 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <a href="/about">
              <button className="hidden md:block mt-8 bg-yellow-300 hover:bg-yellow-400 text-black font-[Noto_Sans] font-semibold px-8 py-3 rounded-lg">
                Read More
              </button>
            </a>
          </motion.div>

          {/* Right Section - Image */}
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img
              src={doctor1}
              alt="Dental 1"
              className="rounded-2xl object-cover w-[30rem] shadow-md"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
