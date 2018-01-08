$(document).ready(function() {
var $numberPhone = $('#phone');
var $buttonNext = $('#next');
var $buttonBackward = $('#backward');
var randomNumber = parseInt(Math.random()*1000);
localStorage.setItem("code", randomNumber);

//Evento para habilitar el botón Next
 $numberPhone.on('input', function isNumber() {
   localStorage.setItem("cellphone", $numberPhone.val());
       if($(this).val().length >= 9) {
           $buttonNext.prop('disabled', false);
      }
    });
//Evento para cuando haces click en Next
$buttonNext.on('click', function() {
   alert('Tu código es: LAB-' + randomNumber);
   window.location.href = '../views/verify.html';
 });

//Evento para cuando se desea retroceder
$buttonBackward.on('click', function() {
   window.location.href = '../views/verify.html';
 });

  });
