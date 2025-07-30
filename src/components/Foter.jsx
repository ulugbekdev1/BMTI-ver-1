import React from 'react';
import face from '../image/face.png';
import inst from '../image/face.png'; // ehtimol xato: inst = face
import twit from '../image/twit.png';
import tube from '../image/tube.png';
import telgr from '../image/telgr.png';

const Foter = () => {
  return (
    <div>
      <div className='w-full bg-[#0099B5] pb-12 mt-18 px-4'>
        <p className='text-xl sm:text-3xl md:text-4xl text-white text-center pt-12 font-bold'>
          BIZ BILAN BOG'LANISH
        </p>

        <div className='flex flex-col sm:flex-row sm:flex-wrap sm:justify-around items-center mt-12 gap-8'>
          <div className='text-white text-center sm:text-left w-[250px] text-sm sm:text-base'>
            <h1 className='text-base sm:text-xl font-semibold'>Manzil:</h1>
            <h2>Buxoro sh. Navoiyshoh ko'chasi 12B</h2>
          </div>
          <div className='text-white text-center sm:text-left w-[250px] text-sm sm:text-base'>
            <h1 className='text-base sm:text-xl font-semibold'>Telefon:</h1>
            <h2>+998 97 303 53 43</h2>
            <h2>+998 8365 223 27 96</h2>
          </div>
          <div className='text-white text-center sm:text-left w-[250px] text-sm sm:text-base'>
            <h1 className='text-base sm:text-xl font-semibold'>E-mail:</h1>
            <h2>bmti_al1.zn.uz</h2>
            <h2>bu.bduq4al@markaz.uz</h2>
          </div>
        </div>

        <div className="w-full max-w-[1200px] mx-auto relative h-[300px] sm:h-[500px] rounded-lg shadow-lg mt-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.321667437432!2d64.41941047544893!3d39.75488569565639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f5006718e671233%3A0x16285f8eafedc02c!2z0JHRg9GF0LDRgNGB0LrQuNC5INC40L3QttC10L3QtdGA0L3Qvi3RgtC10YXQvdC-0LvQvtCz0LjRh9C10YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRgg!5e0!3m2!1sru!2sus!4v1752832541678!5m2!1sru!2sus"
            title="BMTI Map"
            frameBorder="0"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
      </div>

      <div className='w-full bg-blue-800 px-4 py-12'>
        <div className='max-w-[1200px] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-white text-sm sm:text-base'>
          <div>
            <p className='text-base sm:text-lg font-semibold mb-2'>Asosiy sahifa</p>
            <h1>Bitiruvchilar</h1>
            <h1>Intarnet</h1>
            <h1>Elektron pochta</h1>
          </div>
          <div>
            <p className='text-base sm:text-lg font-semibold mb-2 invisible sm:visible'>&nbsp;</p>
            <h1>Virtual sayohat</h1>
            <h1>Tez-tez so'raladigan savollar</h1>
            <h1>Talabalar</h1>
          </div>
          <div>
            <p className='text-base sm:text-lg font-semibold mb-2'>Fanlar</p>
            <h1>Anqi fanlar</h1>
            <h1>Tabiiy fanlar</h1>
            <h1>Xorij fanlari</h1>
          </div>
          <div>
            <p className='text-base sm:text-lg font-semibold mb-2'>Tezkor so'rovlar</p>
            <h1>Biz haqimizda</h1>
            <h1>Ish o'rinlari</h1>
            <h1>Ilmiy-tadqiqot ishlari</h1>
          </div>
          <div>
            <p className='text-base sm:text-lg font-semibold mb-2 invisible sm:visible'>&nbsp;</p>
            <h1>Ota-onalar uchun</h1>
            <h1>Yangiliklar</h1>
          </div>
          <div>
            <p className='text-base sm:text-lg font-semibold mb-2 invisible sm:visible'>&nbsp;</p>
            <h1>Ilmiy kengash</h1>
            <h1>Onlayn murojaat</h1>
          </div>
        </div>

        <div className='flex justify-center mt-8 gap-4'>
          <img src={face} alt="facebook" className='w-6 h-6 sm:w-8 sm:h-8' />
          <img src={inst} alt="instagram" className='w-6 h-6 sm:w-8 sm:h-8' />
          <img src={twit} alt="twitter" className='w-6 h-6 sm:w-8 sm:h-8' />
          <img src={tube} alt="youtube" className='w-6 h-6 sm:w-8 sm:h-8' />
          <img src={telgr} alt="telegram" className='w-6 h-6 sm:w-8 sm:h-8' />
        </div>
      </div>
    </div>
  );
};

export default Foter;
