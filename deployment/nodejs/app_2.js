const express = require('express');
const http = require('http');
const app = express();

const app1ServiceHost = process.env.APP1_SERVICE_HOST || 'localhost';

app.get('/', (req, res) => {
  res.send('Hello from App 2');
});

app.get('/call-app1', (req, res) => {
  http.get(`http://${app1ServiceHost}`, (resp) => {
    let data = '';
    resp.on('data', (chunk) => {
      data += chunk;
    });
    resp.on('end', () => {
      res.send(`App 2 called App 1 and got response: ${data}`);
    });
  }).on("error", (err) => {
    res.send("Error: " + err.message);
  });
});

app.listen(3000, () => {
  console.log('App 2 listening on port 3000');
});
