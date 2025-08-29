import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const TeacherList = () => {
  const API_BASE = "https://api.bdtu-al.uz";

  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const res = await axios.get(`${API_BASE}/teacher/all_teachers/`, {
          headers: { Authorization: "Basic MTox" },
        });
        setTeachers(res.data.results);
      } catch (error) {
        console.error("Error fetching teachers:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTeachers();
  }, []);

  const SkeletonCard = () => (
    <div className="bg-white shadow-2xl rounded-3xl overflow-hidden animate-pulse">
      <div className="w-full h-64 bg-gray-300"></div>
      <div className="p-6 flex flex-col gap-3">
        <div className="h-5 bg-gray-300 rounded w-1/2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        <div className="h-3 bg-gray-200 rounded w-full"></div>
        <div className="h-3 bg-gray-200 rounded w-5/6"></div>
      </div>
    </div>
  );

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto mt-16">
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-10">O'qituvchilar</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
          : teachers.map((t, index) => (
              <div
                key={index}
                className="bg-white shadow-2xl rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={t.photo ? `${API_BASE}${t.photo}` : "/placeholder.png"}
                  alt={`${t.first_name} ${t.last_name}`}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 flex flex-col gap-2">
                  <h3 className="text-xl font-bold text-blue-900">
                    {t.first_name} {t.last_name}
                  </h3>
                  <p className="text-gray-600 text-sm">Otasining ismi: {t.middle_name || "-"}</p>
                  <p className="text-gray-600 text-sm">Tug'ilgan sana: {t.date_of_birth}</p>
                  <p className="text-gray-600 text-sm">Jinsi: {t.gender === "male" ? "Erkak" : "Ayol"}</p>
                  <p className="text-gray-700 mt-2">{t.bio}</p>

                  {/* Shu joy AVVAL bo'sh edi — style’ni buzmay, faqat link qo‘ydik */}
                  <div className="flex gap-3 mt-4">
                    <Link
                      to={`/teachers/${t.id}`}
                      className="bg-blue-900 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition inline-block"
                    >
                      Batafsil
                    </Link>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default TeacherList;
