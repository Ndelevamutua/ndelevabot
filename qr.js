function generateQRCode() {
    var phoneNumber = '+254746193590';  
    var preFilledMessage = encodeURIComponent('Hello, I just scanned your QR code on your website. Anyway ndelevabot is a good idea.');

    var whatsappURL = 'https://wa.me/' + phoneNumber + '/?text=' + preFilledMessage;

    var qrcode = new QRCode(document.getElementById("qrcode"), {
        text: whatsappURL,
        width: 200,
        height: 200
    });

    // Display a message to the user
    alert('Scan the QR code with your WhatsApp to start a chat');
}
