document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (!email || !password) {
        errorMessage.textContent = "Please enter both email and password.";
        return;
    }

    // Mock authentication check
    if (email === "user@netflix.com" && password === "password123") {
        alert("Login successful! Welcome to Netflix.");
    } else {
        errorMessage.textContent = "Incorrect email or password.";
    }
});
