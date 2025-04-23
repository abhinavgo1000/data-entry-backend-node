const AboutMe = require('../models/AboutMe');

// Controller to fetch data from the aboutme collection
exports.getAboutMe = async (req, res) => {
    try {
        const aboutMeData = await AboutMe.find(); // Fetch all documents from the aboutme collection
        res.status(200).json(aboutMeData); // Return the data as JSON
    } catch (error) {
        res.status(500).json({ error: error.message }); // Handle errors
    }
};
