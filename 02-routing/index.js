const express = require('express');
// Use a separate file for defining routes
const routes = require('./routes');
const app = express();


// Use routes
app.use('/', routes);

// Catch all non-existent routes and send 404
app.use((req, res, next) => {
  res.sendStatus(404)
});

// Start the server
app.listen(3000, () => {
  console.log('Server running');
});
