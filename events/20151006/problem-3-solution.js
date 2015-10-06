"use strict";

var _ = require("lodash");

module.exports = function(collection) {
    return _.forEach(collection, function(value, index, collection) {
        var size;

        if (value.population > 1) {
            size = "big";
        } else if (value.population > 0.5 && value.population < 1) {
            size = "med";
        } else {
            size = "small";
        }

        value.size = size;
        collection[index] = value;
    });
};
