'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//stacks is an object with arrays
let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}
//Make the move-If move is valid(so you'll need is legal to run first), pop() to remove it where it's from. Then push() to add it to the end of the row. 
//Choose a number to move. Use access an array item function to the arrayName[0] to move the numbers from the rows
const movePiece=(startStack, endStack)=> {
  let startMove=stacks[startStack].pop();
  stacks[endStack].push(startMove);
  
}
//Move valid?-Use index of the array to write an if statement about valid moves? Or maybe it needs to be an object with a value attached to the numbers inside of the array?
function isLegal() {
  
  
}



//Check for win -You'll use the length - 1 to first target the correct array inside the array. Make const for the different lengths to not alter the original array.
//The second part of the arrays video loops through arrays to see if they match. Use this to check for win. Use the. Array.forEach(item, index) function.
function checkForWin() {
  // Your code here

}

function towersOfHanoi(startStack, endStack) {
  // Your code here
  movePiece(startStack, endStack)
  

}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
