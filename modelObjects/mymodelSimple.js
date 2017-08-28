// here's a model object for manipulating people
// people look like this: {name:'', id: 0000}
// make it work
var personModel = {
	DB: {},
	nextID: 0000,
	addPerson: function(newNameString) {
		var message = '';
		var obj = {};
		if(typeof (newNameString) == 'string'){
			obj["Name"] = newNameString;
			this.DB[this.nextID] = obj;
			this.nextID++
			message = 'name added';
		} else { message = 'name isnt a string';

		}// code here
		console.log(this.DB);
		return message;
	},
	getPersonById: function(personId) {
		var message = '';
		var person = {};
		if(typeof (personId) == 'number') {
			for (key in this.DB) {
				if(key == personId) {
					var name = this.DB[personId].Name;
					person["name"] = name;
					message = 'person retrieved';
					return [message, person];
				} else {
					message = "no such ID exists";
					
				}
			}
		}	
		return [message, person];	// code here
	},
	getPersonByName: function(personName) {
		var message = '';
		var person = {};
		for(key in this.DB) {
			if(typeof(personName) == 'string') {
				if(this.DB[key].Name === personName){
					var name = this.DB[key].Name;
					person["name"] = name;
					message = 'person retrieved';
				} else {
					message = 'could not find person';
				}
			} else {
			message = "persons name isnt a string";
			}
		}			
		return [message, person];
	},
	modifyPerson: function(personId, newName) {
		var message = '';
		if(typeof(personId) == 'number' && typeof(newName) == 'string') {
			for (key in this.DB) {	
				if(key == personId) {
					this.DB[personId].Name = newName;
					message = 'Name changed';
					}
			}			
		} else {
			message = 'incorrect ID or name entered';
		}
		return message;
	},
	deletePerson: function(id) {
		var message = '';
		if(typeof(id) == 'number') {
			for (key in this.DB) {
				if (key == id){
					delete this.DB[id];
					this.nextID--;
					message = 'person deleted';
					return message;
				} else { message = 'id doesnt exist';
					}
			}
		} else { message = 'id isnt a number';
			}	
		return message;
	},
	getAllPeople: function() {
		var message = '';
		var people = [];	
		for(key in this.DB){
			people.push(this.DB[key].Name);
			message = 'Here are the people in the database';
		}
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