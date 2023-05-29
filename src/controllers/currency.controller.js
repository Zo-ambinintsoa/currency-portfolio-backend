const Currency = require('../models/Currency');

// Create a new currency
exports.createCurrency = async (req, res, next) => {
    try {
        const { ticker, name, APIUrl } = req.body;
        const currency = await Currency.create({ ticker, name, APIUrl });
        res.status(201).json(currency);
    } catch (error) {
        next(error);
    }
};

// Get all currencies
exports.getAllCurrencies = async (req, res, next) => {
    try {
        const currencies = await Currency.find();
        res.json(currencies);
    } catch (error) {
        next(error);
    }
};

// Get a specific currency by ID
exports.getCurrencyById = async (req, res, next) => {
    try {
        const currency = await Currency.findById(req.params.id);
        if (!currency) throw new Error('Currency not found');
        res.json(currency);
    } catch (error) {
        next(error);
    }
};

// Update a currency
exports.updateCurrency = async (req, res, next) => {
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
exports.deleteCurrency = async (req, res, next) => {
    try {
        const currency = await Currency.findByIdAndDelete(req.params.id);
        if (!currency) throw new Error('Currency not found');
        res.json({ message: 'Currency deleted successfully' });
    } catch (error) {
        next(error);
    }
};
