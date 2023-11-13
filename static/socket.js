//! Клиент
const socket = new WebSocket('ws://127.0.0.1:3000/');

socket.addEventListener('open', (event) => {
    socket.send('Привет сервер');
});

socket.addEventListener('message', (event) => {
    console.log('[message]', event.data);
});

socket.addEventListener('close', (event) => {
    console.log('Соединение закрыто');
});

