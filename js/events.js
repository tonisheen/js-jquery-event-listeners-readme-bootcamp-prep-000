//define functions here
function getIt(){
  $('p').on('click', function() {alert('Hey!'); return; });
}

function frameIt(){
  $('img').on('load', function() {this.setClass('tasty'); return;} );
}

function pressIt(){
  $('input')
}

$(document).ready(function(){

// call functions here

});
