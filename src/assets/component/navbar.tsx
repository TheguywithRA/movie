import { FaFilm, FaHome, FaSignOutAlt, FaStar } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState(location.pathname);
  
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleMenuClick = (to: string) => {
    setActiveMenu(to);
  };

  return (
    <div className="flex flex-row w-full justify-between px-5 py-7 shadow-xl bg-gradient-to-r from-gray-950 to-gray-800 text-white">
      <div className="w-96 h-full flex items-center justify-center animate-slideRightLeft">
        <div className="w-full text-center text-red-600 text-2xl font-bold">
          R A D I X
        </div>
      </div>
      <div className="flex flex-row gap-10">
        <Link
          to={"/"}
          className={`flex items-center font-bold text-gray-300 ${
            activeMenu === "/" ? "text-red-600" : ""
          }`}
          style={{ fontSize: "17px" }}
          onClick={() => handleMenuClick("/")}
        >
          <FaHome className="mr-1" />
          Home
        </Link>
        <Link
          to={"/movie"}
          className={`flex items-center font-bold text-gray-300 ${
            activeMenu === "/movie" ? "text-red-600" : ""
          }`}
          style={{ fontSize: "17px" }}
          onClick={() => handleMenuClick("/movie")}
        >
          <FaFilm className="mr-1" />
          Movie
        </Link>
        <Link
          to={"/toprated"}
          className={`flex items-center font-bold text-gray-300 ${
            activeMenu === "/toprated" ? "text-red-600" : ""
          }`}
          style={{ fontSize: "17px" }}
          onClick={() => handleMenuClick("/toprated")}
        >
          <FaStar className="mr-1" />
          Top Rated
        </Link>
        <div
          className="flex items-center font-bold text-gray-300 cursor-pointer"
          style={{ fontSize: "17px" }}
          onClick={handleLogout}
        >
          <FaSignOutAlt className="mr-1" />
          LogOut
        </div>
      </div>
    </div>
  );
};

export default Navbar;
