//Write a JavaScript program to display the current day and time.
const currentDate= new Date();
console.log(currentDate);
//Write a JavaScript program to convert a number to a string.
const num=8;
const numAsString= num.toString();
console.log(numAsString);
//Write a JavaScript program to convert a string to the number.
const thisString= "75cm";
const stringAsNum= parseInt(thisString, 10);
//Write a JavaScript program that takes in different datatypes and prints out whether they are a:
console.log(typeof true);
//expected output-Boolean
console.log(typeof null);
//expected output-Null
console.log(typeof num);
//expected output-Undefined
console.log(typeof 9);
//expected output-Number
console.log(typeof NaN);
//expected output-NaN
console.log(type of 'I am a string');
//expected output-String
//Write a JavaScript program that adds 2 numbers together.
const sumOfTwoNumbers= (num1, num2)=> {
  return num1 + num2;
}
console.log(sumOfTwoNumbers(1,20));
//Write a JavaScript program that runs only when 2 things are true.
if ((arg1 === true) && (arg2 === true)) => {
  return "both are true";
}
//Write a JavaScript program that runs when 1 of 2 things are true.
if ((arg1 === true) || (arg2 === true)) => {
  return "at least one is true";
}
//Write a JavaScript program that runs when both things are not true.
if ((arg1 !== true) && (arg2 !== true)) => {
  return "neither are true";
}