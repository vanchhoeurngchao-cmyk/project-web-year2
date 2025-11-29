const signUp_btn = document.getElementById('signup');
const logIn_btn = document.getElementById('login');
const container = document.getElementById('container');

window.addEventListener('load', () => {
        document.body.classList.add('page-loaded');
});

signUp_btn.addEventListener('click', ()=> container.classList.add('right-active'));
logIn_btn.addEventListener('click', ()=> container.classList.remove('right-active'));

const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('mode') === 'signup') {
    container.classList.add('right-active');
}