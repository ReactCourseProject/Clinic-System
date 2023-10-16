import React, { useEffect, useState } from 'react';
import PatientService from '../services/patientService';

const PatientComponent = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    PatientService.getAllPatients().then(data => {
      setPatients(data);
    });
  }, []);

  return (
    <div>
      <h1>Patients</h1>
      <ul>
        {patients.map(patient => (
          <li key={patient.id}>
            {patient.firstName} {patient.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientComponent;
