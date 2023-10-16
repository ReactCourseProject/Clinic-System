import React, { useState, useEffect } from 'react';
import MedicationService from '../services/medicationService';

const MedicationComponent = () => {
  const [medications, setMedications] = useState([]);

  useEffect(() => {
    MedicationService.getAllMedications().then((data) => setMedications(data));
  }, []);

  return (
    <div>
      <h2>Medications</h2>
      <ul>
        {medications.map((medication) => (
          <li key={medication.id}>
            ID: {medication.id}, Frequency: {medication.frequency}, Name: {medication.medicationName}, Dosage: {medication.dosage}, Prescription Date: {medication.prescriptionDate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MedicationComponent;
