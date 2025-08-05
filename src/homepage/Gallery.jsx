"use client";
import React from "react";
import { motion } from "framer-motion";
import gallery1 from '../assets/Homepage/Gallery/gallery1.jpg';
import gallery2 from '../assets/Homepage/Gallery/gallery2.jpg';
import gallery3 from '../assets/Homepage/Gallery/gallery3.jpg';
import gallery4 from '../assets/Homepage/Gallery/gallery4.jpg';
import gallery5 from '../assets/Homepage/Gallery/gallery5.jpg';
import gallery6 from '../assets/Homepage/Gallery/gallery6.jpg';

const galleryImages = [
  { image: gallery1 },
  { image: gallery2 },
  { image: gallery3 },
  { image: gallery4 },
  { image: gallery5 },
  { image: gallery6 },
];

const Gallery = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Our Clinic <span className="text-blue-500">Gallery</span>
        </h2>
        <p className="text-gray-600 mb-10">
          Take a glimpse into our state-of-the-art dental facility, designed for your comfort and care.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-2xl shadow-md group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={src.image}
                alt={`Dental Clinic ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
