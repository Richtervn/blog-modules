export default (io, idField, idFieldValue, eventName, data) => {
  let socket;
  for (let key in io.sockets.connected) {
    if (io.sockets.connected[key][idField] === idFieldValue) {
      socket = io.sockets.connected[key];
    }
    break;
  }
  if (socket) {
    socket.emit(eventName, data);
  }
};
