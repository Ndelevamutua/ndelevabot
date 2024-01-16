function handleFormSubmit(event) {
    event.preventDefault();

    // Step 1: Get the phone number from the input field
    const phoneNumber = document.getElementById('phone-number-input').value;

    // Step 2: Check if the phone number is valid
    if (isValidPhoneNumber(phoneNumber)) {

        // Step 3: Generate a pairing code
        const pairingCode = generatePairingCode();

        // Step 4: Separate the 6-digit code into two groups of 3 digits
        const formattedCode = pairingCode.replace(/(\d{3})(\d{3})/, '$1-$2');

        // Step 5: Display the formatted code in the pairing-code-container
        document.getElementById('pairing-code-container').innerText = 'Pairing Code: ' + formattedCode;

        // Step 6: Save the paired device (You might want to implement this function)
        savePairedDevice("Ndeleva");

        // Step 7: Send the pairing code to WhatsApp (You might want to implement this function)
        sendSessionIdToWhatsapp(phoneNumber, pairingCode);

        // Step 8: Display a success message
        alert('Pairing Code Sent To Your Whatsapp');
    } else {
        // Step 9: Display an error message for an invalid phone number
        alert('Invalid Whatsapp Number');
    }
}

function generatePairingCode() {
    // Generate a random 6-digit code
    return Math.floor(100000 + Math.random() * 900000).toString();
}

// Example validation function (you might want to replace it with your actual validation logic)
function isValidPhoneNumber(phoneNumber) {
    // Simple example: Check if the phone number starts with a plus sign and has at least 10 digits
    return /^\+\d{10,}$/.test(phoneNumber);
}

// Example function to save the paired device (replace it with your actual implementation)
function savePairedDevice(deviceName) {
    // Your implementation here
}

// Example function to send the pairing code to WhatsApp (replace it with your actual implementation)
function sendSessionIdToWhatsapp(phoneNumber, pairingCode) {
    // Your implementation here
}
