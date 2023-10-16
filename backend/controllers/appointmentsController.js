const Appointment = require('../models/Appointment');

const appointmentsController = {
  getAllAppointments: async (req, res) => {
    try {
      const appointments = await Appointment.find();
      res.json(appointments);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  createAppointment: async (req, res) => {
    const { ID, Date, Time, Status, Reason, PatientID, DoctorID } = req.body;
    try {
      const newAppointment = new Appointment({
        ID,
        Date,
        Time,
        Status,
        Reason,
        PatientID,
        DoctorID,
      });
      await newAppointment.save();
      res.status(201).json(newAppointment);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  getAppointmentById: async (req, res) => {
    const appointmentId = req.params.id;
    try {
      const appointment = await Appointment.findById(appointmentId);
      if (appointment) {
        res.json(appointment);
      } else {
        res.status(404).json({ error: 'Appointment not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updateAppointment: async (req, res) => {
    const appointmentId = req.params.id;
    const updates = req.body;
    try {
      const updatedAppointment = await Appointment.findByIdAndUpdate(appointmentId, updates, { new: true });
      if (updatedAppointment) {
        res.json(updatedAppointment);
      } else {
        res.status(404).json({ error: 'Appointment not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  deleteAppointment: async (req, res) => {
    const appointmentId = req.params.id;
    try {
      const deletedAppointment = await Appointment.findByIdAndDelete(appointmentId);
      if (deletedAppointment) {
        res.json({ message: 'Appointment deleted successfully' });
      } else {
        res.status(404).json({ error: 'Appointment not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = appointmentsController;
