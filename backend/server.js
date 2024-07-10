const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// PostgreSQL configuration
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    ssl: {
        rejectUnauthorized: false,
    },
});

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

// Signup endpoint
app.post('/api/signup', async (req, res) => {
    const { email, password, firstName, lastName } = req.body;

    try {
        const client = await pool.connect();
        const queryText = 'INSERT INTO "User" ("Email", "Password", "FirstName", "LastName") VALUES ($1, $2, $3, $4) RETURNING *';
        const queryValues = [email, password, firstName, lastName];
        const result = await client.query(queryText, queryValues);

        client.release();

        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Error saving user:', error);
        res.status(500).send('Server error');
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
