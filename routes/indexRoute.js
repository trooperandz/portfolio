const express = require('express'),
      indexController = require('../controllers/indexController');
      router = express.Router();

/* GET home page. */
router.get('/', indexController.renderIndexPage);

module.exports = router;
