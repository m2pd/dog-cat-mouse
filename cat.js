var Mouse = require("./Mouse")
function Cat(){
	this.stomash = [];
}
Cat.prototype.eat = function(animal){
	if (animal instanceof Mouse){
			this.stomash.push(Mouse)
	}else {
		throw  new Error('Cat can only eat Mouse !')
	}
}
module.exports = Cat; 