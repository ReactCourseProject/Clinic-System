const fs = require('fs');
const path = require('path');

const APPOINTMENT_DATA_PATH = path.join(__dirname, 'appointmentService.json');

const readAppointmentData = () => {
  try {
    const rawData = fs.readFileSync(APPOINTMENT_DATA_PATH, 'utf-8');
    return JSON.parse(rawData);
  } catch (error) {
    console.error('Error reading JSON file:', error);
    return [];
  }
};

const writeAppointmentData = (data) => {
  fs.writeFileSync(APPOINTMENT_DATA_PATH, JSON.stringify(data, null, 2));
};

const AppointmentService = {
  getAllAppointments: () => {
    return readAppointmentData();
  },

  getAppointmentById: (id) => {
    const appointments = readAppointmentData();
    return appointments.find(appointment => appointment.id === id);
  },

  createAppointment: (appointmentData) => {
    const appointments = readAppointmentData();
    appointmentData.id = generateUniqueId(); // Implement a function to generate unique IDs
    appointments.push(appointmentData);
    writeAppointmentData(appointments);
    return appointmentData;
  },

  updateAppointment: (id, appointmentData) => {
    const appointments = readAppointmentData();
    const existingAppointmentIndex = appointments.findIndex(appointment => appointment.id === id);
    if (existingAppointmentIndex !== -1) {
      appointments[existingAppointmentIndex] = { id, ...appointmentData };
      writeAppointmentData(appointments);
      return appointments[existingAppointmentIndex];
    }
    return null; // Return null if appointment with given ID is not found
  },

  deleteAppointment: (id) => {
    const appointments = readAppointmentData();
    const updatedAppointments = appointments.filter(appointment => appointment.id !== id);
    writeAppointmentData(updatedAppointments);
    return true; // Return true if deletion is successful, false otherwise
  },
};

module.exports = AppointmentService;
