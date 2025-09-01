import React from "react";
import Slider from "react-slick";
import { BsPlayCircle } from "react-icons/bs";
import { useMediaQuery } from "@react-hook/media-query";
import { IoLogoInstagram } from "react-icons/io5";
import doctor from "../assets/AboutUs/aboutdoctor.png";
import post1 from "../assets/homepage/SocialMedia/post1.png";
import post2 from "../assets/homepage/SocialMedia/post2.png";
import post3 from "../assets/homepage/SocialMedia/post3.png";
import post4 from "../assets/homepage/SocialMedia/post4.png";
import post5 from "../assets/homepage/SocialMedia/post5.png";

const videos = [
  {
    src: post1,
    link: "https://www.instagram.com/drchitraendocaredentalclinic/reel/DNe8_UDCpzp/",
  },
  {
    src: post2,
    link: "https://www.instagram.com/drchitraendocaredentalclinic/reel/DNNFWdTxGPw/",
  },
  {
    src: post3,
    link: "https://www.instagram.com/drchitraendocaredentalclinic/reel/DMXo3pDSva-/",
  },
  {
    src: post4,
    link: "https://www.instagram.com/drchitraendocaredentalclinic/reel/DLrIoD7iDfI/",
  },
  {
    src: post5,
    link: "https://www.instagram.com/drchitraendocaredentalclinic/reel/DL_w-Tlz_Oe/",
  },
];

export default function SocialMedia() {
  const isMobile = useMediaQuery("(max-width: 1023px)");

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1.1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "20px",
  };

  const VideoCard = ({ video }) => (
    <a
      href={video.link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full lg:w-[18rem] h-full bg-black/90 rounded-xl relative block overflow-hidden"
    >
      <img
        src={video.src}
        alt="Instagram Video"
        className="w-full h-[30rem] rounded-xl opacity-40 hover:opacity-100 duration-500 "
      />
      <div className="absolute top-1/2 left-1/2 text-white text-5xl transform -translate-x-1/2 -translate-y-1/2">
        <BsPlayCircle />
      </div>
    </a>
  );

  return (
    <div className="bg-[#f2f3f483] w-full max-lg:flex max-lg:items-center max-lg:justify-center max-lg:flex-col">
      <div className="flex justify-center items-center max-lg:w-[95%] flex-col py-10 px-4">
        <div className="flex gap-5 items-center max-w-[1200px] p-4 max-lg:p-0 rounded-lg w-full mb-4">
           <div className="w-16 h-16 relative rounded-full overflow-hidden">
            <img
              src={doctor}
              alt="Dr. Chita Gohil"
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-xl max-lg:text-base font-semibold text-gray-800">
              Dr. Chitra Gohil,{" "}
              <span className="font-normal">M.D.S (Endodontics)</span>{" "}
              <span className="text-lg text-gray-600">
                <a href="https://www.instagram.com/drchitraendocaredentalclinic">
                  @drchitraendocaredentalclinic
                </a>
              </span>
            </h2>
            <p className="text-lg max-lg:text-sm text-[#10217D] font-medium">
              Associate Professor, Shri Balaji Dental Hospital, Raipur
            </p>
          </div>
        </div>

        {/* Mobile/Tablet View */}
        {isMobile ? (
          <div className="w-full">
            <Slider {...settings}>
              {videos.map((video, idx) => (
                <div key={idx} className="px-2">
                  <VideoCard video={video} />
                </div>
              ))}
            </Slider>
          </div>
        ) : (
          /* Desktop View */
          <div className="w-full relative max-w-[1200px] h-[40rem] flex justify-between gap-5">
            {/* Column 1 */}
            <div className="w-full h-full flex flex-col gap-4 justify-between items-center">
              <VideoCard video={videos[0]} />
              <VideoCard video={videos[1]} />
            </div>

            {/* Column 2 (Big Center Post) */}
            <a
              href={videos[2].link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-full bg-black/90 rounded-xl relative block overflow-hidden"
            >
              <img
                src={videos[2].src}
                alt="Instagram Video"
                className="w-full h-full rounded-xl opacity-40 hover:opacity-100 duration-500 object-cover"
              />
              <div className="absolute top-1/2 left-1/2 text-white text-5xl transform -translate-x-1/2 -translate-y-1/2">
                <BsPlayCircle />
              </div>
            </a>

            {/* Column 3 */}
            <div className="w-full h-full flex flex-col gap-4 justify-between items-center">
              <VideoCard video={videos[3]} />
              <VideoCard video={videos[4]} />
            </div>
          </div>
        )}

        <a href="https://www.instagram.com/drchitraendocaredentalclinic">
          <button
            className="bg-yellow-400 flex justify-center mt-8 items-center gap-2 hover:bg-yellow-500 transition-colors
             font-semibold px-8 py-4 rounded-md shadow-md"
          >
            <div className="text-2xl">
              <IoLogoInstagram />
            </div>{" "}
            Follow on Instagram
          </button>
        </a>
      </div>
    </div>
  );
}
