import React from "react";
import { FaArrowRight } from 'react-icons/fa';
import litsey from '../image/litsey.jpg';
import overlay from '../image/Overlay (4).png';

const Carousel = () => {
  return (
    <div className="relative w-full h-[600px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[750px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${litsey})` }}
      />

      {/* Overlay image */}
      <div className="absolute inset-0">
        <img
          src={overlay}
          alt="Overlay"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Carousel content - markazga joylashgan */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-4 sm:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
          AKADEMIK LITSEY
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 leading-snug sm:leading-normal max-w-2xl">
          Sizning kelajagingiz uchun ajoyib tanlov
        </p>

        <button
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-800 to-blue-600 hover:from-blue-700 hover:to-blue-500 text-white font-semibold text-sm sm:text-base md:text-lg lg:text-xl w-full max-w-[240px] h-[50px] rounded-full shadow-lg transition duration-300"
          onClick={() => document.getElementById("my_modal_4").showModal()}
        >
          <span>Hoziroq bilish</span>
          <FaArrowRight className="text-sm sm:text-base md:text-lg" />
        </button>

        {/* Modal */}
        <dialog id="my_modal_4" className="modal">
  <div className="modal-box w-11/12 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-4xl">
    <h3 className="font-bold text-lg sm:text-xl md:text-2xl mb-3 text-blue-900">
      Akademik litsey haqida
    </h3>
    <p className="text-sm sm:text-base leading-relaxed text-gray-700">
      Akademik litsey - bu o'quvchilarning o'z qobiliyatlarini rivojlantirish va kelajakdagi muvaffaqiyatlariga tayyorgarlik ko'rish uchun ajoyib imkoniyatdir. Akademik litseyning aniq, tabiiy, xorijiy til va ijtimoiy gumanitar yo'nalishlari, zamonaviy infratuzilmasi, sport va madaniy imkoniyatlari sizning shaxs sifatida shakllanishiga hissa qo'shadi. 
Akademik litsey - bu bilim olish va shaxsiy rivojlanish uchun ajoyib imkoniyatlarga ega bo'lgan muhit. Bu yerda siz o'zingizni turli fanlarga bag'ishlashingiz, ijodiy qobiliyatingizni namoyish etishingiz, intellektual salohiyatlaringizni oshirishingiz mumkin.

    </p>
    <div className="modal-action">
      <form method="dialog">
        <button className="btn text-sm sm:text-base">Yopish</button>
      </form>
    </div>
  </div>
</dialog>

      </div>
    </div>
  );
};

export default Carousel;
