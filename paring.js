let lastGeneratedCodeTime = 0;
let countdownInterval;

function handleFormSubmit(event) {
    event.preventDefault();

    // Get the current time
    const currentTime = Date.now();

    // Check if one minute has passed since the last generated code
    if (currentTime - lastGeneratedCodeTime >= 60000) {

        // Get the phone number from the input field
        const phoneNumber = document.getElementById('phone-number-input').value;

        // Check if the phone number is valid
        if (isValidPhoneNumber(phoneNumber)) {

            // Generate a pairing code as an array of digits
            const pairingCode = generatePairingCode();

            // Display each digit in its own box
            displayPairingCode(pairingCode);

            // Update the last generated code time
            lastGeneratedCodeTime = currentTime;

            // Start the countdown
            startCountdown();

        } else {
            // Display an error message for an invalid phone number
            alert('Invalid Whatsapp Number');
        }
    } else {
        // Display a message indicating that a new code can be generated after one minute
        alert('Please wait for one minute before generating a new code.');
    }
}

function generatePairingCode() {
    // Generate a random 6-digit code and convert it to an array of digits
    return Math.floor(100000 + Math.random() * 900000).toString().split('').map(Number);
}

function displayPairingCode(pairingCode) {
    // Get the pairing-code-container element
    const pairingCodeContainer = document.getElementById('pairing-code-container');

    // Clear any previous content
    pairingCodeContainer.innerHTML = '';

    // Display each digit in its own box
    pairingCode.forEach(digit => {
        const digitBox = document.createElement('div');
        digitBox.className = 'code-box';
        digitBox.textContent = digit;
        pairingCodeContainer.appendChild(digitBox);
    });
}

function startCountdown() {
    let secondsRemaining = 60;

    // Update countdown every second
    countdownInterval = setInterval(() => {
        document.getElementById('countdown').textContent = `Code valid for: ${secondsRemaining} seconds`;

        if (secondsRemaining === 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown').textContent = '';
        }

        secondsRemaining--;
    }, 1000);
}

// Example validation function (you might want to replace it with your actual validation logic)
function isValidPhoneNumber(phoneNumber) {
    // Simple example: Check if the phone number starts with a plus sign and has at least 10 digits
    return /^\+\d{10,}$/.test(phoneNumber);
}
