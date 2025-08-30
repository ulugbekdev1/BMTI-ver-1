import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false); // Har safar link bosilganda menyuni yopish
  };

  return (
    <div className="relative z-50 w-full">
      {/* Main navbar */}
      <div className="bg-blue-800 text-white w-full fixed top-0 left-0 flex flex-col md:flex-row justify-between items-center px-4 md:px-6 py-3 md:py-0 md:h-[70px] shadow-lg z-50">
        
        {/* Logo */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link to="/" onClick={handleLinkClick}>
            <p className="text-base sm:text-lg md:text-2xl font-semibold">
              Buxoro muxandislik-texnologiya instituti akademik litseyi
            </p>
          </Link>

          {/* Hamburger icon on small screens */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-3xl text-white focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-4 text-sm font-semibold mt-4 md:mt-0">
          <Link to="/teachers"><p className="hover:underline cursor-pointer">O'QITUVCHILAR</p></Link>
          <Link to="/news"><p className="hover:underline cursor-pointer">YANGILIKLAR</p></Link>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="md:hidden fixed top-[60px] left-0 w-full bg-blue-900 text-white px-6 py-4 flex flex-col gap-4 text-sm font-semibold z-40 shadow-lg">
          {/* <p className="hover:underline cursor-pointer">TA'LIM</p>
          <p className="hover:underline cursor-pointer">QABUL</p> */}
          <Link to="/teachers" onClick={handleLinkClick}>
            <p className="hover:underline cursor-pointer">O'QITUVCHILAR</p>
          </Link>
          {/* <p className="hover:underline cursor-pointer">TALABALAR HAYOTI</p> */}
          <Link to="/news" onClick={handleLinkClick}>
            <p className="hover:underline cursor-pointer">YANGILIKLAR</p>
          </Link>
          {/* <p className="hover:underline cursor-pointer">BIZ HAQIMIZDA</p> */}
        </div>
      )}
    </div>
  );
};

export default Navbar;
