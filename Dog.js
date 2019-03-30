function Dog(name){
	this.name = name;
	this.stomash =[];
}
Dog.prototype.eat = function(cat){
	this.stomash.push(cat);
};
Dog.prototype.sayHi = function(){
	console.log('Hi !im Dog' + chalk.red(this.name));

};
module.exports = Dog;