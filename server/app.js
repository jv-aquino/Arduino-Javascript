const {SerialPort} = require('serialport');
const {ReadlineParser} = require('@serialport/parser-readline');

const parser = new ReadlineParser({
  delimiter: '\r\n'
});

const port = new SerialPort({ 
  path: "COM5",
  baudRate: 9600,
  dataBits: 8,
  parity: 'none',
  stopBits: 1,
  flowControl: false
});

port.pipe(parser);

const http = require('http').createServer();

const io = require('socket.io')(http, {
    cors: { origin: "*" }
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('message', (message) =>     {
        port.write(message.status);
        console.log("sent " + message.status);
    });
});

http.listen(8080, () => console.log('listening on http://localhost:8080') );