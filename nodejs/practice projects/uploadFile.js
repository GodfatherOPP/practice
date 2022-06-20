var http = require('http')
var f= require('formidable');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data><br>')
    res.write('<input type="file" name="filetoupload" style= "border:2px solid black"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
}).listen(8080)