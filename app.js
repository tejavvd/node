const http = require('http');
const header = 'Hello World! New Death Note';
const server = http.createServer((_, res) => res.end(`<h1>${header}</h1>`));

server.listen(80);