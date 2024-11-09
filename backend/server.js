const express = require('express');
const app = express();
const port = 5000;

// Simple route to test if the backend is working
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// Your API route (e.g., for frontend to call)
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the backend API!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});

