import { Currency } from '../models/Currency';

// Create a new currency
export const createCurrency = async (req, res, next) => {
    try {
        const { ticker, name, APIUrl } = req.body;
        const currency = await Currency.create({ ticker, name, APIUrl });
        res.status(201).json(currency);
    } catch (error) {
        next(error);
    }
};

// Get all currencies
export const getAllCurrencies = async (req, res, next) => {
    try {
        const currencies = await Currency.find();
        res.json(currencies);
    } catch (error) {
        next(error);
    }
};

// Get a specific currency by ID
export const getCurrencyById = async (req, res, next) => {
    try {
        const currency = await Currency.findById(req.params.id);
        if (!currency) throw new Error('Currency not found');
        res.json(currency);
    } catch (error) {
        next(error);
    }
};

// Update a currency
export const updateCurrency = async (req, res, next) => {
    try {
        const { ticker, name, APIUrl } = req.body;
        const currency = await Currency.findByIdAndUpdate(
            req.params.id,
            { ticker, name, APIUrl },
            { new: true }
        );
        if (!currency) throw new Error('Currency not found');
        res.json(currency);
    } catch (error) {
        next(error);
    }
};

// Delete a currency
export const deleteCurrency = async (req, res, next) => {
    try {
        const currency = await Currency.findByIdAndDelete(req.params.id);
        if (!currency) throw new Error('Currency not found');
        res.json({ message: 'Currency deleted successfully' });
    } catch (error) {
        next(error);
    }
};
