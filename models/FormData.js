const mongoose = require('mongoose');

const FormDataSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    telephone: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true },
    country: { type: String, required: true },
    productName: { type: String, required: true },
    productType: { type: String, required: true },
    productCategory: { type: String, required: true },
    productBrand: { type: String, required: true },
    productPrice: { type: Number, required: true },
    productModel: { type: String, required: true },
    productPurchaseDate: { type: Date, required: true },
});

module.exports = mongoose.model('FormData', FormDataSchema);