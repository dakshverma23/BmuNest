const Student = require('../models/student');

exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.render('students', { students });
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.createStudent = async (req, res) => {
  try {
    const newStudent = new Student(req.body);
    const student = await newStudent.save();
    res.redirect('/students');
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).send('Student not found');
    }
    res.render('student', { student });
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.updateStudent = async (req, res) => {
  try {
    let student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).send('Student not found');
    }
    student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.redirect('/students');
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).send('Student not found');
    }
    await Student.findByIdAndRemove(req.params.id);
    res.redirect('/students');
  } catch (err) {
    res.status(500).send('Server Error');
  }
};
