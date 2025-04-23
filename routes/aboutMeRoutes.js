const express = require('express');
const { getAboutMe } = require('../controllers/AboutMeController');

const router = express.Router();

// Route to fetch data from the aboutme collection
router.get('/about-me', getAboutMe);

module.exports = router;
