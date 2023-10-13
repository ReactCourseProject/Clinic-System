const express = require('express');
const router = express.Router();
const patientsController = require('../controllers/patientsController');

const { getAllPatients, getPatientById, createPatient, updatePatient, deletePatient } = patientsController;

router.get('/', getAllPatients);
router.get('/:id', getPatientById);
router.post('/', createPatient);
router.put('/:id', updatePatient);
router.delete('/:id', deletePatient);

module.exports = router;
