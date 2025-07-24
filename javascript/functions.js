var methods = {
	timeStamp: function() {
		console.log('Current Time in Unix Timestamp: ' + Math.floor(Date.now() / 1000));
	},
	currentDate: function() {
		console.log('Current Date is: ' + new Date().toISOString().slice(0, 10));
	}
};

methods.functionName1 = function(){};
methods.functionName2 = function(){};

//exports.data = methods;
module.exports = methods;