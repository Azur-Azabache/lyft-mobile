$(document).ready(function() {
var $buttonBackward = $('#backward');
var $btnNext = $('#btnNext');
var $checkBox = $('#exampleCheck1');
var $inputs = $('.form-control');
//Evento para regresar de página
  $buttonBackward.on('click', function() {
     window.location.href = '../views/verify.html';
   });

//Evento para habilitar el boton NEXT (escribir primero los espacios en blanco y luego marcar el checkbox)
   $checkBox.on('change', function() {
     if($(this).is(':checked') && $inputs.val() !== '') {
       $btnNext.prop('disabled', false);
     }
   });
   $btnNext.on('click', function() {
      window.location.href = '../views/final.html';
    });

});
