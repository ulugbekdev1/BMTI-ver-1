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

    <div className='w-full h-auto bg-[#0099B5] pb-12'>
      <p className='text-4xl text-white flex justify-center pt-12'>CONTACT US</p>

      <div className='flex justify-around mt-12 flex-wrap'>
        <div className='text-white w-[200px] h-[300px]'>
          <h1 className='text-2xl'>Address:</h1>
          <h2>12 Istiqlol street, Tashkent 100047</h2>
        </div>
        <div className='text-white w-[200px] h-[300px]'>
          <h1 className='text-2xl'>Telephones:</h1>
          <h2>+998 71 203 74 74</h2>
          <h2>+998 71 238 74 00</h2>
        </div>
        <div className='text-white w-[200px] h-[300px]'>
          <h1 className='text-2xl'>E-mail:</h1>
          <h2>For correspondence:</h2>
          <h2>info@wuit.uz</h2>
          <h2>For applicants:</h2>
          <h2>admission@wuit.uz</h2>
        </div>
      </div>
      <div className="w-[1200px] mx-auto relative  h-[550px] rounded-lg  shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4100.680168719791!2d69.26886603299458!3d41.315890810566536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b3b3f374883%3A0xaf9b7829bd2121f7!2zSXN0aXFsb2wga28nY2hhc2kgMTIsINCi0L5zaGtlbnQsIFRvc2hrZW50LCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2sus!4v1752680726725!5m2!1sru!2sus"
          title="WIUT Map"
          frameBorder="0"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
          ></iframe>
      </div>
    </div>
    <div className='w-full h-[300px] bg-blue-800 flex justify-evenly items-center relative'>
       <img className='w-[250px] h-[200px]' src={logo} alt="" />
       <div className=' text-white'>
        <p className='text-xl font-semibold'>Main</p>
        <h1>Alumni</h1>
        <h1>Intarnet</h1>
        <h1>Web Mail</h1>
       </div>
       <div className='text-white mt-7'>
        <h1>Virtual Tour</h1>
        <h1>FAQ</h1>
        <h1>Students</h1>
       </div>
       <div className='text-white'>
        <p className='text-xl font-semibold'>Courses</p>
        <h1>Pre-Foundation</h1>
        <h1>Foundation Studies</h1>
        <h1>Undegraduate</h1>
       </div>
       <div className='text-white mt-7'>
        <h1>Postgraduate</h1>
        <h1>Graduate</h1>
        <h1>Exucutive Courses</h1>
       </div>
       <div className='text-white'>
        <p className='text-xl font-semibold'>Quick Links</p>
        <h1>About Us</h1>
        <h1>Careers</h1>
        <h1>Research</h1>
       </div>
       <div className='text-white mt-2'> 
        <h1>Parents</h1>
        <h1>News</h1>
       </div>
       <div className='text-white mt-7'>
        <h1>Scientific Council</h1>
        <h1>Silk Road</h1>
        <h1>Virtual Reception</h1>
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
