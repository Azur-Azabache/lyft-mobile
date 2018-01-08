$(document).ready(function() {
  var $buttonBackward = $('#backward');
  var $btnNext = $('#btnNext');
  var $checkBox = $('#exampleCheck1');
  var $input1 = $('#input1');
  var $input2 = $('#input2');
  var $input3 = $('#input3');
  //Evento para regresar de página
  $buttonBackward.on('click', function() {
    window.location.href = '../views/verify.html';
  });

  //Evento para habilitar el boton NEXT (escribir primero los espacios en blanco y luego marcar el checkbox)
  $checkBox.on('click', function() {
    if ($(this).is(':checked') && $input1.val() !== '' && $input2.val() !== '' && $input3.val() !== '') {
      $btnNext.prop('disabled', false);
    }
  });
  //Evento para boton next
  $btnNext.on('click', function() {
    window.location.href = '../views/final.html';
  });
});
