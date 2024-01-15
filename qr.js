const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', (qrCode) => {
    document.getElementById('qrCode').innerHTML = qrCode;
});

client.on('authenticated', (session) => {
    const linkedDevice = 'Ndeleva';

    const sessionId = session.client.mqid._serialized;
    document.getElementById(sessionId).innerText = sessionId;
});

client.initialize();