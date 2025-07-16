import React from 'react'
import border from '../image/Border.png';
import link2 from '../image/Container (1).png'
import link3 from '../image/Container (2).png'
import link4 from '../image/Container (3).png'
import link5 from '../image/Container (4).png'
import link6 from '../image/Container (5).png'

const Advantage = () => {
  return (
    <div className=''>
      <img className='h-screen' src={border} alt="" />
      <div className='flex w-full'>
            <img className='w-[304px]' src={link2} alt="" />
            <img className='w-[304px]' src={link3} alt="" />
            <img className='w-[304px]' src={link4} alt="" />
            <img className='w-[304px]' src={link5} alt="" />
            <img className='w-[304px]' src={link6} alt="" />
      </div>
    </div>
  )
}

export default Advantage
