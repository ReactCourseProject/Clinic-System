const mongoose = require('mongoose');

const billingSchema = new mongoose.Schema({
    ID: { type: Number, required: true },
    PaymentMethod: { type: String, required: true },
    TotalAmount: { type: Number, required: true },
    Date: { type: Date, required: true },
    Status: { type: String, required: true },
    DoctorID: { type: Number, required: true },
    PatientsID: { type: Number, required: true },
    TestID: { type: Number, required: true },
    MedicationID: { type: Number, required: true }
});

const Billing = mongoose.model('Billing', billingSchema);
module.exports = Billing;