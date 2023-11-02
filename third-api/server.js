const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// https://www.youtube.com/watch?v=dFrgIrWmTeY
app.post('/api/signup', (req, res) => {
  console.log('Received a POST request /api/signup');
  console.log('Form data received:', req.body);

  // Learn difference between var, const, and let
  const user = req.body.user;

  res.json({ message: `Name stored: ${user}` });
});


app.listen(port, () => {
  console.log(`Service running @ http://localhost:${port}`);
});
