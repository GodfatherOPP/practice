var http = require("http");
var fs = require("fs");
var url = require("url");
http
  .createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename;
    //causing error while using relative path
    filename = "D://Harsh/github/nodejs/text" + q.pathname;
    console.log(filename);
    fs.readFile(filename, function (err, data) {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        return res.end("404 Not found ");
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  })
  .listen(8080);
