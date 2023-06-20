import {changePassword, getUserProfile, Login, Logout, SignUp, updateUserProfile} from "./controllers/auth.controller";
import {createCurrency, getAllCurrencies, getCurrencyById, updateCurrency, deleteCurrency} from "./controllers/currency.controller";
import {isAdmin, isAuthenticated} from "./middleware/isAdmin";
import {loginValidation, signUpValidation, validateChangePassword} from "./validation/user.validation";

export const routes = (router)=>{

// Login
router.post('/api/login', loginValidation, Login)

// Register
router.post('/api/signup', signUpValidation, SignUp)

// Change password
router.post('/api/changePassword', isAuthenticated, validateChangePassword, changePassword)

// Getting user profile
router.get('/api/logout', isAuthenticated, getUserProfile)

// Updating user profile
router.get('/api/logout', isAuthenticated, updateUserProfile)

// Logout
router.get('/api/logout', isAuthenticated, Logout)

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
