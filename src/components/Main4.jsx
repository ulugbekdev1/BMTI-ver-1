import React from 'react';
import carusel1 from '../image/carusel1.jpg';
import carusel2 from '../image/carusel2.jpg';
import carusel3 from '../image/carusel3.jpg';
import carusel4 from '../image/carusel4.jpg';
import carusel5 from '../image/carusel5.jpg';
import carusel6 from '../image/carusel6.jpg';
import carusel7 from '../image/carusel7.jpg';

const Main4 = () => {
  return (
    <div className="mt-24 px-4">
      <p className="text-blue-900  sm:text-3xl font-bold text-center mb-6">FOTO ALBOM</p>

      <div className="carousel carousel-end rounded-box w-full mt-10 h-[300px] sm:h-[300px]">
        {[carusel1, carusel2, carusel3, carusel4, carusel5, carusel6, carusel7].map((img, idx) => (
          <div key={idx} className="carousel-item">
            <img
              src={img}
              alt={`Foto ${idx + 1}`}
              className="h-[160px] sm:h-[300px] w-auto object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main4;
