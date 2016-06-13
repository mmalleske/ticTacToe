Tic Tac Toe

I tried to keep everything pretty simple, relying primarily on jquery.
What was really helpful were the .hide and .show methods. I created a table
in which each cell contained and empty game piece, an X piece, and O piece.
Clicking on the cell would show an X or O piece depending on who's turn it is. 
By hiding the empty game piece (which receives the click event) I was able to 
cirumvent unbinding event listeners and made it also easier to reset the board by
just revealing and hiding the necessary elements.
What I want to work on more in the future is getting the footer to stick 
to the bottom of the view port and maybe come up with a more aesthetic way
to arrange the player scoreboards as the resolution changes. I also wanted to add
audio for background music and click events. 
