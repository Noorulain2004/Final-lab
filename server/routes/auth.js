const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');
const User = require('../models/User');

// @route   POST api/register
// @desc    Register User
router.post('/register', async (req, res) => {
    // 1. Log incoming data to see what frontend is sending
    console.log("Incoming Registration Request:", req.body);

    const { name, email, password } = req.body;

    try {
        // 2. Check if user already exists
        let user = await User.findOne({ email });
        if (user) {
            console.log("Registration Failed: User already exists ->", email);
            return res.status(400).json({ msg: 'User already exists' });
        }

        // 3. Create new user object
        user = new User({ name, email, password });
        
        // 4. Password Encryption
        console.log("Encrypting password for:", email);
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        
        // 5. Save to Database
        await user.save();
        console.log("User successfully saved to MongoDB!");

        // 6. JWT Token Return
        const payload = { user: { id: user.id } };
        jwt.sign(payload, 'supersecretkey123', { expiresIn: 360000 }, (err, token) => {
            if (err) {
                console.error("JWT Signing Error:", err.message);
                throw err;
            }
            res.json({ token });
        });

    } catch (err) {
        // 7. Log the exact error to your terminal
        console.error("CRITICAL ERROR during registration:", err.message);
        res.status(500).json({ msg: 'Server Error', error: err.message });
    }
});

// @route   POST api/login
// @desc    Login User
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) return res.status(400).json({ msg: 'Invalid Credentials' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: 'Invalid Credentials' });

        const payload = { user: { id: user.id } };
        jwt.sign(payload, 'supersecretkey123', { expiresIn: 360000 }, (err, token) => {
            if (err) throw err;
            res.json({ token });
        });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;