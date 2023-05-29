import {changePassword, Loging, SignUp} from "./controllers/auth.controller";
import {body} from "express-validator";
import currencyController from "./controllers/currency.controller";

export const routes = (router)=>{
    router.post('/api/login',
        [
            body('email').isEmail().withMessage('Invalid email address'),
            body('password').notEmpty().withMessage('Password is required'),
        ], Loging)
    router.post('/api/signup',   [
            body('email').isEmail().withMessage('Invalid email address'),
            body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    ],SignUp)
    router.post('/api/changePassword', changePassword)

    // Create a new currency
    router.post('/currencies', currencyController.createCurrency);

// Get all currencies
    router.get('/currencies', currencyController.getAllCurrencies);

// Get a specific currency
    router.get('/currencies/:id', currencyController.getCurrencyById);

// Update a currency
    router.put('/currencies/:id', currencyController.updateCurrency);

// Delete a currency
    router.delete('/currencies/:id', currencyController.deleteCurrency);
}
