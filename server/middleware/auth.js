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
        // process.env.JWT_SECRET use karein
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'supersecretkey123');
        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
};