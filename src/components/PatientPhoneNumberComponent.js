import React, { useState, useEffect } from 'react';
import PatientPhoneNumberService from '../services/PatientPhoneNumberService';

const PatientPhoneNumberComponent = () => {
  const [patientPhoneNumbers, setPatientPhoneNumbers] = useState([]);

  useEffect(() => {
    PatientPhoneNumberService.getAllPatientPhoneNumbers().then((data) => setPatientPhoneNumbers(data));
  }, []);

  return (
    <div>
      <h2>Patient Phone Numbers</h2>
      <ul>
        {patientPhoneNumbers.map((phoneNumber) => (
          <li key={phoneNumber.id}>
            ID: {phoneNumber.id}, Patient ID: {phoneNumber.patientID}, Phone Number: {phoneNumber.phoneNumber}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientPhoneNumberComponent;
