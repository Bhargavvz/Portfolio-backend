import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

// Admin credentials (in a real app, these would be in a database)
const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = '$2a$10$your_hashed_password'; // You should hash your password

// Login route
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check username
        if (username !== ADMIN_USERNAME) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Check password
        const isPasswordValid = await bcrypt.compare(password, ADMIN_PASSWORD);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign(
            { username: ADMIN_USERNAME },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
