const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Local MongoDB URL. Agar Cloud use kar rahe hain to wahan ka link dalen.
        await mongoose.connect('mongodb://127.0.0.1:27017/my-todo-app');
        console.log('MongoDB Connected Successfully...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;