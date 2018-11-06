const express = require('express');

const app = express();

console.log({ route: app.route });

app.route('/').get(res => {
  res.status(200).send('hello!');
});

module.exports = { app };
