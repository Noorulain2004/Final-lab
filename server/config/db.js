const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const mongoURI = 'mongodb://localhost:27017/my-todo-app';
        await mongoose.connect(mongoURI);
        console.log('MongoDB Connected Successfully...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;