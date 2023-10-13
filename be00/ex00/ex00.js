const http = require('http');
const hostname = '127.0.0.1';
const port = 4242;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain','utf-8');
	res.end("안녕, Node.js!");
})

server.listen(port, hostname, () => {
	console.log(`server running at http://${hostname}:${port}/`)});
