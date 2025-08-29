import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const TeacherDetail = () => {
  const API_BASE = "https://api.bdtu-al.uz";
  const { id } = useParams();

  const [teacher, setTeacher] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    const fetchTeacher = async () => {
      try {
        const res = await axios.get(`${API_BASE}/teacher/teacher/${id}/`, {
          headers: { Authorization: "Basic MTox" },
        });
        setTeacher(res.data);
      } catch (e) {
        setErr("Ma'lumot yuklanmadi yoki topilmadi.");
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchTeacher();
  }, [id]);

  const Skeleton = () => (
    <div className="bg-white shadow-2xl rounded-3xl overflow-hidden animate-pulse">
      <div className="w-full h-80 bg-gray-300"></div>
      <div className="p-6 flex flex-col gap-3">
        <div className="h-6 bg-gray-300 rounded w-2/3"></div>
        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        <div className="h-3 bg-gray-200 rounded w-full"></div>
        <div className="h-3 bg-gray-200 rounded w-5/6"></div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="p-6 md:p-10 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-10">O'qituvchi</h2>
        <Skeleton />
      </div>
    );
  }

  if (err || !teacher) {
    return (
      <div className="p-6 md:p-10 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-6">O'qituvchi</h2>
        <p className="text-red-600 mb-6">{err || "Topilmadi."}</p>
        <Link to="/teachers" className="bg-blue-900 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition inline-block">
          Ortga
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-10 max-w-4xl mx-auto mt-16 ">
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-10">O'qituvchi</h2>

      <div className="bg-white shadow-2xl rounded-3xl overflow-hidden">
        <img
          src={teacher.photo ? `${API_BASE}${teacher.photo}` : "/placeholder.png"}
          alt={`${teacher.first_name} ${teacher.last_name}`}
          className="w-full h-80 object-cover"
        />
        <div className="p-6 flex flex-col gap-2">
          <h3 className="text-2xl font-bold text-blue-900">
            {teacher.first_name} {teacher.last_name}
          </h3>
          <p className="text-gray-600 text-sm">Otasining ismi: {teacher.middle_name || "-"}</p>
          <p className="text-gray-600 text-sm">Tug'ilgan sana: {teacher.date_of_birth}</p>
          <p className="text-gray-600 text-sm">Jinsi: {teacher.gender === "male" ? "Erkak" : "Ayol"}</p>
          <p className="text-gray-700 mt-2">{teacher.bio}</p>

          <div className="flex gap-3 mt-6">
            <Link
              to="/teachers"
              className="bg-blue-900 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition inline-block"
            >
              Ortga
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDetail;
