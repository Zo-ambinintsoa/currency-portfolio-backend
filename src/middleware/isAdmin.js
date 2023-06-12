// Import any required dependencies
import { verify } from "jsonwebtoken";
import config from '../../config';
import {cookieParser} from "../helpers/cookieParser";

// Middleware to check if user is an admin
export const isAdmin = (req, res, next) => {
    const { role } = req.user;

    if (role === 'admin') {
        next(); // User is an admin, continue to the next middleware or route handler
    } else {
        res.status(403).json({ error: 'Access denied. User is not an admin.' });
    }
};

// Middleware to check if user is a simple user
export const isUser = (req, res, next) => {
    const { role } = req.user;

    if (role === 'user') {
        next(); // User is a simple user, continue to the next middleware or route handler
    } else {
        res.status(403).json({ error: 'Access denied. User is not a simple user.' });
    }
};

// Define the middleware function
export const isAuthenticated = (req, res, next) => {
    // Get the token from the request headers
    const token = cookieParser(req);
    console.log(token)
    // Check if the token is missing
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    try {
        // Verify the token
        const decoded = verify(token, config.secret);

        // Attach the decoded user object to the request
        req.user = decoded.user;

        // Proceed to the next middleware or route handler
        next();
    } catch (err) {
        // Token is invalid
        res.status(401).json({ msg: 'Invalid token' });
    }
};

