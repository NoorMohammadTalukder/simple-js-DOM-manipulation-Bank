document.getElementById("login-submit").addEventListener("click", function() {
    // getting mail
    const emailField = document.getElementById("user-email");
    const userEmail = emailField.value;
    console.log(userEmail);

    // getting password
    const passwordField = document.getElementById("user-password");
    const userPassword = passwordField.value;
    console.log(userPassword);

    if (userEmail == "abc@gmail.com" && userPassword == "123456") {
        window.location.href = "banking.html";
    }
})