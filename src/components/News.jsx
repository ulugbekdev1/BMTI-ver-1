import { useState } from "react";
import olm from "../image/olm.png";
import sport1 from "../image/sport1.png";
import kimyo from "../image/kimyo.png";

const newsData = [
  {
    id: 1,
    title: "Mustaqillik kuni bayram tadbiri",
    description: "Litseyda Mustaqillik kuni munosabati bilan keng ko‘lamli bayram tadbiri o‘tkazildi.",
    image: "https://storage.ismi.uz/source/1/2024/OON/Mustaqillik_3.jpg",
    fullText: "Bu tadbirda talabalar turli sahnalashtirilgan chiqishlar va musobaqalarda ishtirok etdilar...",
  },
  {
    id: 2,
    title: "Matematika olimpiadasida g‘oliblar",
    description: "Litsey o‘quvchilari respublika matematika olimpiadasida faxrli o‘rinlarni egallashdi.",
    image: olm,
    fullText: "Olimpiadada litsey o‘quvchilari 1,2 va 3-o‘rinlarni egalladi. Ularni tabriklaymiz!",
  },
  {
    id: 3,
    title: "Qabul jarayoni boshlandi",
    description: "2025-2026 o‘quv yili uchun hujjatlar qabuli boshlandi.",
    image: "https://static.abt.uz/crop/600__62aff6ceb2b93.jpeg",
    fullText: "Hujjatlarni topshirish uchun talabalar 1-sentabrdan 30-sentabrgacha murojaat qilishlari mumkin.",
  },
  {
    id: 4,
    title: "Sport musobaqalari",
    description: "Litseyda sport musobaqalari o'tkazildi va g‘oliblar mukofotlandi.",
    image: sport1,
    fullText: "Futbol, voleybol va shaxmat bo‘yicha g‘oliblar diplomlar va kuboklar bilan taqdirlandi.",
  },
  {
    id: 5,
    title: "Kitobxonlik haftaligi",
    description: "Talabalar kitobxonlik haftaligida faol ishtirok etdilar.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIzvgDKCeBhWCL5iN8nIecja5iBffglwWdHA&s",
    fullText: "Hafta davomida turli viktorinalar, tanlovlar va kitob ko‘rgazmalari tashkil etildi.",
  },
  {
    id: 6,
    title: "Laboratoriya jihozlari yangilandi",
    description: "Litsey laboratoriyalari yangi jihozlar bilan ta’minlandi.",
    image: kimyo,
    fullText: "Kimyo va fizika laboratoriyalariga zamonaviy uskunalar o‘rnatildi, o‘quv jarayoni yanada interaktiv bo‘ldi.",
  },
];

function News() {
  const [selectedNews, setSelectedNews] = useState(null);

  return (
    <div className="p-4 sm:p-6 md:p-10">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-blue-900">YANGILIKLAR</h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {newsData.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 sm:h-52 md:h-56 object-cover"
            />
            <div className="p-4 sm:p-5">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-blue-900">{item.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4">{item.description}</p>
              <button
                onClick={() => setSelectedNews(item)}
                className="text-blue-600 font-medium hover:underline text-sm sm:text-base"
              >
                Batafsil →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedNews && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4 sm:px-6">
          <div className="relative bg-white rounded-xl max-w-full sm:max-w-2xl md:max-w-3xl w-full 
                          max-h-[90vh] overflow-y-auto p-4 sm:p-6 md:p-8 shadow-lg">
            
            {/* Close button */}
            <button
              onClick={() => setSelectedNews(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl sm:text-2xl font-bold"
            >
              ×
            </button>

            <img
              src={selectedNews.image}
              alt={selectedNews.title}
              className="w-full h-48 sm:h-60 md:h-72 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-blue-900">{selectedNews.title}</h3>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">{selectedNews.fullText}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default News;
