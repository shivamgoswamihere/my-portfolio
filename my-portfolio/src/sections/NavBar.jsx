import React, { useState } from "react";
import logo from "../assets/SG-logo.png";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 mx-4 z-50">
      <div className="flex justify-between items-center shadow-md backdrop-blur-xl bg-white/5 border border-gray-300 p-4 rounded-b-2xl">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <img src={logo} alt="Logo" className="h-9" />
        </div>

        {/* Hamburger Toggle (mobile only) */}
        <div className="md:hidden w-fit">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg
              className="w-6 h-6 text-[#b6b7bb]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Nav Items */}
        <ul
          className={`flex-col md:flex-row md:flex space-y-4 md:space-y-0 md:space-x-6 absolute md:static top-[64px] left-0 w-full md:w-auto bg-[#131212d5] md:bg-transparent p-4 md:p-0 rounded-md md:rounded-none transition-all duration-300 ease-in-out ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          {["Home", "About", "Skills", "Projects", "Certifications", "Events", "Contact"].map(
            (item) => (
              <li
                key={item}
                className="cursor-pointer hover:text-blue-500 text-[#b6b7bb] md:text-base text-sm"
              >
                {item}
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
};
