"use strict";

var _ = require("lodash");

module.exports = function(collection) {
    return _.sortBy(collection, function(elem) {
        return -elem.quantity;
    });
};
