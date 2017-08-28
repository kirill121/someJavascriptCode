var arr = {
	data: [],
};

arr.higherOrder = function(cb) {
	cb(arr);
};

module.exports = arr;