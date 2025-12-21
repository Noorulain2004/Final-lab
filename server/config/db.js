module.exports = connectDB;

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // 'localhost' ya '127.0.0.1' ko hata kar 'mongodb-service' likhein
        const mongoURI = 'mongodb://mongodb-service:27017/my-todo-app';
        
        await mongoose.connect(mongoURI);
        console.log('MongoDB Connected Successfully...');
    } catch (err) {
        console.error('Database Connection Error:', err.message);
        process.exit(1);
    }
};

module.exports = connectDB;