let forms = document.querySelector('.wrapper-form');
let overlays = document.querySelector('.wrapper-overlay');
let signupForm = document.querySelector('.signup-form');
let loginForm = document.querySelector('.login-form');
let signupOverlay = document.querySelector('.signup-overlay');
let loginOverlay = document.querySelector('.login-overlay');

let loginBtn = document.querySelector('.login-btn');
let signupBtn = document.querySelector('.signup-btn');

signupBtn.addEventListener('click', function () {
    forms.style.transform = "translateX(-100%)";
    overlays.style.transform = "translateX(100%)";

    loginForm.classList.remove('active');
    signupForm.classList.add('active');

    signupOverlay.classList.remove('active');
    loginOverlay.classList.add('active');
});

loginBtn.addEventListener('click', function () {
    forms.style.transform = "translateX(0)";
    overlays.style.transform = "translateX(0)";

    loginForm.classList.add('active');
    signupForm.classList.remove('active');

    signupOverlay.classList.add('active');
    loginOverlay.classList.remove('active');
});