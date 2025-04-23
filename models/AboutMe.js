const mongoose = require('mongoose');

const AboutMeSchema = new mongoose.Schema({
    message: { type: String, required: true }, // Example field for the string content
});

module.exports = mongoose.model('AboutMe', AboutMeSchema, 'aboutme'); // 'aboutme' is the name of the collection in MongoDB