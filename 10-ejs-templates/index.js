const express = require('express');
const app = express();

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Create data that we will display on our page
const posts = [
    {title: 'Title 1', body: 'Body 1' },
    {title: 'Title 2', body: 'Body 2' },
    {title: 'Title 3', body: 'Body 3' },
    {title: 'Title 4', body: 'Body 4' },
]

// Render the template with the information from the created array above
app.get('/', (req, res) => {
    res.render('pages/index', {
        posts
    })
});

app.listen(3000, () => {
  console.log('Server running');
});
