const Doctor = require('../models/Doctor');

const doctorsController = {
  getAllDoctors: async (req, res) => {
    try {
      const doctors = await Doctor.find();
      res.json(doctors);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  createDoctor: async (req, res) => {
    const { ID, FirstName, LastName, Email, Specialization, WorkingHours } = req.body;
    try {
      const newDoctor = new Doctor({
        ID,
        FirstName,
        LastName,
        Email,
        Specialization,
        WorkingHours,
      });
      await newDoctor.save();
      res.status(201).json(newDoctor);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  getDoctorById: async (req, res) => {
    const doctorId = req.params.id;
    try {
      const doctor = await Doctor.findById(doctorId);
      if (doctor) {
        res.json(doctor);
      } else {
        res.status(404).json({ error: 'Doctor not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updateDoctor: async (req, res) => {
    const doctorId = req.params.id;
    const updates = req.body;
    try {
      const updatedDoctor = await Doctor.findByIdAndUpdate(doctorId, updates, { new: true });
      if (updatedDoctor) {
        res.json(updatedDoctor);
      } else {
        res.status(404).json({ error: 'Doctor not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  deleteDoctor: async (req, res) => {
    const doctorId = req.params.id;
    try {
      const deletedDoctor = await Doctor.findByIdAndDelete(doctorId);
      if (deletedDoctor) {
        res.json({ message: 'Doctor deleted successfully' });
      } else {
        res.status(404).json({ error: 'Doctor not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = doctorsController;
