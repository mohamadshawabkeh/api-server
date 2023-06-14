'use strict';
const { app } = require('../src/server');
const { db } = require('../src/models/index');
const supertest = require('supertest');
const mockServerMethods = supertest(app);

beforeAll(async () => {
    await db.sync();
});

describe('testing my server', () => {
    it('return Home', async () => {
        const response = await mockServerMethods.get('/');
        expect(response.status).toBe(200);
    });
    it('return 404 in an invalid routes', async () => {
        const response = await mockServerMethods.get('/no');
        expect(response.status).toBe(404);
    });
    it('return 404 in an invalid method', async () => {
        const response = await mockServerMethods.post('/no');
        expect(response.status).toBe(404);
    });
    it('can add a food', async () => {
        const response = await mockServerMethods.post('/food').send({
          foodName: 'Pizza',
          foodRecipe: '1. Mix flour, yeast, and water. 2. Add toppings. 3. Bake in the oven.',
          cookerId: 1
        });
        expect(response.status).toBe(201);
      },10000);
    it('can read all food', async () => {
        const response = await mockServerMethods.get('/food');
        expect(response.status).toBe(200);
    });
    it('can update food', async () => {
        const response = await mockServerMethods.put('/food/4');
        expect(response.status).toBe(201);
    },10000);
    it('can delete food', async () => {
        const response = await mockServerMethods.delete('/food/1');
        expect(response.status).toBe(204);
    });
});

afterAll(async () => {
    await db.drop();
});