import React from 'react'
import set from '../image/Link (1).png'
import set2 from '../image/Link (2).png'
import set3 from '../image/Link (3).png'
import sec from '../image/Section.png'
import sec1 from '../image/Background (1).png'
import sec2 from '../image/Background (2).png'
import sec3 from '../image/Background (3).png'
import sec4 from '../image/Background (4).png'
import sec5 from '../image/Section (1).png'
import olm from '../image/olm.png'
import line from '../image/Horizontal.png'
const Main3 = () => {
  return (
    <div className='mt-28'>

    <p className='text-blue-900 text-4xl font-bold mb-6 flex justify-center'>KO'RIK-TANLOVLAR VA FAN OLIMPIADALARDAGI YUTUQLAR
</p>
<div className=' flex gap-16 justify-center mt-18 items-center'>
  <div className='flex flex-col gap-12'>

   <img className='w-[600px] h-0.5' src={line} alt="" />
    <p className='text-black w-[500px]'>Olimpiadalarda qatnashish, o'quvchilarni o'z sohasida ixtisoslashishga undaydi. Ular matematika, kimyo, fizika, biologiya, tarix, adabiyot va boshqa sohalarda chuqur bilimga ega bo'lishadi. Bu bilimlar kelajakda professional faoliyatni boshlashda yoki ilmiy ishlarni amalga oshirishda katta yordam beradi. Olimpiada g'oliblariga pul mukofotlari yoki stipendiyalar berish, ularga o'z bilimlarini yanada kengaytirish va keyingi ta'lim olish uchun moliyaviy qo'llab-quvvatlash imkoniyatini yaratadi. Bu rag'batlantirish o'quvchilarga nafaqat o'z yutuqlarini nishonlash, balki o'z bilim va ko'nikmalarini yanada rivojlantirishga ilhom beradi.
</p>
<img className='w-[600px] h-0.5' src={line} alt="" />
  </div>
    <div className=''>
        {/* <img className='w-full  ' src={sec} alt="" /> */}
        
 <img className='h-[400px] rounded-lg shadow-2xl' src={olm} alt="" />
</div>
    </div>
    {/* <div className='flex gap-12 justify-center  relative' >
        <div>
        <img src={sec1} alt="" />
        <button className='btn w-[150px] h-[40px] text-white bg-amber-500 absolute top-[280px] left-38'>Learn More</button>
        </div>
        <div className=''>
        <img src={sec2} alt="" />
        <button className='btn w-[150px] h-[40px] text-white bg-amber-500 absolute top-[280px] left-126'>Learn More</button>
        </div>
        <div>
        <img src={sec3} alt="" />
        <button className='btn w-[150px] h-[40px] text-white bg-amber-500 absolute top-[280px] right-126'>Learn More</button>
        </div>
        <div>
        <img src={sec4} alt="" />
        <button className='btn w-[150px] h-[40px] text-white bg-amber-500 absolute top-[290px] right-38'>Learn More</button>
        </div>

    </div> */}
    <div className='relative'>

    <img className='w-full mt-24' src={sec5} alt="" />
    <button className='btn w-[170px] h-[46px] text-white bg-amber-500 absolute top-[250px] left-82'>Visit our Campus</button>
    <button className='btn w-[300px] h-[46px] text-white bg-amber-500 absolute top-[250px] right-70'>Talk with an Admissions Rep</button>
    </div>
    </div>
  )
}

export default Main3
