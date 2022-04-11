const express = require('express');
const session = require('express-session');
const app = express();

// Use the express session middleware
app.use(session(
  {
    secret: "Secreeeeeeeeeeet", // Random key used to authenticate a session
    saveUninitialized: true, // Send any uninitialized session to the store
    resave: true, // Keep the session active even if it wasn't changed
  })
);

app.get('/', (req, res) => {
   // If req.session.page_views is defined
   if (req.session.page_views) {
      // Increase the counter of page visits
      req.session.page_views++;
      // Show the number to the user
      res.send("You visited this page " + req.session.page_views + " times");
   } else {
      // Define req.session.page_views
      req.session.page_views = 1;
      // Tell user that he's visiting the page for the first time
      res.send("Welcome to this page for the first time!");
   }
});

app.listen(3000, () => {
  console.log('Server running');
});
