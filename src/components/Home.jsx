import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Contacts from "../components/Contacts";
import Aboutus from "./Aboutus";
import { Link } from "react-router-dom";
import Legalservices from "./Legalservices";
import Ourpeople from "./Ourpeople";

const images = [
  {
    id: 1,
    src: "/Images/DSC_8971.JPG",
    text: "Trusted Legal Solutions for Every Client",
  },
  {
    id: 2,
    src: "/Images/DSC_8973.JPG",
    text: "Professional Advocacy with Integrity",
  },
  { id: 3, src: "/Images/DSC_8977.JPG" },
  { id: 4, src: "/Images/DSC_8983.JPG" },
  { id: 5, src: "/Images/DSC_8988.JPG" },
  { id: 6, src: "/Images/DSC_8999.JPG" },
];

function Home() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative w-full h-[100vh] overflow-hidden">
        {images.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          >
            {/* IMAGE */}
            <img
              src={item.src}
              alt="Carousel slide"
              className="w-full h-full object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* CONTENT */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              {item.text && (
                <h1 className="text-white text-3xl md:text-5xl font-bold mb-6 max-w-3xl">
                  {item.text}
                </h1>
              )}

              <Link
                to="/contacts"
                className="text-white px-8 py-3 border border-800 rounded-full font-semibold hover:bg-[#b81abb] transition-all duration-300 ease-in-out"
              >
                <button>Contact Us</button>
              </Link>
            </div>
          </div>
        ))}

        {/* LEFT ARROW */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition"
        >
          <FaChevronLeft size={20} />
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition"
        >
          <FaChevronRight size={20} />
        </button>

        {/* AUTO DOTS matching the image style */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`rounded-full transition-all duration-300 ${
                index === current
                  ? "w-3.5 h-3.5 bg-white"
                  : "w-3.5 h-3.5 border border-white bg-transparent"
              }`}
            />
          ))}
        </div>
      </section>

      <section id="contacts" className="bg-white">
        <Aboutus />
      </section>
      <section id="legalservices" className="bg-white">
        <Legalservices />
      </section>
      <section id="ourpeople" className="bg-white">
        <Ourpeople />
      </section>
      <section id="contacts" className="bg-white">
        <Contacts />
      </section>
    </>
  );
}

export default Home;
