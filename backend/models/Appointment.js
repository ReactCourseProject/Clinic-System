const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    ID: { type: Number, required: true },
    Date: { type: Date, required: true },
    Time: { type: String, required: true },
    Status: { type: String, required: true },
    Reason: { type: String, required: true },
    PatientID: { type: Number, required: true },
    DoctorID: { type: Number, required: true }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);
module.exports = Appointment;