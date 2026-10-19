import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 3000 });

wss.on('connection', function connection(ws) {
    console.log('Connect from client');

    ws.on('error', console.error);

    ws.on('message', function message(dataJson) {
        const { type, value } = JSON.parse(dataJson);
        if (type === 'send-message') {
            wss.clients.forEach((ws) => {
                ws.send(JSON.stringify({
                    type: 'new-message',
                    value: 'Hello client'
                }));
            })
        }

    });
    ws.on('close', () => {
        console.log('Disconnect from client');
    })
});