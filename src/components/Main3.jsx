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
const Main3 = () => {
  return (
    <div className='mt-28'>

    <p className='text-blue-900 text-4xl font-bold mb-6 flex justify-center'>LATEST NEWS</p>
    <div className='max-w-[1320px] mx-auto my-8 mt-24 flex justify-between'>
      
      <div className='shadow-xl'>
        <div className='w-[410px] h-[480px]'>
            <img src={set} alt="" />
            <div className='pl-4 mt-12'>

            <p className='text-blue-700 text-sm'>25 June 2025</p>
            <h2 className='text-blue-800 font-semibold text-2xl'>Last Mathematics Entrance Exam at
                WIUT!
            </h2>
            </div>
        </div>
      </div>

      <div className='shadow-xl'>
        <div className='w-[410px] h-[480px]'>
            <img src={set2} alt="" />
            <div className='pl-4 mt-12'>

            <p className='text-blue-700 text-sm'>20 June 2025</p>
            <h2 className='text-blue-800 font-semibold text-2xl'>WIUT Achieves Remarkable Results in
            THE Impact Rankings 2025
            </h2>
            </div>
        </div>
      </div>

      <div className='shadow-xl'>
        <div className='w-[410px] h-[480px]'>
            <img src={set3} alt="" />
            <div className='pl-4 mt-12'>

            <p className='text-blue-700 text-sm'>5 June 2025</p>
            <h2 className='text-blue-800 font-semibold text-2xl'>1st Westminster Doctoral Research
            Network Workshop
            </h2>
            </div>
        </div>
      </div>
    </div>
    <div >
        <img className='w-full mt-24' src={sec} alt="" />
    </div>
    <div className='flex gap-12 justify-center mt-24 relative' >
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

    </div>
    <div className='relative'>

    <img className='w-full mt-24' src={sec5} alt="" />
    <button className='btn w-[170px] h-[46px] text-white bg-amber-500 absolute top-[250px] left-82'>Visit our Campus</button>
    <button className='btn w-[300px] h-[46px] text-white bg-amber-500 absolute top-[250px] right-70'>Talk with an Admissions Rep</button>
    </div>
    </div>
  )
}

export default Main3
