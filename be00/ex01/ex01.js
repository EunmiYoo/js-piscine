const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 4242;

const server = http.createServer((req, res) => {
    if(req.method ==='GET')
    {
        res.writeHead(200,{'Content-Type': 'text/html'});
        fs.readFile(__dirname + '/index.html',(err, data) => {
            if(err)
            {
                res.writeHead(500, {'Content-Type':'text/html'});
                res.end('500 Internal Server Error : + error');
                return(console.log("500 error"))
            }
            res.end(data, 'utf-8');
        })
    }
	
})

server.listen(port, hostname, () => {
	console.log(`server running at http://${hostname}:${port}/`)});
