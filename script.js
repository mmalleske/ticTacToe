$( document ).ready(function() {
//mouseover color change
  $('.cell').mouseenter(function() {
    $( this ).css( "background-color", "#57c4d0" );
  });
  $('.cell').mouseleave(function() {
    $( this ).css( "background-color", "orange" );
  });
  // .on("mouseleave"(function() {
  //   var styles = {
  //     background-color: orange;
  //   }
  //   $( this ).css(styles);
  // });


  //click
  $('.cell').click(function(e) {
    e.preventDefault();
    $( this ).css( "background-color", "red" );
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
