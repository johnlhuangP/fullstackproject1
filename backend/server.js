// backend/server.js

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const tasks = [];
const PORT = process.env.PORT || 5005;

// MongoDB connection
mongoose.connect('mongodb+srv://johnhuang:FullStack1@fullstack.l6kviwn.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB connection established successfully.');
});

// Define API endpoints here
// backend/server.js

// ... existing imports and setup

// Define API endpoints for managing tasks
app.get('/api/tasks', (req, res) => {
    res.json(tasks);
  });
  
  app.post('/api/tasks', (req, res) => {
    const newTask = req.body;
    tasks.push(newTask);
    res.status(201).json(newTask);
  });
  
  app.put('/api/tasks/:id', (req, res) => {
    const { id } = req.params;
    const updatedTask = req.body;
    tasks[id] = updatedTask;
    res.json(updatedTask);
  });
  
  app.delete('/api/tasks/:id', (req, res) => {
    const { id } = req.params;
    tasks.splice(id, 1);
    res.sendStatus(204);
  });
  
  // ... rest of the code
  

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
