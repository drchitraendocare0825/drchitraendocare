import { FaArrowRight } from "react-icons/fa";
import dentalfillings from "/src/assets/Homepage/Services/dentalfillings.jpg";
import tooth_filling from "/src/assets/Homepage/Services/tooth-filling.png";
import rootcanal from "/src/assets/Homepage/Services/rootcanal.jpg";
import root_canal_icon from "/src/assets/Homepage/Services/root-canal.png";
import extraction from "/src/assets/Homepage/Services/extraction.jpg";
import tooth_extraction_icon from "/src/assets/Homepage/Services/tooth-extraction.png";
import teethwhitening from "/src/assets/Homepage/Services/teethwhitening.jpg";
import tooth_whitening_icon from "/src/assets/Homepage/Services/tooth-whitening.png";
import cosmetictreatment from "/src/assets/Homepage/Services/cosmetictreatment.jpg";
import cosmetic_icon from "/src/assets/Homepage/Services/cosmetic.png";
import preventivecare from "/src/assets/Homepage/Services/preventivecare.jpg";
import prevention_icon from "/src/assets/Homepage/Services/prevention.png";
import pediatrictreatment from "/src/assets/Homepage/Services/pediatrictreatment.jpg";
import specialist_icon from "/src/assets/Homepage/Services/specialist.png";
import orthodonticbraces from "/src/assets/Homepage/Services/orthodonticbraces.jpg";
import cosmetic1_icon from "/src/assets/Homepage/Services/cosmetic (1).png";
import dentalimplant from "/src/assets/Homepage/Services/dental-implant1.png";
import dental_implant from "/src/assets/Homepage/Services/dental-implant.png";
import clearaligners from "/src/assets/Homepage/Services/clear aligners.jpg";
import clear_aligners from "/src/assets/Homepage/Services/dental-trainer_8732965.png";
import { motion } from "framer-motion";

const services = [
  {
    title: "Gentle Dental Fillings",
    description:
      "Dental fillings restore teeth damaged by decay using tooth-colored composite materials. They help prevent further decay, preserve your tooth’s natural structure, and maintain a natural appearance.",
    image: dentalfillings,
    icon: tooth_filling,
  },
  {
    title: "Root Canal Therapy",
    description:
      "Root canal treatment removes infected pulp from inside the tooth. It relieves pain, cleans and shapes the root canals, then seals them to prevent reinfection.",
    image: rootcanal,
    icon: root_canal_icon,
  },
  {
    title: "Tooth Extractions",
    description:
      "Tooth extraction is done when a tooth is severely damaged or decayed and cannot be saved. It helps relieve pain, prevent infection, and make space for other treatments.",
    image: extraction,
    icon: tooth_extraction_icon,
  },
  {
    title: "Professional Teeth Whitening",
    description:
      "Teeth whitening removes stains and discoloration using professional bleaching agents to brighten teeth. Ideal for stains from food, drinks, smoking, or aging.",
    image: teethwhitening,
    icon: tooth_whitening_icon,
  },
  {
    title: "Cosmetic Dentistry",
    description:
      "Cosmetic treatments like veneers, crowns, and implants improve smile aesthetics and function. These solutions are long-lasting and natural-looking.",
    image: cosmetictreatment,
    icon: cosmetic_icon,
  },
  {
    title: "Preventive Care",
    description:
      "Includes cleanings, fluoride application, and sealants to prevent decay. Regular checkups help maintain healthy teeth and gums.",
    image: preventivecare,
    icon: prevention_icon,
  },
  {
    title: "Pediatric Treatment",
    description:
      "Specialized care for children from teething to permanent teeth. Gentle and child-friendly approach to ensure a positive dental experience.",
    image: pediatrictreatment,
    icon: specialist_icon,
  },
  {
    title: "Orthodontic Braces",
    description:
      "Braces align teeth and jaws. We offer both metal and ceramic braces to gradually move teeth into proper alignment for improved function and appearance.",
    image: orthodonticbraces,
    icon: cosmetic1_icon,
  },
  {
    title: "Dental Implant",
    description:
      "A dental implant service is like a tiny metal root that a dentist puts into your jawbone where the tooth used to be. Then they attach a fake tooth on top that looks and works like the real thing. It’s like building a new tooth from the ground up!",
    image: dentalimplant,
    icon: dental_implant,
  },
  {
    title: "Clear Aligners",
    description:
      "Clear aligners is transparent removable orthdodontic device used to close the gap or straighten teeth..they are popular for esthetic looks and comfort.",
    image: clearaligners,
    icon: clear_aligners,
  },
];

export default function Services() {
  return (
    <section className="py-16 px-4 lg:px-8 bg-blue-50 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-[Noto_Sans]">
        <span className="text-blue-600">Our Specialized</span>{" "}
        <span className="text-gray-900">Services</span>
      </h2>
      <p className="text-gray-500 max-w-2xl mx-auto mb-12">
        Dr. Chitra Endocare Clinic is dedicated to providing personalized,
        expert care in a supportive environment. Discover our range of services
        designed with your well-being in mind.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="group perspective"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div
              className="relative w-full h-[25rem] transition-transform duration-500 transform-style-preserve-3d
         group-hover:rotate-y-180"
            >
              {/* Front */}
              <div
                className="absolute inset-0 backface-hidden rounded-xl overflow-hidden shadow-md flex 
          flex-col justify-end bg-cover bg-center"
                style={{ backgroundImage: `url(${service.image})` }}
              >
                <div className="bg-white bg-opacity-80 p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <img src={service.icon} alt="icon" className="w-12 h-12" />
                    <h3 className="text-base font-bold text-gray-800 font-[Noto_Sans]">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Back */}
              <div
                className="absolute inset-0 backface-hidden rotate-y-180 bg-white p-5
           rounded-xl shadow-lg flex flex-col justify-center items-start text-left"
              >
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={service.icon}
                    alt={`${service.title} icon`}
                    className="w-10 h-10"
                  />
                  <h3 className="text-lg font-bold text-gray-800 font-[Noto_Sans]">
                    {service.title}
                  </h3>
                </div>
                <p className="text-base text-gray-600 mb-3">
                  {service.description}
                </p>
                <a
                  href="/services"
                  className="text-blue-600 font-medium inline-flex items-center gap-1 hover:underline"
                >
                  Learn More <FaArrowRight className="text-sm" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
