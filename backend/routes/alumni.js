const express = require('express');
const router = express.Router();
const alumniController = require('../controllers/alumniController');

router.get('/', alumniController.getAllAlumni);
router.post('/', alumniController.createAlumni);
router.get('/:id', alumniController.getAlumniById);
router.put('/:id', alumniController.updateAlumni);
router.delete('/:id', alumniController.deleteAlumni);

module.exports = router;
