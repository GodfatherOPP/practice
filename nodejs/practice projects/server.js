var http= require('http');
var fs = require('fs')
http.createServer(function(req,res){
    // res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Response from server successful ! ')
    res.write(req.url);
    console.log(req.url)
     fs.readFile('data.txt',function(err,data){
         res.write(data);
         return res.end()
     })
}).listen(8080)
console.log("end program")