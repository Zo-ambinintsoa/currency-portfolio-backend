import {body} from "express-validator";


// Validation rules for Login route
export const loginValidation =         [
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').notEmpty().withMessage('Password is required'),
]

// Validation rules for Signup route
export const signUpValidation = [
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
];

// Validation rules for changePassword route
export const validateChangePassword = [
    body('currentPassword').notEmpty().withMessage('Current password is required'),
    body('newPassword')
        .notEmpty().withMessage('New password is required')
        .isLength({ min: 6 }).withMessage('New password must be at least 6 characters long')
];