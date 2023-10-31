const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Check if the user is registered (use your own logic)
    if (isUserRegistered(email, password)) {
        // User is registered, redirect to index.html
        window.location.href = 'index.html';
    } else {
        // User is not registered, stay on the login page or show an error message
        alert('Invalid login credentials. Please sign up or try again.');
    }
});

// Function to check if the user is registered (replace with your own logic)
function isUserRegistered(email, password) {
    // Check if the email and password exist in your database or local storage
    // You can use local storage for this demonstration, but in a real application, use a secure server for user data storage
    const userData = localStorage.getItem(email);

    if (userData) {
        // User exists, validate the password (you should hash and salt passwords in a real application)
        const storedPassword = JSON.parse(userData).password;

        if (password === storedPassword) {
            return true; // User is registered
        }
    }

    return false; // User is not registered
}
