function showPassword() {
    var passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}

function autoUpperCase(inputField) {
    inputField.value = inputField.value.toUpperCase();
}

function forgotPassword() {
    var inputPassword = prompt("Enter dndeleva@gmail.com as your email:");

    var correctPassword = "dndeleva@gmail.com";

    if (inputPassword === correctPassword) {
        alert("Thank You for loging In.");

    window.location.href = "main.html";
    } else {
    alert("Invalid input. Please try again.");
    }

}

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (authenticateUser(email, password)) {
        alert("Thank You for loging In.");

        window.location.href = "main.html";
    } else {
        alert("Invalid Logins. Please try again.");
    }
});

function authenticateUser(email, password) {
    var validEmail = "dndeleva@gmail.com";
    var validPassword = "Ab5/64257/23";

   return email === validEmail && password === validPassword;
}