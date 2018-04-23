const http = require('http');
const header = 'Hello World!! This is another example yo';
const server = http.createServer((_, res) => res.end(`<h1>${header}</h1>`));

server.listen(80);