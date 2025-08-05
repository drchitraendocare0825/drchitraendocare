"use client";
import { Mail, Phone, MapPin } from "lucide-react";
import bgclinic from "../assets/ContactUs/contactus.jpg";
import axios from "axios";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    dob: "",
    gender: "",
    city: "",
    service: "",
    appointmentDate: "",
    time: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const res = await axios.post(
        "https://drchitraendocare-0zlt.onrender.com/api/appointment",
        formData
      );
      setMessage(res.data.message);
      setFormData({
        name: "",
        phone: "",
        dob: "",
        gender: "",
        city: "",
        service: "",
        appointmentDate: "",
        time: "",
      });
    } catch (error) {
      setMessage("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Animation variants for hero section
  const heroVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Animation variants for service cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  return (
    <div className="font-[roboto]">
      <motion.div className="relative bg-black/70 text-white text-center py-20 px-4 md:px-20">
        <img
          src={bgclinic}
          alt="Clinic"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
        <motion.div
          className="text-white px-6 md:px-20 text-center w-full max-w-[1300px]"
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
            Schedule Your Visit
          </motion.h1>
          <motion.p
            className="text-lg text-white/90"
            variants={heroVariants}
            transition={{ delay: 0.4 }}
          >
            Fill out the form below to book an appointment with us.
          </motion.p>
        </motion.div>
      </motion.div>

      <section className="bg-blue-50 py-16 px-4 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-6 md:p-12 rounded-xl shadow-md"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter full name"
                  className="p-2 border rounded w-full border-gray-500"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-1"
                >
                  Mobile Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter mobile number"
                  className="p-2 border rounded w-full border-gray-500"
                />
              </div>

              <div>
                <label htmlFor="dob" className="block text-sm font-medium mb-1">
                  Date of Birth
                </label>
                <input
                  id="dob"
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                  className="p-2 border rounded w-full border-gray-500"
                />
              </div>

              <div>
                <label
                  htmlFor="gender"
                  className="block text-sm font-medium mb-1"
                >
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  className="p-2 border rounded w-full border-gray-500"
                >
                  <option value="">Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium mb-1"
                >
                  City
                </label>
                <input
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  placeholder="Enter your city"
                  className="p-2 border rounded w-full border-gray-500"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium mb-1"
                >
                  Service
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="p-2 border rounded w-full border-gray-500"
                >
                  <option value="">Select Service</option>
                  <option>Gentle Dental Fillings</option>
                  <option>Root Canal Therapy</option>
                  <option>Tooth Extractions</option>
                  <option>Professional Teeth Whitening</option>
                  <option>Cosmetic Dentistry</option>
                  <option>Preventive Care</option>
                  <option>Pediatric Treatment</option>
                  <option>Orthodontic Braces</option>
                  <option>Dental Implant</option>
                  <option>Clear Aligners</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="appointmentDate"
                  className="block text-sm font-medium mb-1"
                >
                  Appointment Date
                </label>
                <input
                  id="appointmentDate"
                  type="date"
                  name="appointmentDate"
                  value={formData.appointmentDate}
                  onChange={handleChange}
                  required
                  className="p-2 border rounded w-full border-gray-500"
                />
              </div>

              <div>
                <label
                  htmlFor="time"
                  className="block text-sm font-medium mb-1"
                >
                  Time
                </label>
                <input
                  id="time"
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="p-2 border rounded w-full border-gray-500"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-yellow-400 hover:bg-yellow-500 transition text-black py-2 rounded font-semibold"
            >
              {loading ? "Booking..." : "Book Appointment"}
            </button>

            {message && <p className="text-green-600 mt-2">{message}</p>}
          </form>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-blue-950 text-white rounded-xl p-6 space-y-6"
          >
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1" />
                <span>
                  MIG-2, beside Central Bank Of India, Sector-3, Shankar Nagar,
                  Raipur, Chhattisgarh
                </span>
              </div>
              <div className="flex items-start gap-3 mt-3">
                <Mail className="w-5 h-5 mt-1" />
                <span>gohil.chitra@gmail.com</span>
              </div>
              <div className="flex items-start gap-3 mt-3">
                <Phone className="w-5 h-5 mt-1" />
                <span>+91 7389181481</span>
              </div>
            </div>
            <div className="aspect-video w-full mt-4">
              <iframe
                title="Clinic Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.558132404149!2d81.6641901!3d21.2534426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd69bfaa335d%3A0x3f1ae16ce2a60c6c!2sDr.%20Chitra's%20Endocare%20%26%20Multispeciality%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1718361869487!5m2!1sen!2sin"
                width="100%"
                height="100%"
                className="rounded"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
