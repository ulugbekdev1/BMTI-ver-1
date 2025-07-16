import React from 'react'
import back from '../image/Background.png'
import line from '../image/Horizontal.png'
const Main2 = () => {
  return (
    <div className='w-[1320px]  mx-auto my-8 mt-32 flex  gap-20  '>
        <div>
            <img src={back} alt="" />
        </div>
        <div className='flex flex-col gap-5'>
            <p className='text-blue-900 text-4xl font-bold mb-6'>Welcome</p>
            <p className='text-blue-500 text-4xl'>Message from Our Rector</p>
            <img className='w-[800px] h-0.5' src={line} alt="" />
            <p className='w-[600px]'>
                Welcome to Westminster International University in Tashkent! Support and inspiration for
everyone who comes here—students, applicants, partners, and staff. 
Our unique approach bridges the esteemed British education system with the Culture of
Uzbekistan. We offer bachelor’s and master’s programmes that meet international standards,
designed to produce top-tier specialists in fields such as Business, Economics, Finance,
Business Information Systems, Computer Science, Law and more. Our students benefit from
cutting-edge educational resources and innovative teaching methods, equipping them to
excel in both global and local labour markets.
Together, we are building a future full of knowledge, innovation, and achievement. Join our
dynamic community and move forward with us!
            </p>
            <img className='w-[800px] h-0.5' src={line} alt="" />
        </div> 
    </div>
  )
}

export default Main2