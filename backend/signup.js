// signup.js
const express = require('express');
const bcrypt = require('bcrypt');
const pool = require('./db'); // Ensure the path is correct
const router = express.Router();

router.post('/signup', async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  try {
    const client = await pool.connect();
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const queryText = 'INSERT INTO "User" ("Email", "Password", "FirstName", "LastName") VALUES ($1, $2, $3, $4) RETURNING *';
    const queryValues = [email, hashedPassword, firstName, lastName];
    const result = await client.query(queryText, queryValues);

    client.release();
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).send('Server error');
  }
});

module.exports = router;
