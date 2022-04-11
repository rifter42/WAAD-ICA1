const express = require('express');
const app = express();


// Send 200 - OK when the request was successful
app.get('/', (req, res) => {
  res.sendStatus(200)
})

// Send 201 - Created when a resource was successfully created (usually used as
// a response to a POST or PUT request)
app.post('/addpost', (req, res) => {
  res.sendStatus(201)
})

// Send 301 - Moved Permanently and redirect when the page was moved permanently
app.get('/home',(req, res) => {
   res.redirect(301, '/')
})

// Send 302 - Found and redirect when the page was moved temporary
app.get('/login',(req, res) => {
   res.redirect('/')
})

// Send 400 - Bad Request when the request format was incorrect
app.get('/asdjhIEIasncA:::',(req, res) => {
   res.sendStatus(400)
})

// Send 401 - Unauthorized when the request was sent without proper authorisation
// credentials
app.get('/user',(req, res) => {
   res.sendStatus(401)
})

// Send 403 - Forbidden when the access to a resource is forbidden by the server
// or user does not have enough priviledges to access it
app.get('/secret',(req, res) => {
   res.sendStatus(403)
})

// Send 500 - Internal Server Error when server encountered an error processing
// the request
app.get('/oops',(req, res) => {
   res.sendStatus(500)
})

// Send 404 - Not Found for all non-defined routes (when the requested page
// does not exist)
app.use((req, res, next) => {
  res.sendStatus(404);
});

app.listen(3000, () => {
  console.log('Server running');
});
