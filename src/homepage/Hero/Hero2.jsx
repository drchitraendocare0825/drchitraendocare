import familyImg from "../../assets/Homepage/Hero/family.png"; // Replace with your image path

export default function Hero2() {
  return (
    <section className="w-full pt-8 pb-16 max-lg:pb-4 flex items-center max-lg:py-14 justify-center bg-[#F7F7F7] relative overflow-hidden">
      <div className="relative z-10  flex flex-col md:flex-row items-center justify-between w-full max-w-7xl px-6">
        {/* Image Section */}
        <div className="  mb-8 md:mb-0">
          <img
            src={familyImg}
            alt="Happy Family"
            width={600}
            height={400}
            className=" w-[88rem]"
          />
        </div>

        {/* Text Section */}
        <div className="w-full max-lg:flex max-lg:justify-center   max-lg:text-center max-lg:mb-10 max-lg:items-center max-lg:flex-col">
          <h4 className="text-xl md:text-2xl font-light">
            Welcome to Dr. Chitra Endocare
          </h4>
          <h1 className="text-3xl md:text-5xl font-bold leading-snug mb-4">
            Caring For All Your <br />
            <span className="bg-white text-blue-500 px-2 ">
              Family’s Dental Needs.
            </span>
          </h1>
          <p className="text-base md:text-base max-w-md mb-6">
            Your family's smile is our priority. From routine checkups to
            advanced dental treatments, we provide personalized care in a
            friendly, hygienic environment.
          </p>

          {/* Buttons */}
          <div className="space-x-4 max-lg:space-x-2">
            <a href="/contact">
              <button className="bg-yellow-300 px-10 py-2 duration-300 rounded-md font-semibold hover:bg-yellow-500">
              Book Now
            </button>
            </a>
            <a href="/about">
              <button
              className="border bg-white duration-300 border-gray-700 py-2 rounded-md 
            font-semibold hover:bg-black hover:text-white px-10"
            >
              Learn More
            </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
