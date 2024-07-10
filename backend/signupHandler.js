// signupHandler.js
const express = require('express');
const router = express.Router();
const { pool } = require('./server'); // Ensure correct path

router.post('/signup', async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  try {
    // const client = await pool.connect();
    // const queryText = 'INSERT INTO "User" ("Email", "Password", "FirstName", "LastName") VALUES ($1, $2, $3, $4) RETURNING *';
    // const queryValues = [email, password, firstName, lastName];
    // const result = await client.query(queryText, queryValues);

    client.release();

    res.status(201).json(result.rows[0]); // Respond with inserted user data
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).send('Server error');
  }
});

module.exports = router;
