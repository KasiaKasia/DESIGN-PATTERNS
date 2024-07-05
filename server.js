const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/text-data', (req, res) => {
  res.type('text').send('This is a plain text response.');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
