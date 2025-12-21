const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Hardcoded string ki jagah process.env use karein
        const mongoURI = process.env.MONGO_URI; 
        
        if (!mongoURI) {
            console.error('Error: MONGO_URI is not defined in .env file');
            process.exit(1);
        }

        await mongoose.connect(mongoURI);
        console.log('MongoDB Connected Successfully...');
    } catch (err) {
        console.error('Database Connection Error:', err.message);
        process.exit(1);
    }
};

module.exports = connectDB;