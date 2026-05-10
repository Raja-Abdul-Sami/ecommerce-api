const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'ecommerce_test',
  password: 'Rajasami',
  port: 5432,
});

module.exports = pool;