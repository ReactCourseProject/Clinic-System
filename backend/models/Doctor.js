const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    ID: { type: Number, required: true },
    FirstName: { type: String, required: true },
    LastName: { type: String, required: true },
    Email: { type: String, required: true, unique: true },
    Specialization: { type: String, required: true },
    WorkingHours: { type: String, required: true }
});

const Doctor = mongoose.model('Doctor', doctorSchema);
module.exports = Doctor;