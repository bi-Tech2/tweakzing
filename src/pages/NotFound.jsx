import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-black text-gray-300">
        <div className="h-72 w-72 bg-gray-900 rounded-full absolute -top-10 blur-3xl -left-10"></div>
        <div className="h-72 w-72 bg-[#181818] rounded-full absolute bottom-0 blur-3xl right-0"></div>
        <img src="/fav.jpg" className="absolute top-10 right-10 md:w-20 md:h-20 w-10 h-10" alt="" />
      <h1 className="text-8xl font-bold text-gray-300 animate-bounce  z-10">404</h1>
      <p className="text-xl mt-4 text-gray-400 z-10">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-[#151515] btn  z-10 text-white rounded-lg shadow-md hover:bg-gray-900 transition duration-300"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;