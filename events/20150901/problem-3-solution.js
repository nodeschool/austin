"use strict";

function doubleAll(numbers) {
  // SOLUTION GOES HERE
  return numbers.map(function(num){ 
      return num * 2;
    });
    
}

module.exports = doubleAll;