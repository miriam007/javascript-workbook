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

const printStacks=()=> {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}
//Make the move-If move is valid(so you'll need is legal to run before this move can happen), pop() to remove it from the stack it's from. Then push() to add it to the end of the stack. Pop and push work with the end variable in the array, so you don't need to access it using length

const movePiece=(startStack, endStack)=> {
  let startPlace=stacks[startStack];
  let endPlace=stacks[endStack];
 
  
  if (isLegal(startPlace[startPlace.length-1], endPlace[endPlace.length-1])) {
    const startValue = startPlace.pop();
    return endPlace.push(startValue);
  } 
  
  
}
//Move valid?-Input is the numbers pulled from the startValue and endValue. Compare them. When the array is empty, it is undefines, which must be included as an option. It returns boolean values
//The test wants to use input for isLegal that target the array name from the stacks object, which equals a letter. How can I refactor this to allow for that input?
const isLegal=(startPlace, endPlace)=> {
 
  if(endPlace===undefined || startPlace < endPlace){
    return true;
  } else {
    return false;
  } 
}


//A win happens when either all the blocks are in the correct order in the B or C array. Since the isLegal function prevents moves that aren't allowed, only when there is a win will all blocks be found in the B or C array. So you can use length to test for the win. The length for the B or C stack should equal 4. 
const checkForWin=() => {

  if ((stacks.b.length === 4) || (stacks.c.length === 4)) {
    return 'You win!';
  }
}

//Reset function- printStacks is already a function that prints out stacks. stacks is the object of arrays. maybe redine stacks in here and run that in printStacks
const resetGame=(stacks)=> {
  if (checkForWin === true) {
    printStacks(stacks);
  }
}

const towersOfHanoi=(startStack, endStack)=> {
  if (checkForWin === true) {
    return 'You win'
  }
  movePiece(startStack, endStack);
  

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
