const express = require('express');
const app = express();

// Use json middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// JSON is a common key-value data format
// We can process JSON data (for example, from post request) using .json()
// middleware
app.post('/posts', (req, res) => {
    res.json(req.body);
});

app.listen(3000, () => {
  console.log('Server running');
});
