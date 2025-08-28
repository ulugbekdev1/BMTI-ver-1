import React, { useState } from 'react';
import matem1 from '../image/matem1.avif';
import tabiy from '../image/tabiy.jpg';
import eng from '../image/eng.jpg';
import guman from '../image/guman.png';

const Advantage = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    { 
      title: "ANIQ FANLAR", 
      src: matem1, 
      modalContent: "Matematika va fizika yo'nalishi insoniyatning fundamental fanlari hisoblanadi. Bu yo'nalishda o'quvchilar logik fikrlash, muammolarni hal qilish, analitik qobiliyatlarini rivojlantiradilar. Fizika va matematika sohalarida chuqur bilimga ega bo'lgan mutaxassislar, ilmiy laboratoriyalarda, texnologik kompaniyalarda, energetika sohasida, muhandislik va robototexnika sohalarida matematika va fizika fan o’qituvchisi sifatida yuqori lavozimlarga ega bo'lishlari mumkin. Ularning ko'plab sohalarda talab etilishi karyera uchun keng imkoniyatlarni taqdim etadi." 
    },
    { 
  title: "TABIY FANLAR", 
  src: tabiy, 
  modalContent: `Biologiya-kimyo yo'nalishida o'qigan o'quvchilar tibbiyot fakultetlarida o'qish uchun yaxshi tayyorgarlikka ega bo'lishadi. "Biologiya-kimyo" yo'nalishi tibbiyot sohasiga tayyorlashda juda muhim o'rin egallaydi. 
Ular aniq va chuqur biologiya va kimyo bilimlariga ega bo'lib, universitetlarda biotexnologiya, ekologiya, kimyo sanoati, shifokor, farmatsevt, biomedikal, oziq-ovqat va ekologiya hamda boshqa ko'plab sohalarda o'qish va ishlash imkoniyatlariga ega bo'lishadi va tibbiy mutaxassisliklarga yo'nalish olish uchun zarur asosga ega bo'lishadi.`
},
   { 
  title: "XORIJ FANLARI", 
  src: eng, 
  modalContent: `Akademik litseyda xorijiy filologiya yo'nalishida o'qiyotgan o'quvchilar nafaqat tilni o'rganish, balki tilni professional darajada ishlatish ko'nikmalarini rivojlantiradilar. 
O'quvchilar IELTS va CEFR imtihoniga tayyorlanish jarayonida tilni yanada chuqurroq o'rganib, testdagi yuqori ballarga erishishadi. 
Bu, o'z navbatida, ularning tarjimonlik, matn yaratish, va tilni o'rgatish kabi sohalarda faoliyat yuritishlariga yordam beradi. 
Xorijiy tillarni bilgan mutaxassislar, asosan tarjimonlik, filologiya, marketing, diplomatika, turizm, xorijiy filologiya, o’qituvchisi, ona tili va adabiyot fan o’qituvchisi. 
Shuningdek, global kompaniyalarda ishlash yoki xorijiy tashkilotlarda faoliyat yuritish imkoniyatlari mavjud.`
},
    { 
      title: "GUMANITAR FANLAR", 
      src: guman, 
      modalContent: "Ijtimoiy-gumanitar yo'nalish, o'quvchilarga tarix, falsafa, ijtimoiy fanlar, psixologiya, siyosatshunoslik, iqtisodiyot, huquq va boshqa gumanitar fanlarni chuqur o'rganish imkonini beradi. Bu o'quvchilarni faqat ma'lumotlar bilan emas, balki analitik va tahliliy fikrlash ko'nikmalarini ham rivojlantiradi." 
    },
  ];

  return (
    <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-8">
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative group w-full h-[220px] sm:h-[250px] md:h-[280px] lg:h-[300px] 
                       overflow-hidden rounded-xl shadow-md cursor-pointer"
            onClick={() => setSelectedItem(item)}
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-[40px] sm:h-[45px] 
                            bg-base-300 rounded-lg text-blue-900 text-center 
                            text-sm sm:text-base md:text-lg font-semibold 
                            flex items-center justify-center shadow-xl 
                            transform transition-transform duration-300 group-hover:scale-110">
              {item.title}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="relative bg-white rounded-xl p-4 sm:p-6 md:p-8 
                          w-full sm:w-11/12 md:w-3/4 lg:w-1/2 
                          max-h-[90vh] overflow-y-auto shadow-lg">
            
            {/* Yopish tugmasi */}
            <button
              className="absolute top-3 right-4 text-gray-600 hover:text-red-500 
                         text-xl sm:text-2xl font-bold"
              onClick={() => setSelectedItem(null)}
            >
              ✕
            </button>

            {/* Sarlavha */}
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
              {selectedItem.title}
            </h2>

            {/* Matn */}
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
              {selectedItem.modalContent}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Advantage;
