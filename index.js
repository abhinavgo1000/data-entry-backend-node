const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');
const fs = require('fs');
const yaml = require('js-yaml');
const morgan = require('morgan');
const formRoutes = require('./routes/formRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
dotenv.config(); // Load environment variables from .env file
app.use(cors(
    {
        origin: '*', // Allow all origins (you can specify a specific origin if needed)
        methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
        allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
    }
)); // Enable CORS for all routes
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

app.use(morgan('dev')); // Logging middleware for HTTP requests

// MongoDB connection
mongoose.connect(process.env.MONGO_URI);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Routes
app.use('/api', formRoutes);

// Swagger documentation
const swaggerDocument = yaml.load(fs.readFileSync('./specs/swagger.yaml', 'utf8'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app; // Exporting the app for testing purposes
// This is the main entry point of the application. It sets up the Express server, connects to MongoDB, and defines the routes for handling form data.
