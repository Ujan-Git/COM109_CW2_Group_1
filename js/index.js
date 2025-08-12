$(document).ready(function() {
    // Smooth scrolling logic
    $("a[href^='#']").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });

    // Hamburger menu toggle logic
    $('.hamburger-menu').click(function() {
        $('.nav-menu').toggleClass('active');
    });
});