// scenario.js
var fs = require("fs");

var peach = function (obj) {
  // trace the message "traced"
  console.trace("traced")

  // dump obj to stdout
  console.log(obj);
};

var bowser = function (callback) {
  fs.readFile(process.argv[2], {encoding : "utf8"}, callback);
};

var koopa = function (error, file) {
  // handle error by printing something to stderr
  if (error) {
	  console.error(JSON.stringify(error));
  }`	NaN						1`	`	``

  peach(JSON.parse(file));
};

bowser(koopa);