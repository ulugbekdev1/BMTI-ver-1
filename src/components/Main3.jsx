import React from 'react';
import olm from '../image/olm.png';
import line from '../image/Horizontal.png';
import kimyo from '../image/kimyo.png';
import sport1 from "../image/sport1.png";
import litsey from '../image/litsey.jpg'
const Main3 = () => {
  const cards = [
    {
      img: kimyo,
      text: "Kimyo va fizika laboratoriyalariga zamonaviy uskunalar o‘rnatildi, o‘quv jarayoni yanada interaktiv bo‘ldi."
    },
    {
      img: sport1,
      text: "Futbol, voleybol va shaxmat bo‘yicha g‘oliblar diplomlar va kuboklar bilan taqdirlandi."
    },
    {
      img: litsey,
      text: "Fan olimpiadalari va tanlovlarda yuqori natijalar uchun rag'batlar mavjud..."
    }
  ];

  const stats = [
    ['825', "O'quv o'rni"],
    ['603', "O'quvchilar soni"],
    ['195', "Mikro hududdan"],
    ['408', "Boshqa hududdan"],
    ['400', "Talabalar turar joyi"],
  ];

  return (
    <div className="mt-28 px-4">
      {/* Sarlavha */}
      <p className="text-blue-900 sm:text-3xl font-bold text-center mb-6">
        KO'RIK-TANLOVLAR VA FAN OLIMPIADALARDAGI YUTUQLAR
      </p>

      {/* Matn va Rasm */}
      <div className="flex flex-col lg:flex-row gap-20 justify-center items-center">
        <div className="flex flex-col gap-12 max-w-xl">
          <img className="w-full h-0.5" src={line} alt="line" />
          <p className="text-gray-800 text-sm sm:text-base text-justify leading-tight">
            Olimpiadalarda qatnashish, o'quvchilarni o'z sohasida ixtisoslashishga undaydi. Ular matematika, kimyo, fizika, biologiya, tarix, adabiyot va boshqa sohalarda chuqur bilimga ega bo'lishadi. Bu bilimlar kelajakda professional faoliyatni boshlashda yoki ilmiy ishlarni amalga oshirishda katta yordam beradi. Olimpiada g'oliblariga pul mukofotlari yoki stipendiyalar berish, ularga o'z bilimlarini yanada kengaytirish va keyingi ta'lim olish uchun moliyaviy qo'llab-quvvatlash imkoniyatini yaratadi. Bu rag'batlantirish o'quvchilarga nafaqat o'z yutuqlarini nishonlash, balki o'z bilim va ko'nikmalarini yanada rivojlantirishga ilhom beradi.

          </p>
          <img className="w-full h-0.5" src={line} alt="line" />
        </div>

        <div className="w-full max-w-md">
          <img
            className="w-full h-auto max-h-[350px] object-cover rounded-lg shadow-xl"
            src={olm}
            alt="Olimpiada"
          />
        </div>
      </div>

      

      {/* Bizning yutuqlar sarlavhasi */}
      <p className="text-blue-900 sm:text-3xl font-bold text-center mb-6 mt-20">
        BIZNING YUTUQLAR
      </p>

      {/* Statistika bloki */}
      <div className="flex justify-center flex-wrap gap-6 sm:text-3xl mt-8 w-full bg-blue-100 py-6">
        {stats.map(([number, label], i) => (
          <div
            key={i}
            className="w-[130px] h-[150px] flex flex-col items-center justify-center bg-white rounded-lg shadow-md"
          >
            <p className="text-3xl text-blue-800 font-semibold">{number}</p>
            <p className="text-xs text-center">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main3;
