import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { IoLogOut, IoLogOutSharp, IoSettings } from "react-icons/io5";
import { MdAddAPhoto, MdDashboard, MdManageAccounts, MdMovieEdit, MdMovieFilter } from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isMoviesDropdownOpen, setIsMoviesDropdownOpen] = useState(false);

  const toggleMoviesDropdown = () => {
    setIsMoviesDropdownOpen(!isMoviesDropdownOpen);
  };

  return (
    <div className="bg-gray-200 text-white h-screen p-6  border-r-slate-500 border-1 shadow-sm">
      {/* Dashboard */}
      <Link to="/dashboard">
        <div className="mb-6 cursor-pointer py-2  rounded hover:bg-gray-400 p-6">
          <a href="#" className="flex items-center gap-2 ">
            <FaHome/>
            <span>Dashboard</span>
          </a>
        </div>
      </Link>
      {/* Report */}
      <div>
        
        <Link to="/totalusers">
        <div className="mb-6 cursor-pointer  hover:bg-gray-400 p-1 hover:rounded">
          <a href="#" className="flex items-center gap-2">
            <MdManageAccounts/>
            <span>Customer Managment </span>
          </a>
        </div>
      </Link>
      <Link to="/report">
        <div className="mb-6 cursor-pointer  hover:bg-gray-400 p-1 hover:rounded">
          <a href="#" className="flex items-center gap-2">
            <MdManageAccounts/>
            <span>Movie Managment</span>
          </a>
        </div>
      </Link>
      </div>
      <Link to="/settings">
        {/* Setting */}
        <div className="mb-6 cursor-pointer  hover:bg-gray-400 p-1 hover:rounded">
          <a href="#" className="flex items-center gap-2">
            <IoSettings/>
            <span>Setting</span>
          </a>
        </div>
      </Link>
      <Link to="/MoviesRegster">
        {/* Add movies */}
        <div className="mb-6 cursor-pointer  hover:bg-gray-400 p-1 hover:rounded">
          <a href="#" className="flex items-center gap-2">
            <MdAddAPhoto/>
            <span>Add Movie</span>
          </a>
        </div>
      </Link>
      {/* Features */}
      <Link to="/movielist">
        <div className="mb-6 cursor-pointer  hover:bg-gray-400 p-1 hover:rounded">
          <a href="#" className="flex items-center gap-2">
            <MdMovieFilter/>
            <span>Movie list</span>
          </a>
        </div>
      </Link>
      {/* Logout */}
      <div className="absolute bottom-6 left-6 cursor-pointer  hover:bg-gray-400 p-1 hover:rounded">
        <a href="#" className="flex items-center gap-2">
          <IoLogOutSharp/>
          <span>Logout</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
