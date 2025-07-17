import React from "react";
import west from '../image/west.jpg'
import west2 from '../image/west2.png'
import anm from '../image/anm.png'

const Carousel = () => {
  return (
    <div className="carousel w-full h-[600px]    relative">
        
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full flex">
        <div className="w-1/2 bg-blue-800 text-white flex flex-col justify-center items-start p-12 pl-20">
          <h2 className="text-3xl font-bold mb-4">NEW PROGRAMMER</h2>
          <p className="text-xl mb-6">MA in Creative Industries Management</p>
         <button className="border-2 w-[200px] border-white font-semibold text-xl rounded-lg h-[50px] text-amber-500">APPLY NOW ➜</button>
        </div>
        <div className="w-1/2 h-full">
          <img
            src={west}
            alt="Slide 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute left-5 right-5 top-1/2 -translate-y-1/2 flex justify-between">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
        <img className="w-56 z-1 h-[520px] absolute left-[650px]  top-16" src={anm} alt="" />
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full flex">
        <div className="w-1/2 bg-blue-800 text-white flex flex-col justify-center items-start p-12 pl-20">
          <h2 className="text-3xl font-bold mb-4">STUDY IN TASHKENT</h2>
          <p className="text-xl mb-6">Top UK Degree from WIUT</p>
          <button className="border-2 w-[200px] border-white font-semibold text-xl rounded-lg h-[50px] text-amber-500">APPLY NOW ➜</button>
        </div>
        <div className="w-1/2 h-full">
          <img
            src={west2}
            alt="Slide 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute left-5 right-5 top-1/2 -translate-y-1/2 flex justify-between">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
        <img className="w-56 z-1 h-[520px] absolute left-[650px]  top-16" src={anm} alt="" />
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full flex">
        <div className="w-1/2 bg-blue-800 text-white flex flex-col justify-center items-start p-12 pl-20">
          <h2 className="text-3xl font-bold mb-4">JOIN OUR RESEARCH</h2>
          <p className="text-xl mb-6">Contribute to global innovation</p>
          <button className="border-2 w-[200px] border-white font-semibold text-xl rounded-lg h-[50px] text-amber-500">APPLY NOW ➜</button>
        </div>
        <div className="w-1/2 h-full">
          <img
            src={west2}
            alt="Slide 3"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute left-5 right-5 top-1/2 -translate-y-1/2 flex justify-between">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
        <img className="w-56 z-1 h-[520px] absolute left-[650px]  top-16" src={anm} alt="" />
      </div>

      
    </div>
  );
};

export default Carousel;
