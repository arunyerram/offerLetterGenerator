
const express = require('express');
const router = express.Router();
const { generateOfferLetter } = require('../controllers/pdfController');

router.post('/generate', generateOfferLetter);

module.exports = router;
