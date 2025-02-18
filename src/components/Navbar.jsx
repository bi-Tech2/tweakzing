import { Link, useLocation } from "react-router-dom";
import { FaQuestionCircle, FaGithub, FaLink } from "react-icons/fa";
import { Fade, Slide } from "react-awesome-reveal";
import {useState} from "react";
import About from "./About.jsx" 


const Navbar = () => {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const getPageTitle = () => {
    switch (location.pathname) {
      case "/tools":
        return "Explore our Developer Tools";
      case "/remove-background":
        return (
          <Slide triggerOnce top delay={500}>
            <div className="flex gap-2 bg-[#121212] w-max rounded-full items-center text-gray-600">
              <span className="bg-[#1818181] px-2 py-[3px] rounded-full mt-[-5px]">BG Remover</span>
            </div>
          </Slide>
        );
      case "/":
        return (
          <Slide triggerOnce top delay={500}>
            <div className="flex gap-2 bg-[#121212] w-max p-2 rounded-full items-center text-gray-600">
              <FaLink />
              <span className="bg-[#000000] px-2 py-1 rounded-full md:flex hidden">All</span>
            </div>
          </Slide>
        );
      default:
        return "";
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/10 backdrop-blur-md shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-2 py-4 md:scale-[0.95]">
        {/* Logo & Page Title */}
        <div className="flex gap-2 items-center">
          <Link to="/" className="text-2xl font-bold">
            <img src="/tweakz.jpg" className="md:w-38 w-30 bg-black px-2 rounded-lg" alt="Tweakz Logo" />
          </Link>
          <div className="text-white text-sm mt-1">{getPageTitle()}</div>
        </div>

        {/* Menu for larger screens */}
        <ul className="gap-2 md:gap-7 text-[20px] text-white items-center flex">
          <Slide triggerOnce top delay={700}>
            <li>
              <button onClick={openModal} className="btn-glow flex gap-2">
                <FaQuestionCircle />
                <span className="md:block hidden">About</span>
              </button>
            </li>
          </Slide>
          <Slide triggerOnce top delay={500}>
            <button>
              <Link to="/about" className="btn-glow flex gap-4 px-0 py-4 rounded-full items-center md:text-lg text-2xl">
                <FaGithub /> <span className="md:block hidden">Star on GitHub</span>
              </Link>
            </button>
          </Slide>
        </ul>
      </div>
      <About isOpen={isModalOpen} onClose={closeModal} />
    </nav>
  );
};

export default Navbar;
