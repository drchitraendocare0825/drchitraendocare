import React from "react";
import {
  CheckCircle,
  MapPin,
  Clock,
  Star,
  ShieldCheck,
  Activity,
  ScanLine,
} from "lucide-react";
import { motion } from "framer-motion"; // Import Framer Motion
import img1 from "../assets/Homepage/Gallery/gallery1.jpg";
import img2 from "../assets/Homepage/Gallery/gallery2.jpg";
import img3 from "../assets/Homepage/Gallery/gallery3.jpg";
import img4 from "../assets/Homepage/Gallery/gallery4.jpg";
import img5 from "../assets/Homepage/Gallery/gallery5.jpg";
import img6 from "../assets/Homepage/Gallery/gallery6.jpg";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <CheckCircle className="w-5 h-5 text-white" />,
      title: "Sterilization and Hygiene",
      desc: "We maintain the highest standards of sterilization to ensure your safety.",
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-white" />,
      title: "Patient-Centered Care",
      desc: "We prioritize the patient's needs, comfort, and satisfaction.",
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-white" />,
      title: "Expertise",
      desc: "Here, treatments are performed by experienced & super specialized dentists ensuring precise work.",
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-white" />,
      title: "Sunday Availability",
      desc: "We are open from 10 AM – 2 PM on Sundays to accommodate your schedule & provide convenient access.",
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-white" />,
      title: "Affordable Rates",
      desc: "We strive to provide the best quality dental care at affordable prices, making it accessible to everyone.",
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-white" />,
      title: "Advanced Material",
      desc: (
        <>
          <p className="text-base">
            Endocare Dental Clinic utilizes advanced dental materials:
          </p>
          <ul className="list-disc text-base space-y-2">
            <li>Bioactive materials like MTA and Biodentine.</li>
            <li>Ceramic and porcelain for esthetic crowns and bridges.</li>
            <li>
              Tooth replacement materials such as EverX Flow and composites.
            </li>
            <li>Ozone therapy for treating sensitivity.</li>
          </ul>
        </>
      ),
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-white" />,
      title: "Advanced Technology",
      desc: (
        <>
          <p className="text-base">
            By incorporating advanced materials and technology, Endocare
            provides high-quality, effective dental care. Key tools include:
          </p>
          <ul className="list-disc text-base space-y-2">
            <li>Advanced diagnostic tools such as Intraoral Camera.</li>
            <li>
              Advanced root canal devices like Fi-P and Fi-G obturating devices.
            </li>
            <li>Portable X-ray machine for patient convenience.</li>
            <li>Digital dental scanner for precise imaging and planning.</li>
          </ul>
        </>
      ),
    },
  ];

  const images = [img1, img2, img3, img4, img5, img6];

  // Animation variants for features
  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
  };

  // Animation variants for images
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  return (
    <div>
      <section className="bg-white mt-4 flex justify-center items-center flex-col">
        <div className="w-full max-w-[1200px] max-lg:flex max-lg:items-center max-lg:justify-center max-lg:flex-col">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl w-full max-lg:text-center font-[Noto_Sans] text-left max-w-[1200px] md:text-4xl font-extrabold text-blue-600 mb-6"
          >
            Why Choose Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base max-lg:w-[95%] w-full text-left max-w-[600px] max-lg:text-center mb-8"
          >
            Dr. Chitra Endocare Dental Clinic delivers exceptional care with a
            patient-first approach. Our skilled team ensures each visit is
            precise, comfortable, and focused on lasting oral health—making
            every smile healthier, brighter, and more confident.
          </motion.p>
        </div>
        <div className="max-w-[1200px] w-full flex justify-center items-start gap-10 max-lg:w-[90%]">
          {/* Image Grid */}
          <div className="flex flex-wrap w-[35rem] gap-10 max-lg:hidden">
            {images.map((img, index) => {
              let roundedClass = "";

              switch (index) {
                case 0:
                  roundedClass = "rounded-tr-[5rem] rounded-bl-[5rem]";
                  break;
                case 1:
                  roundedClass = "rounded-br-[5rem] rounded-tl-[5rem]";
                  break;
                case 2:
                  roundedClass = "rounded-tl-[5rem] rounded-br-[5rem]";
                  break;
                case 3:
                  roundedClass = "rounded-tr-[5rem] rounded-bl-[5rem]";
                  break;
                case 4:
                  roundedClass = "rounded-tr-[5rem] rounded-bl-[5rem]";
                  break;
                case 5:
                  roundedClass = "rounded-br-[5rem] rounded-tl-[5rem]";
                  break;
                default:
                  roundedClass = "";
              }

              return (
                <motion.img
                  key={index}
                  src={img}
                  alt={`Why Choose Us ${index + 1}`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={imageVariants}
                  custom={index}
                  className={`object-cover w-[16rem] h-[16rem] shadow-md ${roundedClass}`}
                />
              );
            })}
          </div>

          {/* Feature List */}
          <div className="flex-1">
            <div className="space-y-4">
              {features.map((item, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={featureVariants}
                  custom={i}
                  className="flex items-start gap-4 bg-blue-100 p-4 rounded-lg shadow-sm"
                >
                  <div className="bg-blue-500 p-2 rounded-full">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-base">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}