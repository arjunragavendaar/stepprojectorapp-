var http = require('http');
port = 8080;
host = "127.0.0.1";

var server = http.createServer(function(req,res){
  res.writeHead(200,{"content-Type":"text/plain"});
  res.write("hello world");
  res.end();
});
server.listen(port,host,function(){

  console.log("listening");
});
