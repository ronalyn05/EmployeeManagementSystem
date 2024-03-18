// Import necessary modules
const express = require('express');
const sql = require('mssql');
const bodyParser = require('body-parser');
const config = require('./dbFiles/dbConfig'); // database configuration

// Create an instance of express
const app = express();

// Body parser middleware to parse JSON request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define a POST endpoint for user registration
app.post('/register', async (req, res) => {
    // Extract user data from the request body
    const { UserName, LastName, FirstName, MiddleName, Email, Password } = req.body;

    try {
        // Logging: Log the received data
        console.log('Received registration request:', req.body);

        // Connect to the database
        await sql.connect(config);

        // Create a prepared statement for the INSERT query
        const request = new sql.Request();
        request.input('UserName', sql.VarChar(50), UserName);
        request.input('LastName', sql.VarChar(50), LastName);
        request.input('FirstName', sql.VarChar(50), FirstName);
        request.input('MiddleName', sql.VarChar(50), MiddleName);
        request.input('Email', sql.VarChar(50), Email);
        request.input('Password', sql.VarChar(50), Password);

        // Execute the INSERT query
        await request.query('INSERT INTO User_Account (UserName, LastName, FirstName, MiddleName, Email, Password) VALUES (@UserName, @LastName, @FirstName, @MiddleName, @Email, @Password)');

        // Respond with success message
        res.status(200).json({ message: 'User registered successfully' });
    } catch (err) {
        // Respond with error message
        res.status(500).json({ message: 'Error registering user', error: err.message });
    } finally {
        // Close the database connection
        await sql.close();
    }
});

// Define a GET endpoint for /register to handle GET requests
app.get('/register', (req, res) => {
    // Respond with an informative message or redirect to another page
    res.status(404).send('Cannot GET /register. This endpoint is for POST requests only.');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
