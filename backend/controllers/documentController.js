const Document = require('../models/document');

exports.getAllDocuments = async (req, res) => {
  try {
    const documents = await Document.find().populate('uploadedBy');
    res.render('documents', { documents });
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.createDocument = async (req, res) => {
  try {
    const newDocument = new Document(req.body);
    const document = await newDocument.save();
    res.redirect('/documents');
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.getDocumentById = async (req, res) => {
  try {
    const document = await Document.findById(req.params.id).populate('uploadedBy');
    if (!document) {
      return res.status(404).send('Document not found');
    }
    res.render('document', { document });
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.updateDocument = async (req, res) => {
  try {
    let document = await Document.findById(req.params.id);
    if (!document) {
      return res.status(404).send('Document not found');
    }
    document = await Document.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.redirect('/documents');
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.deleteDocument = async (req, res) => {
  try {
    const document = await Document.findById(req.params.id);
    if (!document) {
      return res.status(404).send('Document not found');
    }
    await Document.findByIdAndRemove(req.params.id);
    res.redirect('/documents');
  } catch (err) {
    res.status(500).send('Server Error');
  }
};
