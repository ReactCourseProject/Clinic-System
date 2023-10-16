const mongoose = require('mongoose');

const doctorPhoneNumberSchema = new mongoose.Schema({
    doctorID: { type: Number, required: true },
    phoneNumber: { type: String, required: true }
});

const DoctorPhoneNumber = mongoose.model('DoctorPhoneNumber', doctorPhoneNumberSchema);
module.exports = DoctorPhoneNumber;
