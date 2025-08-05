import React, { useRef } from "react";
import Slider from "react-slick";
import Hero1 from "./Hero1";
import Hero2 from "./Hero2";
import Hero3 from "./Hero3";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HeroSlider() {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false, // Explicitly disabled
    beforeChange: () => sliderRef.current?.slickPause(),
    afterChange: () => sliderRef.current?.slickPlay(),
  };

  const slides = [<Hero1 />, <Hero2 />, <Hero3 />];

  const handleStart = () => sliderRef.current?.slickPause();
  const handleEnd = () => sliderRef.current?.slickPlay();

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseDown={handleStart}
      onMouseUp={handleEnd}
      onTouchStart={handleStart}
      onTouchEnd={handleEnd}
    >
      <Slider {...settings} ref={sliderRef}>
        {slides.map((slide, index) => (
          <div key={index}>{slide}</div>
        ))}
      </Slider>
    </div>
  );
}
