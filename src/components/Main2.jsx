import React from 'react';
import line from '../image/Horizontal.png';

const Main2 = () => {
  return (
    <div className="max-w-7xl w-full px-4 mx-auto my-8 mt-32 flex flex-col lg:flex-row gap-12 items-center">
      {/* Chapdagi direktor kartasi */}
      <div className="w-full max-w-[450px] rounded-lg overflow-hidden shadow-lg bg-white text-center p-6">
        <div className="w-32 h-32 mx-auto rounded-full bg-blue-200 flex items-center justify-center text-white text-3xl font-bold">
          EZ
        </div>
        <h3 className="mt-4 text-xl font-semibold text-gray-800">
          Xalimov Emin Zaripovich
        </h3>
        <p className="text-sm text-gray-500">Akademik litsey direktori</p>
      </div>

      {/* O'ngdagi matn qismi */}
      <div className="flex-1 flex flex-col gap-4">
        <p className="text-blue-900 text-3xl sm:text-4xl font-bold">Xush kelibsiz!</p>
        <p className="text-blue-500 text-2xl sm:text-3xl">Rektor tomonidan murojaat</p>
        <img className="w-full max-w-[800px] h-0.5" src={line} alt="line" />
        <p className="text-justify text-gray-800 leading-relaxed">
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
        <img className="w-full max-w-[800px] h-0.5" src={line} alt="line" />
      </div>
    </div>
  );
};

export default Main2;
