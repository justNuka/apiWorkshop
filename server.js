const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());

app.post('/leaderboard', (req, res) => {
  const data = req.body;

  // Récupérer les données existantes du fichier JSON
  const leaderboard = JSON.parse(fs.readFileSync('leaderboard.json'));

  // Ajouter les nouvelles données du joueur
  leaderboard.push(data);

  // Enregistrer les nouvelles données dans le fichier JSON
  fs.writeFileSync('leaderboard.json', JSON.stringify(leaderboard));

  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log('Serveur démarré sur le port 3000');
});