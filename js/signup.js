$(document).ready(function() {
var $phone = $('#phone');
var $next = $('#next');

function isNumber() {
      if($phone.val().length === 2) {
          $next.prop('disabled', false);
     }
   }
   isNumber();
  });
