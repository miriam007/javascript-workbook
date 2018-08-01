'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
 //first function to verify validity of the input by user, should be a string, using typeof, no numbers allowed, no symbols allowed (maybe just list the rest of the alphabet as the only things that can be input)
  //second function takes the string word and uses lowercase() and trim() to get the word in the basic form
  //these two functions will be called inside the pigLatin function
  //another function to make the pig latin work-first if condition-use indexOf(0) to check if the arrayed word starts with a vowel. if it is, then add "yay" to the end of the array. 
  //the next part of the condition, you will loop through the word to find the vowel, then add "ay" to the word. 

  //First function returns true if word is a string
const isInputString = (word) => {
 if (typeof word === 'string') {
   return true;
 } else {
   return false;
 }
}
//second function then takes the string word and trims and lowercases it and spits it out
const validWord= (word) => {
  word.trim().toLowerCase();
  return word;
}
//third function creates the pig Latin word, maybe change includes later since its not compatible with EI
const makePiggy= (word) => {
  const vowelArr = ['a', 'e', 'i', 'o', 'u'];
for (let i=0; i < word.length; i++) {
  if (vowelArr.includes(word[0])) {
    return word + "yay";
  } else if (vowelArr.includes(word[i])) {
    const beforeVowel= word.substring(0,i);
    const afterVowel= word.substring(i);
    return afterVowel + beforeVowel + 'ay';
  }
}
}
//pig latin function runs and calls the other functions inside it
function pigLatin(word) {
const stringCheck= isInputString(word);
 if (stringCheck === true) {
   const prepareWord= validWord(word);
   const pigify= makePiggy(prepareWord);
   return pigify;
 } else {
   return 'Please input a word';
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
