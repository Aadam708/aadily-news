// server.js
const express = require('express');
const cors = require('cors');
const pool = require('./db'); // Ensure the path is correct
const signupRouter = require('./signup'); // Ensure the path is correct
const loginRouter = require('./login'); // Ensure the path is correct

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Test database connection endpoint
app.get('/api/message', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT $1::text as message', ['Connected to database']);
    const message = result.rows[0].message;
    client.release();
    res.send(`Message from PostgreSQL: ${message}`);
  } catch (err) {
    console.error('Error connecting to database', err);
    res.status(500).send('Server error');
  }
});

// Use the signup and login routes
app.use('/api', signupRouter);
app.use('/api', loginRouter);

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
