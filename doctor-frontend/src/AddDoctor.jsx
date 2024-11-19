

import React, { useState } from "react";
import axios from "axios";

function AddDoctor() {
  const [doctor, setDoctor] = useState({
    name: "",
    specialization: "",
    contact: "",
    experience: "",
  });

  const handleChange = (e) =>
    setDoctor({ ...doctor, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/doctors", doctor);
      setDoctor({ name: "", specialization: "", contact: "", address:""});
    } catch (error) {
      console.error("Error adding doctor:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Add Doctor</h2>

      <input
        name="name"
        value={doctor.name}
        onChange={handleChange}
        placeholder="Name"
        className="w-full mb-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        name="specialization"
        value={doctor.specialization}
        onChange={handleChange}
        placeholder="Specialization"
        className="w-full mb-6 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        name="contact"
        value={doctor.contact}
        onChange={handleChange}
        placeholder="Contact"
        className="w-full mb-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        name="experience"
        value={doctor.experience}
        onChange={handleChange}
        placeholder="Experience"
        className="w-full mb-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Add Doctor
      </button>
    </form>
  );
}

export default AddDoctor;

