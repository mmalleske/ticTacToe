$( document ).ready(function() {
//mouseover color change
  var playerOne = true;
  $('.oPiece').hide(0);
  $('.xPiece').hide(0);
  $('.cell').mouseenter(function() {
    if (playerOne){
      $( this ).children('a').css( "background-color", "#57c4d0" );
    }
    else{
      $( this ).children('a').css( "background-color", "#990099" );
    }
  });
  $('.cell').mouseleave(function() {
    $( this ).children('a').css( "background-color", "orange" );
  });
//click
  $('.cell').click(function(e) {
    e.preventDefault();
    $( this ).children('a').hide();
    if(playerOne){
      $( this ).children('.oPiece').show(200);
    }
    else if (playerOne===false){
      $( this ).children('.xPiece').show(200);
    }
    $( this ).unbind();
    playerOne = !playerOne;
  });



  function turnManager(){

  }
});
