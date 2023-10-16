const express = require('express');
const router = express.Router();
const doctorsController = require('../controllers/doctorsController');

const { getAllDoctors, getDoctorById, createDoctor, updateDoctor, deleteDoctor } = doctorsController;

router.get('/', getAllDoctors);
router.get('/:id', getDoctorById);
router.post('/', createDoctor);
router.put('/:id', updateDoctor);
router.delete('/:id', deleteDoctor);

module.exports = router;
