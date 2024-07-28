const Announcement = require('../models/announcement');

exports.getAllAnnouncements = async (req, res) => {
  try {
    const announcements = await Announcement.find().populate('announcedBy');
    res.render('announcements', { announcements });
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.createAnnouncement = async (req, res) => {
  try {
    const newAnnouncement = new Announcement(req.body);
    const announcement = await newAnnouncement.save();
    res.redirect('/announcements');
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.getAnnouncementById = async (req, res) => {
  try {
    const announcement = await Announcement.findById(req.params.id).populate('announcedBy');
    if (!announcement) {
      return res.status(404).send('Announcement not found');
    }
    res.render('announcement', { announcement });
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.updateAnnouncement = async (req, res) => {
  try {
    let announcement = await Announcement.findById(req.params.id);
    if (!announcement) {
      return res.status(404).send('Announcement not found');
    }
    announcement = await Announcement.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.redirect('/announcements');
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.deleteAnnouncement = async (req, res) => {
  try {
    const announcement = await Announcement.findById(req.params.id);
    if (!announcement) {
      return res.status(404).send('Announcement not found');
    }
    await Announcement.findByIdAndRemove(req.params.id);
    res.redirect('/announcements');
  } catch (err) {
    res.status(500).send('Server Error');
  }
};
