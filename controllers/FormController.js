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
        const data = await FormData.find();
        res.status(200).json(data);
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
