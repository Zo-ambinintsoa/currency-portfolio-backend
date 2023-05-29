const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../index');
const Currency = require('../models/Currency');

describe('Currency API', () => {
    beforeAll(async () => {
        // Connect to a test database
        await mongoose.connect('mongodb://localhost:27017/currencies-test', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    });

    afterAll(async () => {
        // Disconnect from the test database
        await mongoose.connection.close();
    });

    beforeEach(async () => {
        // Clear the test database before each test
        await Currency.deleteMany({});
    });

    test('Create a new currency', async () => {
        const response = await request(app)
            .post('/api/currencies')
            .send({
                ticker: 'BTC',
                name: 'Bitcoin',
                APIUrl: 'https://api.coingecko.com/api/v3/coins/bitcoin',
            });

        expect(response.status).toBe(201);
        expect(response.body.ticker).toBe('BTC');
        expect(response.body.name).toBe('Bitcoin');
        expect(response.body.APIUrl).toBe(
            'https://api.coingecko.com/api/v3/coins/bitcoin'
        );
    });

    test('Get all currencies', async () => {
        await Currency.create([
            {
                ticker: 'BTC',
                name: 'Bitcoin',
                APIUrl: 'https://api.coingecko.com/api/v3/coins/bitcoin',
            },
            {
                ticker: 'ETH',
                name: 'Ethereum',
                APIUrl: 'https://api.coingecko.com/api/v3/coins/ethereum',
            },
        ]);

        const response = await request(app).get('/api/currencies');

        expect(response.status).toBe(200);
        expect(response.body.length).toBe(2);
        expect(response.body[0].ticker).toBe('BTC');
        expect(response.body[0].name).toBe('Bitcoin');
        expect(response.body[0].APIUrl).toBe(
            'https://api.coingecko.com/api/v3/coins/bitcoin'
        );
        expect(response.body[1].ticker).toBe('ETH');
        expect(response.body[1].name).toBe('Ethereum');
        expect(response.body[1].APIUrl).toBe(
            'https://api.coingecko.com/api/v3/coins/ethereum'
        );
    });

    test('Get a specific currency', async () => {
        const createdCurrency = await Currency.create({
            ticker: 'BTC',
            name: 'Bitcoin',
            APIUrl: 'https://api.coingecko.com/api/v3/coins/bitcoin',
        });

        const response = await request(app).get(
            `/api/currencies/${createdCurrency._id}`
        );

        expect(response.status).toBe(200);
        expect(response.body.ticker).toBe('BTC');
        expect(response.body.name).toBe('Bitcoin');
        expect(response.body.APIUrl).toBe(
            'https://api.coingecko.com/api/v3/coins/bitcoin'
        );
    });

    test('Update a currency', async () => {
        const createdCurrency = await Currency.create({
            ticker: 'BTC',
            name: 'Bitcoin',
            APIUrl: 'https://api.coingecko.com/api/v3/coins/bitcoin',
        });

        const response = await request(app)
            .put(`/api/currencies/${createdCurrency._id}`)
            .send({
                ticker: 'ETH',
                name: 'Ethereum',
                APIUrl: 'https://api.coingecko.com/api/v3/coins/ethereum',
            });

        expect(response.status).toBe(200);
        expect(response.body.ticker).toBe('ETH');
        expect(response.body.name).toBe('Ethereum');
        expect(response.body.APIUrl).toBe(
            'https://api.coingecko.com/api/v3/coins/ethereum'
        );
    });

    test('Delete a currency', async () => {
        const createdCurrency = await Currency.create({
            ticker: 'BTC',
            name: 'Bitcoin',
            APIUrl: 'https://api.coingecko.com/api/v3/coins/bitcoin',
        });

        const response = await request(app).delete(
            `/api/currencies/${createdCurrency._id}`
        );

        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Currency deleted successfully');
    });
});
