"use strict";

var fs = require("fs"),
    request = require("request"),
    async = require("async");

async.waterfall([
    function(waterfallCallback) {
        fs.readFile(process.argv[2], function(err, data) {
            if (err) {
                return waterfallCallback(err);
            }

            return waterfallCallback(null, data.toString());
        });
    },
    function(data, waterfallCallback) {
        request(data, function(err, response, body) {
            if (err) {
                return waterfallCallback(err);
            }

            return waterfallCallback(null, body);
        });
    }
], function(err, result) {
    if (err) {
        return console.error(err);
    }

    console.log(result);
});
