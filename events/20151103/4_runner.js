/**
 * Use this to test the bunyan logging.
 * 
 * install bunyan `npm install --global bunyan`
 * install bunyan locally 'npm install bunyan'
 * add logging to your app using this line:
 *    log.info({value : value}, "function name goes here");
 * 
 * run the code: `node 4_runner.js 4_.js | bunyan`
 */

var resolve = require("path").resolve;

var bunyan = require("bunyan");
var log = bunyan.createLogger({name : "sample"});

var scenario = require(resolve(process.cwd(), process.argv[2]));
scenario(log, function (value) {
  log.info("value at finish is", value);
});