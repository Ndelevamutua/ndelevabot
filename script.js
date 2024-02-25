document.addEventListener("DOMContentLoaded", function() {
    var introVideo = document.getElementById("introVideo");
    var loginContainer = document.querySelector(".login-container");

    introVideo.addEventListener("ended", function() {
        introVideo.style.display = "none";
        loginContainer.style.display = "block";
    });

    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault();
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        if (authenticateUser(email, password)) {
            alert("Thank You for logging In.");
            window.location.href = "main.html"; // Redirect to main page after successful login
        } else {
            alert("Invalid Logins. Please try again.");
        }
    });
});

function authenticateUser(email, password) {
    var validEmail = "dndeleva@gmail.com";
    var validPassword = "Ab5/64257/23";

    return email === validEmail && password === validPassword;
}
