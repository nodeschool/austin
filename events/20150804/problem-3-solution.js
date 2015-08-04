"use strict";

var request = require("request"),
    async = require("async");

// way too tricky!
var array = process.argv.slice(2);

async.each(array, function(item, eachCallback) {
    request(item, function(err, response, body) {
        if (err) {
            return eachCallback(err);
        }

        // do nothing with the data, just move on to the next item
        return eachCallback(null);
    });
}, function(err) {
    if (err) {
        // note that this is expecting console LOG not ERROR (to compare)
        return console.log(err);
    }
});
