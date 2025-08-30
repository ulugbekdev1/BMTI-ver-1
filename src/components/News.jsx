import { useState, useEffect } from "react";
import axios from "axios";

function News() {
  const [news, setNews] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null);
  const [loading, setLoading] = useState(true);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 6;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get("https://api.bdtu-al.uz/news/all_news/", {
          headers: { Authorization: "Basic MTox" },
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

  // Pagination calculations
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);
  const totalPages = Math.ceil(news.length / newsPerPage);

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
          : currentNews.map((item) => (
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

{/* Pagination controls */}
{!loading && totalPages > 1 && (
  <div className="flex justify-center items-center mt-10 gap-2 flex-wrap sm:flex-nowrap">
    {/* Oldingi tugma */}
    <button
      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
      disabled={currentPage === 1}
      className="px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base bg-gradient-to-r from-blue-700 to-blue-500 text-white font-semibold rounded-full shadow-md hover:from-blue-800 hover:to-blue-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
    >
      &#8592;
    </button>

    {/* Sahifa raqamlari */}
    {Array.from({ length: totalPages }, (_, i) => (
      <button
        key={i}
        onClick={() => setCurrentPage(i + 1)}
        className={`px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base rounded-full font-medium shadow-md transition ${
          currentPage === i + 1
            ? "bg-blue-600 text-white scale-105"
            : "bg-gray-200 text-gray-700 hover:bg-blue-400 hover:text-white"
        }`}
      >
        {i + 1}
      </button>
    ))}

    {/* Keyingi tugma */}
    <button
      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
      disabled={currentPage === totalPages}
      className="px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base bg-gradient-to-r from-blue-700 to-blue-500 text-white font-semibold rounded-full shadow-md hover:from-blue-800 hover:to-blue-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
    >
      &#8594;
    </button>
  </div>
)}

    </div>
  );
}

export default News;
