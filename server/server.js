const http = require("http");
const app = require("./app");
const sockerServer = require("socket.io");
const PORT = process.env.PORT || 5000;
const { SOCKET_EVENTS } = require("./configs");

const httpServer = http.createServer(app);
const io = sockerServer(httpServer);

io.on("connection", (socket) => {
  console.log("connection to socket");
  socket.on(SOCKET_EVENTS.NEW_MESSAGE, async (newMessage) => {
    console.log(newMessage);
    try {
      const savedMessage = await Message.create(newMessage);
      io.emit(SOCKET_EVENTS.NEW_MESSAGE, savedMessage);
    } catch (error) {
      io.emit(SOCKET_EVENTS.NEW_MESSAGE_ERROR, error);
    }
  });
  socket.on("disconnect", (reason) => {
    console.log(reason);
  });
});

httpServer.listen(PORT, () => console.log("Server started at port:  ", PORT));
