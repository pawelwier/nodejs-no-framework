const http = require('http');
const app = require('./app.js');

http.createServer((req, res) => {
    res.end(app);
}).listen(4444);