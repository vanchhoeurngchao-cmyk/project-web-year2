const signUp_btn = document.getElementById('signup');
const logIn_btn = document.getElementById('login');
const container = document.getElementById('container');

const loginForm = document.querySelector('.log-in-container form');
const signupForm = document.querySelector('.sign-up-container form');

window.addEventListener('load', () => {
    document.body.classList.add('page-loaded');
});

signUp_btn.addEventListener('click', () => container.classList.add('right-active'));
logIn_btn.addEventListener('click', () => container.classList.remove('right-active'));


const checkMode = () => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('mode') === 'signup') {
        container.classList.add('right-active');
    } else {
        container.classList.remove('right-active');
    }
};

checkMode();

loginForm.addEventListener('submit', (e) => {
    
    const email = loginForm.querySelector('input[type="email"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;

    if (email && password) {
        window.location.href = "../main/html/1Dashboard.html"; 
    } else {
        alert("Please fill in all fields to log in.");
    }
});

signupForm.addEventListener('submit', (e) => {
    
    const name = signupForm.querySelector('input[type="text"]').value;
    const email = signupForm.querySelector('input[type="email"]').value;
    const password = signupForm.querySelector('input[type="password"]').value;

    if (name && email && password) {
        window.location.href = "../main/html/1Dashboard.html"; 
    } else {
        alert("Please complete the registration form.");
    }
});