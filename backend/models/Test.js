const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
    ID: { type: Number, required: true },
    testName: { type: String, required: true },
    testType: { type: String, required: true },
    testDate: { type: Date, required: true },
    testResults: { type: String, required: true },
    testNotes: { type: String, required: true },
    DoctorID: { type: Number, required: true },
    PatientsID: { type: Number, required: true },
    BillingID: { type: Number, required: true }
});

const Test = mongoose.model('Test', testSchema);
module.exports = Test;