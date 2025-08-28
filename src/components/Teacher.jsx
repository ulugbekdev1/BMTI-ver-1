import React, { useState } from "react";
import eng from '../image/eng.jpg'

const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);
  const [form, setForm] = useState({
    name: "",
    subject: "",
    email: "",
    phone: "",
    photo: ""
  });
  const [editingIndex, setEditingIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "photo") {
      setForm({ ...form, photo: URL.createObjectURL(files[0]) });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      const updatedTeachers = [...teachers];
      updatedTeachers[editingIndex] = form;
      setTeachers(updatedTeachers);
      setEditingIndex(null);
    } else {
      setTeachers([...teachers, form]);
    }
    setForm({ name: "", subject: "", email: "", phone: "", photo: "" });
  };

  const handleEdit = (index) => {
    setForm(teachers[index]);
    setEditingIndex(index);
    window.scrollTo({ top: 0, behavior: "smooth" }); // formga avtomatik scroll
  };

  const handleDelete = (index) => {
    const updatedTeachers = teachers.filter((_, i) => i !== index);
    setTeachers(updatedTeachers);
  };

  return (
    <div className="p-4 sm:p-6 md:p-10 max-w-7xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 text-center mb-8">O'qituvchilar</h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-xl p-6 mb-10 flex flex-col gap-4 sm:gap-6">
        <h3 className="text-xl font-semibold text-blue-900 text-center">
          {editingIndex !== null ? "O'qituvchi ma'lumotini tahrirlash" : "O'qituvchi qo'shish"}
        </h3>
        <input
          type="text"
          name="name"
          placeholder="Ism va Familiya"
          value={form.name}
          onChange={handleChange}
          className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Fan nomi"
          value={form.subject}
          onChange={handleChange}
          className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Telefon raqam"
          value={form.phone}
          onChange={handleChange}
          className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="file"
          name="photo"
          accept="image/*"
          onChange={handleChange}
          className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required={!form.photo}
        />
        <button
          type="submit"
          className="bg-blue-900 text-white py-2 rounded hover:bg-blue-700 transition-colors duration-300"
        >
          {editingIndex !== null ? "Tahrirlash" : "Qo'shish"}
        </button>
      </form>

     {/* Teacher cards */}
<div className="flex flex-col gap-6 w-full">
  {teachers.map((t, index) => (
    <div
      key={index}
      className="bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col md:flex-row w-full"
    >
      {/* Left - Image */}
      <div className="md:w-1/3 w-full">
        <img
          src={t.photo}
          alt={t.name}
          className="w-full h-64 md:h-full object-cover"
        />
      </div>

      {/* Right - Info */}
      <div className="flex flex-col justify-center p-6 md:w-2/3 w-full">
        <h3 className="text-2xl font-bold text-blue-900">{t.name}</h3>
        <p className="text-lg text-gray-700 mt-2">{t.subject}</p>
        <p className="text-gray-600 text-sm mt-1">{t.email}</p>
        <p className="text-gray-600 text-sm">{t.phone}</p>

        {/* Buttons */}
        <div className="flex gap-3 mt-6">
          <button
            onClick={() => handleEdit(index)}
            className="bg-yellow-500 text-white px-4 py-2 rounded-xl hover:bg-yellow-600 transition"
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(index)}
            className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default TeacherList;
