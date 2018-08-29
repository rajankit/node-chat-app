//const socket = require('socket.io');
var socket = io();


socket.on('connect', function () {
    console.log('Connected to server');
});

socket.on('disconnect', function () {
    console.log('Disconnected fron server');
});

// Listen to the event created by server with NAME - newMessage

socket.on('newMessage', function (message) {
    console.log('New Message ', message);

    var li = jQuery('<li></li>');
    li.text(`${message.from}: ${message.text}`);

    jQuery('#messages').append(li);
});

// socket.emit('createMessage',{
//     from: 'Frank',
//     text: 'Hi'
// }, function (data) {
//     console.log('Got It',data);
// });

jQuery('#message-form').on('submit', function (e) {
    e.preventDefault();

    socket.emit('createMessage', {
        from : 'User',
        text : jQuery('[name=message]').val()
    },function () {

    });
});