var superheroes = require("superheroes");
var supervillains = require("supervillains");

var mySuperheroName = superheroes.random();
var mySupervillainName = supervillains.random();

console.log("My Superhero name is: " + mySuperheroName);
console.log("My Supervillain name is: " + mySupervillainName);

//in terminal from the "Intro to Node" folder, 
//run "node index.js" to return a superhero name