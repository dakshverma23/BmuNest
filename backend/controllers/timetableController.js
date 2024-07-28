const Timetable = require('../models/timetable');

exports.getTimetables = async (req, res) => {
    try {
        const timetables = await Timetable.find();
        res.json(timetables);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.addTimetable = async (req, res) => {
    const timetable = new Timetable(req.body);
    try {
        const newTimetable = await timetable.save();
        res.status(201).json(newTimetable);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
