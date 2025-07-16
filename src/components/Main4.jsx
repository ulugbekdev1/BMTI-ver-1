import React from 'react'
import con from  '../image/Container (6).png'
import con1 from '../image/Container (7).png'
import con2 from '../image/Container (8).png'
import con3 from '../image/Container (9).png'
import con4 from '../image/Container (10).png'
import con5 from '../image/Container (11).png'

const Main4 = () => {
  return (
    <div className='relative'>
      <p className='text-blue-900 text-4xl font-bold mb-6 flex justify-center mt-24'>HEAR FROM OUR STUDENTS AND ALUMNI</p>
      <img className='w-full mt-18' src={con} alt="" /> 
      <div>
        <button className='btn w-[300px] h-[62px] bg-amber-500 text-white text-2xl absolute top-[500px] left-4 '>Ready Maryam's story</button>
      </div>
      <div>
        <p className='text-blue-900 text-4xl font-bold mb-6 flex justify-center mt-24'>OUR PARTNERS</p>
        <div className='flex justify-center gap-4'>
            <img src={con1} alt="" />
            <img src={con2} alt="" />
            <img src={con3} alt="" />
            <img src={con4} alt="" />
            <img src={con5} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Main4
