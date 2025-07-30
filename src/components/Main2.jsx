import React from 'react';
import line from '../image/Horizontal.png';
import derektor from '../image/derektor.jpg';

const Main2 = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 my-8 mt-32">
      <div className="flex flex-row flex-wrap sm:flex-nowrap items-start justify-center gap-2 sm:gap-4">
        
        {/* Direktor kartasi */}
        <div className="w-[100px] xs:w-[120px] sm:w-[200px] md:w-[250px] lg:w-[350px] shrink-0 bg-blue-900 text-white text-center rounded-lg overflow-hidden shadow-lg">
          <img src={derektor} alt="Direktor rasmi" className="w-full h-auto object-cover" />
          <h3 className="text-[10px] xs:text-[11px] sm:text-sm md:text-base font-semibold mt-2">Xalimov Emin Zaripovich</h3>
          <p className="text-[8px] xs:text-[10px] sm:text-xs mb-2 sm:mb-3">Akademik litsey direktori</p>
        </div>

        {/* Matn qismi */}
        <div className="flex-1 min-w-[200px] max-w-[1000px] text-gray-800 flex flex-col gap-2 sm:gap-3 md:gap-4">
          <p className="text-blue-900 text-[14px] xs:text-[16px] sm:text-xl md:text-2xl lg:text-3xl font-bold">Xush kelibsiz!</p>
          <p className="text-blue-500 text-[10px] xs:text-[12px] sm:text-base md:text-xl">Direktor murojaati</p>
          <img src={line} alt="line" className="w-full max-w-[600px] h-0.5 my-1 sm:my-2" />

          <p className="text-[9px] xs:text-[10px] sm:text-sm md:text-[15px] text-justify leading-[16px] sm:leading-[20px] md:leading-relaxed">
            Buxoro Muhandislik-Texnologiya Instituti Akademik Litseyiga xush kelibsiz!
            Bu yerga kelgan har bir o‘quvchi, abituriyent, ota-ona va hamkor uchun biz har doim
            qo‘llab-quvvatlovchi va ilhomlantiruvchi muhit yaratishga intilamiz.
            <br /><br />
            Bizning litseyimiz O‘zbekiston madaniyati va qadriyatlarini chuqur anglagan holda,
            zamonaviy va innovatsion yondashuv asosida ta’lim beradi. Bu yondashuv o‘quvchilarga
            chuqurlashtirilgan fanlar orqali puxta bilim olish, tanqidiy fikrlashni rivojlantirish
            hamda mustaqil qaror qabul qilish ko‘nikmalarini shakllantirish imkonini beradi.
            <br /><br />
            Litseyda taqdim etilayotgan o‘quv dasturlari xalqaro talablar darajasida ishlab chiqilgan
            bo‘lib, fizika, matematika, kimyo, biologiya, ingliz tili, axborot texnologiyalari,
            hamda boshqa fanlar bo‘yicha yuqori sifatli ta’lim olish imkonini beradi.
            <br /><br />
            Bizning o‘quvchilar zamonaviy axborot-resurs markazi, ilg‘or o‘quv laboratoriyalari va
            interaktiv dars metodlaridan foydalanadilar. Bu esa ularni nafaqat milliy, balki
            xalqaro mehnat bozorida ham raqobatbardosh mutaxassis sifatida shakllanishiga xizmat qiladi.
            <br /><br />
            Birgalikda biz bilim, yangilik va yutuqlarga to‘la kelajakni barpo etmoqdamiz.
            Biz bilan birga rivojlaning va kelajakka dadil qadam qo‘ying!
          </p>

          <img src={line} alt="line" className="w-full max-w-[600px] h-0.5 my-2 sm:my-4" />
        </div>
      </div>
    </div>
  );
};

export default Main2;
