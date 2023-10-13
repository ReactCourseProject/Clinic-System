import React, { useState, useEffect } from 'react';
import DoctorPhoneNumberService from '../services/DoctorPhoneNumberService';

const DoctorPhoneNumberComponent = () => {
  const [doctorPhoneNumbers, setDoctorPhoneNumbers] = useState([]);

  useEffect(() => {
    DoctorPhoneNumberService.getAllDoctorPhoneNumbers().then((data) => setDoctorPhoneNumbers(data));
  }, []);

  return (
    <div>
      <h2>Doctor Phone Numbers</h2>
      <ul>
        {doctorPhoneNumbers.map((phoneNumber) => (
          <li key={phoneNumber.id}>
            ID: {phoneNumber.id}, Doctor ID: {phoneNumber.doctorID}, Phone Number: {phoneNumber.phoneNumber}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorPhoneNumberComponent;
