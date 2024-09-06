document.addEventListener("DOMContentLoaded", () => {
    // Login Form Validation
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            if (!validateEmail(email)) {
                alert("Please enter a valid email address.");
            } else if (password.length < 6) {
                alert("Password must be at least 6 characters long.");
            } else {
                // If everything is valid
                alert("Login successful");
                loginForm.submit();
            }
        });
    }

    // Signup Form Validation
    const signupForm = document.getElementById("signupForm");
    if (signupForm) {
        signupForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            if (name.trim() === "") {
                alert("Full name is required.");
            } else if (!validateEmail(email)) {
                alert("Please enter a valid email address.");
            } else if (password.length < 6) {
                alert("Password must be at least 6 characters long.");
            } else {
                // If everything is valid
                alert("Sign up successful");
                signupForm.submit();
            }
        });
    }

    // Function to validate email format
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
