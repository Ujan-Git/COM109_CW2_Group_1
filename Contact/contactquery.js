$(document).ready(function () {

  $('#contactForm').submit(function (e) {
    e.preventDefault();
    const name = $('input[name="firstName"]').val();
    alert(`Thanks ${name}, your message has been sent!`);
    $(this)[0].reset();
  });
 $('#nav-contact').click(function () {
    $('#contact-section').removeClass('hidden');
  });
});