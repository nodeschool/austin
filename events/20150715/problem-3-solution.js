var uniquely = require("./uniquely.js");

var input;

// using the browser's "prompt", pull in a string
input = prompt("enter a string");

// grab only the unique elements from the string
input = uniquely(input);

console.log(input);
