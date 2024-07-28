const mongoose = require('mongoose');

const timetableSchema = new mongoose.Schema({
  department: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  semester: {
    type: String,
    required: true,
  },
  subjects: [{
    subjectName: String,
    day: String,
    time: String
  }]
});

module.exports = mongoose.model('Timetable', timetableSchema);
