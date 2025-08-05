import React from "react";
import OurAim from "./OurAim";
import WhyChooseUs from "./WhyChooseUs";
import AboutDoctor from "./AboutDoctor";
import KnowYourDoctor from "./KnowYourDoctor";
import HappyClientSection from "../homepage/ContactUs";

export default function AboutUs() {
  return (
    <div className="font-[roboto]">
      <AboutDoctor />
      <KnowYourDoctor/>
      <OurAim />
      <WhyChooseUs />
      <HappyClientSection/>
    </div>
  );
}
