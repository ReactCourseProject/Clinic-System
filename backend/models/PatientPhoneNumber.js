const mongoose = require('mongoose');

const patientPhoneNumberSchema = new mongoose.Schema({
    patientID: { type: Number, required: true },
    phoneNumber: { type: String, required: true }
});

const PatientPhoneNumber = mongoose.model('PatientPhoneNumber', patientPhoneNumberSchema);
module.exports = PatientPhoneNumber;
