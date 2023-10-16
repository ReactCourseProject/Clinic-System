import React, { useState, useEffect } from 'react';
import MedicalRecordService from '../services/medicalRecordService';

const MedicalRecordComponent = () => {
  const [medicalRecords, setMedicalRecords] = useState([]);

  useEffect(() => {
    MedicalRecordService.getAllMedicalRecords().then((data) => setMedicalRecords(data));
  }, []);

  return (
    <div>
      <h2>Medical Records</h2>
      <ul>
        {medicalRecords.map((medicalRecord) => (
          <li key={medicalRecord.id}>
            ID: {medicalRecord.id}, Date: {medicalRecord.medicalDate}, Observations: {medicalRecord.medicalObservations}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MedicalRecordComponent;
