import { FaGithub } from "react-icons/fa";

const Drag = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="w-full flex justify-center px-5">
      <div className="w-[100%] md:w-[98%] overflow-x-auto flex gap-4 py-4 px-0 scrollbar-hide snap-x snap-mandatory mt-10 draggable-container">
        <button
          className="cusor-pointer btns min-w-[150px] px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md snap-center gap-2"
          onClick={() => scrollToSection("section1")}
        >
          <FaGithub />
          <span>Section 1</span>
        </button>
        <button
          className="cusor-pointer btns min-w-[150px] px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md snap-center gap-2"
          onClick={() => scrollToSection("section2")}
        >
          <FaGithub />
          <span>Section 2</span>
        </button>
        <button
          className="cusor-pointer btns min-w-[150px] px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md snap-center gap-2"
          onClick={() => scrollToSection("section3")}
        >
          <FaGithub />
          <span>Section 3</span>
        </button>
        <button
          className="cusor-pointer btns min-w-[150px] px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md snap-center gap-2"
          onClick={() => scrollToSection("section4")}
        >
          <FaGithub />
          <span>Section 4</span>
        </button>
        <button
          className="cusor-pointer btns min-w-[150px] px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md snap-center gap-2"
          onClick={() => scrollToSection("section5")}
        >
          <FaGithub />
          <span>Live Code</span>
        </button>
      </div>
    </div>
  );
};

export default Drag;
