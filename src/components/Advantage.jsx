import React from 'react'
import border from '../image/Border.png';
import matem1 from '../image/matem1.avif'
import tabiy from '../image/tabiy.jpg'
import eng from '../image/eng.jpg'
import guman from '../image/guman.png'


const Advantage = () => {
  return (
    <div className=''>
     
      <div className="flex w-full ">
        <div className="relative group w-[404px] h-[300px] overflow-hidden">
  <a href="/page1" className="block w-full h-full">
    <img
      className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
      src={matem1}
      alt="Image 1"
    />
    <div className="absolute top-[230px] left-[50%] shadow-2xl translate-x-[-50%] w-[250px] h-[40px] bg-base-300 rounded-lg text-blue-900 text-2xl font-semibold flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 ">
      <p className=''>ANIQ FANLAR</p>
    </div>
  </a>
</div>
  <div className="relative group w-[404px] h-[300px] overflow-hidden">
  <a href="/page2" className="block w-full h-full">
    <img
      className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
      src={tabiy}
      alt="Image 2"
    />
    <div className="absolute top-[230px] left-[50%] shadow-2xl translate-x-[-50%] w-[250px] h-[40px] bg-base-300 rounded-lg text-blue-900 text-2xl font-semibold flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 ">
      <p className=''>TABIY FANLAR</p>
    </div>
  </a>
</div>
  <div className="relative group w-[404px] h-[300px] overflow-hidden">
  <a href="/page3" className="block w-full h-full">
    <img
      className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
      src={eng}
      alt="Image 3"
    />
    <div className="absolute top-[230px] left-[50%] shadow-2xl translate-x-[-50%] w-[250px] h-[40px] bg-base-300 rounded-lg text-blue-900 text-2xl font-semibold flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 ">
      <p className=''>XORIJ FANLARI</p>
    </div>
  </a>
</div>
   <div className="relative group w-[404px] h-[300px] overflow-hidden">
  <a href="/page4" className="block w-full h-full">
    <img
      className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
      src={guman}
      alt="Image 4"
    />
    <div className="absolute top-[230px] left-[50%] shadow-2xl translate-x-[-50%] w-[250px] h-[40px] bg-base-300 rounded-lg text-blue-900 text-2xl font-semibold flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 ">
      <p className=''>GUMANITAR FANLAR</p>
    </div>
  </a>
</div>
 
</div>

    </div>
  )
}

export default Advantage
