import { useState } from "react";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { FaGoogle, FaSun, FaMoon, FaArrowRight } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  return (
    <div className="relative min-h-screen grid lg:grid-cols-2 overflow-hidden bg-[#000]">
      <div className="absolute -top-10 -left-20 w-56 h-56 bg-[#ff007b] rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 md:top-1/2 md:left-1/3 right-0 w-40 h-40 bg-[#f2d50d] rounded-full blur-2xl block md:hidden"></div>

      <Link to="/" className=" absolute top-5 left-5 z-50">
        <img
          src="public/tweakz.jpg"
          className="w-24 h-10 p-1 bg-black rounded-md md:hidden block"
          alt=""
        />
      </Link>
      <div className="flex flex-col justify-center items-center p-6 sm:p- z-10 mt-8">
        <div className="w-full max-w-md space-y-5">
          <div className="text-center mb-5">
            <div className="flex flex-col items-center gap-2 group">
              <h1 className="text-2xl font-bold mt-2 text-gray-200">Login</h1>
              <p className="text-base-content/60 text-gray-400">
                Get started with your free account
              </p>
            </div>
          </div>

          <form className="space-y-5">
            <div className="form-control flex flex-col gap-4">
              <label htmlFor="email" className="label ">
                <span className="label-text font-medium text-gray-400">
                  Email
                </span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="size-5 text-base-content/40 text-gray-500" />
                </div>
                <input
                  type="email"
                  className={`input input-bordered w-full pl-10 py-2 rounded-md dark:bg-[#070707] placeholder:text-gray-600 md:outline-[#121212] outline-none text-gray-400`}
                  placeholder="joshdickon@gmail.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  id="email"
                />
              </div>
            </div>

            <div className="form-control flex flex-col gap-4">
              <label htmlFor="password" className="label ">
                <span className="label-text font-medium text-gray-400">
                  Password
                </span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="size-5 text-base-content/40 text-gray-500" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  className={`input input-bordered w-full pl-10 py-2 rounded-md dark:bg-[#070707] placeholder:text-gray-600 md:outline-[#121212] outline-none text-gray-400`}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  id="password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="size-5 text-base-content/40" />
                  ) : (
                    <Eye className="size-5 text-base-content/40" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="btn bg-gray-900 btn-primary mt-4 py-2 px-4 w-max rounded-md text-white flex gap-2 items-center"
            >
              <span> Login</span> <FaArrowRight />
            </button>
          </form>
          <hr className="border-gray-600" />
          <div className="mt-6 flex justify-center space-x-4 w-full">
            <button className="btn btn-outline  border border-gray-600 px-4 flex items-center justify-center space-x-2 w-full mt-2 py-2 rounded-md text-white">
              <FaGoogle className="text-xl" />
              <span>Google</span>
            </button>
          </div>

          <div className="text-center mt-4 text-gray-400">
            <p className="text-base-content/60">
              Already have an account?{" "}
              <Link to="/signup" className="link link-primary lm">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="-mb-10">
        <Link to="/" className="h-screen max-w-7xl md:block hidden igo z-40 absolute rounded-md top-5 right-5">
          <img src="public/fav.jpg" className="w-14 h-14 rounded-lg" alt="" />
        </Link>
        <div class="context"></div>

        <div class="area">
          <ul class="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Login;
