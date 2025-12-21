const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Password "Noair@125521" ko "Noair%40125521" likha hai
        const mongoURI = 'mongodb+srv://noorulain:Noair%40125521@devhive.15ryv5a.mongodb.net/todoapp?retryWrites=true&w=majority&appName=Devhive';
        
        await mongoose.connect(mongoURI);
        console.log('MongoDB Atlas Connected Successfully...');
    } catch (err) {
        console.error('Database Connection Error:', err.message);
        process.exit(1);
    }
};

module.exports = connectDB;