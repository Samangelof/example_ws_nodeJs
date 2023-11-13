//! Сервер
const WebSocket = require('websocket').server;
const http = require('http');


const server = http.createServer((request, response) => {
    console.log('HTTP-запрос получен, но обработка не предусмотрена.');
    response.writeHead(404);
    response.end();
});

const wsServer = new WebSocket({
    httpServer: server,
});

wsServer.on('request', (request) => {
    const socket = request.accept(null, request.origin);
    console.log('Клиент подключен');


    socket.sendUTF('Привет, клиент!');

    socket.on('message', (message) => {
        console.log('Сообщение от клиента:', message.utf8Data);
    });

    socket.on('close', (reasonCode, description) => {
        console.log('Клиент отключен:', reasonCode, description);
    });
});


server.listen(3000, () => {
    console.log('Сервер запущен на порту http://127.0.0.1:3000/');
});
