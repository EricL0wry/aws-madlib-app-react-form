require('dotenv/config');
const express = require('express');
const fetch = require('node-fetch');

const staticMiddleware = require('./static-middleware');
const app = express();

app.use(staticMiddleware);

app.use(express.json());

app.get'/api/madlibs', (req, res) => {

})

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', process.env.PORT);
});
