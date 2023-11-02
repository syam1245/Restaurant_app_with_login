// Validation Functions
function validateUsername(username) {
  return username.trim() !== ""; // Check if the username is not empty
}

function validateEmail(email) {
  let emailRegex = /\S+@\S+\.\S+/; // Regular expression for email validation
  return emailRegex.test(email);
}

function validatePassword(password) {
  return password.length >= 8; // Password should be at least 8 characters long
}
