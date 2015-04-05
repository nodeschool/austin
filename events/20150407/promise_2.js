var q = require('q');
var defer = q.defer();

function printError (err) {
  console.log(err.message); 
}

defer.promise.then(null, printError);
setTimeout(defer.reject, 300, new Error("REJECTED!"));