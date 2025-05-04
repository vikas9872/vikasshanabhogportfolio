import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="text-white backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-1xl md:text-2xl">
          <a href="#home">{"</Vikas>"}</a>
        </div>

        {/* Links for Desktop */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#education" className="relative group">
              Education
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#3F72AF] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a href="#projects" className="relative group">
              Projects
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#3F72AF] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a href="#skills" className="relative group">
              Skills
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#3F72AF] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden text-white space-y-4 px-6 py-4 backdrop-blur-md">
          <li>
            <a href="#education" className="relative group block" onClick={closeMenu}>
              Education
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#3F72AF] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a href="#projects" className="relative group block" onClick={closeMenu}>
              Projects
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#3F72AF] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a href="#skills" className="relative group block" onClick={closeMenu}>
              Skills
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#3F72AF] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
