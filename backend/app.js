// import fs from 'fs';
import fs from 'node:fs/promises';
import express from 'express';
const app = express();

app.use(express.static('images'));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Alow-Headers', 'Content-Type');

  next();
});

app.get('/cities', async (req, res) => {
  const fileContent = await fs.readFile('./data/cities.json');
  const citiesData = JSON.parse(fileContent);
  res.status(200).json({ cities: citiesData });
});

app.use('*', (req, res) => {
  res.status(404).json({ message: '404 - Not Found' });
});

app.listen(3000, () => console.log('Running on port 3000!'));
