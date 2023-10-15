const fs = require('fs');
const path = require('path');

const MEDICAL_RECORD_DATA_PATH = path.join(__dirname, 'medicalRecordService.json');

const readMedicalRecordData = () => {
  try {
    const rawData = fs.readFileSync(MEDICAL_RECORD_DATA_PATH, 'utf-8');
    return JSON.parse(rawData);
  } catch (error) {
    console.error('Error reading JSON file:', error);
    return [];
  }
};

const writeMedicalRecordData = (data) => {
  fs.writeFileSync(MEDICAL_RECORD_DATA_PATH, JSON.stringify(data, null, 2));
};

const MedicalRecordService = {
  getAllMedicalRecords: () => {
    return readMedicalRecordData();
  },

  getMedicalRecordById: (id) => {
    const medicalRecords = readMedicalRecordData();
    return medicalRecords.find(record => record.id === id);
  },

  createMedicalRecord: (medicalRecordData) => {
    const medicalRecords = readMedicalRecordData();
    medicalRecordData.id = generateUniqueId(); // Implement a function to generate unique IDs
    medicalRecords.push(medicalRecordData);
    writeMedicalRecordData(medicalRecords);
    return medicalRecordData;
  },

  updateMedicalRecord: (id, medicalRecordData) => {
    const medicalRecords = readMedicalRecordData();
    const existingRecordIndex = medicalRecords.findIndex(record => record.id === id);
    if (existingRecordIndex !== -1) {
      medicalRecords[existingRecordIndex] = { id, ...medicalRecordData };
      writeMedicalRecordData(medicalRecords);
      return medicalRecords[existingRecordIndex];
    }
    return null; // Return null if medical record with given ID is not found
  },

  deleteMedicalRecord: (id) => {
    const medicalRecords = readMedicalRecordData();
    const updatedRecords = medicalRecords.filter(record => record.id !== id);
    writeMedicalRecordData(updatedRecords);
    return true; // Return true if deletion is successful, false otherwise
  },
};

module.exports = MedicalRecordService;
