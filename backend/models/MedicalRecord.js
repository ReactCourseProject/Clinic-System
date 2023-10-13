const mongoose = require('mongoose');

const medicalRecordSchema = new mongoose.Schema({
    ID: { type: Number, required: true },
    medicalDate: { type: Date, required: true },
    medicalObservations: { type: String, required: true },
    PatientID: { type: Number, required: true },
    DoctorID: { type: Number, required: true }
});

const MedicalRecord = mongoose.model('MedicalRecord', medicalRecordSchema);
module.exports = MedicalRecord;
