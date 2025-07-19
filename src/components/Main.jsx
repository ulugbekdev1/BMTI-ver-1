import React from 'react';
import litsey2 from '../image/litsey2.jpg';

const Main = () => {
  return (
    <div className="max-w-[1320px] mx-auto my-8 mt-16 px-4">
      <p className="text-blue-900 text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 leading-snug">
        BUXORO MUXANDISLIK TEXNOLOGIYA INSTITUTI AKADEMIK LITSEYI
      </p>

      <div className="flex flex-col md:flex-row gap-8 md:gap-12">
        {/* Matn qismi */}
        <div className="flex-1 text-justify text-gray-800">
          <p className="max-w-full md:max-w-[500px] mx-auto md:mx-0">
            O‘zbekiston Respublikasi Oliy va o‘rta maxsus ta’lim vazirligi tasarrufidagi Buxoro
            Muhandislik-Texnologiya Instituti Akademik Litseyi 2023-yilda Buxoro shahrida faoliyat
            yuritmoqda. <br /><br />
            Litsey zamonaviy ta’lim talablariga javob beradigan o‘quv, sport va texnik
            inshootlarga ega bo‘lib, yosh avlodni chuqurlashtirilgan fanlar asosida tayyorlashga
            qaratilgan. <br /><br />
            Litseyda tashkil etilgan Axborot-resurs markazi o‘quvchilarning ilmiy va axborotga
            bo‘lgan ehtiyojlarini qondirishga xizmat qiladi. Bu markazda kutubxona, kompyuter
            texnikasi va internet tarmog‘i mavjud. <br /><br />
            Akademik litsey kutubxonasi turli mavzulardagi kitoblar, jurnallar va elektron
            resurslar bilan ta'minlangan. Kutubxonaning qulay muhiti o'quvchilarni o'qish va
            tadqiqot ishlari bilan shug'ullanishga rag'batlantiradi.
          </p>
        </div>

        {/* Rasm qismi */}
        <div className="flex-1">
          <div className="w-full max-w-[600px] mx-auto md:mx-0 rounded-lg shadow-lg overflow-hidden">
            <img
              src={litsey2}
              alt="Akademik litsey"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
