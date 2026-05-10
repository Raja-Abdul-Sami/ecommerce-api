const request = require('supertest');
const app = require('../app');
const pool = require('../db');

describe('POST /users', () => {

  afterAll(async () => {
    await pool.end();
  });

  test('should create a new user and store in database', async () => {

    const userData = {
      name: 'Ali',
      email: 'ali@test.com'
    };

    const response = await request(app)
      .post('/users')
      .send(userData);

    // Check API response
    expect(response.statusCode).toBe(201);

    expect(response.body.name).toBe(userData.name);

    expect(response.body.email).toBe(userData.email);

    // Verify user exists in database
    const dbResult = await pool.query(
      'SELECT * FROM users WHERE email = $1',
      [userData.email]
    );

    expect(dbResult.rows.length).toBe(1);

    // Cleanup test data
    await pool.query(
      'DELETE FROM users WHERE email = $1',
      [userData.email]
    );

  });

});