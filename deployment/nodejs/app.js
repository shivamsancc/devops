const express = require('express');
const http = require('http');
const app = express();

const app2ServiceHost = process.env.APP2_SERVICE_HOST || 'localhost';

app.get('/', (req, res) => {
  res.send('Hello from App 1');
});

app.get('/call-app2', (req, res) => {
  http.get(`http://${app2ServiceHost}`, (resp) => {
    let data = '';
    resp.on('data', (chunk) => {
      data += chunk;
    });
    resp.on('end', () => {
      res.send(`App 1 called App 2 and got response: ${data}`);
    });
  }).on("error", (err) => {
    res.send("Error: " + err.message);
  });
});

app.listen(3000, () => {
  console.log('App 1 listening on port 3000');
});
