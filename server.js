var http = require('http');
var fs = require('fs');
var path = require('path');

const home = fs.readFileSync('./public/index.html')
const style = fs.readFileSync('./public/css/style.css')
const Login = fs.readFileSync('./public/LoginRegister.html')
const style1 = fs.readFileSync('./public/css/style1.css')

http.createServer(function(req, res){
    if(req.url == "/"){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(home);    
    }
    else if(req.url == "/style"){
        var cssPath = path.join(__dirname, 'public', req.url);
        console.log(cssPath);
        //var fileStream = fs.createReadStream(cssPath, "UTF-8");
        res.writeHead(200, {"Content-Type": "text/css"});
        res.end(style);   
    }
    else if(req.url == "/style1"){
        var css1Path = path.join(__dirname, 'public', req.url);
        console.log(css1Path);
        //var fileStream = fs.createReadStream(css1Path, "UTF-8");
        res.writeHead(200, {"Content-Type": "text/css"});
        res.end(style1);   
    }
    
    else if(req.url == "/Login"){
        var loginPath = path.join(__dirname, 'Nano', req.url);
        console.log(loginPath);
        //var fileStream = fs.createReadStream(loginPath, "UTF-8");
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(Login);    
    }
    else{
        res.writeHead(404, {"Conten-Type": "text/html"});
        res.end("404 page not found");
    }
    
    console.log(req.url);

}).listen(3000);