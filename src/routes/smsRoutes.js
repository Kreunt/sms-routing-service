const express = require('express');
const { routeSMS } = require('../controllers/smsController');
const router = express.Router();

router.post('/route', routeSMS);

module.exports = router;
