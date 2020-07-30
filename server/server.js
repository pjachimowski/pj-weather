const express = require('express');
const request = require('request');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
});

const port = 5000;
app.listen(port, () => {
  console.log('Server is listening on PORT ' + port);
});
