const fs = require('fs');
const path = require('path');

const PATIENT_DATA_PATH = path.join(__dirname, 'patientService.json');

const readPatientData = () => {
  try {
    const rawData = fs.readFileSync(PATIENT_DATA_PATH, 'utf-8');
    return JSON.parse(rawData);
  } catch (error) {
    console.error('Error reading JSON file:', error);
    return [];
  }
};

const writePatientData = (data) => {
  fs.writeFileSync(PATIENT_DATA_PATH, JSON.stringify(data, null, 2));
};

const PatientService = {
  getAllPatients: () => {
    return readPatientData();
  },

  getPatientById: (id) => {
    const patients = readPatientData();
    return patients.find(patient => patient.id === id);
  },

  createPatient: (patientData) => {
    const patients = readPatientData();
    patientData.id = generateUniqueId(); // Implement a function to generate unique IDs
    patients.push(patientData);
    writePatientData(patients);
    return patientData;
  },

  updatePatient: (id, patientData) => {
    const patients = readPatientData();
    const existingPatientIndex = patients.findIndex(patient => patient.id === id);
    if (existingPatientIndex !== -1) {
      patients[existingPatientIndex] = { id, ...patientData };
      writePatientData(patients);
      return patients[existingPatientIndex];
    }
    return null; // Return null if patient with given ID is not found
  },

  deletePatient: (id) => {
    const patients = readPatientData();
    const updatedPatients = patients.filter(patient => patient.id !== id);
    writePatientData(updatedPatients);
    return true; // Return true if deletion is successful, false otherwise
  },
};

module.exports = PatientService;
