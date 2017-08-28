// here's a simple function to print text from an input form
// your task, should you choose to accept it:
//		refactor this single function into m,v,c objects

// function prinTit() {
// 	var inputedText = document.getElementById('typeLand').value;
// 	document.getElementById('printLand').innerHTML += ', ' + inputedText;
// };


var model = {
	arr: [],
	addTo: function(val){
		this.arr.push(val);
	},
	getAll: function(){
		return this.arr;
	}
};

var view = {
	setText: function(arr){
		var div = document.getElementById('printLand');
		console.log(arr)
		div.innerHTML = arr;
	},
	getText: function(){
		var val = document.getElementById('typeLand').value;
		return val;
	}	
};

var controller = {
	prinTit: function(){
		model.addTo(view.getText());
		view.setText(model.getAll());
	}
};