"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
let usercount = 0;
wss.on("connection", (socket) => {
    usercount++;
    console.log("New client connected count = " + usercount);
    socket.on("message", (message) => {
        console.log("Received: " + message.toString());
        socket.send("You sent: " + message.toString());
    });
});
