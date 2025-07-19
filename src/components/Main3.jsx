import React from 'react';
import olm from '../image/olm.png';
import sec5 from '../image/Section (1).png';
import line from '../image/Horizontal.png';

const Main3 = () => {
  return (
    <div className="mt-28 px-4">
      <p className="text-blue-900 text-3xl sm:text-4xl font-bold text-center mb-6">
        KO'RIK-TANLOVLAR VA FAN OLIMPIADALARDAGI YUTUQLAR
      </p>

      {/* Matn + Rasm */}
      <div className="flex flex-col lg:flex-row gap-12 justify-center items-center">
        <div className="flex flex-col gap-6 max-w-xl">
          <img className="w-full h-0.5" src={line} alt="line" />
          <p className="text-gray-800 text-justify leading-relaxed">
            Olimpiadalarda qatnashish, o'quvchilarni o'z sohasida ixtisoslashishga undaydi. Ular matematika, kimyo, fizika, biologiya, tarix, adabiyot va boshqa sohalarda chuqur bilimga ega bo'lishadi. Bu bilimlar kelajakda professional faoliyatni boshlashda yoki ilmiy ishlarni amalga oshirishda katta yordam beradi.
            <br /><br />
            Olimpiada g'oliblariga pul mukofotlari yoki stipendiyalar berish, ularga o'z bilimlarini yanada kengaytirish va keyingi ta'lim olish uchun moliyaviy qo'llab-quvvatlash imkoniyatini yaratadi. Bu rag'batlantirish o'quvchilarga nafaqat o'z yutuqlarini nishonlash, balki o'z bilim va ko'nikmalarini yanada rivojlantirishga ilhom beradi.
          </p>
          <img className="w-full h-0.5" src={line} alt="line" />
        </div>

        <div className="w-full max-w-lg">
          <img
            className="w-full h-auto max-h-[400px] object-cover rounded-lg shadow-2xl"
            src={olm}
            alt="Olimpiada"
          />
        </div>
      </div>

      {/* Banner rasmi + tugmalar */}
      <div className="relative mt-24">
        <img className="w-full object-cover" src={sec5} alt="Section background" />

        {/* Tugmalar: pastki markazga joylashgan */}
        {/* <div className="absolute bottom-8 w-full flex justify-between px-4 sm:px-12 md:px-32">
          <button className="bg-amber-500 text-white text-sm sm:text-base md:text-lg lg:text-xl font-semibold rounded shadow-md px-4 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3">
            Visit our Campus
          </button>
          <button className="bg-amber-500 text-white text-sm sm:text-base md:text-lg lg:text-xl font-semibold rounded shadow-md px-4 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3">
            Talk with an Admissions Rep
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Main3;
