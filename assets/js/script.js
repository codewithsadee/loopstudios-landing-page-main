// navbar buttons variables
const hamburger = document.querySelector('#open-btn');
const closeBtn = document.querySelector('#close-btn');

// navbar variable
const navbarNav = document.querySelector('.navbar-nav');

// navbar toggle function
const navbarToggle = () => navbarNav.classList.toggle('active');

// added toggle function on navbar buttons
hamburger.addEventListener('click', navbarToggle);
closeBtn.addEventListener('click', navbarToggle);
