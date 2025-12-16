const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

// 1. Connect Database
connectDB();

// 2. Middleware
app.use(express.json({ extended: false })); // Body Parser
app.use(cors()); // Allow Frontend to connect

// 3. Define Routes
app.use('/api', require('./routes/auth'));  // Auth routes (Login/Register)
app.use('/api/todos', require('./routes/todos')); // Todo routes

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));