// here's a model object for manipulating people
// people look like this: {name:'', id: 0000}
// make it work
var personModel = {
	DB: {},
	nextID: 0000,
	addPerson: function(newNameString) {
		var message = '';
		// code here
		return message;
	},
	getPersonById: function(personId) {
		var message = '';
		var person = {};
		// code here
		return [message, person];
	},
	getPersonByName: function(personName) {
		var message = '';
		var person = {};
		// code here
		return [message, person];
	},
	modifyPerson: function(personId, newName) {
		var message = '';
		// code here
		return message;
	},
	deletePerson: function(id) {
		var message = '';
		// code here
		return message;
	},
	getAllPeople: function() {
		var message = '';
		var people = [];	
		// code here
		return [message, people];
	}
};

console.log('Should print: \"george successfully added\":');
console.log('---- ', personModel.addPerson('george'));
console.log('Should print: \"laurens successfully added\":');
console.log('---- ', personModel.addPerson('laurens'));
console.log('Should print: a message and a george object:');
console.log('---- ', personModel.getPersonById(0));
console.log('Should print: a message and a laurens object:');
console.log('---- ', personModel.getPersonByName('laurens'));
console.log('Should print: a message and a george object:');
console.log('---- ', personModel.modifyPerson(0, 'your goats'));
console.log('Should print a message and an array of people');
console.log('---- ', personModel.getAllPeople());
console.log('Should print a message and an array of peolpe without your goats');
console.log('---- ', personModel.deletePerson(0));
console.log('Should print a message and an array of peolpe without laurens');
console.log('---- ', personModel.deletePerson(1));