"use strict";
var prompt = require("sync-prompt").prompt;

function printBoard(board) {
  var
    i = 0,
    n = board.length;
  // keep in mind that this is poorly-written JavaScript code
  // we will learn not to use for loops in JavaScript
  for(i; i < n; i++) {
    console.log(board[i].join(""));
  }
}

function makeMove(current_board, player_mark) {
    var position = null,
        row = false,
        column = false;

    position = prompt("x y>");
    position = position.split(" ");
    position[0] = parseInt(position[0],10);
    position[1] = parseInt(position[1],10);

    row =(position[0] >= 1 && position[0] <= 3);
    column = (position[1] >= 1 && position[1] <= 3);

    if ( row && column && current_board[position[0]][position[1]] === "*"){
      current_board[position[0] - 1][position[1] - 1] = player_mark;
    }
}
// entry point for the game
function gameLoop() {
  var
    board = [ ["*", "*", "*"],
              ["*", "*", "*"],
              ["*", "*", "*"] ],
    xTurn = true,
    nickName1, nickName2, current_board;

    nickName1 = prompt("Nickname for player 1: ");

    nickName2 = prompt("Nickname for player 2: ");

  while(true) {
    console.log("This is the current state of the board:");
    printBoard(board);

    if(xTurn) {
      console.log("Place for " + nickName1);
      current_board = board;
      makeMove(board, "X");
      printBoard(board);
      console.log("curb");
      printBoard(current_board);
      if (current_board === board){
        console.log("Invalid move --- X!");
      }


    } else {
      console.log("Place for " + nickName2);
      current_board = board;
      makeMove(board, "X");
      if (current_board === board){
        console.log("Invalid move --- X!");
      }
    }

    xTurn = !xTurn;

    // this is blocking prompt
 }
}

gameLoop();
