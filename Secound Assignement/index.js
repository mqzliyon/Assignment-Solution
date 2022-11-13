let http = require('http');
let fs = require('fs');
let port = 4040;
let server = http.createServer(function(req,res){
    if(req.url == '/'){
        let result = fs.readFileSync('home.html','utf8');
        res.writeHead(200,{'Content-type':'text/html'});
        res.write(result);
        res.end();
    }
    else if(req.url == '/contact'){
        let result = fs.readFileSync('contact.html','utf8');
        res.writeHead(200,{'Contect-type':'text/html'});
        res.write(result);
        res.end();
    }
    else if (req.url == '/about') {
        let result = fs.readFileSync('about.html','utf8');
        res.writeHead(200,{'Content-type':'text/html'});
        res.write(result);
        res.end();
    }
    else if (req.url == '/term') {
        let result = fs.readFileSync('terms.html','utf8');
        res.writeHead(200,{'Content-type':'text/html'});
        res.write(result);
        res.end();
    }
});
server.listen(port);
console.log('Server run success');