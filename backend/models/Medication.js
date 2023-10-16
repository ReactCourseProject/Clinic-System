const mongoose = require('mongoose');

const medicationSchema = new mongoose.Schema({
    ID: { type: Number, required: true },
    frequency: { type: Number, required: true },
    medicationName: { type: String, required: true },
    dosage: { type: String, required: true },
    prescriptionDate: { type: Date, required: true }
});

const Medication = mongoose.model('Medication', medicationSchema);
module.exports = Medication;
