var chalk = require('chalk')
function Dog(name){
	this.name = name;
	this.stomash =[];
}
Dog.prototype.eat = function(cat){
	this.stomash.push(cat);
};
Dog.prototype.sayHi = function(){
	console.log('Hi ,im Dog. My name is ' + chalk.red(this.name));

};
module.exports = Dog; 