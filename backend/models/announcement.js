const mongoose = require('mongoose');

const announcementSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  announcementDate: {
    type: Date,
    default: Date.now,
  },
  announcedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true,
  },
});

module.exports = mongoose.model('Announcement', announcementSchema);
