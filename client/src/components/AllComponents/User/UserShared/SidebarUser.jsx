import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { MdDashboard, MdMovieCreation, MdSettings } from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isMoviesDropdownOpen, setIsMoviesDropdownOpen] = useState(false);

  const toggleMoviesDropdown = () => {
    setIsMoviesDropdownOpen(!isMoviesDropdownOpen);
  };

  return (
    <div className="bg-gray-200 text-white h-screen p-6  border-r-slate-500 border-1 shadow-sm">
      {/* Dashboard */}
      <Link to="/userdashboard">
        <div className="mb-6 cursor-pointer py-2  rounded hover:bg-gray-400 p-6">
          <a href="#" className="flex items-center gap-3">
            <MdDashboard/>
            <span>User Dashboard</span>
          </a>
        </div>
      </Link>
      {/* Report */}
      
      <Link to="/watchlists">
        <div className="mb-6 cursor-pointer  hover:bg-gray-400 p-1 hover:rounded">
          <a href="#" className="flex items-center gap-3">
            <MdMovieCreation/>
            <span>Watch Lists</span>
          </a>
        </div>
      </Link>
      
      <Link to="/favorites">
        {/* Add movies */}
        <div className="mb-6 cursor-pointer  hover:bg-gray-400 p-1 hover:rounded">
          <a href="#" className="flex items-center gap-3">
            <FaHeart/>
            <span>Favorites</span>
          </a>
        </div>
      </Link>
      <Link to="/usersettings">
        {/* Setting */}
        <div className="mb-6 cursor-pointer  hover:bg-gray-400 p-1 hover:rounded">
          <a href="#" className="flex items-center gap-3">
            <MdSettings/>
            <span>Setting</span>
          </a>
        </div>
      </Link>
      {/* Logout */}
      <div className="absolute bottom-6 left-6 cursor-pointer  hover:bg-gray-400 p-1 hover:rounded">
        <a href="#" className="flex items-center gap-3">
          <svg
            className="h-6 w-6 mr-2"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
          <span>Logout</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
