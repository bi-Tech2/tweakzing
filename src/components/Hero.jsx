import React from 'react';
import { FaGithub, FaAward, FaInstagram } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="mt-36 md:mt-36 flex flex-col items-center justify-center text-center px-4 md:px-10">
      {/* Sponsor Section */}
      <div className="sponsor flex flex-col items-center gap-3">
        <p className="text-gray-400">Sponsored by</p>
        <div className="flex items-center gap-5 relative">
          {/* Sponsor 1 */}
          <div className="group relative">
            <img
              src="/fav-dark.jpg"
              alt="Brand 1"
              className="w-12 h-12 object-contain rounded-md cursor-pointer transition-transform duration-200 hover:scale-110"
            />
            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 bg-[#151515] text-white text-xs px-2 py-1 rounded-md transition-all duration-200 w-max opacity-0 group-hover:opacity-100">
              Brand 1
            </span>
          </div>

          {/* Sponsor 2 */}
          <div className="group relative">
            <img
              src="/fav.jpg"
              alt="Brand 2"
              className="w-12 h-12 object-contain rounded-md cursor-pointer transition-transform duration-200 hover:scale-110"
            />
            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 bg-[#151515] text-white text-xs px-2 py-1 rounded-md transition-all duration-200 w-max opacity-0 group-hover:opacity-100">
              Brand 2
            </span>
          </div>

          {/* Add Sponsor */}
          <div className="group relative">
            <span className="text-2xl cursor-pointer bg-[#151515] text-gray-500 md:px-4 md:py-2 px-4 py-2 rounded-lg transition-transform duration-200 hover:scale-110">
              +
            </span>
            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 bg-[#151515] text-white text-xs px-2 py-1 rounded-md transition-all duration-200 w-max opacity-0 group-hover:opacity-100">
              And you?
            </span>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="main text-amber-50 md:mt-5 mt-10">
      <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-gray-400 via-gray-600 to-black text-transparent bg-clip-text animate-pulse">
  Empowering Developers, <span className="text-gray-200">One Line of Code at a Time<span className="lm text-36">.</span></span>
</h1>
<p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
  Build, innovate, and collaborate with cutting-edge tools designed to enhance your workflow. 
  Whether you're a beginner or an expert, our platform is here to support your growth.
</p>


        {/* Buttons */}
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <button className="cursor-pointer flex items-center gap-2 px-6 py-3 hover:bg-gray-700 text-white rounded-md shadow-md transition-all duration-300 bg-gray-800 hover:scale-105">
            <FaGithub />
            <span>Star Repo</span>
          </button>
          <button className="cursor-pointer flex items-center gap-2 px-6 py-3 bg-pink-500 text-white rounded-md shadow-md transition-all duration-300 hover:bg-pink-600 hover:scale-105">
            <FaInstagram />
            <span>Instagram</span>
          </button>
          <button className="cursor-pointer flex items-center gap-2 px-6 py-3 bg-[#151515] text-white rounded-md shadow-md transition-all duration-300 hover:bg-gray-900 hover:scale-105">
            <FaAward />
            <span>Become a sponsor</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
