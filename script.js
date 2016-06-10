$( document ).ready(function() {
//mouseover color change
  $('.cell').mouseover(function() {
    $( this ).css( "background-color", "#57c4d0" );
  })
  $('.cell').mouseleave(function() {
    debugger
    $( this ).css( "background-color", "#orange" );
  });
  $('.cell').click(function(e) {
    e.preventDefault();
    $( this ).css( "background-color", "#57c4d0" );
  });

});
// $( "p" ).on( "mouseenter", function() {
//     $( this ).css("background-color": "yellow");
//   })
//   .on("mouseleave", function() {
//     var styles = {
//       backgroundColor : "#ddd",
//       fontWeight: ""
//     };
//     ??? ---> $( this ).css( styles );
//   });
