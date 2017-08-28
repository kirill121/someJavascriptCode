function arrayReverserModuleSide(arrayToReverse, cb) {
	var err = false;
	var result;
	if(Array.isArray(arrayToReverse)){
		result = arrayToReverse.reverse();
		} 
	
	else{ err = 'not an array';
	}	
	cb(err, result);// write this code
};

arrayReverserModuleSide([3, 4, 5, 6, 7], function(err, result) {
	if(err) {
		console.log(err);
	} else {
		console.log(result);
	};
});  // -> [7, 6, 5, 4, 3]

arrayReverserModuleSide({0:3, 1:4, 2:5, 3:6, 4:7}, function(err, result) {
	if(err) {
		console.log(err);
	} else {
		console.log(result);
	};
});  // -> argument was not an array