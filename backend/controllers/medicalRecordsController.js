const MedicalRecord = require('../models/MedicalRecord');

const medicalRecordsController = {
  getAllMedicalRecords: async (req, res) => {
    try {
      const medicalRecords = await MedicalRecord.find();
      res.json(medicalRecords);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  createMedicalRecord: async (req, res) => {
    const { ID, medicalDate, medicalObservations, PatientID, DoctorID } = req.body;
    try {
      const newMedicalRecord = new MedicalRecord({
        ID,
        medicalDate,
        medicalObservations,
        PatientID,
        DoctorID,
      });
      await newMedicalRecord.save();
      res.status(201).json(newMedicalRecord);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  getMedicalRecordById: async (req, res) => {
    const medicalRecordId = req.params.id;
    try {
      const medicalRecord = await MedicalRecord.findById(medicalRecordId);
      if (medicalRecord) {
        res.json(medicalRecord);
      } else {
        res.status(404).json({ error: 'Medical Record not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updateMedicalRecord: async (req, res) => {
    const medicalRecordId = req.params.id;
    const updates = req.body;
    try {
      const updatedMedicalRecord = await MedicalRecord.findByIdAndUpdate(medicalRecordId, updates, { new: true });
      if (updatedMedicalRecord) {
        res.json(updatedMedicalRecord);
      } else {
        res.status(404).json({ error: 'Medical Record not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  deleteMedicalRecord: async (req, res) => {
    const medicalRecordId = req.params.id;
    try {
      const deletedMedicalRecord = await MedicalRecord.findByIdAndDelete(medicalRecordId);
      if (deletedMedicalRecord) {
        res.json({ message: 'Medical Record deleted successfully' });
      } else {
        res.status(404).json({ error: 'Medical Record not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = medicalRecordsController;
