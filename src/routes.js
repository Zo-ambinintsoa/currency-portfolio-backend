import {changePassword, Loging, SignUp} from "./controllers/auth.controller";
import {body} from "express-validator";

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
}
