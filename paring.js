function handleFormSubmit(event) {
    event.preventDefault();

    const phoneNumber = document.getElementById('phone-number-input').value;

    if (isValidPhoneNumber(phoneNumber)) {
        const pairingCode = generatePairingCode();

        // Separate the 6-digit code into two groups of 3 digits
        const formattedCode = pairingCode.replace(/(\d{3})(\d{3})/, '$1-$2');

        // Display the formatted code in the pairing-code-container
        document.getElementById('pairing-code-container').innerText = 'Pairing Code: ' + formattedCode;

        savePairedDevice("Ndeleva");

        sendSessionIdToWhatsapp(phoneNumber, pairingCode);

        alert('Pairing Code Sent To Your Whatsapp');
    } else {
        alert('Invalid Whatsapp Number');
    }
}

function generatePairingCode() {
    // Generate a random 6-digit code
    return Math.floor(100000 + Math.random() * 900000).toString();
}
