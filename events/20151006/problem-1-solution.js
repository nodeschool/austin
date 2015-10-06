"use strict";

var _ = require("lodash");

module.exports = function(list) {
    return _.where(list, {
        active: true
    });
};
