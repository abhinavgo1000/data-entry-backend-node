const mongoose = require('mongoose');
const { link } = require('..');

const AboutMeSchema = new mongoose.Schema({
    message: { type: String, required: true },
    link: { type: String, required: true }
});

module.exports = mongoose.model('AboutMe', AboutMeSchema, 'aboutme'); // 'aboutme' is the name of the collection in MongoDB