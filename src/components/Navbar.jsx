import React from 'react'
import link from '../image/Link.png';
const Navbar = () => {
  return (
    <div className="w-full relative z-[1]">
      {/* Top bar */}
      <div className="bg-white h-[70px] w-full flex justify-end pt-2  px-6 gap-4 text-xs font-semibold text-blue-900">
        <ul className='flex gap-4 absolute right-13' >

        <li className='hover:bg-red-500 hover:text-white hover:w-[60px] hover:h-[20px]'>INTRANET</li>
        <li className='hover:bg-red-500 hover:text-white hover:w-[60px] hover:h-[20px]'>WEB MAIL</li>
        <li className='hover:bg-red-500 hover:text-white hover:w-[30px] hover:h-[20px]'>VRR</li>
        <li className='hover:bg-red-500 hover:text-white hover:w-[70px] hover:h-[20px]'>VACANCIES</li>
        <li className='hover:bg-red-500 hover:text-white hover:w-[80px] hover:h-[20px]'>APPLY NOW</li>
        UZ
        RU
        </ul>
      </div>

     
      <div className="bg-blue-800 border-2 text-white h-[90px] w-[1400px] flex justify-between items-center px-6 absolute  left-18 top-8">
        <div className="flex items-center space-x-2">
          <div className=''>
                <p className='text-2xl font-semibold'>BMTI akademik litseyi</p>
              </div>
          <div className="text-left leading-tight">
           
          </div>
        </div>

        
        <div className="flex items-center gap-4 text-sm font-semibold ">
          <p className="hover:underline cursor-pointer">TA'LIM</p>
          <p className="hover:underline cursor-pointer">QABUL</p>
          <p className="hover:underline cursor-pointer">ISH O'RINLARI</p>
          <p className="hover:underline cursor-pointer">TALABALAR HAYOTI</p>
          <p className="hover:underline cursor-pointer">YANGILIKLAR</p>
          <p className="hover:underline cursor-pointer">BIZ HAQIMIZDA</p>
          <button className="text-3xl">
  ☰
</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
