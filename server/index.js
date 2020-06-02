require('dotenv/config');
const express = require('express');
const fetch = require('node-fetch');

const staticMiddleware = require('./static-middleware');
const app = express();

app.use(staticMiddleware);

app.use(express.json());

app.get('/api/madlibs', (req, res) => {
  fetch('https://rq44dndifg.execute-api.us-east-1.amazonaws.com/dev/get-madlib-list')
    .then(response => response.json())
    .then(madlibs => res.json(madlibs))
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred' });
    });
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', process.env.PORT);
});
