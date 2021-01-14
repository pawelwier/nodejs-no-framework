const http = require('http');
const app = require('./app.js');
const serve = require('./server_event.js');

http.createServer((req, res) => {
    res.end(app);
}).listen(4444);