/**
 * Created by kearney on 3/2/15.
 */
var person = process.argv[2];

var output = `Hello, ${person}!
Your name lowercased is "${person.toLocaleLowerCase()}".`;

console.log(output)