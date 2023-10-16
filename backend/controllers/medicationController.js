const Medication = require('../models/Medication');

const medicationsController = {
  getAllMedications: async (req, res) => {
    try {
      const medications = await Medication.find();
      res.json(medications);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  createMedication: async (req, res) => {
    const { ID, frequency, medicationName, dosage, prescriptionDate } = req.body;
    try {
      const newMedication = new Medication({
        ID,
        frequency,
        medicationName,
        dosage,
        prescriptionDate
      });
      await newMedication.save();
      res.status(201).json(newMedication);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  getMedicationById: async (req, res) => {
    const medicationId = req.params.id;
    try {
      const medication = await Medication.findById(medicationId);
      if (medication) {
        res.json(medication);
      } else {
        res.status(404).json({ error: 'Medication not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updateMedication: async (req, res) => {
    const medicationId = req.params.id;
    const updates = req.body;
    try {
      const updatedMedication = await Medication.findByIdAndUpdate(medicationId, updates, { new: true });
      if (updatedMedication) {
        res.json(updatedMedication);
      } else {
        res.status(404).json({ error: 'Medication not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  deleteMedication: async (req, res) => {
    const medicationId = req.params.id;
    try {
      const deletedMedication = await Medication.findByIdAndDelete(medicationId);
      if (deletedMedication) {
        res.json({ message: 'Medication deleted successfully' });
      } else {
        res.status(404).json({ error: 'Medication not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = medicationsController;
