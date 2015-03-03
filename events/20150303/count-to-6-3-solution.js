/**
 * Created by kearney on 3/3/15.
 */
var inputs = process.argv.slice(2);
//console.log(inputs);

var results = inputs.map(first => first[0]).reduce((out, first) => out + first);

var output = (`[${inputs}] becomes "${results}"`);



console.log(output)