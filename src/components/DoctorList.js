import React, { useEffect, useState } from 'react';
import DoctorService from '../services/doctorService';

const DoctorComponent = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    DoctorService.getAllDoctors().then(data => {
      setDoctors(data);
    });
  }, []);

  return (
    <div>
      <h1>Doctors</h1>
      <ul>
        {doctors.map(doctor => (
          <li key={doctor.id}>
            {doctor.firstName} {doctor.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorComponent;
