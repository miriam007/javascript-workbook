'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//the board is an array of arrays, global variable
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];
//global variable as a string that starts the player turn at X
let playerTurn = 'X';

//switch the turn of the players from X to O
// const switchPlayer()=>(playerTurn === 'X') ? playerTurn === 'O' : playerTurn === 'X';
const switchPlayer=(row, column) =>{
  if (playerTurn ==='X') {
    playerTurn = 'O';
  } else {
    playerTurn = 'X';
  }
}

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

//check for valid user input (row and column can only be 0,1, or 2) and prevent overwritting input already on the board
const validUserInput=(row,column)=>{
  if ((row === '0' || row === '1' || row === '2') && (column === '0' || column === '1' || column === '2') && (board[row][column] === ' ')){
    return true;
  } else {
    return false;
  }
}

//all the horizonal ways to win, there are 3
const horizontalWin=()=> {
  if (board[0][0] === playerTurn && board[0][1] ===playerTurn && board[0][2] === playerTurn) {
    return true;
  } else if (board[1][0] ===playerTurn && board[1][1] ===playerTurn && board[1][2] === playerTurn) {
    return true;
  } else if (board[2][0] ===playerTurn && board[2][1] ===playerTurn && board[2][2] === playerTurn) {
    return true;
  } else {
    return false;
  }
}
//all the vertical ways to win, there are 3
const verticalWin=()=> {
  if (board[0][0] === playerTurn && board[1][0] === playerTurn && board[2][0] === playerTurn) {
    return true;
  } else if (board[0][1] === playerTurn && board[1][1] === playerTurn && board[2][1] === playerTurn) {
    return true;
  } else if (board[0][2] == playerTurn && board[1][2] === playerTurn && board[2][2] === playerTurn) {
    return true;
  } else {
    return false;
  }
}
//all the diagonal ways to win, there are only 2
const diagonalWin=()=> {
  if (board[0][0] === playerTurn && board[1][1] === playerTurn && board[2][2] === playerTurn) {
    return true;
  } else if (board[2][0] === playerTurn && board[1][1] === playerTurn && board[0][2] === playerTurn) {
    return true;
  } else {
    return false;
  }
}
//put all the ways to win as an if statement, console logging the way the win happened.
const checkForWin=()=> {
  if (horizontalWin()) {
    console.log('Horizontal Win!')
    return true;
  } else if (verticalWin()) {
    console.log('Vertical Win!')
    return true;
  } else if (diagonalWin()) {
    console.log('Diagonal Win!')
    return true;
  } else {
    return false;
  }
}


//reset the board to blank and put the start back at X
const reset=()=>{
  board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ];
  playerTurn = 'X';
}

//set turn to 0, then count each player's turn   
let turn=0;

//check for a tie. only 9 turns available to play the game. if no one wins, its a tie.
const tieGame=(turn)=>{
  if (turn === 9) {
    return true
  } else {
    return false
  }
}
//to use the tictactoe function, you will put in a number for the row and column, this will also call all the other functions inside of it. first, make sure the user's input is valid. if it is, then play the player's move and that counts as one turn. if you check for the win (which has horizontal, vertical, and diagonal wins inside it) and its true, then the win is announced, and the board is reset. if the input is valid and there is no winner, switch the player to the next one. if no one wins, and the players have taken 9 turns to fill up the board, its a tie. when its a tie, you reset the board. if the input is not valid (can't play over another player), then it says, invalid move
const ticTacToe=(row, column)=> {
  if (validUserInput(row, column)) {
    board[row][column]=playerTurn;
    turn++;
    if (checkForWin()) {
      reset()
  } else {
    switchPlayer(row, column);
  }
  if (tieGame(turn)){
    reset()
    console.log('Tie game. Play again.')
  }  
} else {
    console.log('Invalid Move')
  }
}

function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });

}



// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
