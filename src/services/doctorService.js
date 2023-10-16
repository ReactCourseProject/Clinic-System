const fs = require('fs');
const path = require('path');

const DOCTOR_DATA_PATH = path.join(__dirname, 'doctorService.json');

const readDoctorData = () => {
  try {
    const rawData = fs.readFileSync(DOCTOR_DATA_PATH, 'utf-8');
    return JSON.parse(rawData);
  } catch (error) {
    console.error('Error reading JSON file:', error);
    return [];
  }
};

const writeDoctorData = (data) => {
  fs.writeFileSync(DOCTOR_DATA_PATH, JSON.stringify(data, null, 2));
};

const DoctorService = {
  getAllDoctors: () => {
    return readDoctorData();
  },

  getDoctorById: (id) => {
    const doctors = readDoctorData();
    return doctors.find(doctor => doctor.id === id);
  },

  createDoctor: (doctorData) => {
    const doctors = readDoctorData();
    doctorData.id = generateUniqueId(); // Implement a function to generate unique IDs
    doctors.push(doctorData);
    writeDoctorData(doctors);
    return doctorData;
  },

  updateDoctor: (id, doctorData) => {
    const doctors = readDoctorData();
    const existingDoctorIndex = doctors.findIndex(doctor => doctor.id === id);
    if (existingDoctorIndex !== -1) {
      doctors[existingDoctorIndex] = { id, ...doctorData };
      writeDoctorData(doctors);
      return doctors[existingDoctorIndex];
    }
    return null; // Return null if doctor with given ID is not found
  },

  deleteDoctor: (id) => {
    const doctors = readDoctorData();
    const updatedDoctors = doctors.filter(doctor => doctor.id !== id);
    writeDoctorData(updatedDoctors);
    return true; // Return true if deletion is successful, false otherwise
  },
};

module.exports = DoctorService;
