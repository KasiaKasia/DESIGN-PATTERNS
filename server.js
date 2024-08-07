const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/text-data', (req, res) => {
  res.type('text').send('This is a plain text response.');
});
app.get('/user-data', (req, res) => {
  res.send([
    { id: '1', name: 'Natalia Nowak' },
    { id: '2', name: 'Ola Sabina Kowalska' },
    { id: '3', name: 'Ewa Kowalska' },
    { id: '4', name: 'Jola Lop' }
  ]);
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
