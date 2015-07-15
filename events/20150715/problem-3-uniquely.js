var uniq = require("uniq");

module.exports = function(input) {
    // split the input into an array
    input = input.split(",");

    // return only the unique elements from the array
    return uniq(input);
};
