import React from "react";
import litsey from '../image/litsey.jpg'
import west2 from '../image/west2.png'
import anm from '../image/anm.png'

const Carousel = () => {
  return (
    <div className="carousel w-full h-[600px] relative overflow-hidden">
      <img className="absolute left-1/2 transform -translate-x-1/2 z-1 top-16 h-[530px] hidden lg:block" src={anm} alt="" />

      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 bg-blue-800 text-white flex flex-col justify-center items-start p-6 sm:p-12 lg:pl-20">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">AKADEMIK LITSEY</h2>
          <p className="text-lg sm:text-xl mb-6">Sizning kelajagingiz uchun ajoyib tanlov</p>
          <button
            className="border-2 w-[200px] border-white font-semibold text-lg sm:text-xl rounded-lg h-[50px] text-amber-500"
            onClick={() => document.getElementById('my_modal_4').showModal()}
          >
            Hoziroq bilish ➜
          </button>

          <dialog id="my_modal_4" className="modal">
            <div className="modal-box w-11/12 max-w-4xl">
              <h3 className="font-bold text-2xl mb-4 text-blue-900">Akademik litsey haqida</h3>
              <p className="text-base leading-relaxed text-gray-700">...
              </p>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn">Yopish</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
        <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-full">
          <img src={litsey} alt="Slide 1" className="w-full h-full object-cover" />
        </div>
        <div className="absolute left-5 right-5 top-1/2 -translate-y-1/2 flex justify-between">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 bg-blue-800 text-white flex flex-col justify-center items-start p-6 sm:p-12 lg:pl-20">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">ANIQ FANLAR </h2>
          <p className="text-lg sm:text-xl mb-6">Kelajak texnologiyari uchun poydevor</p>
          <button
            className="border-2 w-[200px] border-white font-semibold text-lg sm:text-xl rounded-lg h-[50px] text-amber-500"
            onClick={() => document.getElementById('my_modal_5').showModal()}
          >
            Hoziroq bilish ➜
          </button>
          <dialog id="my_modal_5" className="modal">
            <div className="modal-box w-11/12 max-w-4xl">
              <h3 className="font-bold text-2xl mb-4 text-blue-900">Aniq fanlar haqida</h3>
              <p className="text-base leading-relaxed text-gray-700">...
              </p>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn">Yopish</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
        <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-full">
          <img src={west2} alt="Slide 2" className="w-full h-full object-cover" />
        </div>
        <div className="absolute left-5 right-5 top-1/2 -translate-y-1/2 flex justify-between">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 bg-blue-800 text-white flex flex-col justify-center items-start p-6 sm:p-12 lg:pl-20">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Xorij filologiyasi</h2>
          <p className="text-lg sm:text-xl mb-6">Dunyo bilan muloqot qilish</p>
          <button
            className="border-2 w-[200px] border-white font-semibold text-lg sm:text-xl rounded-lg h-[50px] text-amber-500"
            onClick={() => document.getElementById('my_modal_6').showModal()}
          >
            Hoziroq bilish ➜
          </button>
          <dialog id="my_modal_6" className="modal">
            <div className="modal-box w-11/12 max-w-4xl">
              <h3 className="font-bold text-2xl mb-4 text-blue-900">Xorij filologiyasi haqida</h3>
              <p className="text-base leading-relaxed text-gray-700">...
              </p>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn">Yopish</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
        <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-full">
          <img src={west2} alt="Slide 3" className="w-full h-full object-cover" />
        </div>
        <div className="absolute left-5 right-5 top-1/2 -translate-y-1/2 flex justify-between">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>

    </div>
  );
};

export default Carousel;
