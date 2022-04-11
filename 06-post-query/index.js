const express = require('express');
const app = express();

// Built-in middleware function in Express. 
// It parses incoming requests with JSON payloads
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// POST data is located in the body of the request
// We can process post data by converting it into JSON
app.post('/posts', (req, res) => {
    res.json(req.body);
});

app.listen(3000, () => {
  console.log('Server running');
});
