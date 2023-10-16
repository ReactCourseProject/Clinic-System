const express = require('express');
const router = express.Router();
const patientPhoneNumberController = require('../controllers/patientPhoneNumberController');

const { createPhoneNumber, getPhoneNumbersByPatientID, updatePhoneNumber, deletePhoneNumber } = patientPhoneNumberController;

router.post('/PatientPhoneNumber', createPhoneNumber);
router.get('/PatientPhoneNumber/patient/:patientID', getPhoneNumbersByPatientID);
router.put('/PatientPhoneNumber/:id', updatePhoneNumber);
router.delete('/PatientPhoneNumber/:id', deletePhoneNumber);

module.exports = router;
