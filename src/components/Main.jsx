import React from 'react';
import litsey2 from '../image/litsey2.jpg';
import line from '../image/Horizontal.png';

const Main = () => {
  return (
    <div className="w-full max-w-[1320px] mx-auto mt-16 px-4">
      <p className="text-blue-900 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 leading-snug">
        BUXORO MUXANDISLIK TEXNOLOGIYA INSTITUTI AKADEMIK LITSEYI
      </p>

      {/* Har doim yonma-yon bo‘ladi */}
      <div className="flex flex-row items-center gap-8">
        {/* MATN */}
        <div className="flex-1  min-w-0 text-gray-800 text-justify text-xs sm:text-sm md:text-base leading-tight  sm:leading-snug md:leading-relaxed space-y-3">
          <img src={line} alt="line" className="w-full max-w-[800px] h-0.5 my-1 sm:my-2" />
          <p>
            O‘zbekiston Respublikasi Oliy va o‘rta maxsus ta’lim vazirligi tasarrufidagi
            Buxoro Muhandislik-Texnologiya Instituti Akademik Litseyi 2023-yilda Buxoro
            shahrida faoliyat yuritmoqda.
          </p>
          <p>
            Litsey zamonaviy ta’lim talablariga javob beradigan o‘quv, sport va texnik
            inshootlarga ega bo‘lib, yosh avlodni chuqurlashtirilgan fanlar asosida tayyorlashga
            qaratilgan.
          </p>
          <p>
            Litseyda tashkil etilgan Axborot-resurs markazi o‘quvchilarning ilmiy va axborotga
            bo‘lgan ehtiyojlarini qondirishga xizmat qiladi. Bu markazda kutubxona, kompyuter
            texnikasi va internet tarmog‘i mavjud.
          </p>
          <p>
            Akademik litsey kutubxonasi turli mavzulardagi kitoblar, jurnallar va elektron
            resurslar bilan ta'minlangan. Kutubxonaning qulay muhiti o‘quvchilarni o‘qish va
            tadqiqot ishlari bilan shug‘ullanishga rag‘batlantiradi.
          </p>
          <img src={line} alt="line" className="w-full max-w-[800px] h-0.5 my-1 sm:my-2" />
        </div>

        {/* RASM */}
        <div className="flex-1 min-w-0 flex justify-end">
          <img
            src={litsey2}
            alt="Akademik litsey"
            className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] h-auto rounded-xl object-cover object-center filter brightness-110 contrast-110 saturate-125 shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
