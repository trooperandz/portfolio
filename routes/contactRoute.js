const express = require('express'),
      contactController = require('../controllers/contactController'),
      router = express.Router();

// Process contact form
router.post('/', contactController.processContactForm);

module.exports = router;