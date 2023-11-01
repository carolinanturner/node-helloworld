var http = require("http");
const port = process.env.PORT || 3001;

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Hello Mrs.Portia! This is Carolina's Assignment 12!");
  })
  .listen(port);