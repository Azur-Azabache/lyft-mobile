$(document).ready(function() {
var $buttonBackward = $('#backward');

//Evento para regresar de página
  $buttonBackward.on('click', function() {
     window.location.href = '../views/verify.html';
   });
   
});
