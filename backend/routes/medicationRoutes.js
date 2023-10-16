const express = require('express');
const router = express.Router();
const medicationController = require('../controllers/medicationController');

const { getAllMedications, getMedicationById, createMedication, updateMedication, deleteMedication } = medicationController;

router.get('/', getAllMedications);
router.get('/:id', getMedicationById);
router.post('/', createMedication);
router.put('/:id', updateMedication);
router.delete('/:id', deleteMedication);

module.exports = router;
