const express = require('express');
const mysql = require('mysql2');
const multer = require('multer');
const path = require('path');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const cors = require('cors');

const app = express();
const port = 5000;

// MySQL connection configuration
const connection = mysql.createConnection({
  host: 'my-mysql-container',
  user: 'root',
  password: 'carrent',
  database: 'carrentapp',
  port:3306,

});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err.stack);
    return;
  }
  console.log('Connected to MySQL database');
});

// Set up multer for file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

// Hardcoded JWT secret key
const JWT_SECRET = 'mysecretkey';

// Middleware to verify token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Configure CORS
app.use(cors()); // Enable CORS for all origins

// Body parser middleware
app.use(express.json());

// Endpoint to store car data and upload image to folder
app.post('/cars', authenticateToken, upload.single('imgUrl'), (req, res) => {
  const { name, model, price, automatic } = req.body;
  const imgUrl = req.file ? '/uploads/' + req.file.filename : null;

  const query = 'INSERT INTO cars (name, model, price, automatic, imgUrl) VALUES (?, ?, ?, ?, ?)';
  const values = [name, model, price, automatic, imgUrl];

  connection.query(query, values, (err, results) => {
    if (err) {
      console.error('Error inserting data:', err.stack);
      res.status(500).json('Error inserting data');
      return;
    }
    res.status(200).json('Car data inserted successfully');
  });
});

// Endpoint to get car details
app.get('/cars', (req, res) => {
  const query = 'SELECT id, name, model, price, automatic, imgUrl FROM cars';

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching data:', err.stack);
      res.status(500).send('Error fetching data');
      return;
    }
    res.status(200).json(results);
  });
});

// Endpoint to update car details
// Endpoint to update car details
app.put('/cars/:id', authenticateToken, upload.single('imgUrl'), (req, res) => {
  const { id } = req.params;
  const { name, model, price, automatic } = req.body;
  const newImgUrl = req.file ? '/uploads/' + req.file.filename : null;

  // Fetch current imgUrl from database
  const getCurrentImgUrlQuery = 'SELECT imgUrl FROM cars WHERE id = ?';
  connection.query(getCurrentImgUrlQuery, [id], (err, results) => {
    if (err) {
      console.error('Error fetching current imgUrl:', err.stack);
      res.status(500).send('Error updating data');
      return;
    }

    let currentImgUrl = results[0].imgUrl;

    // Update query and values
    let query = 'UPDATE cars SET name = ?, model = ?, price = ?, automatic = ?';
    const values = [name, model, price, automatic];

    if (newImgUrl) {
      query += ', imgUrl = ?';
      values.push(newImgUrl);
    }

    query += ' WHERE id = ?';
    values.push(id);

    connection.query(query, values, (err, results) => {
      if (err) {
        console.error('Error updating data:', err.stack);
        res.status(500).send('Error updating data');
        return;
      }

      // Delete previous image if a new image was uploaded
      if (newImgUrl && currentImgUrl) {
        const filePath = path.join(__dirname, currentImgUrl.substring(1)); // Remove the leading '/' for path joining
        fs.unlink(filePath, (err) => {
          if (err) {
            console.error('Error deleting previous image:', err);
            // Don't send an error response here to avoid blocking the main response
          }
          console.log('Previous image deleted successfully');
        });
      }

      res.status(200).json('Car data updated successfully');
    });
  });
});


// Endpoint to delete a car
app.delete('/cars/:id', authenticateToken, (req, res) => {
  const { id } = req.params;

  const query = 'DELETE FROM cars WHERE id = ?';

  connection.query(query, [id], (err, results) => {
    if (err) {
      console.error('Error deleting data:', err.stack);
      res.status(500).json('Error deleting data');
      return;
    }
    res.status(200).json('Car data deleted successfully');
  });
});



// Endpoint for user login and token generation
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const hardcodedUsername = 'admin@vdrive';
  const hardcodedPassword = 'admin7890';

  if (username === hardcodedUsername && password === hardcodedPassword) {
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
  } else {
    res.status(401).json('Invalid credentials');
  }
});

// Serve static files from the "uploads" directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
