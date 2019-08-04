const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 3000;

app.post('/', (req, res) => {
  console.log('req.body', req.body);
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
