const FormData = require('../models/FormData');

// Controller to handle saving form data
exports.saveFormData = async (req, res) => {
    try {
        const formData = new FormData(req.body);
        await formData.save();
        res.status(201).json({ message: 'Data saved successfully', data: formData });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Controller to handle fetching form data
exports.getFormData = async (req, res) => {
    try {
        const { page = 1, limit = 25 } = req.query; // Default to page 1 and 10 items per page

        // Convert page and limit to integers
        const pageNumber = parseInt(page, 10);
        const limitNumber = parseInt(limit, 10);

        // Fetch paginated data
        const data = await FormData.find()
            .skip((pageNumber - 1) * limitNumber) // Skip documents for previous pages
            .limit(limitNumber); // Limit the number of documents returned

        // Get the total count of documents
        const totalDocuments = await FormData.countDocuments();

        res.status(200).json({
            totalDocuments,
            totalPages: Math.ceil(totalDocuments / limitNumber),
            currentPage: pageNumber,
            data,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getFormDataById = async (req, res) => {
    try {
        const { id } = req.params; // Extract the ID from the request parameters
        const data = await FormData.findById(id); // Fetch the document by ID
        if (!data) {
            return res.status(404).json({ message: 'Data not found' });
        }
        res.status(200).json(data); // Return the fetched data
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller to handle deleting form data
exports.deleteFormData = async (req, res) => {
    try {
        const { id } = req.params;
        await FormData.findByIdAndDelete(id);
        res.status(200).json({ message: 'Data deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller to handle updating form data
exports.updateFormData = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = await FormData.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        if (!updatedData) {
            return res.status(404).json({ message: 'Data not found' });
        }
        res.status(200).json({ message: 'Data updated successfully', data: updatedData });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
