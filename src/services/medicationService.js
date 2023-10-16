const fs = require('fs');
const path = require('path');

const MEDICATION_DATA_PATH = path.join(__dirname, 'medicationService.json');

const readMedicationData = () => {
  try {
    const rawData = fs.readFileSync(MEDICATION_DATA_PATH, 'utf-8');
    return JSON.parse(rawData);
  } catch (error) {
    console.error('Error reading JSON file:', error);
    return [];
  }
};

const writeMedicationData = (data) => {
  fs.writeFileSync(MEDICATION_DATA_PATH, JSON.stringify(data, null, 2));
};

const MedicationService = {
  getAllMedications: () => {
    return readMedicationData();
  },

  getMedicationById: (id) => {
    const medications = readMedicationData();
    return medications.find(medication => medication.id === id);
  },

  createMedication: (medicationData) => {
    const medications = readMedicationData();
    medicationData.id = generateUniqueId(); // Implement a function to generate unique IDs
    medications.push(medicationData);
    writeMedicationData(medications);
    return medicationData;
  },

  updateMedication: (id, medicationData) => {
    const medications = readMedicationData();
    const existingMedicationIndex = medications.findIndex(medication => medication.id === id);
    if (existingMedicationIndex !== -1) {
      medications[existingMedicationIndex] = { id, ...medicationData };
      writeMedicationData(medications);
      return medications[existingMedicationIndex];
    }
    return null; // Return null if medication with given ID is not found
  },

  deleteMedication: (id) => {
    const medications = readMedicationData();
    const updatedMedications = medications.filter(medication => medication.id !== id);
    writeMedicationData(updatedMedications);
    return true; // Return true if deletion is successful, false otherwise
  },
};

module.exports = MedicationService;
