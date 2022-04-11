const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// We can  send our own JSON in response, following the JSON format
app.get("/posts", (req, res) => {
  res.json({ id: 2123, title: "Meow" });
});

app.listen(3000, () => {
  console.log('Server running');
});
