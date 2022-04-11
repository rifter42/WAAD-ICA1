const express = require('express');
const app = express();

// GET requests are used to only retrieve information
// They do not modify it in any way
app.get('/post/:id', (req, res) => {
    res.send(`You're viewing post number ${req.params.id}`)
})

// POST requests are used to create a new resource
app.post('/posts', (req, res) => {
    res.send("You've added a post!")
})

// PUT requests are used to update an existing resource or create a new one
// if the resource does not exist
app.put('/post/:id', (req, res) => {
    res.send(`Post number ${req.params.id} was updated`)
})

// DELETE requests are used to delete a resource
app.delete('/post/:id', (req, res) => {
    res.send(`Post number ${req.params.id} was deleted`)
})

// PATCH requests are used to update a part of a resource (one of its elements)
app.patch('/post/:id', (req, res) => {
    res.send(`You've updated the following parameters ${req.params.id}`)
})

app.listen(3000, () => {
  console.log('Server running');
});
