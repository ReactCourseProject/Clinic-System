const PatientPhoneNumber = require('../models/PatientPhoneNumber');

const patientPhoneNumberController = {
  createPhoneNumber: async (req, res) => {
    const { patientID, phoneNumber } = req.body;
    try {
      const newPhoneNumber = new PatientPhoneNumber({
        patientID,
        phoneNumber
      });
      await newPhoneNumber.save();
      res.status(201).json(newPhoneNumber);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  getPhoneNumbersByPatientID: async (req, res) => {
    const patientID = req.params.patientID;
    try {
      const phoneNumbers = await PatientPhoneNumber.find({ patientID });
      res.json(phoneNumbers);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updatePhoneNumber: async (req, res) => {
    const phoneNumberID = req.params.id;
    const { phoneNumber } = req.body;
    try {
      const updatedPhoneNumber = await PatientPhoneNumber.findByIdAndUpdate(
        phoneNumberID,
        { phoneNumber },
        { new: true }
      );
      if (updatedPhoneNumber) {
        res.json(updatedPhoneNumber);
      } else {
        res.status(404).json({ error: 'Phone number not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  deletePhoneNumber: async (req, res) => {
    const phoneNumberID = req.params.id;
    try {
      const deletedPhoneNumber = await PatientPhoneNumber.findByIdAndDelete(phoneNumberID);
      if (deletedPhoneNumber) {
        res.json({ message: 'Phone number deleted successfully' });
      } else {
        res.status(404).json({ error: 'Phone number not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = patientPhoneNumberController;
