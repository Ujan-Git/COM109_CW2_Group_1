$(document).ready(function () {
  $('#contactForm').submit(function (e) {
    e.preventDefault();
    const firstName = $('input[name="firstName"]').val();
    alert(`Thanks, ${firstName}! Your message has been sent.`);
    $(this)[0].reset();
  });
});

const hamburger = document.querySelector('.hamburger');
const navmenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navmenu.classList.toggle('active');
})

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navmenu.classList.remove('active');
}));