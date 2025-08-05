import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import bgclinic from "../assets/Services/bgclinic-min.jpg";
import serviceimg1 from "../assets/Services/serviceimg1-min.jpg";
import serviceimg2 from "../assets/Services/serviceimg2-min.jpg";
import serviceimg3 from "../assets/Services/serviceimg3-min.jpg";
import serviceimg4 from "../assets/Services/serviceimg4-min.jpg";
import serviceimg5 from "../assets/Services/serviceimg5-min.jpg";
import serviceimg6 from "../assets/Services/serviceimg6-min.jpg";
import serviceimg7 from "../assets/Services/serviceimg7-min.jpg";
import serviceimg8 from "../assets/Services/serviceimg8-min.jpg";
import serviceimg9 from "../assets/Services/serviceimg9-min.jpg";
import HappyClientSection from "../homepage/ContactUs";
import clearaligners from "/src/assets/Homepage/Services/clear aligners.jpg";

const services = [
  {
    title: "Dental Fillings",
    description:
      "Dental fillings restore teeth damaged by decay using tooth-colored composite materials. They help prevent further decay, preserve your tooth’s natural structure, and maintain a natural appearance.",
    image: serviceimg1,
  },
  {
    title: "Root Canal Treatment",
    description:
      "Root canal treatment removes infected pulp from inside the tooth. It relieves pain, cleans and shapes the root canals, then seals them to prevent reinfection.",
    image: serviceimg2,
  },
  {
    title: "Extraction",
    description:
      "Tooth extraction is done when a tooth is severely damaged or decayed and cannot be saved. It helps relieve pain, prevent infection, and make space for other treatments.",
    image: serviceimg3,
  },
  {
    title: "Teeth Whitening",
    description:
      "Teeth whitening removes stains and discoloration using professional bleaching agents to brighten teeth. Ideal for stains from food, drinks, smoking, or aging.",
    image: serviceimg4,
  },
  {
    title: "Cosmetic Treatment",
    description:
      "Cosmetic treatments like veneers, crowns, and implants improve smile aesthetics and function. These solutions are long-lasting and natural-looking.",
    image: serviceimg5,
  },
  {
    title: "Preventive Care",
    description:
      "Includes cleanings, fluoride application, and sealants to prevent decay. Regular checkups help maintain healthy teeth and gums.",
    image: serviceimg6,
  },
  {
    title: "Pediatric Treatment",
    description:
      "Specialized care for children from teething to permanent teeth. Gentle and child-friendly approach to ensure a positive dental experience.",
    image: serviceimg7,
  },
  {
    title: "Orthodontic Braces",
    description:
      "Braces align teeth and jaws. We offer both metal and ceramic braces to gradually move teeth into proper alignment for improved function and appearance.",
    image: serviceimg8,
  },
  {
    title: "Dental Implant",
    description:
      "A dental implant service is like a tiny metal root that a dentist puts into your jawbone where the tooth used to be. Then they attach a fake tooth on top that looks and works like the real thing. It’s like building a new tooth from the ground up!",
    image: serviceimg9,
  },
  {
    title: "Clear Aligners",
    description:
      "Clear aligners is transparent removable orthodontic device used to close the gap or straighten teeth..they are popular for esthetic looks and comfort.",
    image: clearaligners,
  },
];

export default function Services() {
  // Animation variants for service cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  // Animation variants for hero section
  const heroVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="font-[roboto]">
      {/* Hero Section */}
      <div className="relative bg-[#000000c0] overflow-hidden flex justify-center items-center">
        <img
          src={bgclinic}
          alt="Clinic Background"
          className="absolute w-full h-full object-cover -z-10"
        />
        <motion.div
          className="text-white py-20 px-6 md:px-20 text-center w-full max-w-[1300px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={heroVariants}
        >
          <motion.h1
            className="text-3xl md:text-4xl text-yellow-400 font-[Noto_Sans] font-bold mb-2"
            variants={heroVariants}
            transition={{ delay: 0.2 }}
          >
            Our Dental Services
          </motion.h1>
          <motion.p
            className="text-lg text-white/90"
            variants={heroVariants}
            transition={{ delay: 0.4 }}
          >
            Compassionate care, advanced treatments, confident smiles.
          </motion.p>
        </motion.div>
      </div>

      {/* Services Section */}
      <div className="flex justify-center items-center">
        <section className="py-16 px-4 max-w-[1200px] w-full mx-auto">
          <div className="space-y-12">
            {services.map((service, index) => {
              const isReverse = index % 2 === 1;

              return (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardVariants}
                  custom={index}
                  className={`flex flex-col ${
                    isReverse ? "lg:flex-row-reverse" : "lg:flex-row"
                  } items-center gap-6 p-6 rounded-2xl bg-white shadow-[0_0_10px_lightgray]`}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full sm:w-[28rem] md:w-[36rem] h-[16rem] md:h-[20rem] object-cover rounded-xl shadow"
                  />
                  <div className="w-full max-w-xl">
                    <h3 className="text-2xl font-[Noto_Sans] font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 text-base md:text-lg mb-4">
                      {service.description}
                    </p>
                    <a href="/contact">
                      <button className="bg-yellow-300 hover:bg-yellow-400 text-black font-[Noto_Sans] font-semibold px-5 py-2 rounded-lg">
                        Book Appointment
                      </button>
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      </div>
      <HappyClientSection />
    </section>
  );
}