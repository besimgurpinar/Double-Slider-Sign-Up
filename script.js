const slider = document.querySelector('.slider');
const labels = Array.from(slider.querySelectorAll('label'));

labels.forEach((label) => {
  label.addEventListener('click', () => {
    labels.forEach((label) => {
      label.classList.remove('active');
    });

    label.classList.add('active');
  });
});

const form = document.querySelector('.form');
const submitButton = document.querySelector('.btn');

submitButton.addEventListener('click', () => {
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;

  // TODO: Send the username and password to the server

  if (username === "admin" && password === "password") {
    alert("Login successful!");
  } else {
    alert("Invalid username or password.");
  }
});