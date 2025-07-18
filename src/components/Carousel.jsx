import React from "react";
import litsey from '../image/litsey.jpg'
import west2 from '../image/west2.png'
import anm from '../image/anm.png'

const Carousel = () => {
  return (
    <div className="carousel w-full h-[600px]   relative">
     <img className="absolute left-[550px] z-1 top-16 h-[530px]" src={anm} alt="" />
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full flex">
        <div className="w-1/2 bg-blue-800 text-white flex flex-col justify-center items-start p-12 pl-20">
          <h2 className="text-3xl font-bold mb-4">AKADEMIK LITSEY</h2>
          <p className="text-xl mb-6">Sizning kelajagingiz uchun ajoyib tanlov</p>
         {/* Modal ochuvchi tugma */}
{/* Modalni ochuvchi tugma */}
<button
  className="border-2 w-[200px] border-white font-semibold text-xl rounded-lg h-[50px] text-amber-500"
  onClick={() => document.getElementById('my_modal_4').showModal()}
>
  Hoziroq bilish ➜
</button>

{/* Modal oyna */}
<dialog id="my_modal_4" className="modal">
  <div className="modal-box w-11/12 max-w-4xl">
    <h3 className="font-bold text-2xl mb-4 text-blue-900">Akademik litsey haqida</h3>
    <p className="text-base leading-relaxed text-gray-700">
      Akademik litsey — bu o'quvchilarning o'z qobiliyatlarini rivojlantirish va kelajakdagi
      muvaffaqiyatlariga tayyorgarlik ko'rish uchun ajoyib imkoniyatdir. Akademik litseyning aniq, tabiiy,
      xorijiy til va ijtimoiy-gumanitar yo'nalishlari, zamonaviy infratuzilmasi, sport va madaniy
      imkoniyatlari sizning shaxs sifatida shakllanishiga hissa qo'shadi.
    </p>
    <br />
    <p className="text-base leading-relaxed text-gray-700">
      Akademik litsey — bu bilim olish va shaxsiy rivojlanish uchun ajoyib imkoniyatlarga ega bo'lgan
      muhit. Bu yerda siz o'zingizni turli fanlarga bag'ishlashingiz, ijodiy qobiliyatingizni
      namoyish etishingiz, intellektual salohiyatlaringizni oshirishingiz mumkin.
    </p>
    <div className="modal-action">
      <form method="dialog">
        <button className="btn">Yopish</button>
      </form>
    </div>
  </div>
</dialog>


        </div>
        <div className="w-1/2 h-full">
          <img
            src={litsey}
            alt="Slide 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute left-5 right-5 top-1/2 -translate-y-1/2 flex justify-between">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full flex">
        <div className="w-1/2 bg-blue-800 text-white flex flex-col justify-center items-start p-12 pl-20">
          <h2 className="text-3xl font-bold mb-4">ANIQ FANLAR </h2>
          <p className="text-xl mb-6">Kelajak texnologiyari uchun poydevor</p>
          <button
  className="border-2 w-[200px] border-white font-semibold text-xl rounded-lg h-[50px] text-amber-500"
  onClick={() => document.getElementById('my_modal_5').showModal()}
>
  Hoziroq bilish ➜
</button>
          <dialog id="my_modal_5" className="modal">
  <div className="modal-box w-11/12 max-w-4xl">
    <h3 className="font-bold text-2xl mb-4 text-blue-900">Aniq fanlar haqida</h3>
    <p className="text-base leading-relaxed text-gray-700">
      Matematika va fizika yo'nalishi insoniyatning fundamental fanlari hisoblanadi. Bu yo'nalishda o'quvchilar logik fikrlash, muammolarni hal qilish, analitik qobiliyatlarini rivojlantiradilar. Fizika va matematika sohalarida chuqur bilimga ega bo'lgan mutaxassislar, ilmiy laboratoriyalarda, texnologik kompaniyalarda, energetika sohasida, muhandislik va robototexnika sohalarida matematika va fizika fan o’qituvchisi sifatida yuqori lavozimlarga ega bo'lishlari mumkin. Ularning ko'plab sohalarda talab etilishi karyera uchun keng imkoniyatlarni taqdim etadi.
    </p>
    <br />
    <p className="text-base leading-relaxed text-gray-700">
      Matematika va ingliz tili ilmiy, texnik va iqtisodiy sohalarda muvaffaqiyatli ta'lim olish uchun mustahkam poydevor yaratadi. Matematika aqlni tarbiyalaydi va muammolarni hal qilishni o'rganishga yordam beradi, ingliz tili esa xalqaro muloqot va ilmiy axborotni olishda muhim rol o'ynaydi. Ushbu yo'nalishni tugatgan o'quvchilar universitetlar va xalqaro ta'lim muassasalariga o'qishga kirishda, shuningdek, ko'plab sohalar (masalan, IT, moliya, ilm-fan va texnika) bo'yicha ish topishda keng imkoniyatlarga ega bo'ladilar. Matematika va ingliz tili bo'yicha bilimlarga ega bo'lgan o'quvchilar ko'plab xalqaro va lokal kompaniyalarda yuqori lavozimlarga ega bo'lishlari mumkin, ayniqsa, texnologiya va biznes sohalarida.

    </p>
    <div className="modal-action">
      <form method="dialog">
        <button className="btn">Yopish</button>
      </form>
    </div>
  </div>
</dialog>
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
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full flex">
        <div className="w-1/2 bg-blue-800 text-white flex flex-col justify-center items-start p-12 pl-20">
          <h2 className="text-3xl font-bold mb-4">Xorij filologiyasi</h2>
          <p className="text-xl mb-6">Dunyo bilan muloqot qilish</p>
          <button
  className="border-2 w-[200px] border-white font-semibold text-xl rounded-lg h-[50px] text-amber-500"
  onClick={() => document.getElementById('my_modal_6').showModal()}
>
  Hoziroq bilish ➜
</button>

{/* Modal oyna */}
<dialog id="my_modal_6" className="modal">
  <div className="modal-box w-11/12 max-w-4xl">
    <h3 className="font-bold text-2xl mb-4 text-blue-900">Xorij filologiyasi haqida</h3>
    <p className="text-base leading-relaxed text-gray-700">
      Akademik litseyda xorijiy filologiya yo'nalishida o'qiyotgan o'quvchilar nafaqat tilni o'rganish, balki tilni professional darajada ishlatish ko'nikmalarini rivojlantiradilar. O'quvchilar IELTS va SEFR
 imtihoniga tayyorlanish jarayonida tilni yanada chuqurroq o'rganib, testdagi yuqori ballarga erishishadi. Bu, o'z navbatida, ularning tarjimonlik, matn yaratish, va tilni o'rgatish kabi sohalarda faoliyat yuritishlariga yordam beradi. Xorijiy tillarni bilgan mutaxassislar, asosan tarjimonlik, filologiya, marketing, diplomatika, turizm, xorijiy filologiya, o’qituvchisi, ona tili va adabiyot fan o’qituvchisi. Shuningdek, global kompaniyalarda ishlash yoki xorijiy tashkilotlarda faoliyat yuritish imkoniyatlari mavjud.

    </p>
    <br />
    <div className="modal-action">
      <form method="dialog">
        <button className="btn">Yopish</button>
      </form>
    </div>
  </div>
</dialog>
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
        
      </div>

      
    </div>
  );
};

export default Carousel;
