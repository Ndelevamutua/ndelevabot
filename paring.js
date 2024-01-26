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

            // Generate a pairing code as an array of characters (digits and uppercase letters)
            const pairingCode = generatePairingCode();

            // Display each character in its own box
            displayPairingCode(pairingCode);

            // Update the last generated code time
            lastGeneratedCodeTime = currentTime;

            // Start the countdown
            startCountdown();

            // Show the pairing code container
            document.getElementById('pairing-code-container').style.display = 'flex';

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
    // Generate a random 8-character code (digits and uppercase letters)
    const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let pairingCode = '';

    for (let i = 0; i < 8; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        pairingCode += characters.charAt(randomIndex);
    }

    return pairingCode.split('');
}

function displayPairingCode(pairingCode) {
    // Get the pairing-code-container element
    const pairingCodeContainer = document.getElementById('pairing-code-container');

    // Clear any previous content
    pairingCodeContainer.innerHTML = '';

    // Display each character in its own box
    pairingCode.forEach(character => {
        const characterBox = document.createElement('div');
        characterBox.className = 'code-box';
        characterBox.textContent = character;
        pairingCodeContainer.appendChild(characterBox);
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

            // Hide the pairing code container after the countdown expires
            document.getElementById('pairing-code-container').style.display = 'none';
        }

        secondsRemaining--;
    }, 1000);
}

// Example validation function (you might want to replace it with your actual validation logic)
function isValidPhoneNumber(phoneNumber) {
    // Simple example: Check if the phone number starts with a plus sign and has at least 10 digits
    return /^\+\d{10,}$/.test(phoneNumber);
}
