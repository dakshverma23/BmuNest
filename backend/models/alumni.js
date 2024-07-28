const mongoose = require('mongoose');

const alumniSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rollNo: {
    type: String,
    required: true,
    unique: true,
  },
  department: {
    type: String,
    required: true,
  },
  yearOfPassing: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  currentCompany: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('Alumni', alumniSchema);
