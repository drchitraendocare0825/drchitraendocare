"use client";
import React, { useState } from "react";
import { BiArrowFromTop, BiArrowToTop } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import logo from "../assets/AboutUs/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="flex justify-center items-center shadow font-[roboto] text-white sticky top-0 left-0 z-50 bg-[#0D1B2A]">
      <div className="w-full  max-w-[1200px] ">
        {/* Top Bar */}
        <div className=" text-gray-600 max-lg:hidden text-sm px-4 pt-2 flex justify-between items-center ">
          <div className="flex gap-6 items-center flex-wrap">
            <div className="flex items-center gap-1">
              <FaPhoneAlt className="text-blue-500" />
              <a
                href="tel:+917389181481"
                rel="noopener noreferrer"
                className="hover:underline text-white"
              >
                +91 7389181481
              </a>
            </div>
            <div className="flex items-center gap-1">
              <FaMapMarkerAlt className="text-blue-500" />
              <a
                href="https://maps.app.goo.gl/y1s2Bs9Cj3XK24G46"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-white"
              >
                Shankar Nagar, Raipur, Chhattisgarh
              </a>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-1">
              <FaRegCalendarAlt className="text-blue-500" />
              <a
                href="https://g.co/kgs/ZiFUwFF"
                className="hover:underline text-white flex gap-1 justify-center items-end"
              >
                <p>Monday - Saturday : 10.00 am - 2.00 pm</p> /
                <p> 4.00 pm - 8.00 pm</p>
              </a>
            </div>
            <div className="flex items-center gap-1">
              <a
                href="https://g.co/kgs/ZiFUwFF"
                className="hover:underline text-white flex gap-1 justify-center items-end"
              >
                <p>Sunday : 10.00 am - 2.00 pm</p>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className=" px-4 py-3 flex justify-between items-center relative ">
          {/* Logo */}
          <div className="flex items-center gap-2">
            {/* <img src="/logo.png" alt="logo" className="w-8 h-8" /> */}
            <h1 className="text-2xl font-bold flex max-lg:flex-col justify-center items-center gap-2">
              <a href="/">
                <img src={logo} alt="Logo" className="w-14 h-14" />
              </a>
              <a href="/" className="max-lg:hidden">
                Dr. Chitra <span className="text-yellow-400">Endocare</span>
              </a>
            </h1>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-lg font-[Noto_Sans]">
            <a href="/" className="hover:text-yellow-300 font-medium">
              Home
            </a>
            <a href="/about" className="hover:text-yellow-300 font-medium">
              About Us
            </a>

            <a href="/services" className="hover:text-yellow-300 font-medium">
              Services
            </a>

            <a href="/contact" className="hover:text-yellow-300 font-medium">
              Contact Us
            </a>
          </nav>

          {/* Appointment Button */}
          <a href="/contact">
            <button className="bg-yellow-300 max-lg:left-8 relative hover:bg-yellow-400 text-black font-semibold px-5 py-2 rounded">
              Book Appointment
            </button>
          </a>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-4xl" onClick={toggleMenu}>
            {isOpen ? <HiX /> : <HiMenu />}
          </button>

          {/* Mobile Dropdown Menu */}
          {isOpen && (
            <div className="absolute top-full text-black left-0 w-full bg-white shadow-md flex flex-col px-4 py-4 gap-4 md:hidden z-10">
              <a href="/" className="text-blue-600 font-semibold">
                Home
              </a>
              <a href="/about" className="font-medium">
                About Us
              </a>
              <a href="/services" className="font-medium">
                Services
              </a>

              <a href="/contact" className="font-medium">
                Contact Us
              </a>
              <a href="/contact">
                <button className="bg-yellow-300 hover:bg-yellow-400 text-black font-semibold px-5 py-2 rounded">
                  Make an Appointment
                </button>
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
