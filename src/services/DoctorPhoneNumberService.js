const fs = require('fs');
const path = require('path');

const DOCTOR_PHONE_NUMBER_DATA_PATH = path.join(__dirname, 'doctorPhoneNumberService.json');

const readDoctorPhoneNumberData = () => {
  try {
    const rawData = fs.readFileSync(DOCTOR_PHONE_NUMBER_DATA_PATH, 'utf-8');
    return JSON.parse(rawData);
  } catch (error) {
    console.error('Error reading JSON file:', error);
    return [];
  }
};

const writeDoctorPhoneNumberData = (data) => {
  fs.writeFileSync(DOCTOR_PHONE_NUMBER_DATA_PATH, JSON.stringify(data, null, 2));
};

const DoctorPhoneNumberService = {
  getAllDoctorPhoneNumbers: () => {
    return readDoctorPhoneNumberData();
  },

  getDoctorPhoneNumberById: (id) => {
    const doctorPhoneNumbers = readDoctorPhoneNumberData();
    return doctorPhoneNumbers.find(phoneNumber => phoneNumber.id === id);
  },

  createDoctorPhoneNumber: (doctorPhoneNumberData) => {
    const doctorPhoneNumbers = readDoctorPhoneNumberData();
    doctorPhoneNumberData.id = generateUniqueId(); // Implement a function to generate unique IDs
    doctorPhoneNumbers.push(doctorPhoneNumberData);
    writeDoctorPhoneNumberData(doctorPhoneNumbers);
    return doctorPhoneNumberData;
  },

  updateDoctorPhoneNumber: (id, doctorPhoneNumberData) => {
    const doctorPhoneNumbers = readDoctorPhoneNumberData();
    const existingPhoneNumberIndex = doctorPhoneNumbers.findIndex(phoneNumber => phoneNumber.id === id);
    if (existingPhoneNumberIndex !== -1) {
      doctorPhoneNumbers[existingPhoneNumberIndex] = { id, ...doctorPhoneNumberData };
      writeDoctorPhoneNumberData(doctorPhoneNumbers);
      return doctorPhoneNumbers[existingPhoneNumberIndex];
    }
    return null; // Return null if phone number with given ID is not found
  },

  deleteDoctorPhoneNumber: (id) => {
    const doctorPhoneNumbers = readDoctorPhoneNumberData();
    const updatedPhoneNumbers = doctorPhoneNumbers.filter(phoneNumber => phoneNumber.id !== id);
    writeDoctorPhoneNumberData(updatedPhoneNumbers);
    return true; // Return true if deletion is successful, false otherwise
  },
};

module.exports = DoctorPhoneNumberService;
