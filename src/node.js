import * as Info from "./info.js";
const socket = io("ws://localhost:8080");

const emitSocket = () => {
  if (Info.getLed("yellow") && Info.getLed("green") && Info.getLed("red")) { 
    socket.emit('message', {"status" : "7"});
  }
  else if (Info.getLed("yellow") && Info.getLed("red")) { 
    socket.emit('message', {"status" : "6"});
  }
  else if (Info.getLed("green") && Info.getLed("red")) { 
    socket.emit('message', {"status" : "5"});
  }
  else if (Info.getLed("green") && Info.getLed("yellow")) { 
    socket.emit('message', {"status" : "4"});
  }
  else if (Info.getLed("red")) {
    socket.emit('message', {"status" : "3"});
  }
  else if (Info.getLed("yellow")) {
    socket.emit('message', {"status" : "2"});
  }
  else if (Info.getLed("green")) { 
    socket.emit('message', {"status" : "1"});
  }
  else {
    socket.emit('message', {"status" : "0"});
  }
}

export {emitSocket};