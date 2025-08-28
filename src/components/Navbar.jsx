import React, { useState } from 'react';
import link from '../image/Link.png';
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-50">
      {/* Top bar */}
      <div className="bg-white h-[30px] md:h-[40px] lg:h-[50px] w-full flex justify-end items-center px-4 md:px-6 text-[10px] md:text-xs font-semibold text-blue-900">
        {/* Optional content */}
      </div>

      {/* Main navbar */}
      <div className="bg-blue-800 text-white w-full top-0 max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-6 py-3 md:py-0 md:h-[70px] absolute md:top-[30px] left-0 md:left-10 border-y border-white shadow-lg">
        {/* Logo */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link to="/"><p className="text-base sm:text-lg md:text-2xl font-semibold">
            Buxoro muxandislik-texnologiya instituti akademik litseyi
          </p></Link>

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
          <p className="hover:underline cursor-pointer">TA'LIM</p>
          <p className="hover:underline cursor-pointer">QABUL</p>
          <Link to="/teacher"><p className="hover:underline cursor-pointer">O'QITUVCHILAR</p></Link>
          <p className="hover:underline cursor-pointer">TALABALAR HAYOTI</p>
          <Link to="/news"><p className="hover:underline cursor-pointer">YANGILIKLAR</p></Link>
          <p className="hover:underline cursor-pointer">BIZ HAQIMIZDA</p>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="md:hidden absolute top-[62px] left-0 w-full bg-blue-900 text-white px-6 py-4 flex flex-col gap-4 text-sm font-semibold z-30">
          <p className="hover:underline cursor-pointer">TA'LIM</p>
          <p className="hover:underline cursor-pointer">QABUL</p>
          <Link to="/teacher"><p className="hover:underline cursor-pointer">O'QITUVCHILAR</p></Link>
          <p className="hover:underline cursor-pointer">TALABALAR HAYOTI</p>
          <Link to="/news"><p className="hover:underline cursor-pointer">YANGILIKLAR</p></Link>
          <p className="hover:underline cursor-pointer">BIZ HAQIMIZDA</p>
        </div>
      )}
    </div>
  );
};

export default Navbar;
