$( document ).ready(function() {
  function ticTacToe() {
    var cellArray = ['cell_0', 'cell_1', 'cell_2',
                      'cell_3', 'cell_4', 'cell_5',
                      'cell_6', 'cell_7', 'cell_8'];
    var winningConditions = [
       [0,1,2], [3,4,5], [6,7,8],//horizontal win
        [0,3,6], [1,4,7], [2,5,8],//vertical win
        [0,4,8], [2,4,6]//diagonal win
      ];
    //initialize gameboard
    var playerOne = true;
    $('.oPiece').hide(0);
    $('.xPiece').hide(0);
    ////mouseover color change
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
    $('.cellButton').click(function(e) {
      e.preventDefault();
      var cellNum = ($( this ).parent('.cell').attr('id'));
      var cellIndex = cellArray.indexOf(cellNum);
      if(playerOne){
        $( this ).siblings('.oPiece').show(200);
        cellArray[cellIndex] = "O";
      }
      else if (playerOne===false){
        $( this ).siblings('.xPiece').show(200);
        cellArray[cellIndex] = "X";
      }
      $( this ).hide();
      playerOne = !playerOne;
      var winner = getWinner();
      if (winner == "Player 1"){
        console.log("Player 1 Wins");
      }
      else if (winner == "Player 2"){
        console.log("Player 2 Wins")
      }
    });
    function getWinner(){
      var winner;
      for( var i = 0; i < winningConditions.length; i++){
        var p1Points = 0;
        var p2Points = 0;
        for(var j=0; j < winningConditions[i].length; j ++){
          if(cellArray[winningConditions[i][j]] == 'O'){
            p1Points += 1;
            if(p1Points == 3){
              winner = "Player 1";
            }
          }
          else if(cellArray[winningConditions[i][j]] == 'X'){
            p2Points += 1;
            console.log(p2Points);
            if(p2Points == 3){
              winner = "Player 2"
            }
          }
        }
      }
      return winner;
    }
  }
  ticTacToe();






});
