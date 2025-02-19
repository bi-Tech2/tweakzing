import React from "react";
import { FaBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";
import Drag from "../components/Drag.jsx";
import { Slide } from "react-awesome-reveal";
import BorderRadiusAdjuster from "../components/BorderRadiusAdjuster.jsx"

const componentsList = [
  { title: "Login Form", img: "/login.jpg", link: "/" },
  { title: "Popup", img: "/popup.jpg", link: "/" },
  { title: "Testimonials", img: "/img2.jpg", link: "/" },
  { title: "Sidebar", img: "/img3.jpg", link: "/" },
  { title: "Paginations", img: "/img1.jpg", link: "/" },
  { title: "Pricing", img: "/pricing.jpg", link: "/" },
  { title: "Signup Form", img: "/signup.jpg", link: "/" },
  { title: "Plain Forms", img: "/img5.jpg", link: "/" },
  { title: "Footer", img: "/img6.jpg", link: "/" },
  { title: "Calender", img: "/img7.jpg", link: "/" },
  { title: "Alerts", img: "/img8.jpg", link: "/" },
  { title: "Claims", img: "/img9.jpg", link: "/" },
  { title: "user Profile", img: "/img10.jpg", link: "/" },
  { title: "Carousel", img: "/img4.jpg", link: "/" },
];

const Explore = () => (

    
  <div className="y">
    <div className="iok text-1xl text-white mt-20 p-2 relative md:p-4 md:px-10 px-5 -mb-8">
      <button className="flex gap-4 items-center text-gray-400 bg-[#000000] px-6 py-2 rounded-full">
        <FaBookmark />
        <span>Explore Library</span>
      </button>
    </div>

    <Drag />

    <div id="section1" className="mb-20">
      <div className="headings md:px-10 px-5 flex justify-between text-amber-50 w-full items-center md:py-2 py-5">
        <h1 className="text-2xl font-extrabold md:text-4xl text-gray-300 md:py-10 py-3">
          Component Inspiration
        </h1>
        <Link className="hover:underline text-gray-500">See All</Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-8 flex-wrap px-5 gap-8 md:px-10">
        {componentsList.map((component, index) => (
          <Slide
            triggerOnce
            direction="top"
            delay={index % 2 === 0 ? 500 : 200} // Slow for even, fast for odd
            key={index}
          >
            <Link to={component.link} className="text-gray-400 text-center">
              <img src={component.img} className="w-42" alt={component.title} />
              <h2>{component.title}</h2>
            </Link>
          </Slide>
        ))}
      </div>
    </div>
    
    <BorderRadiusAdjuster />

    {/* Other sections */}
    {[
      "Image Cropping",
      "Color Palette Generator",
      "Dummy Content Generator",
      "CSS Gradient Generator",
      "SVG to PNG Converter",
      "Favicon Generator",
      "Image Border Radius",
      "Live Code Playground",
    ].map((title, index) => (
      <Slide key={index} triggerOnce delay={200}>
        <div className="headings md:px-10 px-5 flex justify-between text-amber-50 w-full items-center md:py-2 py-5 mb-20">
          <h1 className="text-2xl font-extrabold md:text-4xl text-gray-300">
            {title}
          </h1>
          <Link className="hover:underline text-gray-500">See All</Link>
        </div>
      </Slide>
    ))}
  </div>
);

export default Explore;
