$(document).ready(function() {
var $buttonBackward = $('#backward');
var $resendCode = $('#resend');
var $btnNext = $('#btnNext');
var $input1 = $('#number1');
var $input2 = $('#number2');
var $input3 = $('#number3');
var $enter = $('#enter');
var randomNumber = localStorage.getItem("code");
var cellphone = localStorage.getItem("cellphone");
$enter.text('Enter the code send to '+ cellphone);

//Evento para regresar de página
$buttonBackward.on('click', function() {
   window.location.href = '../views/signup.html';
 });

//Evento para reenviar el código mostrado
$resendCode.on('click', function() {
  alert('Tu código es:  LAB-' + randomNumber);
});

//Evento para habilitar el boton NEXT
$input3.on('input', function() {
  var str = randomNumber.toString()
  if($input1.val() === str.charAt(0) && $input2.val() === str.charAt(1) && $input3.val() === str.charAt(2)) {
      $btnNext.prop('disabled', false);
       window.location.href = '../views/email.html';
  }
});
});
