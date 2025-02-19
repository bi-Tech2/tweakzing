import { useEffect } from "react";
import {FaCompressAlt} from "react-icons/fa"

const About = ({ isOpen, onClose }) => {
  // Close modal when clicking outside the modal content
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (event.target.id === "about-modal") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("click", handleOutsideClick);
      document.body.style.overflow = "hidden"; // Disable scrolling when modal is open
    } else {
      document.body.style.overflow = "auto"; // Re-enable scrolling when modal is closed
    }

    return () => {
      window.removeEventListener("click", handleOutsideClick);
      document.body.style.overflow = "auto"; // Ensure scroll is restored on unmount
    };

    if (isOpen) {
      window.addEventListener("click", handleOutsideClick);
    }

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="about-modal"
      className="absolute w-full h-screen inset-0 bgu flex justify-center items-center z-50"
    >
      <div className="bg-[#090909] text-white p-6 rounded-lg shadow-lg w-[90%] max-w-full relative overflow-y-scroll">
        <div className="absolute w-22 h-22 rounded-full bg-[#ff007b] bottom-10 right-10 blur-3xl"></div>
        <div className="absolute w-22 h-22 rounded-full bg-[#ac9917] top-10 left-10 blur-3xl"></div>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-2xl text-[#ff007b] hover:text-gray-600 cursor-pointer transition-all"
        >
          <FaCompressAlt />
        </button>

        {/* Modal Content */}
        <h2 className="md:text-4xl text-2xl text-gray-200 font-bold mb-6">About <span className="lm">Tweakz</span></h2>
        <hr />
        <div className="flex flex-col gap-4 mt-3 leading-[2]">
          <div>
            <h1 className="md:text-2xl text-xl mt-3 mb-3 text-gray-200 font-bold">Contribution</h1>
            <p className="text-gray-400">
              Tweakz is a developer toolkit designed to simplify workflows. From
              background removal to easy code inspiration, we help devs work faster
              and smarter..
            </p>
          </div>
          <div>
            <h1 className="md:text-2xl text-xl mt-3 mb-3 text-gray-200 font-bold">Support</h1>
            <p className="text-gray-400">
              Tweakz is a developer toolkit designed to simplify workflows. From
              background removal to easy code inspiration, we help devs work faster
              and smarter..
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;