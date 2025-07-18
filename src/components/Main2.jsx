import React from 'react'
import back from '../image/Background.png'
import line from '../image/Horizontal.png'
const Main2 = () => {
  return (
    <div className='w-[1320px]  mx-auto my-8 mt-32 flex  gap-20 items-center  '>
        <div>
            <div className="w-[450px] h-[400px] rounded-lg overflow-hidden flex flex-col justify-center shadow-lg bg-white text-center p-4">
  <div className="w-32 h-32 mx-auto rounded-full bg-blue-200 flex items-center justify-center text-white text-3xl font-bold">
    EZ
  </div>
  <h3 className="mt-4 text-xl font-semibold text-gray-800">Xalimov Emin Zaripovich</h3>
  <p className="text-sm text-gray-500">Akademik litsey direktori</p>
</div>

        </div>
        <div className='flex flex-col gap-2'>
            <p className='text-blue-900 text-4xl font-bold mb-6'>Xush kelibsiz!</p>
            <p className='text-blue-500 text-4xl'>Rektor tomonidan murojat</p>
            <img className='w-[800px] h-0.5' src={line} alt="" />
            <p className='w-[600px]'>
                Buxoro Muhandislik-Texnologiya Instituti Akademik Litseyiga xush kelibsiz!
Bu yerga kelgan har bir o‘quvchi, abituriyent, ota-ona va hamkor uchun biz har doim qo‘llab-quvvatlovchi va ilhomlantiruvchi muhit yaratishga intilamiz.

Bizning litseyimiz O‘zbekiston madaniyati va qadriyatlarini chuqur anglagan holda, zamonaviy va innovatsion yondashuv asosida ta’lim beradi. Bu yondashuv o‘quvchilarga chuqurlashtirilgan fanlar orqali puxta bilim olish, tanqidiy fikrlashni rivojlantirish hamda mustaqil qaror qabul qilish ko‘nikmalarini shakllantirish imkonini beradi.

Litseyda taqdim etilayotgan o‘quv dasturlari xalqaro talablar darajasida ishlab chiqilgan bo‘lib, fizika, matematika, kimyo, biologiya, ingliz tili, axborot texnologiyalari, hamda boshqa fanlar bo‘yicha yuqori sifatli ta’lim olish imkonini beradi.

Bizning o‘quvchilar zamonaviy axborot-resurs markazi, ilg‘or o‘quv laboratoriyalari va interaktiv dars metodlaridan foydalanadilar. Bu esa ularni nafaqat milliy, balki xalqaro mehnat bozorida ham raqobatbardosh mutaxassis sifatida shakllanishiga xizmat qiladi.

Birgalikda biz bilim, yangilik va yutuqlarga to‘la kelajakni barpo etmoqdamiz.
Biz bilan birga rivojlaning va kelajakka dadil qadam qo‘ying!
            </p>
            <img className='w-[800px] h-0.5' src={line} alt="" />
        </div> 
    </div>
  )
}

export default Main2