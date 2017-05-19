/*
Operation objects: An operation object is an object containing a function.

Properties:
	Name: a string that describes what the operation does.
	Args: the number of arguments this operation takes.

Methods:
	Operation: a function that does the math with, it will contain:
		args: the arguments that the function takes. It's variable, up to you.
		return: the result of the math you made it do.

*/
var templateOperation = {
	name: "",
	args: 0000,
	operation: function(a,b){
		var result = 0000;
		// maths
		return result;
	}
	};

var multiply = {
	name: "multiplication",
	args: 2,
	operation: function(a,b){
		var result = a * b;
	return result;
}
};


var subtract = {
	name: "subtraction",
	args: 2,
	operation: function(a,b){
		var result = 0000;
		result = a - b;
	return result;
}
};

var addition = {
	name: "add",
	args: 2,
	operation: function(a,b){
		var result = 0000;
		result = a + b;
	return result;
}
};


var divide = {
	name: "division",
	args: 2,
	operation: function(a,b){
	return result;
}
};



/*
dynamiCalculator function: the function that will be called to operate the objects.

Arguments:
		op: an operation object.
		a, b, c: Numbers to be operated on. Each operation object will use as many of them as it needs.
Return values:
		a number: The result of sending the arguments through op.operation().

Behavior: dynamicCalculator will pass (aa,b,c) into ‘op.operation’’ depending on the value of ‘op.args’ and return the value of the function call.
*/

function dynamiCalculator(op, a, b, c){
	var result = op.operation(a, b, c);
	return result;

};
	console.log(dynamiCalculator(multiply, 2, 5))
