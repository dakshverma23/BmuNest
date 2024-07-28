const express = require('express');
const router = express.Router();
const { getTimetables, addTimetable } = require('../controllers/timetableController');

router.route('/')
    .get(getTimetables)
    .post(addTimetable);

module.exports = router;
