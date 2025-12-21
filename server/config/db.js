const mongoose = require('mongoose');

const connectDB = async () => {
    try {
      
        const mongoURI = 'mongodb+srv://noorulain:Noair125521%40@devhive.15ryv5a.mongodb.net/todoapp?retryWrites=true&w=majority&appName=Devhive';
        await mongoose.connect(mongoURI);
        console.log('MongoDB Connected Successfully...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;