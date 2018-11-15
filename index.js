const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const data = {
  'value1': 0,
};

// TODO(sejin): Refactor this to avoid the memory leak
const increaseDataPeriodically = () => {
  setTimeout(() => {
    if(data.hasOwnProperty('value1')) data['value1']++;
    increaseDataPeriodically();
  }, 1000);
};

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(data['value1'].toString());
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  increaseDataPeriodically();
});
