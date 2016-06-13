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
    var p1Wins = 0;
    var p2Wins = 0;
    $('.oPiece, .xPiece, #winnerBoard').hide(0);
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
//click cells
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
      getWinner();
      //updateScoreBoard(currentWinner);
    });
    //reset
    $('#resetButton').click(function(event) {
      event.preventDefault();
      playerOne = true;
      $('.oPiece, .xPiece, #winnerBoard').hide(0);
      $('.cellButton').show(100);
      cellArray = ['cell_0', 'cell_1', 'cell_2',
                      'cell_3', 'cell_4', 'cell_5',
                      'cell_6', 'cell_7', 'cell_8'];
      currentWinner = null;
      winner = null;
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
              p1Points = 0;
            }
          }
          else if(cellArray[winningConditions[i][j]] == 'X'){
            p2Points += 1;
            if(p2Points == 3){
              winner = "Player 2";
              p2Points = 0;
            }
          }
        }
      }
      if (winner == "Player 1"){
        $('#winnerBoard').html("Player 1 Wins!");
        $('.cellButton, .oPiece, .xPiece').hide(200);
        $('#winnerBoard').show(1000);
        p1Points = 0;
        p2Points = 0;
        // winner = null;
      }
      else if (winner == "Player 2"){
        $('#winnerBoard').html("Player 2 Wins!");
        $('.cellButton, .oPiece, .xPiece').hide(200);
        $('#winnerBoard').show(200);
        p1Points = 0;
        p2Points = 0;
        // winner = null;
      }
      updateScoreBoard(winner);
      winner = null;
      console.log(winner);
      //return winner;
    }
    function updateScoreBoard(winner){
      if (winner === "Player 1"){
        p1Wins ++;
        $('#scoreboardP1').children('.wins').html("Wins: " + p1Wins);
        $('#scoreboardP2').children('.losses').html("Losses: " + p1Wins);
      }
      if (winner === "Player 2"){
        p2Wins ++;
        $('#scoreboardP2').children('.wins').html("Wins: " + p2Wins);
        $('#scoreboardP1').children('.losses').html("Losses: " + p2Wins);
      }
    }
  }
  ticTacToe();
});
