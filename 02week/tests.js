'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const isInputValid= (hand1, hand2)=> {
  if (((hand1 === 'rock') || (hand1 === 'paper') || (hand1 === 'scissors')) && ((hand2 ===    'rock') || (hand2 === 'paper') || (hand2 === 'scissors'))) {
    return true;
  }

function rockPaperScissors(inputHand1, inputHand2) {
 const hand1 = inputHand1.trim().toLowerCase()
 const hand2 = inputHand2.trim().toLowerCase()
 const inputCheck=isInputValid(hand1, hand2)

 // Write code here
 if (inputCheck !== true) {
   return 'Please input rock, paper, or scissors';
 } else if (hand1 === hand2) {
    return 'Tie game! Play again!'
  } else if (hand1 === 'rock' && hand2 === 'paper' || hand1 === 'paper' && hand2 === 'scissors' || hand1 === 'scissors' && hand2 === 'rock') {
    return 'Hand two wins!';
  } else {
    return 'Hand one wins!';
  } 
  

}

function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "Tie game! Play again!");
      assert.equal(rockPaperScissors('paper', 'paper'), "Tie game! Play again!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "Tie game! Play again!");
    });
    it('should detect hand 1 won', () => {
      assert.equal(rockPaperScissors('paper', 'rock'), "Hand one wins!");
      assert.equal(rockPaperScissors('scissors', 'paper'), "Hand one wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should detect hand 2 won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('scissors', 'rock'), "Hand two wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
    it('should only allow input to be rock, paper, or scissors', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
  });
} else {

  getPrompt();

}
