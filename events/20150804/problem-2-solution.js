"use strict";

var request = require("request"),
    async = require("async");

// this could be parallel instead!
async.series({
    requestOne: function(seriesCallback) {
        request(process.argv[2], function(err, response, body) {
            if (err) {
                return seriesCallback(err);
            }

            return seriesCallback(null, body);
        });
    },
    requestTwo: function(seriesCallback) {
        request(process.argv[3], function(err, response, body) {
            if (err) {
                return seriesCallback(err);
            }

            return seriesCallback(null, body);
        });
    }
}, function(err, results) {
    if (err) {
        return console.error(err);
    }

    console.log(results);
});
