const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const mongoURI = 'mongodb+srv://Noorulain:zCVYoSyvRxFolQHN@devhive.15ryv5a.mongodb.net/my-todo-app?retryWrites=true&w=majority';
        await mongoose.connect(mongoURI);
        console.log('MongoDB Connected Successfully...');
    } catch (err) {
        console.error('Database Connection Error:', err.message);
        process.exit(1);
    }
};

module.exports = connectDB;