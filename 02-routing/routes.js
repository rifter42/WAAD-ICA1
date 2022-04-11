const express = require('express');
// Create a Router object
const router = express.Router();

// GET method route to /
router.get('/', (req, res) => {
  res.send('GET request to /')
})

// POST method route to /
router.post('/', (req, res) => {
  res.send('POST request to /')
})

// All method route
router.all('/ping', (req, res) => {
  res.send('pong')
})

// Wildcard route, accepts a route with any number of characters
// between hello and world (for example, /hellodsfbsdcjidfworld)
router.get('/hello*world', (req, res) => {
  res.send(`GET request to ${req.url}`)
});

// Route with multiple options
router.get(['/hello','/hi','/hey'], (req, res) => {
  res.send('GET request from /hello or /hi or /hey');
});

module.exports = router;
