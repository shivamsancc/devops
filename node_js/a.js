import http from 'http';

console.log('I\'m running in a cluster');

const a = { message: 'Im running in a cluster' }; // Define an object with a property
const dta = { message: 'Im running in a cluster created by shivam UPDATE' }; // Define an object with a property

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(dta));
}).listen(8000);

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(a));
}).listen(32025);
