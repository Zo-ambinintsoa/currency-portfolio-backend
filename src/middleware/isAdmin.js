// Import any required dependencies
import { verify } from "jsonwebtoken";
import {cookieParser} from "../helpers/cookieParser";

// Middleware to check if user is an admin
export const isAdmin = (req, res, next) => {
    const { role } = req.userId;

    if (role === 'admin') {
        next(); // User is an admin, continue to the next middleware or route handler
    } else {
        res.status(403).json({ error: 'Access denied. User is not an admin.' });
    }
};

// Middleware to check if user is a simple user
export const isUser = (req, res, next) => {
    const { role } = req.userId;

    if (role === 'user') {
        next(); // User is a simple user, continue to the next middleware or route handler
    } else {
        res.status(403).json({ error: 'Access denied. User is not a simple user.' });
    }
};

// Middleware to check if user is authenticated
export const isAuthenticated = (req, res, next) => {
    try {
        // Get the token from the request cookies
        const token = cookieParser(req);

        // console.log(token.authToken)

        // If token is not found or invalid, return unauthorized
        if (!token.authToken) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        // Verify the token
        verify(token.authToken,  process.env.SECRETE_TOKEN, (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: 'Unauthorized' });
            }
            console.log(decoded)
            // If token is valid, attach the decoded user ID to the request object
            req.userId = decoded.userId;
            next();
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal server error' });
    }
};

