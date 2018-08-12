'use strict';
// for loop
// Use a for loop to console.log each item in the array carsInReverse.
const carsInReverse=['Ford', 'Audi', 'Toyota', 'Volvo', 'Honda'];
for (i=0; i < carsInReverse.length; i++) {
    console.log(carsInReverse[i])
  }
// for...in loop
// Create an object (an array with keys and values) called persons with the following data:
// firstName: "Jane"
// lastName: "Doe"
// birthDate: "Jan 5, 1925"
// gender: "female"
const persons= {
    firstName: 'Jane',
    lastName: 'Doe',
    birthDate: 'Jan 5, 1925',
    gender: 'female'
};
// Use a for...in loop to console.log each key.
for (let x in persons) {
    console.log(x)
  }
// Then use a for...in loop and if state to console.log the value associated with the key birthDate.
for (let x in persons) {
    if (x === 'birthDate') {
    console.log(persons[x])
    } 
  }
// while loop
// Use a for loop to console.log the numbers 1 to 1000.
let i=0;
while (i <= 1000) {
    console.log (i++)
}
// do...while loop
// Use a do...while loop to console.log the numbers from 1 to 1000.
let i=0;
do {
  console.log(i)
  i++
 } while (i <= 1000);
// When is a for loop better than a while loop?
//We know how many iterators we are going through with a for loop. In a while loop, you don't know how many iterators you need. 
// How is the readability of the code affected? 
// In a for loop, all three parts (initializer, test condition, and updater) are written together in a single line (called an iteration statement), in a while, they're scattered at different places. This makes a for-loop more readable than a while-loop.
// What is the difference between a for loop and a for...in loop?
 //A for...in loop loops through the properties of an object. 
//  for (variable in object) { ...
//  }
 //A for loop loops through a block of code numerous times. It is better to use a for loop for arrays where index order is important
 //for (i=0; i < array.length; i++) {...
 //}
// What is the difference between a while loop and a do...while loop?
//A do...while loop loops through a block of code first without checking if the condition is true. Then it keeps looping though as long as the condition is met. A while loop loops through a block of code when the condition is true. It stops running when the condition is false.