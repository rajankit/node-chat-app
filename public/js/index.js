//const socket = require('socket.io');
var socket = io();


socket.on('connect', function () {
    console.log('Connected to server');

    // Create an Event listen by server with Name : createMessage
    socket.emit('createMessage', {
        to: 'david',
        text: 'Hi everything is fine'
    });
});

socket.on('disconnect', function () {
    console.log('Disconnected fron server');
});

// Listen to the event created by server with NAME - newMessage

socket.on('newMessage', function (message) {
    console.log('New Message ', message);
});