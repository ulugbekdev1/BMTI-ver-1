import React from 'react'
import logo from '../image/logo.png'
import face from '../image/face.png'
import inst from '../image/face.png'
import twit from '../image/twit.png'
import tube from '../image/tube.png'
import telgr from '../image/telgr.png'
const Foter = () => {
  return (
    <div>

    <div className='w-full h-auto bg-[#0099B5] pb-12 mt-18'>
      <p className='text-4xl text-white flex justify-center pt-12'>BIZ BILAN BOG'LANISH</p>

      <div className='flex justify-around mt-12 flex-wrap'>
        <div className='text-white w-[200px] h-[300px]'>
          <h1 className='text-2xl'>Manzil:</h1>
          <h2>Buxoro sh. Navoiyshoh ko'chasi 12B</h2>
        </div>
        <div className='text-white w-[200px] h-[300px]'>
          <h1 className='text-2xl'>Telefon:</h1>
          <h2>+998 97 303 53 43</h2>
          <h2>+998 8365 223 27 96</h2>
        </div>
        <div className='text-white w-[200px] h-[300px]'>
          <h1 className='text-2xl'>E-mail:</h1>
          <h2>bmti_al1.zn.uz</h2>
          <h2>bu.bduq4al@markaz.uz</h2>
        </div>
      </div>
      <div className="w-[1200px] mx-auto relative  h-[550px] rounded-lg  shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.321667437432!2d64.41941047544893!3d39.75488569565639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f5006718e671233%3A0x16285f8eafedc02c!2z0JHRg9GF0LDRgNGB0LrQuNC5INC40L3QttC10L3QtdGA0L3Qvi3RgtC10YXQvdC-0LvQvtCz0LjRh9C10YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRgg!5e0!3m2!1sru!2sus!4v1752832541678!5m2!1sru!2sus" 
          title="BMTI Map"
          frameBorder="0"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
          ></iframe>
      </div>
    </div>
    <div className='w-full h-[300px] bg-blue-800 flex justify-evenly items-center relative'>
       
       <div className=' text-white'>
        <p className='text-xl font-semibold'>Asosiy sahifa </p>
        <h1>Bitiruvchilar</h1>
        <h1>Intarnet</h1>
        <h1>Elektron pochta</h1>
       </div>
       <div className='text-white mt-7'>
        <h1>Virtual sayohat</h1>
        <h1>Tez-tez so'raladigan savollar</h1>
        <h1>Talabalar</h1>
       </div>
       <div className='text-white'>
        <p className='text-xl font-semibold'>Fanlar</p>
        <h1>Anqi fanlar</h1>
        <h1>Tabiiy fanlar</h1>
        <h1>Xorij fanlari</h1>
       </div>
       <div className='text-white'>
        <p className='text-xl font-semibold'>Tezkor so'rovlar</p>
        <h1>Biz haqimizda</h1>
        <h1>Ish o'rinlari</h1>
        <h1>Ilmiy-tadqiqot ishlari</h1>
       </div>
       <div className='text-white mt-2'> 
        <h1>Ota-onalar uchun</h1>
        <h1>Yangiliklar</h1>
       </div>
       <div className='text-white mt-7'>
        <h1>Ilmiy kengash</h1>
        <h1>Onlayn murojaat</h1>
       </div>
       <div className='flex absolute top-[230px] right-[100px] gap-2'>
        <img src={face} alt="" />
        <img src={inst} alt="" />
        <img src={twit} alt="" />
        <img src={tube} alt="" />
        <img src={telgr} alt="" />
      </div>
      </div>
      
          </div>
  )
}

export default Foter
