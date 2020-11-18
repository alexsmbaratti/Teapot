var http = require('http');
const isRoot = require('is-root');
var fs = require('fs')

const PORT = 3000

var options = {
    host: 'error418.net'
}

http.createServer(function (req, res) {
    if (req.url != '/favicon.ico') {
        if (!isRoot()) {
            var html = fs.readFileSync('./code418.html', 'utf8')
            res.setHeader("Content-Type", "text/html")
            res.writeHead(418)
            res.end(html)
        } else {
            var html = fs.readFileSync('./code200.html', 'utf8')
            res.setHeader("Content-Type", "text/html")
            res.writeHead(200)
            res.end(html)
        }
    }
}).listen(PORT, 'localhost')