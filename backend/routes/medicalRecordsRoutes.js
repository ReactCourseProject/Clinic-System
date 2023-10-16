const express = require('express');
const router = express.Router();
const medicalRecordsController = require('../controllers/medicalRecordsController');

const { getAllMedicalRecords, getMedicalRecordById, createMedicalRecord, updateMedicalRecord, deleteMedicalRecord } = medicalRecordsController;

router.get('/', getAllMedicalRecords);
router.get('/:id', getMedicalRecordById);
router.post('/', createMedicalRecord);
router.put('/:id', updateMedicalRecord);
router.delete('/:id', deleteMedicalRecord);

module.exports = router;
