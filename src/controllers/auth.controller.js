import {validationResult} from "express-validator";
import bcrypt from "bcrypt";
import {sign} from "jsonwebtoken";

import {User} from "../models/user";

export  const Login = async  (req, res) =>  {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Compare passwords
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        const payload = {
            id: user.id,
            email: user.email
        };

        // Generate JWT token
        const token = sign({ userId: user._id }, process.env.SECRETE_TOKEN, { expiresIn: '1h' });

        // const token = sign( payload , process.env.SECRETE_TOKEN)


        // Set the token as a cookie in the response
        res.cookie('authToken', token, { httpOnly: true, maxAge: 3600000 });

        res.json({ message: 'Login successful' });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'An error occurred during login' });
    }
}

export const SignUp = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
        // Check if email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({ email, password: hashedPassword, role: 'user' });
        await newUser.save();

        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).json({ error: error });
    }
}

export const Logout = async (req, res) => {
    res.clearCookie('authToken');
    res.status(200).send({
        message: 'logout'
    });
}

export const changePassword = async (req, res) => {
        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { currentPassword, newPassword } = req.body;
        const userId = req.user.id;

        try {
            // Fetch the user from the database
            const user = await User.findById(userId);

            // Check if the current password matches the one in the database
            const isMatch = await bcrypt.compare(currentPassword, user.password);
            if (!isMatch) {
                return res.status(401).json({ msg: 'Invalid current password' });
            }

            // Generate a new salt and hash the new password
            const salt = await bcrypt.genSalt(10);
            // Update the user's password in the database
            user.password = await bcrypt.hash(newPassword, salt);
            await user.save();

            res.json({ msg: 'Password changed successfully' });
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
}