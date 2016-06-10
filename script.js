$( document ).ready(function() {
//mouseover color change
  var clicked = false;
  $('.oPiece').hide(0);
  $('.cell').mouseenter(function() {
    $( this ).children('a').css( "background-color", "#57c4d0" );
  });
  $('.cell').mouseleave(function() {
    $( this ).children('a').css( "background-color", "cellColor" );
  });
//click
  $('.cell').click(function(e) {
    e.preventDefault();
    clicked = true;
    $( this ).children('a').hide(200);
    $( this ).children('span').show(200);
    $('.oPiece').css("background-color, #57c4d0");
  });



  function turnManager(){

  }
});
