const fs = require('fs');
const path = require('path');

const PATIENT_PHONE_NUMBER_DATA_PATH = path.join(__dirname, 'patientPhoneNumberService.json');

const readPatientPhoneNumberData = () => {
  try {
    const rawData = fs.readFileSync(PATIENT_PHONE_NUMBER_DATA_PATH, 'utf-8');
    return JSON.parse(rawData);
  } catch (error) {
    console.error('Error reading JSON file:', error);
    return [];
  }
};

const writePatientPhoneNumberData = (data) => {
  fs.writeFileSync(PATIENT_PHONE_NUMBER_DATA_PATH, JSON.stringify(data, null, 2));
};

const PatientPhoneNumberService = {
  getAllPatientPhoneNumbers: () => {
    return readPatientPhoneNumberData();
  },

  getPatientPhoneNumberById: (id) => {
    const patientPhoneNumbers = readPatientPhoneNumberData();
    return patientPhoneNumbers.find(phoneNumber => phoneNumber.id === id);
  },

  createPatientPhoneNumber: (patientPhoneNumberData) => {
    const patientPhoneNumbers = readPatientPhoneNumberData();
    patientPhoneNumberData.id = generateUniqueId(); // Implement a function to generate unique IDs
    patientPhoneNumbers.push(patientPhoneNumberData);
    writePatientPhoneNumberData(patientPhoneNumbers);
    return patientPhoneNumberData;
  },

  updatePatientPhoneNumber: (id, patientPhoneNumberData) => {
    const patientPhoneNumbers = readPatientPhoneNumberData();
    const existingPhoneNumberIndex = patientPhoneNumbers.findIndex(phoneNumber => phoneNumber.id === id);
    if (existingPhoneNumberIndex !== -1) {
      patientPhoneNumbers[existingPhoneNumberIndex] = { id, ...patientPhoneNumberData };
      writePatientPhoneNumberData(patientPhoneNumbers);
      return patientPhoneNumbers[existingPhoneNumberIndex];
    }
    return null; // Return null if phone number with given ID is not found
  },

  deletePatientPhoneNumber: (id) => {
    const patientPhoneNumbers = readPatientPhoneNumberData();
    const updatedPhoneNumbers = patientPhoneNumbers.filter(phoneNumber => phoneNumber.id !== id);
    writePatientPhoneNumberData(updatedPhoneNumbers);
    return true; // Return true if deletion is successful, false otherwise
  },
};

module.exports = PatientPhoneNumberService;
