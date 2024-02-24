// JavaScript functions for registration and login
function registerUser(event) {
    event.preventDefault();
    // Get form values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Create an object with registration data
    const userData = {
        username: username,
        password: password
    };

    // Save registration data to local storage
    saveUserData(userData);
    console.log('Registration successful:', userData);

    // Display user profile
    displayUserProfile(username);
}

function saveUserData(userData) {
    // Get existing user data from local storage or initialize empty array
    let usersData = localStorage.getItem('usersData');
    usersData = usersData ? JSON.parse(usersData) : [];

    // Add new user data to the array
    usersData.push(userData);

    // Save updated user data back to local storage
    localStorage.setItem('usersData', JSON.stringify(usersData));
}

function displayUserProfile(username) {
    const userProfileDiv = document.getElementById('userProfile');
    userProfileDiv.textContent = username.charAt(0).toUpperCase(); // Display first letter of username
}
