const express = require('express'),
      documentController = require('../controllers/documentController');
      router = express.Router();

// Download resume
router.get('/', documentController.downloadResume);

module.exports = router;
