const express = require('express');
const pool = require('./db');

const app = express();

app.use(express.json());

app.post('/users', async (req, res) => {

  try {

    const { name, email } = req.body;

    const result = await pool.query(
      'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
      [name, email]
    );

    res.status(201).json(result.rows[0]);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      error: 'Server Error'
    });

  }

});

module.exports = app;