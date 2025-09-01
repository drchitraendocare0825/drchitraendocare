import React from "react";
import Services from "./Services";
import AboutUs from "./AboutUs";
import WhyChooseUs from "./WhyChooseUs";
import ContactUs from "./ContactUs";
import Testimonials from "./Testimonials";
import Gallery from "./Gallery";
import HeroSlider from "./Hero/Hero";
import SocialMedia from "./SocialMedia";

export default function Homepage() {
  return (
    <div className="font-[roboto]">
      <HeroSlider/>
      <AboutUs />
      <Services />
      <WhyChooseUs/>
      <Testimonials/>
      <Gallery/>
      <SocialMedia/>
      <ContactUs/>
    
    </div>
  );
}
