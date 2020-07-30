require('dotenv').config();
const WEATHER_API_KEY = process.env.WEATHER_API_KEY
const express = require('express');
const request = require('request');
const app = express();

function bulidURL (inputCity) {
  return `http://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${WEATHER_API_KEY}`;
}

app.use(express.json());
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  const city = req.query.city;
  request(bulidURL(city), (err, response, body) => {
    const weatherJSON = JSON.parse(body);
    console.log('PATTTT', weatherJSON);
    res.send(weatherJSON);
  });
});


const port = 5000;
app.listen(port, () => {
  console.log('Server is listening on PORT ' + port);
});
