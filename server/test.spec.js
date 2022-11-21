import request from 'supertest';
import express from 'express';
import router from '../api.js';

const app = new express();
app.use('/', router);

describe("Testing with Jest", () => {
  test('responds to get emaployees', async () => {
    const res = await request(app).get('/employee');
    expect(res.statusCode).toBe(200);
  });

  test('responds to post createEmployee', async () => {
    const res = await request(app).post('/createEmployee');
    expect(res.statusCode).toBe(200);
  });

  test('responds to post authEmployee', async () => {
    const res = await request(app).post('/createEmployee');
    expect(res.statusCode).toBe(200);
  });

  test('responds to post registerEmployee', async () => {
    const res = await request(app).post('/registerEmployee');
    expect(res.statusCode).toBe(200);
  });

  test('responds to post verifyToken', async () => {
    const res = await request(app).post('/verifyToken');
    expect(res.statusCode).toBe(200);
  });

  test('responds to put updateEmployee', async () => {
    const res = await request(app).put('/updateEmployee');
    expect(res.statusCode).toBe(200);
  });

  test('responds to post deleteEmployee', async () => {
    const res = await request(app).delete('/deleteEmployee');
    expect(res.statusCode).toBe(200);
  });

  });