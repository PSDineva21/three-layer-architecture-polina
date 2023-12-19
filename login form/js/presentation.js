function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const resultElement = document.getElementById('result');

  if (username === 'user' && password === 'pass') {
    resultElement.textContent = 'Login successful!';
  } else {
    resultElement.textContent = 'Login failed. Please check your username and password.';
  }
}