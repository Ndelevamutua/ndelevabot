function handleFormSubmit(event) {
    event.preventDefault();

    // Get the phone number from the input field
    const phoneNumber = document.getElementById('phone-number-input').value;

    // Check if the phone number is valid
    if (isValidPhoneNumber(phoneNumber)) {

        // Generate a pairing code
        const pairingCode = generatePairingCode();

        // Separate the 6-digit code into two groups of 3 digits
        const formattedCode = pairingCode.replace(/(\d{3})(\d{3})/, '$1-$2');

        // Display the formatted code immediately after pressing submit
        document.getElementById('pairing-code-container').innerText = 'Pairing Code: ' + formattedCode;
    } else {
        // Display an error message for an invalid phone number
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
