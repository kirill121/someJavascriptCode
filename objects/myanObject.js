var anObject = {
	string1: 'initial value',
	printString: function(whichToPrint){
		var message = '';
		if(typeof(whichToPrint) == 'number'){
			var keys = Object.keys(this);
			message = keys[whichToPrint];
		}	
		return message;
	},

	modifyString: function(newString, whichOne){
		var message = '';
		if(typeof(whichOne) == 'number'){
			if(typeof(newString) == 'string'){
				for(key in this){
					if(key = 'string' + whichOne){
						this[key] = newString;
						message = 'string value changed successfully'
					}
				}
			}
		}
		return message;	
	},

	addNewProperty: function(newProperty){
		var message = '';
		if(typeof(newProperty) == 'string'){
			this[newProperty] = '';
			message = 'new key/value pair added'
		}
		return message;
	}
};