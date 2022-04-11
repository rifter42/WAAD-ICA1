const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

// Use cookie express middleware
app.use(cookieParser())

// Accessing the /cookieset page, we set two cookies:
// title and meta. Meta has maxAge of 360000ms and will be expired after that
app.get('/cookieset', function(req, res){
   res.cookie('title', 'very interesting title');
   res.cookie('meta', 'expires after a while', {maxAge: 360000});
   res.send('Cookies are set');
});

// Displaying set cookies
app.get('/cookieget', function(req, res){
   res.send(`Your cookie: ${req.headers.cookie}`);
});

// Delete title cookie
app.get('/cookiedel', function(req, res){
   res.clearCookie('title');
   res.send('Cookie title deleted');
});

app.listen(3000, () => {
  console.log('Server running');
});
