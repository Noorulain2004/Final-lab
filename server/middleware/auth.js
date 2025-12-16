const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    // Header se token nikalo
    const token = req.header('x-auth-token');

    // Agar token nahi hai
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    // Verify token
    try {
        // 'supersecretkey123' wohi key hai jo hum login mein use karenge
        const decoded = jwt.verify(token, 'supersecretkey123');
        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
};