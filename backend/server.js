const express = require('express');
const app = express();

// Basic route to check if the server is working
app.get('/', (req, res) => {
  res.send('Hello, World!');  // Response to the GET request on '/'
});

// You can add other routes below if needed
app.get('/api', (req, res) => {
  res.json({ message: 'This is the API endpoint' });
});

// Set the port for the server to listen to
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

