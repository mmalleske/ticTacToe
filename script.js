$( document ).ready(function() {
//mouseover color change
  var clicked = false;
  var cellColor = "orange";
  $('.cell').mouseenter(function() {
    $( this ).children('a').css( "background-color", "#57c4d0" );
  });
  $('.cell').mouseleave(function() {
    $( this ).children('a').css( "background-color", cellColor );
  });
//click
  $('.cell').click(function(e) {
    e.preventDefault();
    clicked = true;
    //cellColor = "white";
    $( this ).children('a').hide(200);
    $( this ).append('<span class="oPiece" style="background-color: white; color:#57c4d0;  padding : 2px 10px; font-size: 40px; border: 3px solid #57c4d0; border-radius: 4px; text-align: center;">O</span>');
    $('.oPiece').css("background-color, #57c4d0");
  });



  function turnManager(){

  }
});
