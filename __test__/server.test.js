'use strict';
const { app } = require('../src/server');
const { db } = require('../src/models/index');
const supertest = require('supertest');
const mockServerMethods = supertest(app);

beforeAll(async () => {
    await db.sync();
});

describe('testing my server', () => {
    it('return 404 in an invalid routes', async () => {
        const response = await mockServerMethods.get('/');
        expect(response.status).toBe(200);
    });
    it('return 404 in an invalid routes', async () => {
        const response = await mockServerMethods.get('/no');
        expect(response.status).toBe(404);
    });
    it('can add a person', async () => {
        const response = await mockServerMethods.post('/food').send({
            foodName: 'Pasta',
            foodRecipe: 'Boil pasta, prepare sauce, mix and serve.'
        });
        expect(response.status).toBe(201);
    });
    it('can read all people', async () => {
        const response = await mockServerMethods.get('/food');
        expect(response.status).toBe(200);
    });
    it('can update person', async () => {
        const response = await mockServerMethods.put('/food/1');
        expect(response.status).toBe(201);
    });
    it('can delete person', async () => {
        const response = await mockServerMethods.delete('/food/1');
        expect(response.status).toBe(204);
    });
});

afterAll(async () => {
    await db.drop();
});