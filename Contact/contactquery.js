$(document).ready(function () {
  $('#contactForm').submit(function (e) {
    e.preventDefault();
    const firstName = $('input[name="firstName"]').val();
    alert(`Thanks, ${firstName}! Your message has been sent.`);
    $(this)[0].reset();
  });
});