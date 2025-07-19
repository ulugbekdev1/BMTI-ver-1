import React from 'react';
import con from '../image/Container (6).png';

const Main4 = () => {
  return (
    <div className="relative mt-24 px-4 w-full">
      {/* Title */}
      <p className="text-blue-900 text-3xl sm:text-4xl font-bold mb-6 text-center">
        HEAR FROM OUR STUDENTS AND ALUMNI
      </p>

      {/* Image with overlaid button */}
      <div className="relative w-full max-w-[1200px] mx-auto">
        <img
          className="w-full h-auto object-cover rounded-lg shadow-lg"
          src={con}
          alt="students and alumni"
        />

        {/* Button absolutely centered on the image at fixed offset */}
        <div className="absolute left-1/2 top-[55%] transform -translate-x-1/2 -translate-y-1/2">
          {/* <button
            className="bg-amber-500 text-white font-semibold rounded-lg shadow-md transition hover:bg-amber-600
              w-[180px] h-[44px] text-sm
              sm:w-[220px] sm:h-[50px] sm:text-base
              md:w-[280px] md:h-[58px] md:text-lg
              lg:w-[300px] lg:h-[62px] lg:text-xl"
          >
            Read Maryam's story
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Main4;
