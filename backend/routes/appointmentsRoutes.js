const express = require('express');
const router = express.Router();
const appointmentsController = require('../controllers/appointmentsController');

const { getAllAppointments, getAppointmentById, createAppointment, updateAppointment, deleteAppointment } = appointmentsController;

router.get('/', getAllAppointments);
router.get('/:id', getAppointmentById);
router.post('/', createAppointment);
router.put('/:id', updateAppointment);
router.delete('/:id', deleteAppointment);

module.exports = router;
