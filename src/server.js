const express = require('express');
const connectDB = require('./config/db');
const taskRoutes = require('./routes/task.routes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

connectDB(); // Connect to MongoDB

app.use(express.json()); // Parse JSON request bodies

app.use('/tasks', taskRoutes); // Use task routes

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});