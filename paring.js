function hanleFormSubmit(event) {
    event.preventDefault();

    const phoneNumber=document.getElementById('phone-number-input').value;

    if (isValidPhoneNumber(phoneNumber)) {
        const paringCode = generateParingCode();

        savePairedDevice("Ndeleva");

        sendSessionIdToWhatsapp(phoneNumber,paringCode);

        alert('Paring Code Sent To Your Whatsapp');
    } else {
        alert('Invalid Whatsapp Number');
    }
}