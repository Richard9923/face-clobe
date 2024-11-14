
// server.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Dummy credentials for testing
const DUMMY_USER = {
  email: 'user@example.com',
  password: 'password123'
};

// Serve the login page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


// Handle login form submission
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (email === DUMMY_USER.email && password === DUMMY_USER.password) {
    // Redirect to home page on successful login
    res.redirect('/home');
  } else {
    // Send error message on failed login
    res.send('<h2>Invalid credentials. Please try again.</h2><a href="/">Go back to login</a>');
  }
});

// Serve the home page
app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

app.get('/home', (req, res) => {
  res.render('home', { baseUrl: process.env.BASE_URL });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});