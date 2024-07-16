const mysql = require('mysql2');

// MySQL connection configuration
const connection = mysql.createConnection({
  host: 'localhost',          // Replace with your MySQL host
  user: 'root',      // MySQL username
  password: 'Aswin@2002',    // MySQL password
  database: 'vdrive' // MySQL database name
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err.stack);
    return;
  }
  console.log('Connected to MySQL database');
});
