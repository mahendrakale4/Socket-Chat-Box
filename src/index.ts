import WebSocket, { WebSocketServer } from "ws"

const wss = new WebSocketServer({ port: 8080 })

let usercount = 0
let allsockets = []

wss.on("connection", (socket) => {
  allsockets.push(socket)
  usercount++
  console.log("New client connected count = " + usercount)

  socket.on("message", (message) => {
    console.log("Received: " + message.toString())
    socket.send("You sent: " + message.toString())
  })
})
