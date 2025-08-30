import React, { useState, useEffect } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const NewsList = () => {
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
        // faqat 3 ta yangilik chiqsin
        setNews(res.data.results.slice(0, 3));
        setLoading(false);
      } catch (err) {
        console.error("News xatosi:", err);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="p-6">
      <p className="text-blue-900 sm:text-4xl font-bold text-center mb-10 mt-20">
        Yangiliklar
      </p>

      {/* Yangiliklar kartalari */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {loading
          ? // Skeleton loading (3 ta card)
            Array(3)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="w-[280px] h-[380px] bg-white shadow-lg rounded-lg p-4 flex flex-col"
                >
                  <Skeleton height={180} className="mb-4 rounded-md" />
                  <Skeleton height={20} width={`80%`} className="mb-2" />
                  <Skeleton height={20} width={`60%`} />
                  <div className="mt-auto">
                    <Skeleton height={30} width={100} />
                  </div>
                </div>
              ))
          : news.map((n) => (
              <div
                key={n.id}
                className="w-[280px] h-[380px] bg-white shadow-lg rounded-lg flex flex-col items-center justify-between p-4"
              >
                <img
                  src={`https://api.bdtu-al.uz${n.image}`}
                  alt={n.title}
                  className="w-full h-[180px] object-cover rounded-md"
                />
                <span className="text-blue-900 text-base text-center font-semibold leading-tight">
                  {n.title}
                </span>
                <button
                  onClick={() => setSelectedNews(n)}
                  className="w-[110px] h-[35px] bg-blue-900 text-white rounded-md text-sm hover:bg-blue-700 transition-colors"
                >
                  Batafsil
                </button>
              </div>
            ))}
      </div>

      {/* Modal */}
      {selectedNews && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-[90%] max-w-lg p-6 rounded-lg shadow-xl relative">
            <button
              onClick={() => setSelectedNews(null)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl font-bold"
            >
              ✕
            </button>

            <img
              src={`https://api.bdtu-al.uz${selectedNews.image}`}
              alt={selectedNews.title}
              className="w-full h-[220px] object-cover rounded-md mb-4"
            />
            <p className="text-blue-900 text-xl font-bold mb-2">
              {selectedNews.title}
            </p>
            <p className="text-gray-800 text-base leading-relaxed">
              {selectedNews.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsList;
