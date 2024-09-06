const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Configure CORS to allow requests from the frontend
app.use(cors({
    origin: 'http://localhost:5173', // Allow only requests from your React app
    credentials: true, // Allow cookies and credentials if needed
    optionsSuccessStatus: 200 // For legacy browser support
}));

// JSON middleware
app.use(express.json());

// API endpoint
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
