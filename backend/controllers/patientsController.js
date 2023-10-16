const Patient = require('../models/Patient');

const patientsController = {
  getAllPatients: async (req, res) => {
    try {
      const patients = await Patient.find();
      res.json(patients);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  createPatient: async (req, res) => {
    const { ID, FirstName, LastName, DateOfBirth, Gender, Email, City, Street, BuildingNumber } = req.body;
    try {
      const newPatient = new Patient({
        ID,
        FirstName,
        LastName,
        DateOfBirth,
        Gender,
        Email,
        City,
        Street,
        BuildingNumber
      });
      await newPatient.save();
      res.status(201).json(newPatient);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  getPatientById: async (req, res) => {
    const patientId = req.params.id;
    try {
      const patient = await Patient.findById(patientId);
      if (patient) {
        res.json(patient);
      } else {
        res.status(404).json({ error: 'Patient not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updatePatient: async (req, res) => {
    const patientId = req.params.id;
    const updates = req.body;
    try {
      const updatedPatient = await Patient.findByIdAndUpdate(patientId, updates, { new: true });
      if (updatedPatient) {
        res.json(updatedPatient);
      } else {
        res.status(404).json({ error: 'Patient not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  deletePatient: async (req, res) => {
    const patientId = req.params.id;
    try {
      const deletedPatient = await Patient.findByIdAndDelete(patientId);
      if (deletedPatient) {
        res.json({ message: 'Patient deleted successfully' });
      } else {
        res.status(404).json({ error: 'Patient not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = patientsController;
