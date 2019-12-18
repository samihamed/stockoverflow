// const express = require('express');
// const http = require('http');
// const path = require('path');
// let app = express();
// app.use(express.static(path.join(__dirname, 'build')));
// const port = process.env.PORT || '8080';
// app.set('port', port);
// const server = http.createServer(app);
// server.listen(port, () => console.log(`Running on localhost:${port}`));

var WebSocketServer = require("ws").Server
var http = require("http")
var path = require("path");
var express = require("express")
var app = express()
var port = process.env.PORT || 8080

app.use(express.static(path.join(__dirname, 'build')))
app.set('port', port)

var server = http.createServer(app)
server.listen(port)

console.log("http server listening on %d", port)

var wss = new WebSocketServer({server: server})
console.log("websocket server created")

wss.on("connection", function(ws) {
  var id = setInterval(function() {
    ws.send(JSON.stringify(new Date()), function() {  })
  }, 1000)

  console.log("websocket connection open")

  ws.on("close", function() {
    console.log("websocket connection close")
    clearInterval(id)
  })
})