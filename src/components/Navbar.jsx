import React, { useState } from 'react';
import link from '../image/Link.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full relative z-[50]">
      {/* Top bar */}
      <div className="bg-white h-[50px] md:h-[60px] lg:h-[70px] w-full flex justify-end items-center px-4 md:px-6 text-[10px] md:text-xs font-semibold text-blue-900">
        <ul className="flex gap-2 md:gap-4 items-center flex-wrap">
          <li className="hover:bg-red-500 hover:text-white px-2 py-1 rounded">INTRANET</li>
          <li className="hover:bg-red-500 hover:text-white px-2 py-1 rounded">WEB MAIL</li>
          <li className="hover:bg-red-500 hover:text-white px-2 py-1 rounded">VRR</li>
          <li className="hover:bg-red-500 hover:text-white px-2 py-1 rounded">VACANCIES</li>
          <li className="hover:bg-red-500 hover:text-white px-2 py-1 rounded">APPLY NOW</li>
          <li className="hover:underline cursor-pointer">UZ</li>
          <li className="hover:underline cursor-pointer">RU</li>
        </ul>
      </div>

      {/* Main navbar */}
      <div className="bg-blue-800 text-white w-full max-w-[1440px] h-[70px] mx-auto flex flex-col md:flex-row justify-between items-center px-6 absolute top-[30px] md:top-[50px] left-0 py-4 md:py-0 border-2">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <p className="text-xl md:text-2xl font-semibold">BMTI akademik litseyi</p>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-4 text-sm font-semibold">
          <p className="hover:underline cursor-pointer">TA'LIM</p>
          <p className="hover:underline cursor-pointer">QABUL</p>
          <p className="hover:underline cursor-pointer">ISH O'RINLARI</p>
          <p className="hover:underline cursor-pointer">TALABALAR HAYOTI</p>
          <p className="hover:underline cursor-pointer">YANGILIKLAR</p>
          <p className="hover:underline cursor-pointer">BIZ HAQIMIZDA</p>
        </div>

        {/* Hamburger icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="md:hidden absolute top-[120px] left-0 w-full bg-blue-900 text-white px-6 py-4 flex flex-col gap-4 text-sm font-semibold z-30">
          <p className="hover:underline cursor-pointer">TA'LIM</p>
          <p className="hover:underline cursor-pointer">QABUL</p>
          <p className="hover:underline cursor-pointer">ISH O'RINLARI</p>
          <p className="hover:underline cursor-pointer">TALABALAR HAYOTI</p>
          <p className="hover:underline cursor-pointer">YANGILIKLAR</p>
          <p className="hover:underline cursor-pointer">BIZ HAQIMIZDA</p>
        </div>
      )}
    </div>
  );
};

export default Navbar;
