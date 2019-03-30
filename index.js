var Cat = require('./Cat');
var Mouse = require("./Mouse");
var Dog = require("./Dog");

var mouse = new Mouse('Tom');
var cat = new Cat('Mickey');
var dog = new Dog();

try {
	cat.eat(dog);
} catch(error) {
	
	console.log("Error while cat eat not mouse");
}

console.log(cat);