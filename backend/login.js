// login.js
const express = require('express');
const bcrypt = require('bcrypt');
const pool = require('./db'); // Ensure the path is correct
const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const client = await pool.connect();
    const queryText = 'SELECT "UserID", "Password", "FirstName", "Email" FROM "User" WHERE "Email" = $1';
    const queryValues = [email];
    const result = await client.query(queryText, queryValues);
    client.release();

    if (result.rows.length === 0) {
      return res.status(400).json({ message: 'User does not exist' });
    }

    const user = result.rows[0];
    const isValidPass = await bcrypt.compare(password, user.Password);

    if (isValidPass) {
      return res.status(200).json({
        message: 'Logged in successfully!',
        userDetails: {
          ID:user.UserID,
          name: user.FirstName,
          email: user.Email
        }
      });
    }

    return res.status(400).json({ message: 'Failed to login, incorrect password' });
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).send('Server error');
  }
});

module.exports = router;
