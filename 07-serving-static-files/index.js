const express = require('express');
const path = require('path')
const app = express();

// Server files from directory named "public"
// Use absolute path to not depend on the location we launch the app from
app.use(express.static(path.join(__dirname, 'public')));

// Display the index file on request to /
app.get("/", (req, res) => {
    res.send();
});

app.listen(3000, () => {
  console.log('Server running');
});
