$(document).ready(function() {
  setTimeout(function() {
    window.location.href = '../views/signup.html';
  }, 4000);
  var $signUp = $('#signup');
  var $login = $('#login');
  // Al hacer click en el botón sign up
  $signUp.on('click', function() {
    window.location.href = '../views/signup.html'
  });
  // Al hacer click en el botón login
  $login.on('click', function() {
    window.location.href = '../views/login.html'
  });
});
