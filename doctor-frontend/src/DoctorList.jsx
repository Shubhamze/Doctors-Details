import React, { useEffect, useState } from "react";
import axios from "axios";

function DoctorList() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/doctors")
      .then((response) => setDoctors(response.data))
      .catch((error) => console.error("Error fetching doctors:", error));
  }, []);

  return (
    <div>
      <h2>Doctor List</h2>
      <ul>
        {doctors.map((doctor) => (
          <li key={doctor._id}>
            {doctor.name} - {doctor.specialization} - {doctor.contact} - {doctor.experience}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DoctorList;
