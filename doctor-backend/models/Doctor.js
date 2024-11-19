const mongoose = require("mongoose");

const DoctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialization: { type: String, required: true },
  contact: { type: String, required: true },
  experience: { type: String, required: true },
});

module.exports = mongoose.model("Doctor", DoctorSchema);
