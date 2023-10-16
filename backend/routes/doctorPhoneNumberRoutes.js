const express = require('express');
const router = express.Router();
const doctorPhoneNumberController = require('../controllers/doctorPhoneNumberController');

const { createPhoneNumber, getPhoneNumbersByDoctorID, updatePhoneNumber, deletePhoneNumber } = doctorPhoneNumberController;

router.post('/DoctorPhoneNumber', createPhoneNumber);
router.get('/DoctorPhoneNumber/doctor/:doctorID', getPhoneNumbersByDoctorID);
router.put('/DoctorPhoneNumber/:id', updatePhoneNumber);
router.delete('/DoctorPhoneNumber/:id', deletePhoneNumber);

module.exports = router;
