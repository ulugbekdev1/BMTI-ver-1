import { useState, useEffect } from "react";
import axios from "axios";

function News() {
  const [news, setNews] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get("https://api.bdtu-al.uz/news/all_news/", {
          headers: {
            Authorization: "Basic MTox",
          },
        });
        setNews(res.data.results);
      } catch (err) {
        console.error("Xatolik:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  return (
    <div className="p-4 sm:p-6 md:p-10">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-blue-900">
        YANGILIKLAR
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {loading
          ? [...Array(6)].map((_, i) => (
              <div
                key={i}
                className="bg-gray-200 animate-pulse rounded-3xl h-72"
              ></div>
            ))
          : news.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={`https://api.bdtu-al.uz${item.image}`}
                  alt={item.title}
                  className="w-full h-48 sm:h-52 md:h-56 object-cover"
                />
                <div className="p-4 sm:p-5">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-blue-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-4 line-clamp-3">
                    {item.description}
                  </p>
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
        <div
          onClick={() => setSelectedNews(null)} // fon bosilsa yopiladi
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4 sm:px-6"
        >
          <div
            onClick={(e) => e.stopPropagation()} // modal ichini bosganda yopilmasin
            className="relative bg-white rounded-3xl max-w-full sm:max-w-2xl md:max-w-3xl w-full 
                          max-h-[90vh] overflow-y-auto p-4 sm:p-6 md:p-8 shadow-xl"
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedNews(null)}
              className="absolute top-2  right-3 text-white bg-red-500 hover:bg-red-600 
                         rounded-full w-8 h-8 flex items-center justify-center shadow-md text-xl font-bold"
            >
              <div  className="mb-1" >
              ×
              </div>
            </button>

            <img
              src={`https://api.bdtu-al.uz${selectedNews.image}`}
              alt={selectedNews.title}
              className="w-full h-48 sm:h-60 md:h-72 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-blue-900">
              {selectedNews.title}
            </h3>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
              {selectedNews.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default News;
