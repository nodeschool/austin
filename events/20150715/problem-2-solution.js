var uniq = require("uniq");

var input;

// using the browser's "prompt", pull in a string
input = prompt("enter a string");

// split the input into an array
input = input.split(",");

// grab only the unique elements from the array
input = uniq(input);

console.log(input);
