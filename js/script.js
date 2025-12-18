const navbarNav = document.querySelector('.navbar-nav');
const hamburger = document.querySelector('#hamburger-menu');

// buka / tutup menu
hamburger.addEventListener('click', () => {
    navbarNav.classList.toggle('active');
});

// klik di luar menu untuk menutup
document.addEventListener('click', function(e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});
