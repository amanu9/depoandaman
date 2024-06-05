import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isMoviesDropdownOpen, setIsMoviesDropdownOpen] = useState(false);

  const toggleMoviesDropdown = () => {
    setIsMoviesDropdownOpen(!isMoviesDropdownOpen);
  };

  return (
    <div className="bg-wheat text-white h-screen p-6  border-r-slate-500 border-2 shadow-sm">
      {/* Dashboard */}
      <Link to="/dashboard">
        <div className="mb-6 cursor-pointer py-2  rounded hover:bg-gray-400 p-6">
          <a href="#" className="flex items-center ">
            <svg
              className="h-6 w-6 mr-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span>Dashboard</span>
          </a>
        </div>
      </Link>
      {/* Report */}
      <Link to="/report">
        <div className="mb-6 cursor-pointer  hover:bg-gray-400 p-1 hover:rounded">
          <a href="#" className="flex items-center">
            <svg
              className="h-6 w-6 mr-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
            </svg>
            <span>Report</span>
          </a>
        </div>
      </Link>
      <Link to="/settings">
        {/* Setting */}
        <div className="mb-6 cursor-pointer  hover:bg-gray-400 p-1 hover:rounded">
          <a href="#" className="flex items-center">
            <svg
              className="h-6 w-6 mr-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
            <span>Setting</span>
          </a>
        </div>
      </Link>
      <Link to="/MoviesRegster">
        {/* Add movies */}
        <div className="mb-6 cursor-pointer  hover:bg-gray-400 p-1 hover:rounded">
          <a href="#" className="flex items-center">
            <svg
              className="h-6 w-6 mr-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span>Add Movie</span>
          </a>
        </div>
      </Link>
      {/* Features */}
      <div className="mb-6 cursor-pointer  hover:bg-gray-400 p-1 hover:rounded">
        <a href="#" className="flex items-center">
          <svg
            className="h-6 w-6 mr-2"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          <span>Features</span>
        </a>
      </div>

      {/* Logout */}
      <div className="absolute bottom-6 left-6 cursor-pointer  hover:bg-gray-400 p-1 hover:rounded">
        <a href="#" className="flex items-center">
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
