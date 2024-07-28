const Alumni = require('../models/alumni');

exports.getAllAlumni = async (req, res) => {
  try {
    const alumni = await Alumni.find();
    res.render('alumni', { alumni });
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.createAlumni = async (req, res) => {
  try {
    const newAlumni = new Alumni(req.body);
    const alumni = await newAlumni.save();
    res.redirect('/alumni');
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.getAlumniById = async (req, res) => {
  try {
    const alumni = await Alumni.findById(req.params.id);
    if (!alumni) {
      return res.status(404).send('Alumni not found');
    }
    res.render('alumniDetail', { alumni });
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.updateAlumni = async (req, res) => {
  try {
    let alumni = await Alumni.findById(req.params.id);
    if (!alumni) {
      return res.status(404).send('Alumni not found');
    }
    alumni = await Alumni.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.redirect('/alumni');
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.deleteAlumni = async (req, res) => {
  try {
    const alumni = await Alumni.findById(req.params.id);
    if (!alumni) {
      return res.status(404).send('Alumni not found');
    }
    await Alumni.findByIdAndRemove(req.params.id);
    res.redirect('/alumni');
  } catch (err) {
    res.status(500).send('Server Error');
  }
};
