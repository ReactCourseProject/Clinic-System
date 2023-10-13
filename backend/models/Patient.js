const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    ID: { type: Number, required: true },
    FirstName: { type: String, required: true },
    LastName: { type: String, required: true },
    DateOfBirth: { type: Date, required: true },
    Gender: { type: String, required: true },
    Email: { type: String, required: true, unique: true },
    City: { type: String, required: true },
    Street: { type: String, required: true },
    BuildingNumber: { type: Number, required: true }
});

const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient;
