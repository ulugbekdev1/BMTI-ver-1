import React from 'react'
import litsey2 from '../image/litsey2.jpg'
const Main = () => {
  return (
    <div className="max-w-[1320px] mx-auto my-8 mt-16">
      <p className="text-blue-900 text-4xl font-bold text-center mb-6">BUXORO MUXANDISLIK TEXNOLOGIYA INSTITUTI AKADEMIK LITSEYI </p>
      
      <div className="flex gap-12 top-12">
        <div className="flex-1 text-justify text-gray-800 mt-10">
          <p className='w-[500px]'>
            O‘zbekiston Respublikasi Oliy va o‘rta maxsus ta’lim vazirligi tasarrufidagi Buxoro Muhandislik-Texnologiya Instituti Akademik Litseyi 2023-yilda Buxoro shahrida faoliyat yuritmoqda.

Litsey zamonaviy ta’lim talablariga javob beradigan o‘quv, sport va texnik inshootlarga ega bo‘lib, yosh avlodni chuqurlashtirilgan fanlar asosida tayyorlashga qaratilgan.

Litseyda tashkil etilgan Axborot-resurs markazi o‘quvchilarning ilmiy va axborotga bo‘lgan ehtiyojlarini qondirishga xizmat qiladi. Bu markazda kutubxona, kompyuter texnikasi va internet tarmog‘i mavjud.
Akademik litsey kutubxonasi turli mavzulardagi kitoblar, jurnallar va elektron resurslar bilan ta'minlangan.
Kutubxonaning qulay muhiti o'quvchilarni o'qish va tadqiqot ishlari bilan shug'ullanishga rag'batlantiradi.
          </p>
        </div>
        
        <div className="flex-1 ">
          <div className="relative pb-[56.25%]  h-0 overflow-hidden rounded-lg shadow-lg w-[600px] mt-10">
            <img className='' src={litsey2} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
