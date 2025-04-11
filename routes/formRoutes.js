const express = require('express');
const { saveFormData, getFormData, deleteFormData, updateFormData } = require('../controllers/FormController');

const router = express.Router();

// Route to save form data
router.post('/form/write-form-data', saveFormData);

// Route to fetch form data
router.get('/form/fetch-form-data', getFormData);

// Route to delete form data
router.delete('/form/delete-form-data/:id', deleteFormData);

// Route to update form data
router.put('/form/update-form-data/:id', updateFormData);

module.exports = router;