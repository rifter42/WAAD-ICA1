const express = require('express');
const app = express();

// GET parameters are passed in the URI of the request
// We can either use specific express tags to get query paramaeters
app.get('/post/:id', (req, res) => {
    res.send(`You're viewing post number ${req.params.id}`)
})

// Or get query string parameters (?var=val) using req.query
app.get('/posts', (req, res) => {
    res.send(`You're viewing post number ${req.query.id}`)
})


app.listen(3000, () => {
  console.log('Server running');
});
