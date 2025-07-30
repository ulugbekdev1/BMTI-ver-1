import React from 'react';
import olm from '../image/olm.png';
import line from '../image/Horizontal.png';
import litsey from '../image/litsey.jpg';

const Main3 = () => {
  return (
    <div className="mt-28 px-4">
      {/* Sarlavha */}
      <p className="text-blue-900  sm:text-3xl font-bold text-center mb-6">
        KO'RIK-TANLOVLAR VA FAN OLIMPIADALARDAGI YUTUQLAR
      </p>

      {/* Matn va Rasm */}
      <div className="flex flex-col lg:flex-row gap-20 justify-center items-center">
        <div className="flex flex-col gap-4 max-w-xl">
          <img className="w-full h-0.5" src={line} alt="line" />
          <p className="text-gray-800 text-sm sm:text-base text-justify leading-tight">
            Olimpiadalarda qatnashish, o'quvchilarni o'z sohasida ixtisoslashishga undaydi. Ular matematika, kimyo, fizika, biologiya, tarix, adabiyot va boshqa sohalarda chuqur bilimga ega bo'lishadi.
            <br /><br />
            Olimpiada g'oliblariga pul mukofotlari yoki stipendiyalar berish, ularga o'z bilimlarini yanada kengaytirish va keyingi ta'lim olish uchun moliyaviy qo'llab-quvvatlash imkoniyatini yaratadi.
          </p>
          <img className="w-full h-0.5" src={line} alt="line" />
        </div>

        <div className="w-full max-w-md">
          <img
            className="w-full h-auto max-h-[350px] object-cover rounded-lg shadow-xl"
            src={olm}
            alt="Olimpiada"
          />
        </div>
      </div>

      {/* Yangiliklar sarlavhasi */}
      <p className="text-blue-900  sm:text-3xl font-bold text-center mb-6 mt-20">
        SO'NGI YANGILIKLAR
      </p>

      {/* Kartalar – doim yonma-yon, razmeri responsive */}
      <div className="flex flex-row flex-wrap justify-center gap-12">
        {[1, 2, 3].map((_, i) => (
          <div
            key={i}
            className="w-[150px] sm:w-[180px] md:w-[220px] lg:w-[250px] h-[320px] md:h-[350px] bg-white shadow-lg rounded-lg flex flex-col items-center justify-between p-3"
          >
            <img
              src={litsey}
              alt=""
              className="w-full h-[100px] md:h-[120px] object-cover rounded-md"
            />
            <span className="text-blue-900 text-xs sm:text-sm text-center leading-tight">
              Olimpiada g'oliblariga pul mukofotlari yoki stipendiyalar beriladi...
            </span>
            <button className="w-[90px] h-[30px] bg-blue-900 text-white rounded-md text-xs">
              Batafsil
            </button>
          </div>
        ))}
      </div>

      {/* Bizning yutuqlar sarlavhasi */}
      <p className="text-blue-900  sm:text-3xl font-bold text-center mb-6 mt-20">
        BIZNING YUTUQLAR
      </p>

      {/* Statistika bloki */}
      <div className="flex justify-center flex-wrap gap-6 sm:text-3xl mt-8 w-full bg-blue-100 py-6">
        {[
          ['825', "O'quv o'rni"],
          ['603', "O'quvchilar soni"],
          ['195', "Mikro hududdan"],
          ['408', "Boshqa hududdan"],
          ['400', "Talabalar turar joyi"],
        ].map(([number, label], i) => (
          <div
            key={i}
            className="w-[130px] h-[150px] flex flex-col items-center justify-center bg-white rounded-lg shadow-md"
          >
            <p className="text-3xl text-blue-800 font-semibold">{number}</p>
            <p className="text-xs text-center">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main3;
