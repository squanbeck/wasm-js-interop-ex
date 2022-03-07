var http = require('http');
var fs = require('fs');


var files = fs.readdirSync('./');

http.createServer(function (req, resp) {
    var requested_file = req.url.replace('/', '');
    if(files.includes(requested_file)) {
        var extension = requested_file.split('.').pop();
        let content_type;
        switch(extension){
            case 'js':
                content_type = 'text/javascript';
                break;
            case 'wasm':
                content_type = 'application/wasm';
                break;
            case 'html':
                content_type = 'text/html';
                break;
            case 'css':
                content_type = 'text/css';
                break;
        }
        resp.writeHead(200, { 'Content-Type': content_type});
        var readIndex = fs.readFileSync('.' + req.url);
        resp.write(readIndex);
        resp.end();
    }
}).listen(3000);

console.log("listening at http://localhost:3000");