var socket = io();
var form = document.getElementById('sendButton');
var input = document.getElementById('msgInput');
var messages = document.getElementById('messages');

form.addEventListener('click', function() {
    var msg = input.value;
    if (msg.trim() !== '') {
        socket.emit('chat message', msg);
        var li = document.createElement('li');
        li.textContent = msg;
        messages.appendChild(li);
        input.value = ''; // इनपुट साफ करें
    }
});

socket.on('chat message', function(msg) {
    var li = document.createElement('li');
    li.textContent = msg;
    messages.appendChild(li);
});