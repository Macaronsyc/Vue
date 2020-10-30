var express = require("express")
var app = express()

app.get('/', function(req,res){
  res.send("hello world")
})

var server = app.listen(8081, '127.0.0.1',function(){
  var host = server.address().address
  var port = server.address().port

  console.log("The visited address is http://" + host + ":" + port)
})

app.get('/listfiles', function(req,res){
  res.send("File list interface")
  console.log("router list files")
})
