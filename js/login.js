$(document).ready(function() {
  var $buttonBackward = $('#backward');
  var $inputs = $('.form-control');
  var $input1 = $('#input1');
  var $input2 = $('#input2');
  var $btnNext = $('#btnNext');
  //Evento para regresar de página
  $buttonBackward.on('click', function() {
    window.location.href = '../views/register.html';
  });
  //Evento para habilitar el boton NEXT
  $inputs.on('input', function() {
    if ($input1.val() !== '' && $input2.val() !== '') {
      $btnNext.prop('disabled', false);
    }
  });
  //Evento para boton next
  $btnNext.on('click', function() {
    window.location.href = '../views/final.html';
  });
});
