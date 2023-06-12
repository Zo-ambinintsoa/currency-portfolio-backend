import {changePassword, Loging, SignUp} from "./controllers/auth.controller";
import {body} from "express-validator";
import {createCurrency, getAllCurrencies, getCurrencyById, updateCurrency, deleteCurrency} from "./controllers/currency.controller";
import {isAdmin, isAuthenticated} from "./middleware/isAdmin";

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

    router.post('/api/changePassword', isAuthenticated, changePassword)

    // Create a new currency
    router.post('/currencies', isAuthenticated, isAdmin, createCurrency);

// Get all currencies
    router.get('/currencies', isAuthenticated, getAllCurrencies);

// Get a specific currency
    router.get('/currencies/:id', isAuthenticated, getCurrencyById);

// Update a currency
    router.put('/currencies/:id', isAuthenticated, isAdmin, updateCurrency);

// Delete a currency
    router.delete('/currencies/:id', isAuthenticated, isAdmin, deleteCurrency);
}
