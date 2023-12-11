// Define an empty dictionary to store accounts
const accounts = {};

// Function to validate password
function validatePassword(password) {
  return password.length >= 8;
}

// Function for user registration
function register(accounts) {
  const username = prompt("Enter a username:");

  if (accounts.hasOwnProperty(username)) {
    alert("Oops! Username already exists. Registration failed.");
    return;
  }

  const password = prompt("Enter a strong password (at least 8 characters):");

  if (!validatePassword(password)) {
    alert("Uh-oh! Password is too short. Registration failed.");
    return;
  }

  accounts[username] = password;
  alert("Registration Successful! Welcome aboard!");
}

// Function for user login
function login(accounts) {
  const username = prompt("Enter your username:");

  if (!accounts.hasOwnProperty(username)) {
    alert("Sorry, this username doesn't exist. Login failed.");
    return;
  }

  const password = prompt("Enter your password:");

  if (accounts[username] !== password) {
    alert("Wrong password. Login failed.");
    return;
  }

  alert("Login Successful! You're in!");
}

// Main program loop
while (true) {
  const choice = prompt("Choose an option:\n1. Register\n2. Login\n3. Quit");

  switch (choice) {
    case "1":
      register(accounts);
      break;
    case "2":
      login(accounts);
      break;
    case "3":
      alert("Goodbye! See you next time!");
      process.exit(0);
    default:
      alert("Invalid choice. Please choose again.");
  }
}