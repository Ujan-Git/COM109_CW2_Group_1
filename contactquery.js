$(document).ready(function () {
  let isSignUp = false;

  // Toggle between login and signup
  $(document).on('click', '#toggleForm', function (e) {
    e.preventDefault();
    isSignUp = !isSignUp;

    if (isSignUp) {
      $('#formTitle').text('Sign Up');
      $('#submitBtn').text('Sign Up');
      $('.toggle-msg').html('Already have an account? <a href="#" id="toggleForm">Log In</a>');
      $('#extraFields').slideDown();
    } else {
      $('#formTitle').text('Login');
      $('#submitBtn').text('Log In');
      $('.toggle-msg').html('Don\'t have an account? <a href="#" id="toggleForm">Sign Up</a>');
      $('#extraFields').slideUp();
    }
  });

  // Handle login/signup form
  $('#authForm').submit(function (e) {
    e.preventDefault();
    const email = $('#email').val();

    if (isSignUp) {
      const first = $('#firstName').val();
      const last = $('#lastName').val();
      const phone = $('#phone').val();
      alert(`Signed up successfully!\nName: ${first} ${last}\nPhone: ${phone}\nEmail: ${email}`);
    } else {
      alert(`Logged in as ${email}`);
    }

    $(this)[0].reset();
  });

  // Handle contact form
  $('#contactForm').submit(function (e) {
    e.preventDefault();
    const name = $('input[name="firstName"]').val();
    alert(`Thanks ${name}, your message has been sent!`);
    $(this)[0].reset();
  });

  // Show login section
  $('#nav-login').click(function () {
    $('#login-section').removeClass('hidden');
    $('#contact-section').addClass('hidden');
  });

  // Show contact section
  $('#nav-contact').click(function () {
    $('#contact-section').removeClass('hidden');
    $('#login-section').addClass('hidden');
  });

  // Default view
  $('#login-section').removeClass('hidden');
  $('#contact-section').addClass('hidden');
});
