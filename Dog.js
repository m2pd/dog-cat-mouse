function Dog(){
	this.stomash =[];
}
Dog.prototype.eat = function(cat){
	this.stomash.push(cat);
}