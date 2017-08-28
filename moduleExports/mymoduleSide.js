var obj = {
	data: []
};

obj.push = function(string) {
	this.data.push(string);
};

obj.splice = function(amount){
	this.data.splice(amount);
};

obj.pop = function(){
	this.data.pop();
};

obj.clear = function(){
	this.data = [];
};

obj.getData = function(){
	return this.data;
};

module.exports = obj;

