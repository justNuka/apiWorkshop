const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/leaderboard', (req, res) => {
  const leaderboardData = JSON.parse(fs.readFileSync('leaderboard.json'));
  res.send(leaderboardData);
});

app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

app.post('/leaderboard', (req, res) => {
  const newScore = req.body;
  const leaderboardData = JSON.parse(fs.readFileSync('leaderboard.json'));
  leaderboardData.push(newScore);
  fs.writeFileSync('leaderboard.json', JSON.stringify(leaderboardData));
  res.send('Score ajouté avec succès');
});



app.listen(3000, () => {
  console.log('Serveur démarré sur le port 3000');
});