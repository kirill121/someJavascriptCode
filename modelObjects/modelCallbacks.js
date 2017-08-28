// here's a model object for manipulating people
// people look like this: {name:'', id: 0000}
// make it work
var personModel = {
	DB: {},
	nextID: 0000,
	addPerson: function(newNameString, cb) {
		var err = false;
		var result;
		var obj = {};
		if(typeof(newNameString) == 'string'){
			obj["Name"] = newNameString;
			this.DB[this.nextID] = obj;
			this.nextID++
			result = 'name added';
		} else { err = 'name is not a string';

		}
		cb(err, result);
	},
	getPersonById: function(personId, cb) {
		var result;
		var err = false;
		var person = {};
		if(typeof (personId) == 'number') {
			for (key in this.DB){
				if(key == personId){
					var name = this.DB[personId].Name;
					person["name"] = name;
					result = 'person retrieved';
				} else {
					err = 'no such ID exists'
				}
			}
		
		}
		cb(err, result);
	},	

	getPersonByName: function(personName, cb) {
		var result;
		var err = false;
		var person = {};
		for(key in this.DB) {
			if(typeof(personName) == 'string') {
				if(this.DB[key].Name === personName){
					var name = this.DB[key].Name;
					person["name"] = name;
					result = 'person retrieved';
				} else {
					err = 'could not find person';
				}
			} else {
			err = "persons name isnt a string";
			}
		}			
		cb(err, result);
	},
	modifyPerson: function(personId, newName, cb) {
		var result;
		var err = false;
		if(typeof(personId) == 'number' && typeof(newName) == 'string') {
			for (key in this.DB) {	
				if(key == personId) {
					this.DB[personId].Name = newName;
					result = 'Name changed';
					}
			}			
		} else {
			err = 'incorrect ID or name entered';
		}
		cb(err, result);
	},
	deletePerson: function(id, cb) {
		var result;
		var err = false;
		if(typeof(id) == 'number') {
			for (key in this.DB) {
				if (key == id){
					delete this.DB[id];
					this.nextID--;
					result = 'person deleted';
					cb(err, result);
				} else { err = 'id doesnt exist';
					}
			}
		} else { err = 'id isnt a number';
			}	
		cb(err, result);
	},
	getAllPeople: function(cb) {
		var result;
		var err = false;
		var people = [];	
		for(key in this.DB){
			people.push(this.DB[key].Name);
			result = 'Here are the people in the database';
		}
		cb(err, result, people)
	}

};

console.log('Should print: \"george successfully added\":');
personModel.addPerson('george', function(err, result) {
	if(err) {
		console.log(err);
	} else {
		console.log(result);
	}
});// method call here
console.log('Should print: \"laurens successfully added\":');
personModel.addPerson('laurens', function(err, result) {
	if(err) {
		console.log(err);
	} else {
		console.log(result);
	}
});
console.log('Should print: a george object:');
personModel.getPersonById(0, function(err, result) {
	if(err) {
		console.log(err);
	} else {
		console.log(result);
	}
});
console.log('Should print: a laurens object:');
personModel.getPersonByName('laurens', function(err, result) {
	if(err) {
		console.log(err);
	} else {
		console.log(result);
	}
});
console.log('Should print: a your goats object:');
personModel.modifyPerson(0, 'your goats', function(err, result) {
	if(err) {
		console.log(err);
	} else {
		console.log(result);
	}
});
console.log('Should print: an array of people');
personModel.getAllPeople(function(err, result, people) {
	if(err) {
		console.log(err);
	} else {
		console.log(result);
		console.log(people);
	}
});
console.log('Should print: an array of peolpe without your goats');
// method call here
console.log('Should print: an array of peolpe without laurens');
// method call here
