//define functions here
function getIt(){
  $('p').on('click', function() { 
    alert('Hey!');
    return;
  });
}

function frameIt(){
  $('img').on('load', function() {
    $('img').setClass('tasty');
    return;
  });
}

function pressIt(){
  $('input[type="text"]').on('keydown', function(key) {
    if (key.which == )
  });
}

$(document).ready(function(){

// call functions here

});
