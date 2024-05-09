const { delimiter } = require("path");

let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().

console.log(str.split()); // converts string into an array

console.log(str.split('e')); // doesn't print what is declared in the parenthesis

console.log(str.split(' ')); // singles out every word

console.log(str.split('')); //singles out every letter


//2) Use the join method on the array to identify the purpose of the parameter inside the ().

console.log(arr.join()); // converts array int a string

console.log(arr.join('a')); // adds what is declared instead of commas to the converted string

console.log(arr.join(' ')); // removes the commas from the string

console.log(arr.join('')); // removes spaces and commas from the string

//3) Do split or join change the original string/array? They do nto change them

console.log(str);
console.log(arr);

//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";

console.log(cargoHold.split(',').sort().join(','));



