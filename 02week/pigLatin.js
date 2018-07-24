'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {

  // Your code here
const word = userInput;
const vowelArray = ['a', 'e', 'i', 'o', 'u']; 
const vowelPositionA = word.indexOf('a');
const vowelPositionE = word.indexOf('e');
const vowelPositionI = word.indexOf('i');
const vowelPositionO = word.indexOf('o');
const vowelPositionU = word.indexOf('u');
console.log(vowelPositionU)
//findTheVowel should equal a number
// const cutTheWord = word.slice(vowelPosition)
if (typeof word !== 'string') {
  return 'Please input a string.'
//first testing if the input is a string
} else if (vowelPositionA === 0 || vowelPositionE === 0 || vowelPositionI ===0 || vowelPositionO === 0 || vowelPositionU == 0) {
  return word + 'ay';
//next test if the word starts with a vowel
} else if () {

}
}


function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
