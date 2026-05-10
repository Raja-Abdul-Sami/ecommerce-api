const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.PGUSER || 'postgres',
  host: process.env.PGHOST || 'localhost',
  database: process.env.PGDATABASE || 'ecommerce_test',
  password: process.env.PGPASSWORD || 'Rajasami',
  port: process.env.PGPORT || 5432,
});

module.exports = pool;