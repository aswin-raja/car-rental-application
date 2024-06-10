// Import necessary modules
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

// Create connection to MySQL database
const connection = mysql.createConnection({
  // host: 'mysql',
  host:"localhost",
  user: 'root',
  password: 'carrent',
  database: 'carrentapp'
});

// Connect to MySQL database
connection.connect();

// Create Express application
const app = express();
// Enable CORS for all routes
app.use(cors());
const port = 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// Route to create car data
// app.post('/cars', (req, res) => {
//   const car = req.body;
//   // Insert car data into MySQL database
//   connection.query('INSERT INTO cars SET ?', car, (error, results, fields) => {
//     if (error) {
//       console.error(error);
//       res.status(500).send('Error creating car data');
//       return;
//     }
//     res.status(201).send('Car data created successfully');
//   });
// });

// Route to get all car data
app.get('/cars', (req, res) => {
  // Fetch all car data from MySQL database
  connection.query('SELECT * FROM cars', (error, results, fields) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error fetching car data');
      return;
    }
    res.json(results);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
