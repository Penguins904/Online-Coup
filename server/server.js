const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const Coup = require("./game");
const app = express();

const clientPath = "${__dirname}/../client";
console.log("Serving static from ${clientPath}");

app.use(express.static(clientPath));

const server = http.createServer(app);

const io = socketio(server);

var waiting = null;
io.on("connection", function (socket) {
  console.log("User connected");

  if (waiting) {
    new Coup(waiting, socket);
  } else {
    waiting = socket;
    socket.emit("waiting", "waiting")
  }
});

server.listen(process.env.PORT || 5000, function () {
  console.log("Server Started");
});
