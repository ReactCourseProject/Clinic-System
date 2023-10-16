const DoctorPhoneNumber = require('../models/DoctorPhoneNumber');

const doctorPhoneNumberController = {
  createPhoneNumber: async (req, res) => {
    const { doctorID, phoneNumber } = req.body;
    try {
      const newPhoneNumber = new DoctorPhoneNumber({
        doctorID,
        phoneNumber
      });
      await newPhoneNumber.save();
      res.status(201).json(newPhoneNumber);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  getPhoneNumbersByDoctorID: async (req, res) => {
    const doctorID = req.params.doctorID;
    try {
      const phoneNumbers = await DoctorPhoneNumber.find({ doctorID });
      res.json(phoneNumbers);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updatePhoneNumber: async (req, res) => {
    const phoneNumberID = req.params.id;
    const { phoneNumber } = req.body;
    try {
      const updatedPhoneNumber = await DoctorPhoneNumber.findByIdAndUpdate(
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
      const deletedPhoneNumber = await DoctorPhoneNumber.findByIdAndDelete(phoneNumberID);
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

module.exports = doctorPhoneNumberController;
