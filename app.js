const http = require('http');
const header = 'Hello World!Lets seee';
const server = http.createServer((_, res) => res.end(`<h1>${header}</h1>`));

server.listen(80);