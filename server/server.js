const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname , '../public');

const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New User coneected');
   
    socket.emit('newMessage', {
        from : 'ankitrj',
        text: 'Hey ! Whats Up',
        createdAt: 123
    });

    socket.on('createMessage', (message) => {
        console.log('createMessage', message);
    })

    socket.on('disconnect', () => {
        console.log('User was Disconnected');
    });

});

server.listen(port, () => {
    console.log(`Server is on the port ${port}`);
});