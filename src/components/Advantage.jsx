import React from 'react';
import matem1 from '../image/matem1.avif';
import tabiy from '../image/tabiy.jpg';
import eng from '../image/eng.jpg';
import guman from '../image/guman.png';

const Advantage = () => {
  const items = [
    { title: "ANIQ FANLAR", src: matem1, link: "/page1" },
    { title: "TABIY FANLAR", src: tabiy, link: "/page2" },
    { title: "XORIJ FANLARI", src: eng, link: "/page3" },
    { title: "GUMANITAR FANLAR", src: guman, link: "/page4" },
  ];

  return (
    <div className="w-full px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative group w-full h-[250px] sm:h-[300px] overflow-hidden rounded-lg shadow-md"
          >
            <a href={item.link} className="block w-full h-full">
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-[40px] bg-base-300 rounded-lg text-blue-900 text-center text-lg sm:text-xl font-semibold flex items-center justify-center shadow-2xl transform transition-transform duration-300 group-hover:scale-110">
                {item.title}
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advantage;
