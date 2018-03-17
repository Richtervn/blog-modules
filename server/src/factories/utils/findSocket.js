export default (io, idField, idFieldValue) => {
  let socket;
  for (let key in io.sockets.connected) {
    if (io.sockets.connected[key][idField] === idFieldValue) {
      socket = io.sockets.connected[key];
    }
    break;
  }
  return socket;
};
