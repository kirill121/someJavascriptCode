function devSideCode(err,result) {
	if(err) {
		console.log(err);
	} else {
		console.log(result);
	};
};

function importedModule(number1, number2, cb) {
	var result = 0000;
    
    var  err = null
	if (typeof(number1) == "number" && typeof(number2) == "number"){
        result = number1 + number2;
    }else{
        err = "argument is not a number"
    }
    
	cb(err, result)
};

importedModule(3, 4, devSideCode);
importedModule(3, 'tim',devSideCode);