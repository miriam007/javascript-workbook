//Corrections to datatypes
//Write a JavaScript program to display the current day and time.
const currentDate= (date) => {
	return new Date();
}

//Write a JavaScript program to convert a number to a string.
const numAsString= (num) =>{
	return num.toString();
}

//Write a JavaScript program to convert a string to the number.
const stringAsNum= (thisString)=> {
	return parseInt(thisString, 10);
}

//Write a JavaScript program that takes in different datatypes and prints out whether they are a:
const whatDataType= (input) => {
	return (typeof input);
}

//Write a JavaScript program that adds 2 numbers together.
const sumOfTwoNumbers= (num1, num2)=> {
  return num1 + num2;
}

//Write a JavaScript program that runs only when 2 things are true.
const twoThingsTrue= (arg1, arg2) => {
if ((arg1 === true) && (arg2 === true)) => {
    return "Both are true";
} else {
	return "Both are not true";
 }
}

//Write a JavaScript program that runs when 1 of 2 things are true.
const atLeastOneIsTrue= (arg1, arg2)=> {
if ((arg1 === true) || (arg2 === true)) => {
  	return "At least one is true";
} else {
	return "Neither is true";
 }
}

//Write a JavaScript program that runs when both things are not true.
const bothNotTrue= (arg1, arg2) => {
if ((arg1 !== true) && (arg2 !== true)) => {
 	return "Both are not true";
} else {
	return false;
 }
}