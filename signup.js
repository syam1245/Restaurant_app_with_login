const signupForm = document.querySelector('form');

signupForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Store user data in local storage (for demonstration purposes)
    // In a real application, you would use a server and database to store user data securely
    localStorage.setItem(email, JSON.stringify({ name, password }));

    // After signing up, redirect to the login page
    window.location.href = 'login.html';
});
