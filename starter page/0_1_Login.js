const signUp_btn = document.getElementById('signup');
const logIn_btn = document.getElementById('login');
const container = document.getElementById('container');

// Select the forms
const loginForm = document.querySelector('.log-in-container form');
const signupForm = document.querySelector('.sign-up-container form');

window.addEventListener('load', () => {
    document.body.classList.add('page-loaded');
});

// Sliding Animations
signUp_btn.addEventListener('click', () => container.classList.add('right-active'));
logIn_btn.addEventListener('click', () => container.classList.remove('right-active'));

// --- FORM SUBMISSION LOGIC ---

// Handle Login
loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page reload
    
    const email = loginForm.querySelector('input[type="email"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;

    if (email && password) {
        // Redirect to your next page
        window.location.href = "../tailwind/1Dashboard.html"; 
    } else {
        alert("Please fill in all fields to log in.");
    }
});

// Handle Signup
signupForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page reload
    
    const name = signupForm.querySelector('input[type="text"]').value;
    const email = signupForm.querySelector('input[type="email"]').value;
    const password = signupForm.querySelector('input[type="password"]').value;

    if (name && email && password) {
        // Redirect to your next page
        window.location.href = "../tailwind/1Dashboard.html"; 
    } else {
        alert("Please complete the registration form.");
    }
});
const checkMode = () => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('mode') === 'signup') {
        container.classList.add('right-active');
    } else {
        container.classList.remove('right-active');
    }
};

// Run immediately when script loads
checkMode();