const socket = io()
socket.on('message', (message) => {
    console.log(message)
})

document.querySelector('form input[type=submit]').addEventListener('click', (e) => {
    e.preventDefault();
    const message = document.querySelector('input').value;
    socket.emit('sendMessage', message);
})